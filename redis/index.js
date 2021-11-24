import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();
const redisClient = createClient({
  host: process.env.HOST,
  port: process.env.PORT,
  password: process.env.PASSWORD,
});

// 1. 전체 팀 포스트잇 불러오기 : []
// 1. 전체 채팅방 채팅 불러오기 : []
const read = (key, arrayId, dataId = undefined) => {
  return new Promise((resolve, reject) => {
    redisClient.lrange(`${key}-${arrayId}`, 0, -1, (error, array) => {
      if (error) return reject(error);
      else {
        const parsedArray = array.map((data) => JSON.parse(data));
        if (dataId) return resolve(parsedArray.find((data) => Number(data.id) === Number(dataId)));
        else return resolve(parsedArray);
      }
    });
  });
};

const readLast = (key, arrayId) => {
  return new Promise((resolve, reject) => {
    redisClient.rpop(`${key}-${arrayId}`, (error, data) => {
      if (error) return reject(error);
      else {
        redisClient.rpush(`${key}-${arrayId}`, data, () => {
          resolve(JSON.parse(data));
        });
      }
    });
  });
};

// 2. 포스트잇 생성 : null
// 2. 채팅 전송 : null
const create = (key, arrayId, data) => {
  return new Promise(async (resolve, reject) => {
    await increaseIndex();
    redisClient.rpush(`${key}-${arrayId}`, JSON.stringify(data), (error) => {
      if (error) return reject(error);
      else return resolve();
    });
  });
};

const increaseIndex = () => {
  return new Promise((resolve, reject) => {
    redisClient.get("index", (error, index) => {
      if (error) return reject(error);
      else {
        redisClient.set("index", String(Number(index) + 1), (error) => {
          if (error) return reject(error);
          else return resolve();
        });
      }
    });
  });
};

// 3. 특정 데이터 이동, 업데이트 : obj
const update = (key, arrayId, newData) => {
  return new Promise(async (resolve, reject) => {
    const dataArray = await read(key, arrayId);
    if (!dataArray) reject(dataArray);
    const targetData = dataArray.find((data) => Number(data.id) === Number(newData.id));
    const updatedData = { ...targetData, ...newData };
    await remove(key, arrayId, newData.id);
    await create(key, arrayId, updatedData);
    resolve();
  });
};
// 4. 특정 데이터 삭제
const remove = (key, arrayId, dataId = undefined) => {
  return new Promise(async (resolve, reject) => {
    const targetData = await read(key, arrayId, dataId);
    redisClient.lrem(`${key}-${arrayId}`, 1, JSON.stringify(targetData), (error, reply) => {
      if (error) return reject(error);
      else return resolve(reply);
    });
  });
};

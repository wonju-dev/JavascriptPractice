import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();
const redisClient = createClient({
  host: process.env.HOST,
  port: process.env.PORT,
  password: process.env.PASSWORD,
});

// 데이터 배열 반환
// dataId를 입력하면 특정 데아터 객체 반환
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

// 특정 배열의 마지막 데이터 반환
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

// 데이터 생성
const create = (key, arrayId, data) => {
  return new Promise(async (resolve, reject) => {
    await increaseIndex();
    redisClient.rpush(`${key}-${arrayId}`, JSON.stringify(data), (error) => {
      if (error) return reject(error);
      else return resolve();
    });
  });
};

// ID 반환 함수
// 데이터 생성시 작동
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
// newData 객체에 ID가 포함되어야 함
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

import express from "express";
import path from "path";
import * as JWT from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const root = path.resolve();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(root, "./index.html"));
});

app.get("/post", authenticateToken, (req, res) => {
  res.send(`hi ${req.user}`);
});

app.post("/token", (req, res) => {
  const refreshToken = req.body.refreshToken;
  JWT.default.verify(refreshToken, process.env.JWT_REFESH_KEY, (err, payload) => {
    if (err) return res.sendStatus(401);
    const newAccessToken = getAccessToken({ payload });
    res.json({ newAccessToken });
  });
});

app.post("/signIn", (req, res) => {
  console.log("hgihihi");
  const accessToken = getAccessToken(req.body);
  const refreshToken = JWT.default.sign(req.body, process.env.JWT_REFESH_KEY);
  res.json({ accessToken, refreshToken });
});

function getAccessToken(user) {
  return JWT.default.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: 15 });
}

function authenticateToken(req, res, next) {
  const requestHeader = req.headers["authorization"];
  const accessToken = requestHeader && requestHeader.split(" ")[1];
  if (!accessToken) return res.sendStatus(401);

  JWT.default.verify(accessToken, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) return res.sendStatus(403);
    req.user = payload;
    next();
  });
}

app.listen(3000);

/* 
1. 최초 로그인
  access token, refresh token 둘다 발부 
  server : refresh token은 DB (ex Redis)에 저장
2. browser에서 access token, refresh token 둘 다 저장
3. access token을 가지고 통신 진행
4. access token이 forbidden -> status code 401(3) response
5. 전달받은 status code가 401(3) -> /fetch api로 새로운 access token 요청 
  browser에 저장된 refresh token을 body에 담아서 전송
6. token 생성 api에서, refresh token에 대한 유효성 검사 
  refresh token도 기존 access token과 같은 payload를 가지고 있으므로,
  refresh token의 payload를 가지고 새로운 access token을 발부
*/

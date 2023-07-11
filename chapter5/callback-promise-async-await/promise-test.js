// DB
// saveDB `save ${user.name} to DB` "Save DB Error!"
// sendEmail `email to ${user.email}`
// getResult `success register ${user.name}`
// registerByPromise
// dher = { email: "andy@test.com", password: "1234", name: "andy" };

const DB = [];
const dher = { email: "andy@test.com", password: "1234", name: "andy" };

function saveDB(user) {
  let oldDBSize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (oldDBSize < DB.length) {
      resolve(user);
    } else {
      reject(new Error("Save DB Error!"));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve, _) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, _) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  let result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch(console.log)
    .finally(() => {
      console.log("finish!!");
    });
  return result;
}

/* let result = registerByPromise(dher);
result.then(console.log) */

let allResult = Promise.all([saveDB(dher), sendEmail(dher), getResult(dher)]);
allResult.then(console.log);

// dher = { email: "andy@test.com", password: "1234", name: "andy" };

/* ======================================== */

// allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
// allResult.then(console.log);

/* const DB = [];

function saveDB(user) {
  // 실패 테스트시 다음의 주석 해제 
  const oldDBSize = DB.length + 1;
  // const oldDBSize = DB.length;

  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user);
    } else {
      reject(new Error("Save DB Error!"));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user)
                  .then(sendEmail)
                  .then(getResult)
                  .catch(error => new Error(error))
                  .finally(() => console.log("완료!"));
  // 아직 완료되지 않았으므로 pending 상태로 나옴
  console.log(result);
  return result;
}

const myUser = { email: "andy@test.com", password: "1234", name: "andy" };

const result = registerByPromise(myUser);
result.then(console.log);

// allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
// allResult.then(console.log);
 */

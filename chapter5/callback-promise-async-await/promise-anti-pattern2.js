/* function myWork(work) {
  return new Promise((resolve, reject) => {
    resolve(work.toUpperCase());
  });
}

function playGame(work) {
  return new Promise((resolve, reject) => {
    if (work === "DONE") {
      resolve("GO PLAY GAME");
    } else {
      reject(new Error("DON'T"));
    }
  });
}

myWork("done")
  .then(playGame)
  .then(console.log) */

function myWork(work) {
  return new Promise((resolve, _) => {
    resolve(work.toUpperCase());
  });
}

function playGame(work) {
  return new Promise((resolve, reject) => {
    if (work === "DONE") {
      resolve("GO PLAY GAME");
    } else {
      reject(new Error("WORK HARDER!!"));
    }
  });
}

myWork("oh yeah").then(playGame).then(console.log);

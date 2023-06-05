function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const ranNum = Math.floor(Math.random() * 10.124356565543);
      if (ranNum <= 5) {
        resolve(ranNum);
      } else {
        reject("Error: Something wents wrong!");
      }
    }, 2000);
  });
}
function myResolve(randomNum) {
  console.log(`Your data: ${randomNum}`);
}
function myerror(err) {
  console.log(err);
}
fetchData()
.then(myResolve)
.catch(myerror);
// This all about the promises you should pass the callback funcions in the .then() and .catch(), .then() passes the resolve argumanent and .catch() is for reject

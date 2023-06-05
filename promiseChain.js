let loadScript = (source) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let script = document.createElement("script");
      script.src = source;
      document.body.appendChild(script);
      script.onload = () => {
        resolve(script);
      };
      script.onerror = () => {
        reject("Error: Sorry Your Script is not loaded");
      };
    }, 2000);
  });
};

function myResolves(data) {
  console.log("Your script: ", data);
}
function handleError(err) {
  console.log(err);
}

let p1 = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
);
p1.then((script1) => {
  console.log("Your Script1: ", script1);
  return loadScript("https://code.jquery.com/jquery-3.6.0.min.js");
})
  .then((script2) => {
    setTimeout(() => {
      console.log("Your Script2: ", script2);
    }, 2000);
    return loadScript("https://cdn.jsdelivr.net/npm/clappr@latest");
  })
  .then((script3) => {
    setTimeout(() => {
      console.log("Your Script3: ", script3);
    }, 5000);
  })
  .catch(handleError);



  // this is all about the promises chaining, you can chain in .then() as many time as you want by just returning the same funcion in this case loadScript and use another .then and so on!


const loadImage = function(url, callback) {
  new Promise(function (resolve, reject) {
    let image = new Image();
    image.onload = function () {
      resolve("Image loaded successfully");
      console.log("Image loaded successfully", image)
      document.body.appendChild(image)
    }

    image.onerror = function () {
      reject(new Error("Could not loaded image"))
      new Error("Could not loaded image")
    }
    image.src = url;
  });
}

loadImage('https://media.mnn.com/assets/images/2016/11/closeup-baby-robin-beak-open.jpg.653x0_q80_crop-smart.jpg')

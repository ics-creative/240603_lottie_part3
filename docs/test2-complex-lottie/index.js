document.addEventListener("DOMContentLoaded", () => {
  const lottieContainers = document.querySelector("#lottie1");

  let anim = lottie.loadAnimation({
    container: lottieContainers,
    path: "./../assets/data-with-bg.json",
  });

  const debugForm = document.querySelector("form");
  debugForm.addEventListener("input", (e) => {
    if (e.target.value === "withBg") {
      anim.destroy();
      anim = lottie.loadAnimation({
        container: lottieContainers,
        path: "./../assets/data-with-bg.json",
        renderer: "svg",
      });
    } else if (e.target.value === "withAnimBg") {
      anim.destroy();
      anim = lottie.loadAnimation({
        container: lottieContainers,
        path: "./../assets/data-with-gradient-bg.json",
        renderer: "svg",
      });
    } else if (e.target.value === "withoutBg") {
      anim.destroy();
      anim = lottie.loadAnimation({
        container: lottieContainers,
        path: "./../assets/data-without-bg.json",
        renderer: "svg",
      });
    } else if (e.target.value === "canvasWithoutBg") {
      anim.destroy();
      anim = lottie.loadAnimation({
        container: lottieContainers,
        path: "./../assets/data-without-bg.json",
        renderer: "canvas",
      });
    } else {
      anim.destroy();
      anim = lottie.loadAnimation({
        container: lottieContainers,
        path: "./../assets/data-with-gradient-bg.json",
        renderer: "canvas",
      });
    }
  });
});

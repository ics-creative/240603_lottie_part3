document.addEventListener("DOMContentLoaded", () => {
  const lottieContainers = document.querySelectorAll(
    "#lottie-wrapper > .lottie",
  );

  // メインビジュアルのLottie
  let anims = [];
  lottieContainers.forEach((element, index) => {
    const anim = lottie.loadAnimation({
      container: element,
      path: "./../assets/maracas cat.json",
    });
    anims.push(anim);
  });

  // 本文セクションのLottie
  const lottieContainers2 = document.querySelector("#lottie2");
  lottie.loadAnimation({
    container: lottieContainers2,
    path: "./../assets/maracas cat.json",
  });

  let radioValue = null;

  const wrapper2 = document.querySelector("#lottie-wrapper-2");
  const observer = new IntersectionObserver(
    (entries) => {
      doWhenIntersect(entries[0], radioValue);
    },
    {
      root: null,
      rootMargin: "-10% 0px -90%", // ビューポートの上部
      threshold: 0,
    },
  );

  // 交差したときに呼び出す関数
  function doWhenIntersect(entry, radioValue) {
    if (entry.isIntersecting) {
      if (radioValue === "stop") {
        // 停止
        anims.forEach((anim) => {
          anim.stop();
        });
      } else if (radioValue === "destroy") {
        // 解放
        anims.forEach((anim) => {
          anim.destroy();
        });
        anims = [];
      }
    } else {
      if (anims.length !== 0) {
        // 再開
        anims.forEach((anim) => {
          anim.play();
        });
      } else {
        lottieContainers.forEach((element, index) => {
          const anim = lottie.loadAnimation({
            container: element,
            path: "./../assets/maracas cat.json",
          });
          anims.push(anim);
        });
      }
    }
  }

  const debugForm = document.querySelector("form");
  debugForm.addEventListener("input", (e) => {
    if (e.target.value !== "on") {
      radioValue = e.target.value;
      if (e.target.value === "default") {
        observer.disconnect();
        if (anims.length !== 0) {
          // 再開
          anims.forEach((anim) => {
            anim.play();
          });
        } else {
          lottieContainers.forEach((element, index) => {
            const anim = lottie.loadAnimation({
              container: element,
              path: "./../assets/maracas cat.json",
            });
            anims.push(anim);
          });
        }
      } else {
        observer.observe(wrapper2);
      }
    }
  });
});

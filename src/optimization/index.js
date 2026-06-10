import { DotLottie } from "@lottiefiles/dotlottie-web";
import maracasCat from "@/assets/maracas-cat.lottie";

const createAnimation = (canvas) =>
  new DotLottie({
    canvas,
    src: maracasCat,
    autoplay: true,
    loop: true,
    renderConfig: {
      autoResize: true,
    },
  });

document.addEventListener("DOMContentLoaded", () => {
  const lottieContainers = document.querySelectorAll(
    "#lottie-wrapper > .lottie",
  );

  // メインビジュアルのLottie
  let anims = [];
  lottieContainers.forEach((element) => {
    const anim = createAnimation(element);
    anims.push(anim);
  });

  // 本文セクションのLottie
  const lottieContainers2 = document.querySelector("#lottie2");
  createAnimation(lottieContainers2);

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
      if (radioValue === "destroy") {
        // 解放
        anims.forEach((anim) => {
          anim.destroy();
        });
        anims.length = 0;
      }
    } else {
      if (anims.length !== 0) {
        // 再開
        anims.forEach((anim) => {
          anim.play();
        });
      } else {
        lottieContainers.forEach((element) => {
          const anim = createAnimation(element);
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
          lottieContainers.forEach((element) => {
            const anim = createAnimation(element);
            anims.push(anim);
          });
        }
      } else {
        observer.observe(wrapper2);
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lottieContainers = document.querySelectorAll(
    "#lottie-wrapper > .lottie",
  );

  let anims = [];
  lottieContainers.forEach((element, index) => {
    const anim = lottie.loadAnimation({
      container: element,
      path: "./../assets/cat.json",
    });
    anims.push(anim);
    element.style.width = `${(index + 3) * 50}px`;
    element.style.left = `${(index + 1) * (index + 1) * 3}px`;
  });

  // ----------------------------
  // 本文セクション
  // ----------------------------
  const lottieContainers2 = document.querySelector("#lottie2");
  lottie.loadAnimation({
    container: lottieContainers2,
    path: "./../assets/cat.json",
  });

  const wrapper2 = document.querySelector("#lottie-wrapper-2");
  const observer = new IntersectionObserver(doWhenIntersect, {
    root: null,
    rootMargin: "-50% 0px", // ビューポートの中心
    threshold: 0,
  });

  // 交差したときに呼び出す関数
  function doWhenIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 停止
        anims.forEach((anim) => {
          anim.stop();
        });
      } else {
        // 再開
        anims.forEach((anim) => {
          anim.play();
        });
      }
    });
  }

  const checkbox = document.querySelector("#debug-stop");
  checkbox.addEventListener("input", (e) => {
    if (e.currentTarget.checked) {
      observer.observe(wrapper2);
    } else {
      observer.disconnect();
      anims.forEach((anim) => {
        anim.play();
      });
    }
  });
});

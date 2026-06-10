import { DotLottieWorker } from "@lottiefiles/dotlottie-web";
import animation from "@/assets/complex-anim.lottie";

const init = async () => {
  const wrapper = document.querySelector(".lottie-wrapper");
  const canvas = document.createElement("canvas");
  wrapper.appendChild(canvas);

  // WorkerでアセットのURLが解決できないため絶対URL化する
  const animationUrl = new URL(animation, document.baseURI).href;

  const anim = new DotLottieWorker({
    canvas,
    src: animationUrl,
    autoplay: true,
    loop: true,
    renderConfig: {
      devicePixelRatio: window.devicePixelRatio * 0.75,
      freezeOnOffscreen: false, // offscreenで描画がstopするのを防ぐために設定。これがないと描画されない
    },
  });
};

init();

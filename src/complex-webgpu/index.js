import { DotLottie } from "@lottiefiles/dotlottie-web/webgpu";
import animation from "@/assets/complex-anim.lottie";

const init = () => {
  const wrapper = document.querySelector(".lottie-wrapper");
  const canvas = document.createElement("canvas");
  wrapper.appendChild(canvas);

  const anim = new DotLottie({
    canvas: canvas,
    src: animation,
    autoplay: true,
    loop: true,
    renderConfig: {
      devicePixelRatio: window.devicePixelRatio * 0.75,
    },
  });
};

init();

document.addEventListener("DOMContentLoaded", () => {
  const textBox = document.querySelector("#search-text");
  const button = document.querySelector("#search-button");
  const lottieContainer = document.querySelector("#lottie");
  const result = document.querySelector("#search-result");
  const statusText = document.querySelector("#search-status");

  const anim = lottie.loadAnimation({
    container: lottieContainer,
    path: "./assets/search-anim.json",
    renderer: "svg", // svg形式
    autoplay: false, // 自動再生はしない
  });
  anim.setSpeed(1.9); // 少し早めのスピードに調整

  const validate = () => {
    const validForm = document.querySelector("form:valid");
    button.disabled = validForm === null;
  };

  validate();
  textBox.addEventListener("input", validate);

  button.addEventListener("click", async () => {
    await onSearch(anim, result, statusText);
  });

  button.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      await onSearch(anim, result, statusText);
    }
  });
});

const onSearch = async (anim, result, statusText) => {
  // アニメーション再生
  anim.play();

  result.classList.add("isLoading");
  statusText.innerText = "再検索中…";

  // ローディング風にランダムな時間待機
  await wait((Math.floor(Math.random() * 5) + 1) * 1000);

  // アニメーション停止
  anim.stop();

  result.style.display = "grid";
  result.classList.remove("isLoading");
  statusText.innerText = "結果";
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

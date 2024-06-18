document.addEventListener("DOMContentLoaded", () => {
  const lottieContainer = document.querySelector("#lottie");
  const anim = lottie.loadAnimation({
    container: lottieContainer,
    path: "./assets/search.json",
    autoplay: false, // 自動再生はしない（デフォルトはtrue。省略可）
  });

  anim.setSpeed(1.9); // 少し早めのスピードに調整

  // テキストボックス関連の要素
  const textBox = document.querySelector("#search-text");
  const button = document.querySelector("#search-button");
  const result = document.querySelector("#search-result");
  const statusText = document.querySelector("#search-status");

  const validate = () => {
    const validForm = document.querySelector("form:valid");
    button.disabled = validForm === null;
  };

  validate();
  textBox.addEventListener("input", validate);

  // 虫眼鏡ボタン押下時、lottieを再生する
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
  statusText.innerText = "再検索中…";
  result.classList.add("isLoading");

  // アニメーション再生
  anim.play();

  // ローディング風にランダムな時間待機
  await wait((Math.floor(Math.random() * 5) + 1) * 1000);

  // アニメーション停止
  anim.stop();

  statusText.innerText = "結果";
  result.classList.remove("isLoading");
  result.classList.remove("isFirstView");
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

document.addEventListener("DOMContentLoaded", () => {
  const lottieContainer = document.querySelector("#lottie");

  const anim = lottie.loadAnimation({
    container: lottieContainer,
    path: "./assets/search.json",
    autoplay: false, // 自動再生はしない（デフォルトはtrue。省略可）
  });

  anim.setSpeed(1.7); // 少し早めのスピードに調整

  // テキストボックス関連の要素
  const button = document.querySelector("#search-button");
  const result = document.querySelector("#search-result");
  const statusText = document.querySelector("#search-status");

  // 虫眼鏡ボタン押下時、lottieを再生する
  button.addEventListener("click", async () => {
    result.classList.add("isLoading");
    statusText.innerText = "再検索中…";
    await onSearch(anim, result, statusText);
  });
  button.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      result.classList.add("isLoading");
      statusText.innerText = "再検索中…";
      await onSearch(anim, result, statusText);
    }
  });

  // アニメーションの再生が完了したらローディング画面を非表示にする
  // （本来はアニメーションの完了を待たず優先線的に表示させるべきですが作例としてcompleteイベントを使用しています）
  anim.addEventListener("complete", () => {
    result.classList.remove("isLoading");
    statusText.innerText = "結果";
    result.classList.remove("isFirstView");
  });
});

const onSearch = async (anim) => {
  // アニメーション再生
  anim.loop = true; // ループ再生
  anim.play();

  // ローディング風にランダムな時間待機
  await wait(Math.random() * 5000);

  // アニメーションがループしないよう設定を変更（再生中のアニメーションが完了したら自動で停止）
  anim.loop = false;
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

import { DotLottie } from "@lottiefiles/dotlottie-web";

const searchAnimationUrl = new URL("./assets/search.json", import.meta.url)
  .href;

document.addEventListener("DOMContentLoaded", () => {
  const lottieContainer = document.querySelector("#lottie");

  const anim = new DotLottie({
    canvas: lottieContainer,
    src: searchAnimationUrl,
    autoplay: false, // 自動再生はしない（デフォルトはtrue。省略可）
  });

  anim.setSpeed(1.7); // 速めの再生速度に調整

  // テキストボックス関連の要素
  const button = document.querySelector("#search-button");
  const statusText = document.querySelector("#search-status");

  // 虫眼鏡ボタン押下時、lottieを再生する
  button.addEventListener("click", async () => {
    statusText.innerText = "検索中…";
    await onSearch(anim);
  });
  button.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      statusText.innerText = "検索中…";
      await onSearch(anim);
    }
  });

  // アニメーションの再生が完了したらローディング画面を非表示にする
  // （本来はアニメーションの完了を待たず優先線的に表示させるべきですが作例としてcompleteイベントを使用しています）
  anim.addEventListener("complete", () => {
    statusText.innerText = "検索完了";
  });
});

const onSearch = async (anim) => {
  // アニメーション再生
  anim.setLoop(true); // ループ再生
  anim.play();

  // ローディング風にランダムな時間待機
  await wait(Math.random() * 5000);

  // アニメーションがループしないよう設定を変更（再生中のアニメーションが完了したら自動で停止）
  anim.setLoop(false);
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

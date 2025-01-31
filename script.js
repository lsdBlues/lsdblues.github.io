
document.addEventListener("DOMContentLoaded", () => {
  const showGalleryBtn = document.getElementById("showGalleryBtn");
  const gallerySection = document.getElementById("gallery");

  // 「ギャラリーを見る」ボタンを押すとギャラリーセクションにスクロールする
  showGalleryBtn.addEventListener("click", () => {
    gallerySection.scrollIntoView({ behavior: "smooth" });
  });
});
// モーダルの要素を取得
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// 全てのギャラリー画像を取得
const images = document.querySelectorAll(".gallery-item img");

// 画像クリックイベントを設定
images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block"; // モーダルを表示
    modalImg.src = img.src; // 画像のソースを取得
    captionText.innerHTML = img.alt; // altをキャプションとして表示
  });
});

// 閉じるボタンのイベント
closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // モーダルを非表示
});
const myEmojis = ["👨‍💻", "⛷", "🍲"];

const emojiContainerEl = document.getElementById("emoji-container");

for (let i = 0; i < myEmojis.length; i++) {
  const emoji = document.createElement("span");
  emoji.textContent = myEmojis[i];
  emojiContainerEl.append(emoji);
}

const pushBtn = document.getElementById("push-btn");

pushBtn.addEventListener("click", function () {
  const emojiInput = document.getElementById("emoji-input");
  console.log(emojiInput.value);
});

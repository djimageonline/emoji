const myEmojis = ["👨‍💻", "⛷", "🍲"];

const emojiContainerEl = document.getElementById("emojiContainer");

for (let i = 0; i < myEmojis.length; i++) {
  const newSpan = document.createElement("span");
  newSpan.textContent = myEmojis[i];
  emojiContainerEl.append(newSpan);
}

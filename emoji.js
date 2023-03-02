const myEmojis = ["👨‍💻", "⛷", "🍲"];

const emojiContainerEl = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshift = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function render() {
  emojiContainerEl.innerHTML = "";

  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    emojiContainerEl.append(emoji);
  }
}

render();

pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiInput.value = "";
    render();
  }
});

unshift.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = "";
    render();
  }
});

popBtn.addEventListener("click", function () {
  myEmojis.pop(emojiInput.value);
  render();
});

shiftBtn.addEventListener("click", function () {
  myEmojis.shift(emojiInput.value);
  render();
});

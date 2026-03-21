// Simple typing effect
const text = "Full stack developer | Junior software engineer ";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector("header p").textContent += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

document.querySelector("header p").textContent = "";
typing();
let size = 16;
const container = document.createElement("div");
updateContainer(size);
document.body.appendChild(container);
function updateContainer(newSize) {
  container.innerHTML = "";

  container.className = `grid gap-0.25 m-4 
    grid-rows-${newSize} 
    grid-cols-${newSize} 
    w-[480px] 
     h-[480px]`;

  for (let i = 0; i < newSize * newSize; i++) {
    const square = document.createElement("div");
    square.classList.add("bg-violet-300");
    square.addEventListener("mouseenter", () => {
      square.classList.add("scale-105", "bg-violet-400", "ease-in-out");
    });
    square.addEventListener("mouseleave", () => {
      square.classList.remove("scale-105", "bg-violet-400");
    });
    container.appendChild(square);
  }
  size = newSize;
}
const btn = document.createElement("button");
btn.textContent = "Click to modified size";
btn.classList.add("bg-amber-200", "m-4", "border");
btn.addEventListener("click", (size) => {
  let newSizeInput = prompt("Nhap kich thuoc size moi: ");
  let newSize = parseInt(newSizeInput);
  if (!isNaN(newSize) && newSize > 0) {
    updateContainer(newSize);
  } else {
    alert("Vui lòng nhập số hợp lệ!");
  }
});

document.body.appendChild(btn);

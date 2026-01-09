const openBtn = document.getElementById("openDialog");
const closeBtn = document.getElementById("close");
const dialog = document.getElementById("dialog");
const wastes = document.querySelectorAll(".waste");

openBtn.addEventListener("click", () => {
    dialog.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    dialog.style.display = "none";
});

dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
        dialog.style.display = "none";
    }
});

wastes.forEach(waste => {
    waste.classList.remove("active");
    waste.addEventListener("click", () => {
        wastes.forEach(w => w.classList.remove("active"));
        waste.classList.add("active");
    });
});


// elemetns of page

const garbage = document.getElementById("garbage");
const plastic = document.getElementById("plastic");
const drainage = document.getElementById("drainage");
const others = document.getElementById("others");
function runthis(){
  console.log("button clicked");
}

garbage.onclick = function() {
  console.log("Garbage selected");
}
plastic.onclick = function() {
  console.log("Plastic selected");
} 
drainage.onclick = function() {
  console.log("Drainage selected");
}
others.onclick = function() {
  console.log("Others selected");
} 

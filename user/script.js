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
const selectedarea = document.getElementById("area");
const others = document.getElementById("others");
const comments = document.getElementById("comments");
let selection ;


function runthis(){
  console.log("button clicked");
  console.log(selection);
  console.log(comments.value);
  console.log(selectedarea.value);
  checkUploadStatus();
}

garbage.onclick = function() {
selection = "Garbage";
}

plastic.onclick = function() {
selection = "plastic";
}

drainage.onclick = function() {
selection = "drainage";
}

others.onclick = function() {
selection = "others";
}

function checkUploadStatus() {
    // Get the input element
    const input = document.getElementById('photoIP');
    // Get the paragraph element to display the message
    const statusMessage = document.getElementById('statusMessage');

    // Check if the 'files' property exists and if its length is greater than 0
    if (input.files && input.files.length > 0) {
        // A file has been selected
        statusMessage.textContent = 'A photo has been successfully selected for upload: ' + input.files[0].name;
        statusMessage.style.color = 'green';
    } else {
        // No file has been selected
        statusMessage.textContent = 'No photo selected yet.';
        statusMessage.style.color = 'red';
    }
}

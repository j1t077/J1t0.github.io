let imgScatman = document.getElementById("imgScatman");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let nameText = document.getElementById("name");

imgScatman.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  nameText.innerHTML = this.getAttribute("data-name");
}

let modal = document.getElementById("myModal");

modalImg.src = imgScatman.src;
captionText.innerHTML = imgScatman.alt;

imgScatman.onclick = function() {
  modal.style.display = "block";
}

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

imgScatman.addEventListener("mouseover", function() {
  modalImg.style.width = "80%";
  modalImg.style.height = "auto";
  modalImg.style.display = "block";
  modalImg.style.margin = "auto";
});

imgScatman.addEventListener("mouseout", function() {
  modalImg.style.width = "100%";
  modalImg.style.height = "auto";
  modalImg.style.display = "block";
  modalImg.style.margin = "auto";
});

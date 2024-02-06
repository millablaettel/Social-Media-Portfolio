// JavaScript zum Öffnen und Schließen des Modals
function openModal(imageSrc) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// Schließe das Modal, wenn der Benutzer außerhalb des Bildes klickt
window.onclick = function (event) {
  var modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

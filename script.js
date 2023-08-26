"use strict";

// DOM Elements
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// Listening for ESC key
document.addEventListener("keydown", event => {
  // If the escape key is pressed and the modal is open, close the modal
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Adding event listeners to all buttons
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", () => {
    // Removing the 'hidden' class to display the modal and overlay
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

// Close modal function
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Close modal event listener
btnCloseModal.addEventListener("click", closeModal);

// Closing the modal upon clicking the modal
overlay.addEventListener("click", closeModal);


// Toggle Background Color
const toggleButton = document.getElementById("toggle-bg");
let isBlue = false;
toggleButton.onclick = function () {
  document.body.style.backgroundColor = isBlue ? "white" : "#add8e6"; // Light blue
  isBlue = !isBlue;
};

// Slider for Real-Time Feedback
const textResizer = document.getElementById("text-resizer");
const resizableText = document.getElementById("resizable-text");
textResizer.oninput = function () {
  resizableText.style.fontSize = `${textResizer.value}px`;
};

// Modal Functionality
const showModalButton = document.getElementById("show-modal");
const closeModalButton = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modal-overlay");

showModalButton.onclick = function () {
  modal.style.display = "block";
  modalOverlay.style.display = "block";
};
closeModalButton.onclick = function () {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
};
modalOverlay.onclick = function () {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
};

// Form Validation
const form = document.getElementById("validation-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.onsubmit = function (e) {
  let isValid = true;

  // Validate Name
  if (nameInput.value.length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.textContent =
      "Password must be at least 8 characters long, contain one uppercase letter and one number.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Prevent form submission if invalid
  if (!isValid) {
    e.preventDefault();
  }
};

// Dropdown Interaction
const dropdown = document.getElementById("dropdown");
const dropdownMessage = document.getElementById("dropdown-message");

dropdown.onchange = function () {
  if (dropdown.value) {
    dropdownMessage.textContent = `You selected: ${dropdown.value}`;
  } else {
    dropdownMessage.textContent = "";
  }
};

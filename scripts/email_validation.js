const emailInputElement = document.getElementById('email-address');
const submitButtonElement = document.getElementById('submit-button');
const errorMessageElement = document.getElementById('error-message');

submitButtonElement.addEventListener('click', evaluateEmail);

function evaluateEmail(event) {
  event.preventDefault();
  if (!emailIsValid(emailInputElement)) {
    if (emailInputElement.value == '') {
      showErrorEmpty();
    } else {
      showErrorWrong();
    }
    moveSubmitButtonDown();
  } else {
    clearError();
    moveSubmitButtonUp();
  }
}

function emailIsValid(emailInput) {
  const emailInputText = emailInput.value;
  const emailRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

  if (emailInputText.match(emailRegex)) {
    return true;
  } else return false;
}

function showErrorEmpty() {
  errorMessageElement.classList.add('visible');
  errorMessageElement.textContent =
    'Whoops! It looks like you forgot to add your email';
  emailInputElement.classList.add('error');
}

function showErrorWrong() {
  errorMessageElement.classList.add('visible');
  errorMessageElement.textContent = 'Please provide a valid email address';
  emailInputElement.classList.add('error');
}

function clearError() {
  errorMessageElement.classList.remove('visible');
  emailInputElement.classList.remove('error');
}

function moveSubmitButtonDown() {
  submitButtonElement.style.top =
    'calc(2rem + clamp(3.125rem, 1.5vw + 2.77rem, 4.125rem))';
}

function moveSubmitButtonUp() {
  submitButtonElement.style.top =
    'calc(clamp(3.125rem, 1.5vw + 2.77rem, 4.125rem))';
}

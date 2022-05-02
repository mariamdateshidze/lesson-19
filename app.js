const form = document.querySelector('#user-login-form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const personalInput = document.querySelector('input[name="personal_number"]');
const mobileInput = document.querySelector('input[name="mobile_number"]');
const positionInput = document.querySelector('input[name="position"]');


form.addEventListener('submit', e => {
  e.preventDefault();
  try {
    console.log(emailInput.value);
  } catch (e) {
    console.log('catch error', e);
  }
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isPersonalnumberValid = validatePersonalnumber();
  const isMobilenumberValid = validateMobilenumber();
  const isPositionValid = validatePosition();
  if(isEmailValid && isPasswordValid && isPersonalnumberValid && isMobilenumberValid && isPositionValid  ){
    console.log('Call to backend api');

  }

  
});

function validateEmail(){
  if(!emailInput.value){
    emailInput.classList.add('has-error');
    emailInput.parentNode.querySelector('.error-message').innerText = 'Please enter email';
    return false;
  }
  if(!emailInput.value.includes('@') || !emailInput.value.includes('.')){
    emailInput.classList.add('has-error');
    emailInput.parentNode.querySelector('.error-message').innerText = 'Invalid email';
    return false;
  }
  emailInput.classList.remove('has-error');
  emailInput.parentNode.querySelector('.error-message').innerText = '';
  return true;
}

function validatePassword(){
  if(!passwordInput.value){
    passwordInput.classList.add('has-error');
    passwordInput.parentNode.querySelector('.error-message').innerText = 'Please enter password';
    return false;
  }
  if(passwordInput.value.length < 8){
    passwordInput.classList.add('has-error');
    passwordInput.parentNode.querySelector('.error-message').innerText = 'Password must include 8 char';
    return false;
  }
  passwordInput.classList.remove('has-error');
  passwordInput.parentNode.querySelector('.error-message').innerText = '';
  return true;
}


function validatePersonalnumber(){
    if(!personalInput.value){
        personalInput.classList.add('has-error');
        personalInput.parentNode.querySelector('.error-message').innerText = 'Please enter personal number';
      return false;
    }
    if(personalInput.value.length !==11 ){
       
        personalInput.classList.add('has-error');
        personalInput.parentNode.querySelector('.error-message').innerText = 'Personal number must include 11 digit';
      return false;
    }
    personalInput.classList.remove('has-error');
    personalInput.parentNode.querySelector('.error-message').innerText = '';
    return true;
  }

  function validateMobilenumber(){
    if(!mobileInput.value){
        mobileInput.classList.add('has-error');
        mobileInput.parentNode.querySelector('.error-message').innerText = 'Please enter mobile number';
      return false;
    }
    if(mobileInput.value.length !==9 ){
       
        mobileInput.classList.add('has-error');
        mobileInput.parentNode.querySelector('.error-message').innerText = 'Mobile number must include 9 digit';
      return false;
    }
    mobileInput.classList.remove('has-error');
    mobileInput.parentNode.querySelector('.error-message').innerText = '';
    return true;
  }

  function validatePosition(){
    if(!positionInput.value){
        positionInput.classList.add('has-error');
        positionInput.parentNode.querySelector('.error-message').innerText = 'Please enter position';
      return false;
    }
    if(positionInput.value.length >30 ){
        positionInput.parentNode.querySelector('.error-message').innerText = 'Position must include 30 char';
      return false;
    }
    positionInput.classList.remove('has-error');
    positionInput.parentNode.querySelector('.error-message').innerText = '';
    return true;
  }


  const modalOpenBtn = document.querySelector('#open-modal');


modalOpenBtn.addEventListener('click', () => {
  openModal('.my-modal');
})



function openModal(modalSelector){
    const modalNode = document.querySelector(modalSelector);
    modalNode.classList.add('visible');

    const loginBtn = modalNode.querySelector('.modal-close');
    loginBtn.addEventListener('click', () => {
        if(validateEmail() && validateMobilenumber() && validatePassword() && validatePosition() && validatePersonalnumber() ){
            closeModal(modalSelector)
           

        }
       
       
    })

}

function closeModal(modalSelector){
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.remove('visible');
  
}





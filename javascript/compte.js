const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const form = document.querySelector('.formulaire');
 
signUpBtnLink.addEventListener('click', () => {
    form.classList.toggle('active');
});
 
signInBtnLink.addEventListener('click', () => {
    form.classList.toggle('active');
});

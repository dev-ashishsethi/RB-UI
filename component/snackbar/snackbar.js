const liveBtn=document.querySelector('.liveDemo-btn');
const snackbar=document.querySelector('#snackbar-working');
const dismissBtn=document.querySelector('#dismissBtn-snackbar');

liveBtn.addEventListener("click",()=>snackbar.style.display='inline-block');

dismissBtn.addEventListener("click",()=>snackbar.style.display='none');
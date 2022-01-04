const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const inputEmail = document.querySelector('.input-email')

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

form.addEventListener('submit',(e)=>{
    for(let i=0;i<inputs.length;i++){
        if(!inputs[i].value){
            inputs[i].parentElement.classList.add('error');
            e.preventDefault();
        }else{
            inputs[i].parentElement.classList.remove('error');
        }
    }
    if(validateEmail(inputEmail.value)){
        inputEmail.parentElement.classList.remove('error')
        inputEmail.parentElement.classList.remove('empty-mail')
    }else if(!inputEmail.value=="" && !validateEmail(inputEmail.value)){
        inputEmail.parentElement.classList.add('error')
        inputEmail.parentElement.classList.remove('empty-mail')
        e.preventDefault();
    }else{
        inputEmail.parentElement.classList.remove('error')
        inputEmail.parentElement.classList.add('empty-mail')
        e.preventDefault();
    }
})

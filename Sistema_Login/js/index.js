function showPassword(){
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-Slash');
    const fieldPassword = document.getElementById ('field-password');

    if (eye.style.display === 'none'){
    eye.style.display = 'block';
    eyeSlash.style.display = 'none';
    fieldPassword.type = 'text;'
    }else{
    eye.style.display = 'none';
    eyeSlash.style.display = 'block';
    fieldPassword.type = 'password';
    }
};


/*  document.getElementById('btn-login').addEventListener('click',function(e){
    e.preventDefault();
    alert('Você está logado');
   
        
}) */

/* let inputs = document.getElementsByClassName('input-form');
for (let input of inputs) {
    input.addEventListener("blur", function() {
        if(input.value.trim() != ""){
            input.classList.add("has-val");
        } else {
            input.classList.remove("has-val");
        }
    });
} EXEMPLO DE SISTEMA */
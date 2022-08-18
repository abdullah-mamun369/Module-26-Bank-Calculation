document.getElementById('submit-btn').addEventListener('click', function(){
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;

    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;

    if (email === 'mamun@gmail.com' && password === 'Mamun') {
        window.location.assign('bank.html');
    }

    else{
        alert('Your password is invalid')
    }

})
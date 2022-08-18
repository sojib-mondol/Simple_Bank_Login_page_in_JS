
// step-2: Added click event handeler
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const userPasswprd = document.getElementById('user-password');
    const password = userPasswprd.value;

    // DENGER: DO NOT VERIFY email password on the client side
    if(email === 'sontan@baap.com' && password === 'serect') {
        window.location.href = 'bank.html'
    } else {
        alert('Tui amar sontan na.. tejjo godona korlam na.. tui password vule gesoso :) ;)');
    }
})
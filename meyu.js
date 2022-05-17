//validate username
function validation()
{
var a = document.form.username.value;
if(a=="")
{
alert("Please Enter Your Name");
document.form.username.focus();
return false;
}
if(!isNaN(a))
{
alert("Please Enter Only Characters for username");
document.form.username.select();
return false;
}
if ((a.length < 5) || (a.length > 15))
{
alert("Your username must be 5 to 15 Character");
document.form.name.select();
return false;
}
}




//validate password
function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  }
  
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;

  //responsive navbar
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  const togglePassword = document.querySelector('#togglePassword');
  const rassword = document.querySelector('#password');
  
 //password eye
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = rassword.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});



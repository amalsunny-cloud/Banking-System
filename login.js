function CheckLogin() {
    let uname2 = document.getElementById('uname2').value;
    let pswrd3 = document.getElementById('pswrd3').value;

    let storedUserName = localStorage.getItem("UserName");
    let storedPassword = localStorage.getItem("Password1");

    // Validate inputs
    if (!uname2 || !pswrd3) {
        document.getElementById('loginError').textContent = "Please type both username and password.";
        document.getElementById('loginError').style.color = "red";
        setTimeout(() => {
            loginError.textContent = '';
        }, 2000);
    } else if (uname2 === storedUserName && pswrd3 === storedPassword) {
        localStorage.setItem('loggedInUser', uname2); 


        if (!localStorage.getItem('balance')) {
            localStorage.setItem('balance', '0');
        }


        alert("Login successful!");
        window.location = "./home.html"; 
    } else {
        document.getElementById('loginError').textContent = "Incorrect username or password.";
        document.getElementById('loginError').style.color = "red";
        setTimeout(() => {
            loginError.textContent = '';
        }, 2000);
       
    }
}

function Register2(){
    window.location = "./Register.html"

}
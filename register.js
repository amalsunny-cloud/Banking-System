function RegisterAccount() {
    let uname1 = document.getElementById('uname').value;
    let pswrd1 = document.getElementById('pswrd1').value;
    let pswrd2 = document.getElementById('pswrd2').value;
    let existingUser = localStorage.getItem("UserName");
    let existingPswrd = localStorage.getItem("Password1");


    if (uname1 === existingUser && pswrd1 === existingPswrd) {
        document.getElementById('registerError').textContent = "User already exists. Redirecting to login...";
        document.getElementById('registerError').style.color = "green"; 
        setTimeout(() => {
            window.location = "./index.html"; 
        }, 2000); 
        return;
    }

    // Validate inputs
    if (!uname1 || !pswrd1 || !pswrd2) {
        document.getElementById('registerError').textContent = "Fill all Input fields.";
        document.getElementById('registerError').style.color = "red";

        setTimeout(() => {
            registerError.textContent = ''; 
        }, 2000);

    } else if (pswrd1 !== pswrd2) {
        document.getElementById('registerError').textContent = "Passwords do not match.";
        document.getElementById('registerError').style.color = "red";

        setTimeout(() => {
            registerError.textContent = ''; 
        }, 2000);


    } else {
        // If validation passes, store values and register the new user
        localStorage.setItem("UserName", uname1);
        localStorage.setItem("Password1", pswrd1);

        alert("Registration successful!");
        window.location = "./index.html"; 
    }
}


function CheckLogin2(){
    window.location = "./index.html"
}




function profileFunc() {
    var fname = document.getElementById("fName").value;
    var lname = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../PHP/profile.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log("profile saved succesfully!!")

            document.getElementById("Message").innerHTML="Profile updated successfully!!!!";
            document.getElementById("Message").style.display = "block";
            } else {
                // Handle other status codes or errors here
                console.log("Error: " + xhr.status);
            }
        }
    };

    var data = "fname=" + fname + "&lname=" + lname + "&email=" + email + "&phone=" + phone + "&age=" + age;
    xhr.send(data);
}

function logoutFunc() {
document.getElementById("Message").innerHTML="Logged Out successfully!!!!";
document.getElementById("Message").style.display = "block";
localStorage.removeItem('username');
localStorage.removeItem('isLoggedIn');
window.location.href = "../HTML/login.html";

}

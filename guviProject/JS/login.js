function loginFunc() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "PHP/Login.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    // Login was successful, redirect to profile.html
                    localStorage.setItem('username', username);
                    localStorage.setItem('isLoggedIn', 'true');

                    document.getElementById("failureMessage").innerHTML="successfully logged in !!!!";
                    document.getElementById("failureMessage").classList.remove("alert-danger");
                    document.getElementById("failureMessage").classList.add("alert-success");
                    document.getElementById("failureMessage").style.display = "block";
                    window.location.href = "profile.html";
                } else {
                    // Handle failure, display an error message
                    document.getElementById("failureMessage").style.display = "block";
                    console.log("Login failed");
                }
            } else {
                // Handle other status codes or errors here
                console.log("Error: " + xhr.status);
            }
        }
    };

    var data = "username=" + username + "&password=" + password;
    xhr.send(data);
}
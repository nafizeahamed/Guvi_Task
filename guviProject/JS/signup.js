document.getElementById("signupButton").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "PHP/signup.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    // Signup was successful, show success message and hide the form
                    //document.getElementById("signupForm").style.display = "none";
                    document.getElementById("successMessage").style.display = "block";
                } else {
                    // Handle failure, e.g., display an error message
                    console.log("Signup failed");
                }
            } else {
                // Handle other status codes or errors here
                console.log("Error: " + xhr.status);
            }
        }
    };

    var data = "username=" + username + "&password=" + password;
    xhr.send(data);
});
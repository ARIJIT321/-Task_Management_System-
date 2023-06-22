// Function to register a user
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const user = { username: username, password: password };


    fetch('http://localhost:8888/user/addUser', {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (response.ok) {
            console.log("User registered successfully.");
            window.location.href = 'login.html'
            // Update the UI or perform any necessary actions
        } else {
            displayErrorMessage("Error registering users.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        displayErrorMessage("Error registering user.");
    });
});


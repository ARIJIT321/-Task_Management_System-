document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault()
    console.log("working")
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    const user = { username: username, password: password };
  
    fetch("http://localhost:8888/user/userLogin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (response.ok) {
            console.log("User logged in successfully.");
            window.location.href = 'tasks.html'
            // Update the UI or perform any necessary actions
        } else {
            displayErrorMessage("Error logging in.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        displayErrorMessage("Error logging in.");
    });
});
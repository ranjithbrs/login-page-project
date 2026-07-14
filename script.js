function login() {
    let Username = document.getElementById("Username").value;
    let Password = document.getElementById("Password").value;
    
    let users = {
        "Ranjith": "1234",
        "Arun": "abcd",
        "Priya": "pass123",
        "Kumar": "9876"
    };

    if (Username === "") {
        alert("Type your name");
        return false;
    } 
    else if (Password === "") {
        alert("Type your password");
        return false;
    } 
    else if (users[Username] && users[Username] === Password) {
        window.location.href="welcome.html"
        alert("Login successfully");
        return false;
    } 
    else {
        alert("Invalid login");
        return false;
    }
}

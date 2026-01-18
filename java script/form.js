function sendForm(event) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    event.preventDefult();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;
    let gender = document.querySelector("input[name='gender']:checked");
    let educatio = document.querySelector("input[name='education']:checked");
}

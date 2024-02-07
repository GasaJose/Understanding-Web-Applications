document.getElementById('regform').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const birthDate = document.getElementById('birthDate').value;
    const gender = document.getElementById('gender').value;

    if (!firstName || !lastName || !email || !password || !confirmPassword || !birthDate || !gender) {
        alert('All fields are required.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Invalid email.');
        return;
    }

    if (!validateDate(birthDate)) {
        alert('Invalid date of birth.');
        return;
    }

    // If all validations pass, submit the form
    this.submit();
    alert('Registration Successful.');
});

function validateEmail(email) {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
}

function validateDate(date) {
    const currentDate = new Date();
    const inputDate = new Date(date);
    return inputDate <= currentDate;
}
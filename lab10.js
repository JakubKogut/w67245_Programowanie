function validateForm() {
    let isValid = true;

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (name === '') {
        document.getElementById('nameError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
    }

    if (surname === '') {
        document.getElementById('surnameError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('surnameError').style.display = 'none';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }

    if (password.length < 8) {
        document.getElementById('passwordError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }

    return isValid;
}

function validateField(fieldId, errorId, pattern) {
    const value = document.getElementById(fieldId).value;
    if (!pattern.test(value)) {
        document.getElementById(errorId).style.display = 'inline';
    } else {
        document.getElementById(errorId).style.display = 'none';
    }
}

function validatePasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'inline';
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }
}

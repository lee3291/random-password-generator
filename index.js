function generatePassword() {

    const output = document.getElementById("output");
    const lengthInput = document.getElementById("passwordLength").value;
    if (isNaN(lengthInput) || lengthInput.trim() === "") {
        output.textContent = "Enter valid number!";
        return;
    }
    const length = Number(lengthInput);
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let password = "";
    let allowedChars = "";
    allowedChars += includeLowercase ? lowercase : "";
    allowedChars += includeUppercase ? uppercase : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    if (length <= 0) {
        output.textContent = `(Password length should be at least 1)`;
        return;
    }
    if (allowedChars.length === 0) {
        output.textContent = `(At least 1 set of character needs to be selected)`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars.charAt(randomIndex);
    }
    output.textContent = password;
}


// password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
// console.log(`Your password is: ${password}`)
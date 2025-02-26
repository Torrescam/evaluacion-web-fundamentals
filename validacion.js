
const user = document.querySelector("#name");
const nickname = document.querySelector("#nickname");
const biography = document.querySelector("#biography");
const password = document.querySelector("#password");

const requiredName = document.querySelector("#required-name");
const nicknameError = document.querySelector("#nickname-error");
const biographyError = document.querySelector("#biography-error");
const passwordError = document.querySelector("#password-error");

function buttonValidation() {
    const userValid = user.validity.valid;
    const nicknameValid = nickname.validity.valid;
    const biographyValid = biography.value.length >= 100;
    const passwordValid = password.validity.valid;
    document.querySelector("#button").disabled = !((userValid && nicknameValid && biographyValid)&& passwordValid);
}

user.addEventListener('input', function() {
    if (!user.validity.valid) {
        requiredName.textContent = 'El campo nombre es obligatorio';
    } else {
		requiredName.textContent = '';}
	buttonValidation();
});

nickname.addEventListener("input", function () {
    if (!nickname.validity.valid) {
        nicknameError.textContent = "Entre 3 y 10 caracteres alfanuméricos";
    } else {
        nicknameError.textContent = "";
		}
    buttonValidation();
});

biography.addEventListener("input", function () {
    if (biography.value.length < 100) {
        biographyError.textContent = "Mínimo 100 caracteres";
    } else {
		biographyError.textContent = "";
		}
    buttonValidation();
});

password.addEventListener("input", function () {
    if (!password.validity.valid) {
        if (password.validity.tooShort) {
            passwordError.textContent = "Mínimo 8 caracteres";
        } else if (password.validity.patternMismatch) {
            passwordError.textContent = "Debe contener al menos una letra mayúscula y un número";
        }
    } else {passwordError.textContent = "";
			
		}
    buttonValidation();
});

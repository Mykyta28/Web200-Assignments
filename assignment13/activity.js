document.addEventListener('DOMContentLoaded', function () {
    // Get references to form elements
    const form = document.querySelector('.form');
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last');
    const addressInput = document.getElementById('address');
    const cityInput = document.getElementById('city');
    const stateInput = document.getElementById('state');
    const postalInput = document.getElementById('postal');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const birthInput = document.getElementById('birth');
    const submitButton = document.querySelector('.btn');

    // Regular expressions for validation
    const nameReg = /^[A-Za-z\s'-]+$/;
    const cityReg = /^[A-Za-z\s'-]+$/;
    const zipReg = /^\d{4,9}$/;
    const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneReg = /^\d{10}$/;
    
    // create error for empty fields
    const createError = (input, text) => {
        const parent = input.parentNode;
    
        // Check if an error label already exists
        const existingError = parent.querySelector('.labelErr');
        
        if (existingError) {
            // Update the existing error label's text content
            existingError.textContent = text;
        } else {
            // Create a new error label
            const labelErr = document.createElement('label');
            labelErr.textContent = text;
            labelErr.classList.add('labelErr');
            input.classList.add('err');
            parent.append(labelErr);
        }
    }

    // creating remove eroor func
    const removeError = (input) => {
        const parent = input.closest('.form-group'); 
        if (parent) {
            const labelErr = parent.querySelector('.labelErr');
            if (labelErr) {
                labelErr.remove();
                input.classList.remove('err');
            }
        }
    }

    // Function to validate each input field
    const validateInput = () => {
        let isValid = true;
    
        if (!nameReg.test(nameInput.value)) {
            createError(nameInput, 'Invalid name!');
            isValid = false;
        } else {
            removeError(nameInput);
        }
    
        if (!nameReg.test(lastNameInput.value)) {
            createError(lastNameInput, 'Invalid last name!');
            isValid = false;
        } else {
            removeError(lastNameInput);
        }
    
        if (addressInput.value === '') {
            createError(addressInput, 'Invalid address!');
            isValid = false;
        } else {
            removeError(addressInput);
        }
    
        if (!cityReg.test(cityInput.value)) {
            createError(cityInput, 'Invalid city!');
            isValid = false;
        } else {
            removeError(cityInput);
        }
    
        if (!cityReg.test(stateInput.value)) {
            createError(stateInput, 'Invalid state!');
            isValid = false;
        } else {
            removeError(stateInput);
        }
    
        if (!zipReg.test(postalInput.value)) {
            createError(postalInput, 'Invalid zip code!');
            isValid = false;
        } else {
            removeError(postalInput);
        }
    
        if (!emailReg.test(emailInput.value)) {
            createError(emailInput, 'Invalid email!');
            isValid = false;
        } else {
            removeError(emailInput);
        }
    
        if (!phoneReg.test(phoneInput.value)) {
            createError(phoneInput, 'Invalid phone number!');
            isValid = false;
        } else {
            removeError(phoneInput);
        }
    
        return isValid;
    }


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if(validateInput() === true){
            alert('Form submitted sucsessfuly!')
            form.reset();
            form.querySelectorAll('input').forEach(input => {
                removeError(input)
            })
        }

    })
});

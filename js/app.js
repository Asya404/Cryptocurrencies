// Instanciate the classes

const cryptoapi = new cryptoAPI();
const ui = new UI();
const form = document.querySelector('#form');


const getValues = (e) => {
    e.preventDefault();

    // read the values
    const currencySelect = document.querySelector('#currency').value;
    const cryptoSelect = document.querySelector('#cryptocurrency').value;

    // validating and print the result or error
    if (currencySelect !== '' && cryptoSelect !== '') {
        cryptoapi.requestAPI(currencySelect, cryptoSelect)
            .then(data => {
                data = data.data;
                ui.displayResult(data, currencySelect);
            })
    } else {
        ui.printMessage('All the fields are mandatory!', 'error');
    }
}

// on submit read values and print the result
form.addEventListener('submit', getValues);
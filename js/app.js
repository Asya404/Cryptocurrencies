// Instanciate the classes

const cryptoapi = new cryptoAPI();
const ui = new UI();

const form = document.querySelector('#form');

const getValues = (e) => {
    e.preventDefault();

    // read the values
    const currencySelect = document.querySelector('#currency').value;
    const cryptoSelect = document.querySelector('#cryptocurrency').value;

    // validating
    if (currencySelect !== '' && cryptoSelect !== '') {
        cryptoapi.requestAPI(currencySelect, cryptoSelect)
            .then(data => {
                console.log(data)

            })

    } else {
        ui.printMessage('All the fields are mandatory!', 'error');
    }

    console.log(currencySelect + ':' + cryptoSelect)
}

form.addEventListener('submit', getValues);
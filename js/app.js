// Instanciate the classes

const cryptoapi = new cryptoAPI();
const ui = new UI();

const form = document.querySelector('#form');

const getValues = (e) => {
    e.preventDefault();

    // read currency
    const currencySelect = document.querySelector('#currency').value;
    // read cryptocurrency
    const cryptoSelect = document.querySelector('#cryptocurrency').value;

    // validating
    if(currencySelect !== '' && cryptoSelect !== '') {
        console.log('success');
    } else {
        console.log('error');
        ui.printMessage('All the fields are mandatory!', 'error');
    }

    console.log(currencySelect+':'+cryptoSelect)
}

form.addEventListener('submit', getValues);
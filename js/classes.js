class cryptoAPI {

    // Here we get data with all the crypto, then build the options
    async getCryptoList() {
        const response = await fetch('https://api2.binance.com/api/v3/ticker/24hr')
        const data = await response.json();
        console.log(data)
        return {
            data
        }
    }


    // Here we use getCryptoList to build the options
    printCrypto() {
        this.getCryptoList()
            .then(data => {
                data = data.data;

                const select = document.querySelector('#cryptocurrency');
                data.forEach(currency => {
                    const option = document.createElement('option');
                    option.value = (currency.symbol).slice(0, -3);
                    option.appendChild(document.createTextNode((currency.symbol).slice(0, -3)));
                    select.appendChild(option);
                });
            })
    }

    // to use it
    constructor() {
        this.printCrypto();
    }
    

    // Here we get data with crypto pairs
    async requestAPI(currency, cryptocurrency) {
        const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${cryptocurrency}${currency}`)
        const data = await response.json();
        return {
            data
        }
    }


    // Prints the result of the valuation
    displayResult(data, currency) {

        // Remove previous result
        const prevResult = document.querySelector('#result > div');
        if (prevResult) {
            prevResult.remove();
        }

        let output = '';
        output = `
            <div class="card">
                <div class="card__content">
                    <span class="card__title">Result</span>
                    <p>The price of ${(data.symbol).slice(0, -3)} is ${data.price} ${currency}</p>
                </div>
            </div>
        `;
        this.showSpinner();

        // After 3s print the result and remove the spinner
        setTimeout(() => {
            const divResult = document.querySelector('#result');
            divResult.innerHTML = output;
            document.querySelector('.spinner img').remove();
        }, 2000)
    }


    // Print the spinner
    showSpinner() {
        const spinner = document.createElement('img');
        spinner.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinner);
    }


    // Prints an error message
    printMessage(message, className) {
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const messageDiv = document.querySelector('.messages');
        messageDiv.appendChild(div);

        // Remove the message
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 2000)
    }
}
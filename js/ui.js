class cryptoAPI {

    async requestAPI(currency, cryptocurrency) {
        const response = await fetch (`https://api.binance.com/api/v3/ticker/price?symbol=${cryptocurrency}${currency}`)
        const data = await response.json();
        console.log(data);
        return {
            data
        }
    }

    // Will wait until all json is downloaded
    // Here we only get data with all the crypto
    async getCryptoList() {
        const response = await fetch('https://api2.binance.com/api/v3/ticker/24hr')
        const data = await response.json();
        console.log(data)
        return {
            data
        }
    } 
}



class UI {
    constructor() {
        this.printCrypto();
    }

    // Here we use getCryptoList to build the options
    printCrypto() {
        cryptoapi.getCryptoList()
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
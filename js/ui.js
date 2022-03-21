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
                    option.value = currency.symbol;
                    option.appendChild(document.createTextNode(currency.symbol));
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
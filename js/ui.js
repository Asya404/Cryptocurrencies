class UI {
    constructor() {
        this.printCrypto();
    }

    // Here we use getCryptoList to build the options
    printCrypto() {
        cryptoapi.getCryptoList()
            .then(data => {
                data = data.data;
                console.log(data);

                const select = document.querySelector('#cryptocurrency');
                data.forEach(currency => {
                    const option = document.createElement('option');
                    option.value = currency.firstId;
                    option.appendChild(document.createTextNode(currency.symbol));
                    select.appendChild(option);
                });
            })
    }
}
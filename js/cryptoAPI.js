class cryptoAPI {

    // Will wait until all json is downloaded
    // Here we only get data with all the crypto
    async getCryptoList() {
        const response = await fetch('https://api2.binance.com/api/v3/ticker/24hr')
        const data = await response.json();
        return {
            data
        }
    }
}

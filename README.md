# Coindex CLI

## Description
Coindex CLI is a command-line tool designed to fetch and display cryptocurrency price data using the CoinMarketCap API. It allows users to manage their API key, check real-time coin prices, and access the latest cryptocurrency listings.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd coindex-cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make the CLI globally accessible:
   ```bash
   npm link
   ```

---

## Usage

### Commands

1. **`key`**
   Manage your API key. The API key is required to fetch data from the CoinMarketCap API.

   - Set API Key:
     ```bash
     coindex key set <API_KEY>
     ```

   - Show API Key:
     ```bash
     coindex key show
     ```

   - Delete API Key:
     ```bash
     coindex key delete
     ```

   > Get your API key from [CoinMarketCap](https://pro.coinmarketcap.com/account).

2. **`check`**
   Fetch cryptocurrency price information.

   - Check the price of a specific coin:
     ```bash
     coindex check price --coin=<COIN_SYMBOL> --curr=<CURRENCY>
     ```
     Example:
     ```bash
     coindex check price --coin=BTC --curr=USD
     ```

   - Check the latest cryptocurrency listings:
     ```bash
     coindex check price
     ```

---

## Features

- **API Key Management:** Easily manage your CoinMarketCap API key.
- **Real-Time Price Data:** Fetch the current price of cryptocurrencies in your preferred currency.
- **Latest Listings:** Display the latest cryptocurrency data from CoinMarketCap.
- **Error Handling:** Handles API errors and provides meaningful messages to the user.

---

## Configuration

Coindex CLI uses the `configstore` package to securely store your API key locally. The key is tied to the application name defined in the `package.json`.

---

## Example

### Setting an API Key
```bash
coindex key set 12345678-abcdefg
```

### Checking a Coin Price
```bash
coindex check price --coin=ETH --curr=EUR
```
Output:
```
Coin: ETH (Ethereum) | Price: 2000.45 EUR
```

### Viewing Latest Listings
```bash
coindex check price
```
Output:
```
Coin: BTC (Bitcoin) | Price: 30000.12 USD
Coin: ETH (Ethereum) | Price: 2000.45 USD
...
```

---

## Troubleshooting

- **Error: "No API key found":**
  Ensure you have set an API key using the `coindex key set` command.

- **Error: "Request failed with status code 400":**
  Verify that the API key is valid and that the input parameters are correct.

---

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- [CoinMarketCap API](https://pro.coinmarketcap.com/)


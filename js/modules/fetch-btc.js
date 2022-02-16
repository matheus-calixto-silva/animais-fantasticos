export default function getBtcValue() {
  async function requestBtcApi(url) {
    try {
      const btcValue = document.querySelector(".btc-preco");
      const btcJson = await (await fetch(url)).json();

      btcValue.innerText = Math.floor(btcJson.BRL.sell / 100000);
    } catch (error) {
      console.log(error);
    }
  }
  requestBtcApi("https://www.blockchain.com/ticker");
}

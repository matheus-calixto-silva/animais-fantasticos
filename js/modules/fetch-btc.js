export default function fethcBtc(url, target) {
  async function requestBtcApi() {
    try {
      const btcValue = document.querySelector(target);
      const btcJson = await (await fetch(url)).json();

      btcValue.innerText = Math.floor(btcJson.BRL.sell / 100000).toFixed(2);
    } catch (error) {
      console.log(error);
    }
  }
  return requestBtcApi();
}

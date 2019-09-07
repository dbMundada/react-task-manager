import { API } from './../common/api';

export default class WebSocketService {

  constructor(currencyPair, msgReceivedCb) {
    this.currencyPair = currencyPair;
    this.ws = new WebSocket(API.LIVE_STOCK_URL);

    this.ws.onopen = this.onOpen;
    this.ws.onmessage = msgReceivedCb;
    this.ws.onclose = this.onClose;
  }

  onOpen = (evt) => {
    this.ws.send(
      JSON.stringify({ currencyPair: this.currencyPair})
    );
    console.log("Connection open ...");
  }

  onMsgReceived = (event) => {
    console.log(event);
  }

  onClose = (err) => {
    console.log('OnClose: ', err);
  }

  close = () => {
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.close();
    }
  }

}

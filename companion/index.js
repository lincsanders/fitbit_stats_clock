import { settingsStorage } from "settings";
import * as messaging from "messaging";

settingsStorage.onchange = (e) => {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send({
      key: e.key,
      value: JSON.parse(e.newValue),
      oldValue: JSON.parse(e.oldValue),
    });
  }
}

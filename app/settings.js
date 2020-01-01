import { me } from "appbit";
import * as fs from "fs";
import * as messaging from "messaging";

const SETTINGS_TYPE = "cbor";
const SETTINGS_FILE = "minimal_stats_clock_settings.cbor";

export default class Settings {
  constructor () {
    this.onupdate = null;

    try {
      this._settings = fs.readFileSync(SETTINGS_FILE, SETTINGS_TYPE);
    } catch (ex) {}

    if (!this._settings) {
      this._settings = {};
    }

    // Defaults
    const defaults = {
      use_miles: false,
      show_seconds: false,
      day_color: "lightblue",
      date_color: "lightblue",
      line_color: "lightblue",
    }

    for (const i in Object.keys(defaults)) {
      let key = Object.keys(defaults)[i];
      if (!(key in this._settings)) {
        this._settings[key] = defaults[key];
      }
    }

    console.log(JSON.stringify(this._settings));

    // Listen for the onmessage event
    messaging.peerSocket.onmessage = (e) => {
      this._settings[e.data.key] = e.data.value;

      if (this.onupdate) {
        this.onupdate(e);
      }
    }

    // Register for the unload event
    me.onunload = () => {
      this.saveSettings();
    };
  }

  saveSettings () {
    fs.writeFileSync(SETTINGS_FILE, this._settings, SETTINGS_TYPE);
  }

  get (key) {
    return this._settings[key];
  }
}

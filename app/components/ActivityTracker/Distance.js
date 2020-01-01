import document from "document";
import { preferences, locale } from "user-settings";
import { me as appbit } from "appbit";
import { today, goals } from "user-activity";

import * as util from "../../../common/utils";

import BaseIndicator from './BaseIndicator';

export default class Distance extends BaseIndicator {
  constructor (settings, element) {
    this.settings = settings;
    this.element = element;

    if (
      !this.element ||
      !appbit.permissions.granted("access_activity")
    ) {
      console.log('Distance disabled!');
      return;
    }

    this.icons = {
      incomplete: "icons/stat_dist_open_32px.png",
      complete: "icons/stat_dist_solid_32px.png",
    }

    super();
  }

  update () {
    if (!this.element) {
      return;
    }

    this.amount = today.adjusted.distance;
    this.goal = goals.distance;

    if (this.settings.get('use_miles')) {
      this.text = parseFloat(this.amount / 1609.34).toFixed(2) + " mi"
    } else {
      this.text = parseFloat(this.amount / 1000).toFixed(2) + " km"
    }

    super.update();
  }
}

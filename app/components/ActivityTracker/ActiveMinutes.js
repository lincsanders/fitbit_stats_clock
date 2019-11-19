import document from "document";
import { preferences, locale } from "user-settings";
import { me as appbit } from "appbit";
import { today, goals } from "user-activity";

import * as util from "../../../common/utils";

import BaseIndicator from './BaseIndicator';

export default class ActiveMinutes extends BaseIndicator {
  constructor (element) {
    this.element = element;

    if (
      !this.element ||
      !appbit.permissions.granted("access_activity")
    ) {
      console.log('Active minutes disabled!');
      return;
    }

    this.icons = {
      incomplete: "icons/stat_am_open_32px.png",
      complete: "icons/stat_am_solid_32px.png",
    };

    super();
  }

  update () {
    if (!this.element) {
      return;
    }

    this.amount = today.adjusted.activeMinutes;
    this.goal = goals.activeMinutes;

    this.text = this.amount + " min"

    super.update();
  }
}

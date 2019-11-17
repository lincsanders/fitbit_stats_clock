import document from "document";
import { preferences, locale } from "user-settings";
import { me as appbit } from "appbit";
import { today, goals } from "user-activity";

import * as util from "../../../common/utils";

import BaseIndicator from './BaseIndicator';

export default class Floors extends BaseIndicator {
  constructor (element) {
    this.element = element;

    if (
      !this.element ||
      !appbit.permissions.granted("access_activity") ||
      !today.local.elevationGain
    ) {
      console.log('Floors disabled!');
      return;
    }

    this.incompleteIcon = "icons/stat_floors_open_32px.png";
    this.completeIcon = "icons/stat_floors_solid_32px.png";

    super();
  }

  update () {
    if (!this.element) {
      return;
    }

    this.amount = today.adjusted.elevationGain;
    this.goal = goals.elevationGain;

    this.amountText = this.amount + " floors";

    super.update();
  }
}

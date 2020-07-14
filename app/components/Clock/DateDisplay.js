import { gettext as t } from "i18n";
import { preferences, locale } from "user-settings";
import * as util from "../../../common/utils";

export default class DateDisplay {
  constructor (settings, element) {
    this.settings = settings;
    this.container = element;
  }

  update (e) {
    let date = e.date;

    const day = date.getDay();

    this.container.getElementById('day').style.fill = this.settings.get('day_color') || 'lightblue';
    this.container.getElementById('date').style.fill = this.settings.get('date_color') || 'lightblue';
    try {
      this.date_format = this.settings.get('date_format').values[0].name;
    } catch (e) {
      this.date_format = 'YYYY-MM-DD';
    }

    const days = {
      0: 'sunday',
      1: 'monday',
      2: 'tuesday',
      3: 'wednesday',
      4: 'thursday',
      5: 'friday',
      6: 'saturday',
    };

    if (this.date_format === 'YYYY-MM-DD') {
      const dateString = [
        date.getFullYear(),
        util.zeroPad(date.getMonth()+1),
        util.zeroPad(date.getDate()),
      ].join('-');
    } else if (this.date_format === 'DD/MM/YYYY') {
      const dateString = [
        util.zeroPad(date.getDate()),
        util.zeroPad(date.getMonth()+1),
        date.getFullYear(),
      ].join('/');
    } else if (this.date_format === 'MM/DD/YYYY') {
      const dateString = [
        util.zeroPad(date.getMonth()+1),
        util.zeroPad(date.getDate()),
        date.getFullYear(),
      ].join('/');
    } else if (this.date_format === 'DD.MM.YYYY') { 
    const dateString = [
      util.zeroPad(date.getDate()),
      util.zeroPad(date.getMonth()+1),
      date.getFullYear(),
    ].join('.');
    }
    else {
      // Default?
      const dateString = [
        date.getFullYear(),
        util.zeroPad(date.getMonth()+1),
        util.zeroPad(date.getDate()),
      ].join('-');
    }

    const dayString = t(days[day]).toUpperCase();

    this.container.getElementById('day').text = dayString;
    this.container.getElementById('date').text = dateString;
  }
}

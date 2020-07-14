import { gettext as t } from "i18n";
import { locale } from "user-settings";

function Settings(props) {
  return (
    <Page>
      <Section title={<Text bold align="center">{t('title')}</Text>}>
        <Toggle
          settingsKey="use_miles"
          value={props.settings.use_miles || false}
          label= {t('use_miles')}
        />

        <Toggle
          settingsKey="show_seconds"
          value={props.settings.show_seconds || false}
          label={t('show_seconds')}
        />

        <Select
          label={t('date_format')}
          settingsKey="date_format"
          value={props.settings.date_format || 0}
          options={[
            { name: "YYYY-MM-DD" },
            { name: "DD/MM/YYYY" },
            { name: "MM/DD/YYYY" },
            { name: "DD.MM.YYYY"}
          ]}
        />

        <Select
          label={t('time_format')}
          value={props.settings.time_format || 0}
          settingsKey="time_format"
          options={[
            { name: "24 Hour" },
            { name: "AM/PM" },
          ]}
        />

        <Text align="left">{t('day_color')}</Text>
        <ColorSelect
          settingsKey="day_color"
          value={props.settings.day_color || 'lightblue'}
          colors={[
            {color: 'lightblue'},
            {color: 'tomato'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: 'aquamarine'},
            {color: 'deepskyblue'},
            {color: 'plum'}
          ]}
        />

        <Text align="left">{t('date_color')}</Text>
        <ColorSelect
          settingsKey="date_color"
          value={props.settings.date_color || 'lightblue'}
          colors={[
            {color: 'lightblue'},
            {color: 'tomato'},
            {color: 'sandybrown'},
            {color: 'gold'},
            {color: 'aquamarine'},
            {color: 'deepskyblue'},
            {color: 'plum'}
          ]}
        />
      </Section>
    </Page>
  )
}

registerSettingsPage(Settings);

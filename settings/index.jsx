function Settings(props) {
  return (
    <Page>
      <Section title={<Text bold align="center">Minimal Stats Clock Settings</Text>}>
        <Toggle
          settingsKey="use_miles"
          value={props.settings.use_miles || false}
          label="Use Miles?"
        />

        <Toggle
          settingsKey="show_seconds"
          value={props.settings.show_seconds || false}
          label="Show Seconds?"
        />

        <Select
          label="Date Format"
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
          label="Time Format"
          value={props.settings.time_format || 0}
          settingsKey="time_format"
          options={[
            { name: "24 Hour" },
            { name: "AM/PM" },
          ]}
        />

        <Text align="left">Day Color</Text>
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

        <Text align="left">Date Color</Text>
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

function Settings(props) {
  return (
    <Page>
      <Section title={<Text bold align="center">Minimal Stats Clock Settings</Text>}>
        <Toggle
          settingsKey="use_miles"
          label="Use Miles?"
        />

        <Toggle
          settingsKey="show_seconds"
          label="Show Seconds?"
        />

        <Text align="left">Day Color</Text>
        <ColorSelect
          settingsKey="day_color"
          value={props.settings.day_color || 'lightblue'}
          onChange={value => props.settingsStorage.setItem('day_color', value)}
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
          onChange={value => props.settingsStorage.setItem('date_color', value)}
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

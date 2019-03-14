# rc-year-calendar

Official wrapper for the year-calendar widget. https://year-calendar.github.io/

![alt tag](http://www.bootstrap-year-calendar.com/img/calendar.png)

## Installation
You can get the widget using the following methods:
- From the [GitHub repository](https://github.com/year-calendar/rc-year-calendar/releases)
- From the Node package manager, using the following command: `npm install rc-year-calendar`
- From Yarn, using the following command: `yarn add rc-year-calendar`
- From the CDN, by adding the following script directly in your HTML page: 

`<script src="https://unpkg.com/rc-year-calendar@latest/dist/rc-year-calendar.umd.min.js"></script>`

AND

`<link rel="stylesheet" type="text/css" href="https://unpkg.com/rc-year-calendar@latest/dist/rc-year-calendar.min.css" />`

## Usage

You can create a calendar using the following javascript code :
```
// Import
import Calendar from 'rc-year-calendar';
import 'rc-year-calendar/dist/rc-year-calendar.css';

// Render
render() {
    return (<Calendar />);
}
```

## Using options

You can specify props to customize the calendar:
```
render() {
    return (
        <Calendar style="background" minDate={new Date()} />
    );
}
```

The props are the following

| Option name | Description | Type | Default value |
| ----------- | ----------- | ---- | ------------- |
| allowOverlap | Specifies whether the user can select a range which overlapping an other element present in the datasource. | boolean | `true` |
| alwaysHalfDay | Specifies whether the beginning and the end of each range should be displayed as half selected day. | boolean | `false` |
| contextMenuItems | Specifies the items of the default context menu. | array | `[]` |
| customDayRenderer | Specify a custom renderer for data source. Works only with the style set to "custom". This function is called duringender for each day containing at least one event. | Render function | `null` |
| customDataSourceRenderer | Specify a custom renderer for days. This function is called during render for each day. | Render function | `null` |
| dataSource | The elements that must be displayed on the calendar. | array or function | `[]` |
| disabledDays | The days that must be displayed as disabled. | array | `[]` |
| disabledWeekDays | The days of the week that must be displayed as disabled (0 for Sunday, 1 for Monday, etc.). | array | `[]` |
| displayDisabledDataSource | Specifies whether the data source must be rendered on disabled days. | boolean | `false` |
| displayHeader | Specifies whether the calendar header is displayed. | boolean | `true` |
| displayWeekNumber | Specifies whether the weeks number are displayed. | boolean | `false` |
| enableContextMenu | Specifies whether the default context menu must be displayed when right clicking on a day. | boolean | `false` |
| enableRangeSelection | Specifies whether the range selection is enabled. | boolean | `false` |
| hiddenWeekDays | The days of the week that must not be displayed (0 for Sunday, 1 for Monday, etc.). | array | `[]` |
| language | The language/culture used for calendar rendering. | String | `en` |
| loadingTemplate | A custom loading template | String | `null` |
| maxDate | The date until which days are enabled. | Date | `null` |
| minDate | The date from which days are enabled. | Date | `null` |
| roundRangeLimits | Specifies whether the beginning and the end of each range should be displayed as rounded cells. | boolean | `false` |
| style | Specifies the style used for displaying datasource ("background", "border" or "custom"). | string | `border` |
| weekStart | The starting day of the week. This option overrides the parameter define in the language file. | number | `0` |
| year | The year displayed by the calendar. | number | Current year |
| defaultYear | The year on which the calendar should be opened. | number | Current year |

| Event name | Description | Parameter |
| ---------- | ----------- | --------- |
| onDayClick | Function fired when a day is clicked. | `{ date, events }` |
| onDayContextMenu | Function fired when a day is right clicked. | `{ date, events }` |
| onDayEnter | Function fired when the mouse enter on a day. | `{ date, events }` |
| onDayLeave | Function fired when the mouse leaves a day. | `{ date, events }` |
| onRenderEnd | Function fired when the calendar rendering is ended. | `{ currentYear }` |
| onRangeSelected | Function fired when a date range is selected. | `{ startDate, endDate }` |
| onYearChanged | Function fired when the visible year of the calendar is changed. | `{ currentYear }` |


## What next

Check the [examples](https://year-calendar.github.io/rc-year-calendar/examples) page to discover all the functionalities.
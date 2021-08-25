import React from "react";
import PropTypes from 'prop-types';
import JsCalendar from "js-year-calendar";
import 'js-year-calendar/dist/js-year-calendar.css';

export default class Calendar extends React.Component {
    static propsTypes = {
        // opsions
        allowOverlap: PropTypes.bool,
        alwaysHalfDay: PropTypes.bool,
        contextMenuItems: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string,
            click: PropTypes.func,
            visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
            items: PropTypes.array
        })),
        customDayRenderer: PropTypes.func,
        customDataSourceRenderer: PropTypes.func,
        dataSource: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.shape({
                startDate: PropTypes.instanceOf(Date),
                endDate: PropTypes.instanceOf(Date),
                name: PropTypes.string
            })), 
            PropTypes.func
        ]),
        disabledDays: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
        disabledWeekDays: PropTypes.arrayOf(PropTypes.number),
        displayDisabledDataSource: PropTypes.bool,
        displayHeader: PropTypes.bool,
        displayWeekNumber: PropTypes.bool,
        enableContextMenu: PropTypes.bool,
        enableRangeSelection: PropTypes.bool,
        hiddenWeekDays: PropTypes.arrayOf(PropTypes.number),
        language: PropTypes.string,
        loadingTemplate: PropTypes.string,
        maxDate: PropTypes.instanceOf(Date),
        minDate: PropTypes.instanceOf(Date),
        roundRangeLimits: PropTypes.bool,
        selectRange: PropTypes.bool,
        style: PropTypes.string,
        weekStart: PropTypes.number,
        year: PropTypes.number,

        // Events
        onDayClick: PropTypes.func,
        onDayContextMenu: PropTypes.func,
        onDayEnter: PropTypes.func,
        onDayLeave: PropTypes.func,
        onRenderEnd: PropTypes.func,
        onSelectRange: PropTypes.func,
        onYearChanged: PropTypes.func
    };

    static locales = JsCalendar.locales; // Map the "locales" property to the js-year-calendar "locales" property, in order to make the locale files compatible

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.JsCalendar = new JsCalendar(this.container, {
            // opsions
            allowOverlap: this.props.allowOverlap,
            alwaysHalfDay: this.props.alwaysHalfDay,
            contextMenuItems: this.props.contextMenuItems,
            customDayRenderer: this.props.customDayRenderer,
            customDataSourceRenderer: this.props.customDataSourceRenderer,
            dataSource: this.props.dataSource,
            disabledDays: this.props.disabledDays,
            disabledWeekDays: this.props.disabledWeekDays,
            displayDisabledDataSource: this.props.displayDisabledDataSource,
            displayHeader: this.props.displayHeader,
            displayWeekNumber: this.props.displayWeekNumber,
            enableContextMenu: this.props.enableContextMenu,
            enableRangeSelection: this.props.enableRangeSelection,
            hiddenWeekDays: this.props.hiddenWeekDays,
            language: this.props.language,
            loadingTemplate: this.props.loadingTemplate,
            maxDate: this.props.maxDate,
            minDate: this.props.minDate,
            roundRangeLimits: this.props.roundRangeLimits,
            style: this.props.style,
            weekStart: this.props.weekStart,
            numberMonthsDisplayed: this.props.numberMonthsDisplayed,
            startYear: this.props.year != null ? this.props.year : this.props.defaultYear,
            startDate: this.props.startDate != null ? this.props.startDate : this.props.defaultStartDate,

            // Events
            clickDay: this.props.onDayClick,
            dayContextMenu: this.props.onDayContextMenu,
            mouseOnDay: this.props.onDayEnter,
            mouseOutDay: this.props.onDayLeave,
            renderEnd: this.props.onRenderEnd,
            selectRange: this.props.onRangeSelected,
            periodChanged: this.props.onPeriodChanged,
            yearChanged: this.props.onYearChanged
        });
    }

    compare(a, b) {
        if (typeof a === "function" && typeof b === "function") {
            return a.toString() != b.toString();
        }
        else if (a instanceof Date && b instanceof Date) {
            return a.getTime() != b.getTime();
        }
        else if (a !== null && typeof a === "object" && b !== null && typeof b === "object") {
            var aKeys = Object.keys(a);
            var bKeys = Object.keys(b);
            
            if (aKeys.length !== bKeys.length) {
                return true;
            }
            else {
                return aKeys.some(key => this.compare(a[key], b[key]));
            }
        }
        else {
            return a != b;
        }
    }

    updateEvent(eventName, oldListener, newListener) {
        this.container.removeEventListener(eventName, oldListener);
        this.container.addEventListener(eventName, newListener);
    }

    componentWillReceiveProps(nextProps) {
        const cal = this.JsCalendar;
        const ops = [];

        // opsions
        if (this.compare(nextProps.allowOverlap, this.props.allowOverlap)) ops.push(() => cal.setAllowOverlap(nextProps.allowOverlap));
        if (this.compare(nextProps.alwaysHalfDay, this.props.alwaysHalfDay)) ops.push(() => cal.setAlwaysHalfDay(nextProps.alwaysHalfDay, true));
        if (this.compare(nextProps.contextMenuItems, this.props.contextMenuItems)) ops.push(() => cal.setContextMenuItems(nextProps.contextMenuItems, true));
        if (this.compare(nextProps.customDayRenderer, this.props.customDayRenderer)) ops.push(() => cal.setCustomDayRenderer(nextProps.customDayRenderer, true));
        if (this.compare(nextProps.customDataSourceRenderer, this.props.customDataSourceRenderer)) ops.push(() => cal.setCustomDataSourceRenderer(nextProps.customDataSourceRenderer, true));
        if (this.compare(nextProps.dataSource, this.props.dataSource)) ops.push(() => cal.setDataSource(nextProps.dataSource, true));
        if (this.compare(nextProps.disabledDays, this.props.disabledDays)) ops.push(() => cal.setDisabledDays(nextProps.disabledDays, true));
        if (this.compare(nextProps.disabledWeekDays, this.props.disabledWeekDays)) ops.push(() => cal.setDisabledWeekDays(nextProps.disabledWeekDays, true));
        if (this.compare(nextProps.displayDisabledDataSource, this.props.displayDisabledDataSource)) ops.push(() => cal.setDisplayDisabledDataSource(nextProps.displayDisabledDataSource, true));
        if (this.compare(nextProps.displayHeader, this.props.displayHeader)) ops.push(() => cal.setDisplayHeader(nextProps.displayHeader, true));
        if (this.compare(nextProps.displayWeekNumber, this.props.displayWeekNumber)) ops.push(() => cal.setDisplayWeekNumber(nextProps.displayWeekNumber, true));
        if (this.compare(nextProps.enableContextMenu, this.props.enableContextMenu)) ops.push(() => cal.setEnableContextMenu(nextProps.enableContextMenu, true));
        if (this.compare(nextProps.enableRangeSelection, this.props.enableRangeSelection)) ops.push(() => cal.setEnableRangeSelection(nextProps.enableRangeSelection, true));
        if (this.compare(nextProps.hiddenWeekDays, this.props.hiddenWeekDays)) ops.push(() => cal.setHiddenWeekDays(nextProps.hiddenWeekDays, true));
        if (this.compare(nextProps.language, this.props.language)) ops.push(() => cal.setLanguage(nextProps.language, true));
        if (this.compare(nextProps.loadingTemplate, this.props.loadingTemplate)) ops.push(() => cal.setLoadingTemplate(nextProps.loadingTemplate, true));
        if (this.compare(nextProps.maxDate, this.props.maxDate)) ops.push(() => cal.setMaxDate(nextProps.maxDate, true));
        if (this.compare(nextProps.minDate, this.props.minDate)) ops.push(() => cal.setMinDate(nextProps.minDate, true));
        if (this.compare(nextProps.roundRangeLimits, this.props.roundRangeLimits)) ops.push(() => cal.setRoundRangeLimits(nextProps.roundRangeLimits, true));
        if (this.compare(nextProps.style, this.props.style)) ops.push(() => cal.setStyle(nextProps.style, true));
        if (this.compare(nextProps.weekStart, this.props.weekStart)) ops.push(() => cal.setWeekStart(nextProps.weekStart, true));
        if (this.compare(nextProps.numberMonthsDisplayed, this.props.numberMonthsDisplayed)) ops.push(() => cal.setWeekStart(nextProps.numberMonthsDisplayed, true));
        if (this.compare(nextProps.startDate, this.props.startDate)) ops.push(() => cal.setStartDate(nextProps.startDate));
        if (this.compare(nextProps.year, this.props.year)) ops.push(() => cal.setYear(nextProps.year));

        // Events
        if (this.compare(nextProps.onDayClick, this.props.onDayClick)) this.updateEvent('clickDay', this.props.onDayClick, nextProps.onDayClick);
        if (this.compare(nextProps.onDayContextMenu, this.props.onDayContextMenu)) this.updateEvent('dayContextMenu', this.props.onDayContextMenu, nextProps.onDayContextMenu);
        if (this.compare(nextProps.onDayEnter, this.props.onDayEnter)) this.updateEvent('mouseOnDay', this.props.onDayEnter, nextProps.onDayEnter);
        if (this.compare(nextProps.onDayLeave, this.props.onDayLeave)) this.updateEvent('mouseOutDay', this.props.onDayLeave, nextProps.onDayLeave);
        if (this.compare(nextProps.onRenderEnd, this.props.onRenderEnd)) this.updateEvent('renderEnd', this.props.onRenderEnd, nextProps.onRenderEnd);
        if (this.compare(nextProps.onRangeSelected, this.props.onRangeSelected)) this.updateEvent('selectRange', this.props.onRangeSelected, nextProps.onRangeSelected);
        if (this.compare(nextProps.onPeriodChanged, this.props.onPeriodChanged)) this.updateEvent('periodChanged', this.props.onPeriodChanged, nextProps.onPeriodChanged);
        if (this.compare(nextProps.onYearChanged, this.props.onYearChanged)) this.updateEvent('yearChanged', this.props.onYearChanged, nextProps.onYearChanged);

        if (ops.length > 0) {
            ops.forEach(op => op());

            if (nextProps.year == this.props.year && nextProps.startDate == this.props.startDate) {
                // If the year has changed, the calendar has automatically been rendered
                cal.render();
            }
        }
    }

    render() {
        return (
            <div ref={elt => this.container = elt}></div>
        );
    }
}

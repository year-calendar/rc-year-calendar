import React from "react";
import Propsypes from 'prop-types';
import JsCalendar from "../node_modules/js-year-calendar/dist/js-year-calendar.js";

export default class Calendar extends React.Component {
    static propsypes = {
        // opsions
        allowOverlap: Propsypes.bool,
        alwaysHalfDay: Propsypes.bool,
        contextMenuItems: Propsypes.arrayOf(Propsypes.shape({
            text: Propsypes.string,
            click: Propsypes.func,
            visible: Propsypes.oneOfType([Propsypes.bool, Propsypes.func]),
            items: Propsypes.array
        })),
        customDayRenderer: Propsypes.func,
        customDataSourceRenderer: Propsypes.func,
        dataSource: Propsypes.arrayOf(Propsypes.shape({
            startDate: Propsypes.instanceOf(Date),
            endDate: Propsypes.instanceOf(Date),
            name: Propsypes.string
        })),
        disabledDays: Propsypes.arrayOf(Propsypes.instanceOf(Date)),
        disabledWeekDays: Propsypes.arrayOf(Propsypes.number),
        displayDisabledDataSource: Propsypes.bool,
        displayHeader: Propsypes.bool,
        displayWeekNumber: Propsypes.bool,
        enableContextMenu: Propsypes.bool,
        enableRangeSelection: Propsypes.bool,
        hiddenWeekDays: Propsypes.arrayOf(Propsypes.number),
        language: Propsypes.string,
        maxDate: Propsypes.instanceOf(Date),
        minDate: Propsypes.instanceOf(Date),
        roundRangeLimits: Propsypes.bool,
        selectRange: Propsypes.bool,
        style: Propsypes.string,
        weekStart: Propsypes.number,
        year: Propsypes.number,

        // Events
        onDayClick: Propsypes.func,
        onDayContextMenu: Propsypes.func,
        onDayHover: Propsypes.func,
        onDayLeave: Propsypes.func,
        onRenderEnd: Propsypes.func,
        onSelectRange: Propsypes.func,
        onYearChanged: Propsypes.func
    };

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
            maxDate: this.props.maxDate,
            minDate: this.props.minDate,
            roundRangeLimits: this.props.roundRangeLimits,
            selectRange: this.props.selectRange,
            style: this.props.style,
            weekStart: this.props.weekStart,
            startYear: this.props.year,

            // Events
            clickDay: this.props.onDayClick,
            dayContextMenu: this.props.onDayContextMenu,
            mouseOnDay: this.props.onDayHover,
            mouseOutDay: this.props.onDayLeave,
            renderEnd: this.props.onRenderEnd,
            selectRange: this.props.onRangeSelected,
            yearChanged: this.props.onYearChanged
        });
    }

    updateEvent(eventName, oldListener, newListener) {
        this.container.removeEventListener(eventName, oldListener);
        this.container.addEventListener(eventName, newListener);
    }

    componentWillReceiveProps(nextProps) {
        const cal = this.JsCalendar;
        const ops = [];

        // opsions
        if (nextProps.allowOverlap != this.props.allowOverlap) ops.push(() => cal.setAllowOverlap(nextProps.allowOverlap, false));
        if (nextProps.alwaysHalfDay != this.props.alwaysHalfDay) ops.push(() => cal.setAlwaysHalfDay(nextProps.alwaysHalfDay, false));
        if (nextProps.contextMenuItems != this.props.contextMenuItems) ops.push(() => cal.setContextMenuItems(nextProps.contextMenuItems, false));
        if (nextProps.customDayRenderer != this.props.customDayRenderer) ops.push(() => cal.setCustomDayRenderer(nextProps.customDayRenderer, false));
        if (nextProps.customDataSourceRenderer != this.props.customDataSourceRenderer) ops.push(() => cal.setCustomDataSourceRenderer(nextProps.customDataSourceRenderer, false));
        if (nextProps.dataSource != this.props.dataSource) ops.push(() => cal.setDataSource(nextProps.dataSource, false));
        if (nextProps.disabledDays != this.props.disabledDays) ops.push(() => cal.setDisabledDays(nextProps.disabledDays, false));
        if (nextProps.disabledWeekDays != this.props.disabledWeekDays) ops.push(() => cal.setDisabledWeekDays(nextProps.disabledWeekDays, false));
        if (nextProps.displayDisabledDataSource != this.props.displayDisabledDataSource) ops.push(() => cal.setDisplayDisabledDataSource(nextProps.displayDisabledDataSource, false));
        if (nextProps.displayHeader != this.props.displayHeader) ops.push(() => cal.setDisplayHeader(nextProps.displayHeader, false));
        if (nextProps.displayWeekNumber != this.props.displayWeekNumber) ops.push(() => cal.setDisplayWeekNumber(nextProps.displayWeekNumber, false));
        if (nextProps.enableContextMenu != this.props.enableContextMenu) ops.push(() => cal.setEnableContextMenu(nextProps.enableContextMenu, false));
        if (nextProps.enableRangeSelection != this.props.enableRangeSelection) ops.push(() => cal.setEnableRangeSelection(nextProps.enableRangeSelection, false));
        if (nextProps.hiddenWeekDays != this.props.hiddenWeekDays) ops.push(() => cal.setHiddenWeekDays(nextProps.hiddenWeekDays, false));
        if (nextProps.language != this.props.language) ops.push(() => cal.setLanguage(nextProps.language, false));
        if (nextProps.maxDate != this.props.maxDate) ops.push(() => cal.setMaxDate(nextProps.maxDate, false));
        if (nextProps.minDate != this.props.minDate) ops.push(() => cal.setMinDate(nextProps.minDate, false));
        if (nextProps.roundRangeLimits != this.props.roundRangeLimits) ops.push(() => cal.setRoundRangeLimits(nextProps.roundRangeLimits, false));
        if (nextProps.selectRange != this.props.selectRange) ops.push(() => cal.setSelectRange(nextProps.selectRange, false));
        if (nextProps.style != this.props.style) ops.push(() => cal.setStyle(nextProps.style, false));
        if (nextProps.weekStart != this.props.weekStart) ops.push(() => cal.setWeekStart(nextProps.weekStart, false));
        if (nextProps.year != this.props.year) ops.push(() => cal.setYear(nextProps.year));

        // Events
        if (nextProps.onDayClick != this.props.onDayClick) this.updateEvent('clickDay', this.props.onDayClick, nextProps.onDayClick);
        if (nextProps.onDayContextMenu != this.props.onDayContextMenu) this.updateEvent('dayContextMenu', this.props.onDayContextMenu, nextProps.onDayContextMenu);
        if (nextProps.onDayHover != this.props.onDayHover) this.updateEvent('mouseOnDay', this.props.onDayHover, nextProps.onDayHover);
        if (nextProps.onDayLeave != this.props.onDayLeave) this.updateEvent('mouseOutDay', this.props.onDayLeave, nextProps.onDayLeave);
        if (nextProps.onRenderEnd != this.props.onRenderEnd) this.updateEvent('renderEnd', this.props.onRenderEnd, nextProps.onRenderEnd);
        if (nextProps.onRangeSelected != this.props.onRangeSelected) this.updateEvent('selectRange', this.props.onRangeSelected, nextProps.onRangeSelected);
        if (nextProps.onYearChanged != this.props.onYearChanged) this.updateEvent('yearChanged', this.props.onYearChanged, nextProps.onYearChanged);

        if (ops.length > 0) {
            ops.forEach(op => op());

            if (nextProps.year == this.props.year) {
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
import React from "react";
import PropTypes from 'prop-types';
import JsCalendar from "../node_modules/js-year-calendar/dist/js-year-calendar.js";

export default class Calendar extends React.Component {
    static propsypes = {
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
            startYear: this.props.year != null ? this.props.year : this.props.defaultYear,

            // Events
            clickDay: this.props.onDayClick,
            dayContextMenu: this.props.onDayContextMenu,
            mouseOnDay: this.props.onDayEnter,
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
        if (nextProps.loadingTemplate != this.props.loadingTemplate) ops.push(() => cal.setLoadingTemplate(nextProps.loadingTemplate, false));
        if (nextProps.maxDate != this.props.maxDate) ops.push(() => cal.setMaxDate(nextProps.maxDate, false));
        if (nextProps.minDate != this.props.minDate) ops.push(() => cal.setMinDate(nextProps.minDate, false));
        if (nextProps.roundRangeLimits != this.props.roundRangeLimits) ops.push(() => cal.setRoundRangeLimits(nextProps.roundRangeLimits, false));
        if (nextProps.style != this.props.style) ops.push(() => cal.setStyle(nextProps.style, false));
        if (nextProps.weekStart != this.props.weekStart) ops.push(() => cal.setWeekStart(nextProps.weekStart, false));
        if (nextProps.year != this.props.year) ops.push(() => cal.setYear(nextProps.year));

        // Events
        if (nextProps.onDayClick != this.props.onDayClick) this.updateEvent('clickDay', this.props.onDayClick, nextProps.onDayClick);
        if (nextProps.onDayContextMenu != this.props.onDayContextMenu) this.updateEvent('dayContextMenu', this.props.onDayContextMenu, nextProps.onDayContextMenu);
        if (nextProps.onDayEnter != this.props.onDayEnter) this.updateEvent('mouseOnDay', this.props.onDayEnter, nextProps.onDayEnter);
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
import React from "react";
import JsCalendar from "../node_modules/js-year-calendar/dist/js-year-calendar.js";

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
    }

    componentDidMount() {
        this.JsCalendar = new JsCalendar(this.container);
    }

    render() {
        return (
            <div ref={elt => this.container = elt}></div>
        );
    }
}
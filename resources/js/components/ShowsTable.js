import React, { Component } from "react";
import ReactDOM from "react-dom";
import shows from "../../../public/resources/shows.json";
//hello world
const showsTableContainer = {
    backgroundColor: "rgba(0,0,0,.8)",
    border: "1px solid #dddddd",
    borderRadius: "2px"
};

const tableRow = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    borderTop: ".1px solid white",
    borderBottom: ".1px solid white"
};
const tableRowHeader = {
    fontSize: "16px",
    fontWieght: "800"
};
const tableItem = {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "15px",
    color: "white"
};

export default class ShowsTable extends Component {
    constructor(props) {
        super(props);
        this.state = { shows: shows.shows };
    }

    render() {
        console.log(this.state.shows)
        return ( <
            div style = { showsTableContainer }
            className = "row justify-content-center shows-table" >
            <
            div style = {
                {...tableRow, ...tableRowHeader } } >
            <
            p style = { tableItem } > VENUE < /p> <
            p style = { tableItem } > DATE < /p> <
            p style = { tableItem } > TIME < /p> <
            p style = { tableItem } > COVER < /p> <
            /div> {
                this.state.shows.map(show => {
                    return ( <
                        div style = { tableRow } >
                        <
                        p style = { tableItem } > { show.name } < /p> <
                        p style = { tableItem } > { show.date } < /p> <
                        p style = { tableItem } > { show.time } < /p> <
                        p style = { tableItem } > { show.price } < /p> <
                        /div>
                    );
                })
            } <
            /div>
        );
    }
}

if (document.getElementById("shows-table")) {
    ReactDOM.render( < ShowsTable / > , document.getElementById("shows-table"));
}

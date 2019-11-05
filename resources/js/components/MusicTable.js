import React, { Component } from "react";
import ReactDOM from "react-dom";
import MusicPlayer from "react-responsive-music-player";

import playlist from "../../../public/resources/playlist.json";

const playlistTableContainer = {
    backgroundColor: "rgba(0,0,0,.8)",
    padding: "50px",
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
const playlistStyle = {
	color: "white",
};

export default class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = { playlist: playlist.playlist };
    }

    render() {
        console.log(playlist);
        return (
            <div
                style={playlistTableContainer}
                className="row justify-content-center shows-table"
            >
                <MusicPlayer style={playlistStyle} mode={'vertical'} btnColor={"#ddd"} playlist={this.state.playlist} />
            </div>
        );
    }
}

if (document.getElementById("music-table")) {
    ReactDOM.render(<MusicTable />, document.getElementById("music-table"));
}

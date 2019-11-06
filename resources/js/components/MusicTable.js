import React, { Component } from "react";
import ReactDOM from "react-dom";
import MusicPlayer from "react-responsive-music-player";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

import playlist from "../../../public/resources/playlist.json";

export default class MusicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                audioLists: playlist.audioLists,
                mode: "full",
                showThemeSwitch: false,
                glassBg: true,
                remove: false,
                panelTitle: "Desolate Earth",
                autoPlay: false,
                preload: true,
                defaultPlayMode: "orderLoop",
                defaultPosition: { bottom: 0, right: 0 }
            }
        };
    }

    render() {
        console.log(playlist);
        return (
            <div className="row justify-content-center shows-table">
                <ReactJkMusicPlayer {...this.state.options} />
            </div>
        );
    }
}

if (document.getElementById("music-table")) {
    ReactDOM.render(<MusicTable />, document.getElementById("music-table"));
}

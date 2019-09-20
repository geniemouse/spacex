import React from "react";

import { formatDate } from "../../../utils.js";

import "./LaunchDataItem.css";

function LaunchDataItem(props) {
    const { flight_number, launch_date_utc, mission_name, rocket_name } = props;

    return (
        <li>
            <span className="flight-number">#{flight_number}</span>
            <h2 className="mission-name">{mission_name}</h2>
            <h3 className="rocket-name">
                <span className="visually-hidden">Rocket name</span>
                {rocket_name}
            </h3>
            <p className="launch-date">
                <time dateTime={launch_date_utc}>{formatDate(launch_date_utc)}</time>
            </p>
        </li>
    );
}

export default LaunchDataItem;

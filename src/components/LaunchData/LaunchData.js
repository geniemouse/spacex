import React, { Fragment } from "react";

import LaunchDataItem from "./LaunchDataItem/LaunchDataItem";

import "./LaunchData.css";

function LaunchData(props) {
    const { byYear, data, sortDescending } = props;

    const filteredData = data.filter((launch) => {
        if (byYear === "none") {
            return true;
        }
        return launch.launch_year === byYear;
    });

    // sortDescending will just reverse our filtered array order (not cloning,
    // as it is already copied from data via filter method)
    // @note: If we couldn't trust the data being delivered in chronological
    // order, the more robust reverse would be to sort on the dateTime key
    if (sortDescending) {
        filteredData.reverse();
    }

    const messageOutput = (
        <p className="data-message">
            {data.length ? `There are no results for ${byYear}.` : "Retrieving launch data..."}
        </p>
    );

    const outputList = (
        <ul className="launch-data">
            {filteredData.map((launch) => (
                <LaunchDataItem
                    key={`${launch.flight_number}-${launch.mission_name.replace(/\s/g, "-")}`}
                    {...launch}
                />
            ))}
        </ul>
    );

    return <Fragment>{filteredData.length ? outputList : messageOutput}</Fragment>;
}

export default LaunchData;

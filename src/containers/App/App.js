import React, { Component } from "react";
import axios from "axios";

import { deDuplicateArray, outputRange } from "../../utils.js";

import HeroImage from "../../components/HeroImage/HeroImage";
import Icon from "../../components/UI/Icon/Icon";
import LaunchData from "../../components/LaunchData/LaunchData";
import ListControls from "../../components/ListControls/ListControls";

import logo from "../../assets/img/spacex-logo.png";
import "./App.css";

const baseUrl = "https://api.spacexdata.com/v3/launches";
const launchQueryFilter = ["flight_number", "mission_name", "launch_date_utc", "launch_year", "rocket/rocket_name"];

function getYears(data) {
    return data.map((datum) => datum.launch_year);
}

class App extends Component {
    state = {
        filterBySortDescending: false,
        filterByYear: "none",
        launchData: [],
        loading: true
    };

    constructor(props) {
        super(props);
        this.handleGetData();
    }

    handleGetData = () => {
        // @improvements:
        // -- Store (local storage/serviceWorker) any previously collected data
        //      to render on load; update with latest response, when it comes back
        // -- With storage, could potentially refine the data filter to only
        //      collect only new data, i.e. added launch dates

        axios
            .get(baseUrl, {
                params: {
                    filter: launchQueryFilter.join(","),
                    timestamp: new Date().getTime()
                    // ^^ Demo quick cache-bust to ensure we reach out to the server
                    // See comments above for proposed refinements to improve on this
                }
            })
            .then((response) => {
                const responseData = response.data;
                const launches = responseData.reduce((accumulator, launchItem) => {
                    // We are only interested on the rocket_name, not the rest
                    // of the rocket object, so we'll flatten launch data into
                    // one-dimensional object
                    const launch = {
                        ...launchItem,
                        rocket_name: launchItem.rocket.rocket_name
                    };
                    // Remove unused rocket data
                    delete launch.rocket;
                    return accumulator.concat(launch);
                }, []);

                this.setState({
                    launchData: launches,
                    loading: false
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    loading: false
                });
            });
    };

    handleRefreshData = () => {
        // Resetting initial state, so refresh action is clear update
        this.setState({
            launchData: [],
            loading: true
        });

        this.handleGetData();
    };

    handleChangedYear = (event) => {
        this.setState({
            filterByYear: event.target.value
        });
    };

    handleChangedSort = (event) => {
        this.setState({
            filterBySortDescending: event.target.checked
        });
    };

    render() {
        const { launchData, filterBySortDescending, filterByYear } = this.state;

        const allYears = getYears(launchData);
        const uniqueYears = deDuplicateArray(allYears);
        const years = outputRange(uniqueYears);

        const buttonClasses = ["button", "button--rounded"];
        if (!launchData.length) {
            buttonClasses.push("button--disabled");
        }

        return (
            <div className="App">
                <a className="skip-link" href="#main">
                    Skip to main content
                </a>

                <header className="constrain-width">
                    {/* @improvement: potential component if re-used more than once */}
                    <h1 className="logo">
                        <img src={logo} alt="" />
                        <span className="visually-hidden">SpaceX</span> Launches
                    </h1>

                    <p className="refresh-control">
                        {/* @improvement: potential component if re-used more than once */}
                        <button
                            className={buttonClasses.join(" ")}
                            disabled={!launchData.length}
                            onClick={this.handleRefreshData}>
                            Reload Data
                            <Icon type="refresh" />
                        </button>
                    </p>
                </header>

                <main id="main" className="main-layout constrain-width">
                    <ListControls
                        changedYear={this.handleChangedYear}
                        changedSort={this.handleChangedSort}
                        disabled={!launchData.length}
                        sortDescending={filterBySortDescending}
                        years={years}
                    />
                    <LaunchData data={launchData} byYear={filterByYear} sortDescending={filterBySortDescending} />
                    <HeroImage />
                </main>
            </div>
        );
    }
}

export default App;

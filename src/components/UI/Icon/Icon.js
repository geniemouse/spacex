import React, { Fragment } from "react";

import "./Icon.css";

function Icon(props) {
    // @todo: add propType checking to ensure we get a `props.type` passed-in
    // @improvement: if there were more SVG icons and they were used in more places,
    // this component could be turned into a sprite-referencing thing.

    const classes = ["icon"];
    let svgIcon = null;

    switch (props.type.toLowerCase()) {
        case "arrowdown":
            classes.push("icon--arrowdown");
            svgIcon = (
                <Fragment>
                    <path d="M7 10l5 5 5-5z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </Fragment>
            );
            break;

        case "refresh":
            classes.push("icon--refresh");
            svgIcon = (
                <Fragment>
                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </Fragment>
            );
            break;

        case "sort":
            classes.push("icon--sort");
            svgIcon = (
                <Fragment>
                    <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </Fragment>
            );
            break;

        default:
            return svgIcon;
    }

    return (
        <svg className={classes.join(" ")} viewBox="0 0 24 24" aria-hidden="true">
            {svgIcon}
        </svg>
    );
}

export default Icon;

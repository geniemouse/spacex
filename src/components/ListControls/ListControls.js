import React from "react";

import Icon from "../UI/Icon/Icon";

import "./ListControls.css";

function ListControls(props) {
    const { changedSort, changedYear, disabled, sortDescending, years } = props;

    const collectLabelClasses = ["button"];
    if (disabled) {
        collectLabelClasses.push("button--disabled");
    }

    const labelClasses = collectLabelClasses.join(" ");

    return (
        <form className="list-controls" action="/">
            {/* Should look into adding a form onSubmit callback too, so return key works... */}
            <p className="select-wrapper">
                <label className={labelClasses} htmlFor="filter_year">
                    <span className="visually-hidden">Filter by year</span>
                    <select id="filter_year" onChange={changedYear} disabled={disabled}>
                        <option value="none">Filter by Year</option>
                        {(years || []).map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                    <Icon type="arrowdown" />
                </label>
            </p>

            <p className="sort-toggle">
                <input
                    id="filter_sort_descending"
                    name="filter_sort_descending"
                    type="checkbox"
                    onChange={changedSort}
                    disabled={disabled}
                />
                <label className={labelClasses} htmlFor="filter_sort_descending">
                    <span className="label-text">{sortDescending ? "Sort Ascending" : "Sort Descending"}</span>
                    <Icon type="sort" />
                </label>
            </p>
        </form>
    );
}

export default ListControls;

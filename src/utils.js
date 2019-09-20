/**
 * Deduplicate an array
 * @param  {Array} arrayData
 * @return {Array}
 */
export function deDuplicateArray(arrayData) {
    return arrayData.reduce((memo, item) => {
        if (!memo.includes(item)) {
            memo.push(item);
        }
        return memo;
    }, []);
}

/**
 * Retrieve the minimum value from an array
 * @param  {Array} values
 * @return {Number}
 */
export function minValue(values) {
    if (!Array.isArray(values) || !values.length) {
        return;
    }
    return Math.min(...values);
}

/**
 * Retrieve the maximum value from an array
 * @param  {Array} values
 * @return {Number}
 */
export function maxValue(values) {
    if (!Array.isArray(values) || !values.length) {
        return;
    }
    return Math.max(...values);
}

/**
 * Create an array of sequential numbers within a range; with optional incremental jump
 * @param  {Array} values       -- An array of numbers or items that coerce to numbers
 * @param  {Number} increment   -- Optional number to increment by
 * @return {Array}
 */
export function outputRange(values, increment = 1) {
    const min = minValue(values);
    const max = maxValue(values);
    const temp = [];

    for (let n = min; n <= max; n += increment) {
        temp.push(n);
    }

    return temp;
}

/**
 * Output date of month with suffix "st", "nd", "rd" or "th", as appropriate
 * @param  {String} dateString -- The date portion of datetime, e.g. 24 of date 24/03/2006
 * @return {String}
 */
export function getDateSuffix(dateString) {
    const unitStr = dateString.slice(-1);
    switch (unitStr) {
        case "1":
            return `${dateString}st`;
        case "2":
            return `${dateString}nd`;
        case "3":
            return `${dateString}rd`;
        default:
            return `${dateString}th`;
    }
}

/**
 * Format a date string as "DDth MMM YYY"
 * e.g. "24th Mar 2006"
 * @param  {String} dateInput
 * @return {String}
 */
export function formatDate(dateInput) {
    const dateSettings = { day: "numeric", month: "short", year: "numeric" };
    // en-GB output: "24 Mar 2006"
    const date = new Date(dateInput);

    if (Number.isNaN(date.getTime())) {
        return null;
    }

    // Hard-coding `en-GB` locale ensures day of month is first item and
    // three-letter month is automatically created; good enough for demo
    // @note: Working with multiple locales would require more dateString
    // processing than this
    const dateParts = date.toLocaleDateString("en-GB", dateSettings).split(" ");
    dateParts[0] = getDateSuffix(dateParts[0]);
    return dateParts.join(" ");
}

function completeWeekObj(weekEnd){
    if (weekEnd.monday === undefined) {
        weekEnd.monday = 0;
    }
    if (weekEnd.tuesday === undefined) {
        weekEnd.tuesday = 0;
    }
    if (weekEnd.wednesday === undefined) {
        weekEnd.wednesday = 0;
    }
    if (weekEnd.thursday === undefined) {
        weekEnd.thursday = 0;
    }
    if (weekEnd.friday === undefined) {
        weekEnd.friday = 0;
    }
    if (weekEnd.saturday === undefined) {
        weekEnd.saturday = 0;
    }
    if (weekEnd.sunday === undefined) {
        weekEnd.sunday = 0;
    }

    return weekEnd;
}

module.exports = completeWeekObj;
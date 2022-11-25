function completeWeekHash(hash) {
    if (hash.monday === undefined) {
        hash.monday = 0;
    }
    if (hash.tuesday === undefined) {
        hash.tuesday = 0;
    }
    if (hash.wednesday === undefined) {
        hash.wednesday = 0;
    }
    if (hash.thursday === undefined) {
        hash.thursday = 0;
    }
    if (hash.friday === undefined) {
        hash.friday = 0;
    }
    if (hash.saturday === undefined) {
        hash.saturday = 0;
    }
    if (hash.sunday === undefined) {
        hash.sunday = 0;
    }

    return hash;
}

module.exports = completeWeekHash;
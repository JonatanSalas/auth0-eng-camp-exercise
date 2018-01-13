const opts = {
    blackList: false
};

module.exports.charCount = (str, char, { blackList = false } = opts) => {
    if (blackList && blackList.findIndex(it => it === char) !== -1) {
        return undefined;
    }

    return Array.from(str).reduce((acc, it) => (it === char ? acc + 1 : acc), 0);
};

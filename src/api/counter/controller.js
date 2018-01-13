const StringUtils = require("../../utils");
const Logger = require("../../logger");

const opts = {
    especials: {
        á: "a"
    },
    replacements: {
        ä: "a"
    }
};

module.exports.getAllCharCount = (str, options = opts) => {
    const lowerCaseStr = str.trim().toLowerCase();
    const { replacements, especials } = options;

    Logger.log("> Controller - Start char count with for string: ", lowerCaseStr);

    const charCount = Array.from(lowerCaseStr)
        .map(char => replacements[char] !== undefined ? replacements[char] : char)
        .reduce((count, char, idx, strArr) => {
            count[char] = StringUtils.charCount(strArr, char, {
                blackList: ["?", "!", "á"]
            });

            return count;
        }, {});

    Object.keys(especials).forEach(key => {
        if (lowerCaseStr.includes(key)) {
            charCount[especials[key]] = charCount[especials[key]] + StringUtils.charCount(lowerCaseStr, key);
        }
    });

    Logger.log("> Controller - Finish char count with following results ", charCount);

    return charCount;
};

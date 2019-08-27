function equalChar(sourse, firstChar, secondChar) {

    if (sourse === null || sourse === undefined || typeof sourse !== `string`) {
        throw new StringError(`Invalid data`);
    }
    if (typeof firstChar !== `string` || typeof secondChar !== `string`) {
        throw new StringError(`Invalid data char`);
    }

    let rez = false;
    let index = 0;
    let countFirst = 0;
    let countSecond = 0;

    do {
        index = sourse.indexOf(firstChar, index + 1);
        if (index !== -1) {
            ++countFirst;
        }
    } while (index !== -1);
    index = 0;
    do {
        index = sourse.indexOf(secondChar, index + 1);
        if (index !== -1) {
            ++countSecond;
        }
    } while (index !== -1);

    if (countFirst === countSecond)
        return true;
    return false;


};


function truncate(str, maxLenght) {
    if (typeof str !== `string`)
        return new Error(`Invalid arguments`);
    if (maxLenght <= 0)
        return new Error(`Bad maxLenght`);
    if (str.length <= maxLenght)
        return str;

    str = str.substr(0, maxLenght);
    str = str.concat(`...`);

    return str;
};


function removeStr(str, strSearch) {
    let startIndex = 0;
    let endIndex = 0;
    let rezStr = ``;
    while (endIndex !== -1) {
        endIndex = str.indexOf(strSearch, startIndex);

        rezStr += str.slice(startIndex, endIndex);
        startIndex = endIndex + strSearch.length;
    }

    if (str.slice(str.length - strSearch.length, str.length) !== strSearch) {
        if (rezStr[rezStr.length - 1] !== str[str.length - 1]) {
            rezStr += str[str.length - 1];
        }
    }

    return rezStr;
};










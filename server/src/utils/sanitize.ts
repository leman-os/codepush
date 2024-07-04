// https://github.com/mathiasbynens/he/blob/master/src/he.js#L316C6-L316C12
const regexEscape = /["&'<>`]/g;
const escapeMap = {
    '"': '&quot;',
    '&': '&amp;',
    "'": '&#x27;',
    '<': '&lt;',
    '>': '&gt;',
    '`': '&#x60;',
};

export function escapeHtml(text: string) {
    return text.replace(regexEscape, (match) => escapeMap[match]);
}

export function escapeObjectHtml(obj: Object) {
    return Object.keys(obj).reduce((result, key) => {
        if (typeof obj[key] === 'object') {
            result[key] = escapeObjectHtml(obj[key]);
        } else {
            result[key] = escapeHtml(obj[key]);
        }
        return result;
    }, {});
}

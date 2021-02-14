function type(text, element, timeout = 100, cb = () => {}) {
    if (typeof element === 'string') {
        element = document.querySelector(element);
    }

    addChar(element, text, 0, cb, timeout);
}

function addChar(element, text, cursor, cb, timeout) {
    if (cursor >= text.length) {
        cb();
        return;
    }
    element.innerText += text[cursor];
    setTimeout(() => addChar(element, text, cursor + 1, cb, timeout), timeout);
}

export { type };
export const debounce = (
    func,
    waitFor,
) => {
    let timeout = null;

    const debounced = (...args) => {
        if (timeout !== null) {
            clearTimeout(timeout);
            timeout = null;
        }
        timeout = setTimeout(() => func(...args), waitFor);
    };

    return debounced;
};

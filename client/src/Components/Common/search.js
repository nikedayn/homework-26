export const searchFunction = (query, text) => {
    const reg = new RegExp(query, 'i');
    return reg.test(text);
}
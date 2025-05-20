const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('./src/stringUtils');


describe('reverseString', () => {
    test('inverte una stringa normale', () => {
        expect(reverseString('ciao')).toBe('oaic');
    });
    test('inverte una stringa vuota', () => {
        expect(reverseString('')).toBe('');
    });
    test('inverte una stringa con spazi', () => {
        expect(reverseString('a b')).toBe('b a');
    });
});

describe('isPalindrome', () => {
    test('riconosce una stringa palindroma semplice', () => {
        expect(isPalindrome('anna')).toBe(true);
    });
    test('riconosce una stringa palindroma con maiuscole', () => {
        expect(isPalindrome('Anna')).toBe(true);
    });
    test('riconosce una stringa palindroma con spazi', () => {
        expect(isPalindrome('i topi non avevano nipoti')).toBe(true);
    });
    test('riconosce una stringa non palindroma', () => {
        expect(isPalindrome('ciao')).toBe(false);
    });
    test('gestisce stringa vuota come palindroma', () => {
        expect(isPalindrome('')).toBe(true);
    });
});

describe('truncateString', () => {
    test('tronca una stringa più lunga del massimo', () => {
        expect(truncateString('abcdef', 4)).toBe('abcd...');
    });
    test('non tronca se la stringa è corta', () => {
        expect(truncateString('abc', 5)).toBe('abc');
    });
    test('non tronca se la lunghezza è uguale', () => {
        expect(truncateString('abc', 3)).toBe('abc');
    });
    test('tronca stringa vuota', () => {
        expect(truncateString('', 2)).toBe('');
    });
});

describe('countCharacters', () => {
    test('conta i caratteri di una stringa', () => {
        expect(countCharacters('aab')).toEqual({ a: 2, b: 1 });
    });
    test('gestisce stringa vuota', () => {
        expect(countCharacters('')).toEqual({});
    });
    test('conta caratteri speciali e spazi', () => {
        expect(countCharacters('a a!')).toEqual({ a: 2, ' ': 1, '!': 1 });
    });
});
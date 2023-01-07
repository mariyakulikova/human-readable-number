module.exports = function toReadable (number) {
    const toTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const [third = 0, second = 0, first = 0] = number
        .toString()
        .split('')
        .map(n => parseInt(n, 10))
        .reverse();

    const result = [];

    if (number === 0) {
        return 'zero';
    }

    if (number <= 19) {
        return toTwenty[number];
    }

    if (first > 0) {
        result.push(toTwenty[first] + ' hundred');
    }

    if (second === 1) {
        result.push(toTwenty[second * 10 + third]);
        return result.join(' ');
    }

    if (second > 1 && second < 20) {
        result.push(tens[second]);
    }

    if (third > 0 && third < 20) {
        result.push(toTwenty[third]);
    }

    return result.join(' ');
}

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const matchers = regexData.exec('2022-01-01');

console.table(matchers);
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate (['Fabian', 'Andres', 'David', 'Ana', 'Ulises', 'Lina']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
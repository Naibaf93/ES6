var lastName = 'Huertas'; // declaracion y asignacion
lastName = 'Suarez'; // reasignacion
console.log(lastName);

let fruit = 'apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'dog';
animal = 'cat'; // const no deja reasignar asi que mostrara un error
console.log(animal);

/* Arrow functions */

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
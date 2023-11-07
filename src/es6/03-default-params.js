// Forma anterior

function newUser(name, age, country) {
    var name = name || 'Fabian';
    var age = age || 30;
    var country = country || 'CO';

     console.log(name, age, country);
}

newUser();

newUser('David', 15, 'MX');

// Con ES6

function newAdmin(name = 'Fabian', age = 30, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');
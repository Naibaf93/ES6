// enahced object literals

/* Antes */
function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}

/* Ahora */

function newUsers(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUsers("miloh", 30, "CO", 1));

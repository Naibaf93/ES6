    const anotherFuction = () => {
        return new Promise ((resolve, reject) => {
            if (false) {
                resolve('Hey!!');
            } else {
                reject('Megh!!');
            }
        })
    }

    anotherFuction()
        .then(Response => console.log(Response))
        .catch(err => console.log(err)); 
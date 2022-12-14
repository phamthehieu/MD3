let money = 0;
const buyCar = (car: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve(`Do buy ${car}`)
            } else {
                reject(`Ban Ngheo VV`)
            }
        }, 100)
    })
}

money = 1000

const promise = buyCar('Vin fast').then(value => {
    console.log(value)
}, error => {
    console.log(error)
})
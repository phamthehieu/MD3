async function getDivision(a, b) {
    if (b !== 0) return (a / b);
    return new Error("Math error");
}

//use Async Await
async function f() {
    try {
        let result = await getDivision(2, 3);
        console.log(result)
    } catch (error) {
        console.log(error);
    }
}

f();
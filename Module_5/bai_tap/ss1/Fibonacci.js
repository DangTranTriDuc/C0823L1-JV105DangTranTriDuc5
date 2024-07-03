const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    } else {
        return (fibonacci(n - 1) + fibonacci(n - 2));
    }
};

let n = 9
for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
}

let sum = 0;
for (let i = 0; i < n; i++) {
    sum += fibonacci(i);
}
console.log("Tổng các số fibonacci là:", sum);
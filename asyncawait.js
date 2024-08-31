// `async` is a keyword used to create an asynchronous function.
// An async function always returns a promise.
// The async/await combo is used to handle promises more easily.
async function getData() {
    return "shagun";
}

const dataPromise = getData();
// The console will return a promise and wrap the returned value in that promise.
console.log(dataPromise);
dataPromise.then(res => console.log(res));

// `await` is a keyword that can only be used inside an async function.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 is resolved");
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 is resolved");
    }, 10000);
});

async function handlePromise() {
    // The JavaScript engine waits for the promise to resolve because of the await keyword.
    const val1 = await p1;
    console.log("P1");
    console.log(val1);

    const val2 = await p2;
    console.log("P2");
    console.log(val2);
}

handlePromise();

// Fetch API with async/await
async function fetchApi() {
    try {
        const data = await fetch("https://api.github.com/users/shagunkohlii");
        // `data.json()` returns a promise, so we need to use `await` to handle it.
        const datavalue = await data.json();
        console.log(datavalue);
    }
    catch (err) {
        console.log(err)
    }
}

fetchApi();

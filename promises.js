// --A promise is an object returned by an asynchronous function, which represents the current state of the operation

// --A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and allows you to handle the result when it's ready. It acts as a placeholder for a value that will be available in the future, enabling you to write cleaner, more manageable asynchronous code.

const api = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

api.then(response => response.json())
    .then((data) => {
        // const dataName = data[11].name;
        const p = document.getElementById("apidata")
        p.innerText = JSON.stringify(data)

    })
    .then(() => console.log("succesfully fetched api.."))
    .catch(err => console.error(`not able to fetch api ${err}`))



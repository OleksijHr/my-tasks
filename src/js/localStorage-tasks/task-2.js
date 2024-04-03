const form = document.querySelector("#task-1-form")
const inputKey = document.querySelector("#task-1-key");
const inputValue = document.querySelector("#task-1-value");

form.addEventListener("submit", onSubmit);

function onSubmit(event){
    event.preventDefault();

    localStorage.setItem(inputKey.value, inputValue.value);
}

// Task 2
const output = document.querySelector("#task-2-output");


const allStorage = [];

for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    // console.log("key", key);
    const value = localStorage.getItem(key);
    // console.log("value", value);
    allStorage.push(`${key} --- ${value}`);
}

function createMurkup() {
    return allStorage
        .map((element) => {
            return `<p>${element}</p>`;
        })
        .join('');
}

output.insertAdjacentHTML("beforeend", createMurkup(allStorage));


















// const keyValuePairs = [];

// for (let i = 0; i < localStorage.length; i++){
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     keyValuePairs.push(`${key} --- ${value}`);

// }

// function createMurkup() {
//     return keyValuePairs
//         .map((i) => {
//             return `<p>${i}</p>`
//     }).join('');
// };


// output.insertAdjacentHTML("beforeend", createMurkup(keyValuePairs));



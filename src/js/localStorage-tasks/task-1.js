const form = document.querySelector("#task-1-form")
const inputKey = document.querySelector("#task-1-key");
const inputValue = document.querySelector("#task-1-value");
const output = document.querySelector("#task-1-output");

form.addEventListener("submit", onSubmit);

function onSubmit(event){
    event.preventDefault();

    localStorage.setItem(inputKey.value, inputValue.value);

    output.textContent = `Saved key-value: ${inputKey.value} --- ${inputValue.value}`;
}

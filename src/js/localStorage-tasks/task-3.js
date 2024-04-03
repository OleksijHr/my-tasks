const inputKey = document.querySelector("#task-3-key");
const inputValue = document.querySelector("#task-3-value");
const updateBtn = document.querySelector("#task-3-update-button");
const output = document.querySelector("#task-3-output");


updateBtn.addEventListener("click", handleClick);

function handleClick() {
    localStorage.setItem(inputKey.value, inputValue.value);
    output.textContent = `Update value for key "${inputKey.value}" to chenge "${inputValue.value}"`;
};
import {decrypt} from "./decrypt.js";
import {encrypt} from "./encrypt.js";

const btnEncrypt = document.querySelector("#btn-encrypt");
const btnDecrypt = document.querySelector("#btn-decrypt");
const btnCopy = document.querySelector("#btn-copy");

const textInput = document.querySelector(".textarea");

const resultContainer = document.querySelector(".result");
const noResultContainer = document.querySelector(".no-reslt");

textInput.addEventListener("input", (e) => {
    textInput.value = normalizeString(e.target.value);
});


const copy = document.querySelector(".copy");

let copyTimeOut

export function showCopy(msg) {
    copy.innerText = `${msg}`;
    copy.classList.add("active");
    clearTimeout(copyTimeOut);
    copyTimeOut = setTimeout(hideCopy, 2500);
}

export function hideCopy() {
    copy.classList.remove("active");
  }
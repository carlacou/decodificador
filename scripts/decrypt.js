import { patterns } from "./patterns.js";

export function decrypt(text) {
    let decrypt = text.toLoewrCase()
    patterns.forEach(p => {
        decrypt = decrypt.replaceAll(p.out, p.in)
    })
    return decrypt
}
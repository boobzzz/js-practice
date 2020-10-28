const abc = 'abcdefghijklmnopqrstuvwxyz'
const shift = 10
const toBeEncrypted = 'do or do not there is no try'

const toNumber = (str) => {
    return str.split('').map((val, i) =>
        (val !== ' ')
        ? (str.charCodeAt(i) - 'a'.charCodeAt(0))
        : (val = ' ')
    )
}

const toString = (arr) => {
    return arr.map(val =>
        (val !== ' ')
        ? (String.fromCharCode('a'.charCodeAt(0) + val))
        : (val = ' ')
    )
}

const encrypt = (str, shift) => {
    let unshifted = toNumber(str)
    let shifted = unshifted.map(val =>
        (val !== ' ')
        ? ((val + shift + abc.length) % abc.length)
        : (val = ' ')
    )

    return toString(shifted).join('')
}

let encryptedStr = encrypt(toBeEncrypted, shift)
console.log(encryptedStr)

const decrypt = (str) => {
    return encrypt(str, -shift)
}

decrypt(encryptedStr)

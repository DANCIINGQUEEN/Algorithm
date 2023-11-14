function solution(phone_number) {
    // return new Array(phone_number.length-4).fill('*').join``.concat(phone_number.slice(-4))
    return '*'.repeat(phone_number.length-4).concat(phone_number.slice(-4))
}
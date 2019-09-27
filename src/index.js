export function toLowerCase (word) {
  if (Object.prototype.toString.call(word) === '[object String]') {
    return word.toLowerCase()
  }
  return word
}
export const isValueValid = value =>
  value.replace(/^[\s]+|\s{2,}|\s+$/g, '').length < 3

export function generateRandomId() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )
}

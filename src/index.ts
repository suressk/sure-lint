// const isNull = (val: unknown): val is null => {
//
//            return         val === null
// }

/* ⬆️ after lint-staged, it will be format like this ⬇️ */

const isNull = (val: unknown): val is null => {
  return val === null
}

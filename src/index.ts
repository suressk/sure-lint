// const isNull = (val: unknown): val is null => {
//
//            return         val === null
// }

/* ⬆️ after lint-staged, it will be format like this ⬇️ */

/* unused-vars will error */
// const isNull = (val: unknown): val is null => {
//   return val === null
// }

/* use '_' prefix to avoid eslint error */
const _isNull = (val: unknown): val is null => {
  return val === null
}

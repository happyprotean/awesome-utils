/**
 * useful function to be shared 
 */

/**
 * typeof null -> object
 * typeof undefined -> undefined
 * typeof {} -> object
 * typeof [] -> object
 * typeof () => {} -> function
 * typeof function(){} -> function
 * typeof '' -> string
 * typeof 1 -> number
 * typeof Symbol(1) -> symbol
 */
export function isArray(value: any): boolean {
  return Array.isArray(value)
}

export function isObject(value: any): boolean {
  return typeof value === 'object' && !isNull(value) && !isArray(value)
}

export function isNull(value: any): boolean {
  return value === null
}

export function isUndefined(value: any): boolean {
  return value === undefined
}

export function isFunction(value: any): boolean {
  return typeof value === 'function'
}

import { isArray, isObject, isNull, isUndefined, isFunction } from "../utils";

describe('share function', () => {
  it('isArray', () => {
    expect(isArray(null)).toBe(false) 
    expect(isArray(undefined)).toBe(false) 
    expect(isArray({})).toBe(false) 
    expect(isArray([])).toBe(true) 
    expect(isArray(new Array())).toBe(true) 
    expect(isArray(() => {})).toBe(false) 
    expect(isArray(function(){})).toBe(false) 
    expect(isArray(1)).toBe(false) 
    expect(isArray('')).toBe(false) 
  })

  it('isObject', () => {
    expect(isObject(null)).toBe(false) 
    expect(isObject(undefined)).toBe(false) 
    expect(isObject({})).toBe(true) 
    expect(isObject([])).toBe(false) 
    expect(isObject(() => {})).toBe(false) 
    expect(isObject(function(){})).toBe(false) 
    expect(isObject(1)).toBe(false) 
    expect(isObject('')).toBe(false) 
  })

  it('isNull', () => {
    expect(isNull(null)).toBe(true) 
    expect(isNull(undefined)).toBe(false) 
    expect(isNull({})).toBe(false) 
    expect(isNull([])).toBe(false) 
    expect(isNull(new Array())).toBe(false) 
    expect(isNull(() => {})).toBe(false) 
    expect(isNull(function(){})).toBe(false) 
    expect(isNull(1)).toBe(false) 
    expect(isNull('')).toBe(false) 
  })
  
  it('isUndefined', () => {
    expect(isUndefined(null)).toBe(false) 
    expect(isUndefined(undefined)).toBe(true) 
    expect(isUndefined({})).toBe(false) 
    expect(isUndefined([])).toBe(false) 
    expect(isUndefined(new Array())).toBe(false) 
    expect(isUndefined(() => {})).toBe(false) 
    expect(isUndefined(function(){})).toBe(false) 
    expect(isUndefined(1)).toBe(false) 
    expect(isUndefined('')).toBe(false) 
  })

  it('isFuncion', () => {
    expect(isFunction(null)).toBe(false) 
    expect(isFunction(undefined)).toBe(false) 
    expect(isFunction({})).toBe(false) 
    expect(isFunction([])).toBe(false) 
    expect(isFunction(new Array())).toBe(false) 
    expect(isFunction(() => {})).toBe(true) 
    expect(isFunction(function(){})).toBe(true) 
    expect(isFunction(1)).toBe(false) 
    expect(isFunction('')).toBe(false) 
  })
})
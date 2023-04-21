import { isObject, isFunction } from './share'
export function myNew(ctor: Function) {
  
  const rtn_obj = Object.create(ctor.prototype)  // 构造实例对象，并以ctor的原型进行构建
  const params = Array.prototype.slice.call(arguments, 1)  // 获取构造函数的参数
  
  const instance = ctor.apply(rtn_obj, params) // 需要在rtn_obj上执行，因为函数返回值中可能会用到this
  if (isObject(instance) || isFunction(instance)) {
    return instance
  }

  return rtn_obj
}
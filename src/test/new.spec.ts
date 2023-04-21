// @ts-nocheck
import { myNew } from '../utils'

describe('new opeartor', () => {
  it('myNew without return', () => {
    function MyConstructor() {
      this.data = 'data';
    }
    
    MyConstructor.prototype.getData = function() {
      return this.data;
    }
    
    const instance_1 = myNew(MyConstructor)
    expect(instance_1.data).toBe('data')
    expect(instance_1.getData()).toBe('data')
    expect(instance_1.__proto__ === MyConstructor.prototype).toBe(true)
    
    const instance_2 = myNew(MyConstructor)
    instance_2.data = 'another data'
    expect(instance_2.data).toBe('another data')
    expect(instance_2.getData()).toBe('another data')
    expect(instance_1.__proto__ === instance_2.__proto__).toBe(true)
  })

  it('myNew with return', () => {
    function MyConstructor(foo) {
      this.data = 'data';
      return {
        foo,
        name: this.data,
      }
    }
    
    MyConstructor.prototype.getData = function() {
      return this.data;
    }
    MyConstructor.prototype.getFoo = function() {
      return this.foo;
    }
    
    const instance = new MyConstructor('foo')
    expect(instance.foo).toBe('foo')
    expect(instance.name).toBe('data')
    expect(() => instance.getData()).toThrowError()
    expect(() => instance.getFoo()).toThrowError()
  })
})
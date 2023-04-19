# new

## 不带return

- 使用new，得到一个新的Object实例
- 实例的方法this指向这个实例本身
- 每个实例的__proto__指向构造函数的原型对象

```js
function MyConstructor() {
  this.data = 'data';
}

MyConstructor.prototype.getData = function() {
  return this.data;
}

const instance_1 = new MyConstructor()
console.log(instance_1)
// MyConstructor {data: 'data'}
console.log(Object.prototype.toString.call(instance_1))
// [object Object]
console.log(instance_1.__proto__ === Object.prototype)
// true

const instance_2 = new MyConstructor()
instance_2.data = 'another data'
console.log(instance_1)
// MyConstructor { data: 'data' }
console.log(instance_2)
// MyConstructor { data: 'another data' }
console.log(instance_1.getData())
// data
console.log(instance_2.getData())
// another data
console.log(instance_1.__proto__ === instance_2.__proto__)
// true
```

## 带return

当return Object/Function/Array/Date/RegExp/Error的实例，new操作符得到的就是return的结果
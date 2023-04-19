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


function test1() {
  this.data = 'test1'
  return null
}

const t1 = new test1()
console.log(t1)
console.log(Object.prototype.toString.call(t1))
console.log(typeof null)
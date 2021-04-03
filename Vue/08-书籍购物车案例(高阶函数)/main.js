const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 88.00,
        count: 1
      },
      {
        id: 2,
        name: '《LINUX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《编程大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      }
    ]
  },
  computed: {
    sum() {
      return this.books.reduce((preValue, book) => preValue + book.price * book.count, 0);
    }
  },
  methods: {
    remove(index) {
      this.books.splice(index, 1);
    },
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      const count = this.books[index].count;
      this.books[index].count--;
    }
  },
  filters: {
    getPrice(price) {
      return "￥" + price.toFixed(2);
    }
  }
})
const arr = [30, 90, 178, 118, 99, 25, 49, 88, 103, 157];
//高阶函数 链式调用 箭头函数
// 需求：从arr中找出小于100的数字乘2再求和
//一般做法
let newArr = [];
for (let i of arr) {
  if (i < 100) {
    newArr.push(i)
  }
}
console.log(newArr);
let newArr1 = [];
for (let i of newArr) {
  newArr1.push(i * 2)
}
console.log(newArr1);
let total = 0;
for (let i of newArr1) {
  total += i;
}
console.log(total);
//函数式做法
const result = arr.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n)
console.log(result)
const app=new Vue({
  el:'#app',
  data:{
    books:[
      {
        id: 1,
        name:'《算法导论》',
        date: '2006-9',
        price: 88.00,
        count: 1
      },
      {
        id: 2,
        name:'《LINUX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name:'《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name:'《编程大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      }
    ]
  },
  computed:{
    sum(){
      let result=0;
      for (let book of this.books){
        result+=book.price*book.count;
      }
      return result;
    }
  },
  methods:{
    remove(index){
      this.books.splice(index,1);
    },
    increment(index){
      this.books[index].count++;
    },
    decrement(index){
      const count=this.books[index].count;
      this.books[index].count--;
    }
  },
  filters:{
    getPrice(price){
      return "￥" + price.toFixed(2);
    }
  }
})
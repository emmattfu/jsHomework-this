// this. Задачи
// задача № 1
const rectangle = {
  width: 20,
  height: 30,
  getSquare
};

function getSquare(){
    return this.width * this.height;
}

// задача № 2
const price = {
  price: 10,
  discount: '15%',
  getPrice,
  getPriceWithDiscount
};

function getPrice(){
    return this.price;
}

function getPriceWithDiscount() {
    return this.price * (100 - this.discount)/100;
}

// задача № 3
const user = {
    name: 'Abraham',
    getUserName: function () {
        return this.name;
    }
};

// задача № 4
const height = {
    height: 10,
    heightPlus
};

function heightPlus() {
    this.height += 1;
    return this
}

// задача № 5
const numerator = {
    value: 1,
    double,
    plusOne,
    minusOne
};

function double() {
    this.value *= 2;
    return this;
}

function plusOne() {
    this.value += 1;
    return this
}

function minusOne() {
    this.value -= 1;
    return this
}

// задача № 6
const user2 = {
    name: 'Abraham'
},
    otherUser = {
        name: 'John',
        getName: function(){return this.name;}
    };

user2.getName; // undefined, у объекта user2 нет метода getName()
user2.getName = otherUser.getName; // просиходит "позычание" метода getName() из массива otherUser
user2.getName(); // 'Abraham' "позыченый" метод возвращает user2.name
otherUser.getName(); // 'John' метод объекта otherUser в работе

//// 2 часть
// задача № 1
function getList() {
    return this.list;
}

let users = {
    length: 4,
    list: ['Abraham', 'James', 'John', 'Steven']
};

getList(); //undefined, функция вызывается без контекста
users.getList = getList;
users.getList(); // вернет массив который был в обхекте users под ключем list
getList.call(users); // тоже саоме что и users.getList

// задача № 2
let goods = {
    priceForOne: 10,
    goodsSum: 15,
    getFullPrice: function getFullPrice() { return this.priceForOne * this.goodsSum;}
};

// задача № 3
let details = {
    priceForOne: 23,
    goodsSum: 14
};
details.getFullPrice = goods.getFullPrice; // одолжили метод из объкта в задаче № 2
details.getFullPrice(); // 322

// задача № 4

let sizes = {
    width: 5,
    height: 10
};
getSquare = function () {
    return this.width * this.height;
};
getSquare.call(sizes); // 50

// задача № 5
let numbers = [4, 12, 0, 10, -2, 4];

let minNumber = Math.min.apply(null, numbers);

// задача № 6

const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function (){
        return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(this.marginBottom) + 'px';
    }
},
    block = {
        height: '5px',
        marginTop: '3px',
        marginBottom: '3px',
    };
block.getFullHeight = element.getFullHeight;
block.getFullHeight(); // '11px'


// задача № 7
let element2 = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};

let getElementHeight = element2.getHeight.bind(element2);
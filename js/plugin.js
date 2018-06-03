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

// задача № 3 не готова
const user = {
    name: 'Abraham',
    getUserName: function () {

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

// user2.getName(); // undefined, точнее ошибка user2.getName is not a function у объекта user2 нет метода getName()
user2.getName = otherUser.getName; // просиходит "позычание" метода getName() из массива otherUser
user2.getName(); // 'Abraham' "позыченый" метод возвращает user2.name
otherUser.getName(); // 'John' метод объекта otherUser в работе
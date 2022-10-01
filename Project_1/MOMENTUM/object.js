// object (class)

const player = { // 중괄호를 사용
    name: "LEE",
    points: 10,
    fat: false
};


console.log(player);
console.log(player.name); // 변수출력


player.favorite = "potato";
player.fat = false;
console.log(player);
// const라 안될것 같지만 const 내 변수는 추가 및 수정 가능



function sayHello(name, age) {
    console.log("Hello my name is " + name + ", " + age + " old");
} // 함수 사용시 function

sayHello();
sayHello("LEE", 26);


function plus(first, second) {
    console.log(first + second);
}

plus(8, 60);

// object 안에 함수를 생성시
const calculator = {
    sum: function(first, last) { // function name : function() {}
        console.log(first + last);
    },

    sub: function(first, last) {
        console.log(first - last);
    },

    div: function(first, last) {
        console.log(first / last);
    },

    mul: function(first, last) {
        console.log(first * last);
    }
};

calculator.sum(1, 2);
calculator.sub(1, 2);
calculator.div(1, 2);
calculator.mul(1, 2);
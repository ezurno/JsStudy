const calculator = {
    plus: function(a, b) {
        alert(a + b);
    },

    minus: function(a, b) {
        alert(a - b);
    },

    times: function(a, b) {
        alert(a * b);
    },

    divide: function(a, b) {
        alert(a / b);
    },

    power: function(a, b) {
        alert(a ** b);
    }
};

calculator.times(2, 3); // 값이 alert 창으로 나옴
calculator.minus(2, 3);
calculator.divide(2, 3);
calculator.power(2, 3);
console.log(calculator.plus(2, 3));
// console.log 로 값을 보면 undifined각 나옴
// return 값이 없어서

const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2; // return 키워드로 데이터값을 보내줌
}

const krAge = calculateKrAge(age);
console.log(krAge);
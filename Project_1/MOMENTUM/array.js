// array

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "LEE" ];

// get item
console.log(dayOfWeek, nonsense);
console.log(dayOfWeek[3]);

// add one more day in array
dayOfWeek.push("sun");
console.log(dayOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("coke");
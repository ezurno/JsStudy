const quotes = [
  {
    quote: "우리는 나이가 들면서 변하는 게 아니다. 보다 자기다워지는 것이다.",
    author: "Lynn Hall",
  },
  {
    quote:
      "세상의 문제는 바보들과 광신도들은 자기 확신이 지나친데 비해 현명한 사람들은 의심이 너무 많다는 것이다.",
    author: "Bertrand Russell",
  },
  {
    quote: "실수를 부끄러워 말라, 실수를 부끄러워하면 실수가 죄악이 된다.",
    author: "공자",
  },
  {
    quote: "나는 보기 위해 눈을 감는다.",
    author: "폴 고갱",
  },
  {
    quote: "죽음을 그토록 두려워말라. 못난 인생을 두려워하라.",
    author: "Bertolt Brecht",
  },
  {
    quote:
      "모든 이의 마음을 얻으려고 계산된 글은 그 누구의 마음도 얻지 못한다.",
    author: "Adlai E. Stevenson Jr.",
  },
  {
    quote: "항상 내세워지는 모습이 젊음의 전부는 아니다.",
    author: "Lawana Blackwell",
  },
  {
    quote: "자신을 사랑하는 법을 아는 것이 가장 위대한 사랑입니다.",
    author: "Michael Masser",
  },
  {
    quote:
      "우리는 앞으로 2년 뒤에 닥쳐올 변화에 대해서는 과대평가하지만 10년 뒤에 올 변화는 과소평가하는 경향이 있다. 그렇다고 스스로를 나태함으로 이끌지는 마라.",
    author: "Bill Gates",
  },
  {
    quote: "자신을 화나게 했던 행동을 다른 이에게 행하지 말라.",
    author: "Socrates",
  },
  {
    quote:
      "설명하지마라--친구라면 설명할 필요가 없고, 적이라면 어차피 당신을 믿으려 하지 않을테니까.",
    author: "Elbert Hubbard",
  },
  {
    quote: "우정을 끝낼 수 있다면 그 우정은 실제로 존재하지 않은 것이다.",
    author: "Saint Jerome",
  },
  {
    quote:
      "인간의 감정은 누군가를 만날 때와 헤어질 때 가장 순수하며 가장 빛난다.",
    author: "Jean Paul Richter",
  },
  {
    quote: "두려움은 희망 없이 있을 수 없고 희망은 두려움없이 있을 수 없다.",
    author: "Baruch Spinoza",
  },
  {
    quote: "낙관론이 가장 많이 꽃피는 곳은 정신병원이다.",
    author: "Havelock Ellis",
  },
  {
    quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "믿음이 부족하기 때문에 도전하길 두려워하는 바, 나는 스스로를 믿는다.",
    author: "Muhammad Ali",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

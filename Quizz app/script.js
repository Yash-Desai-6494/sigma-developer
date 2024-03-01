const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "Python",
    correct: "a",
  },
  {
    que: "What does CSS stand for?",
    a: "Cascading Style Sheets",
    b: "Creative Style Syntax",
    c: "Computer Style Script",
    d: "Coded Style System",
    correct: "a",
  },
  {
    que: "Which HTML tag is used to define a hyperlink?",
    a: "<a>",
    b: "<h1>",
    c: "<p>",
    d: "<div>",
    correct: "a",
  },
  {
    que: "What is the JavaScript function used to select an HTML element?",
    a: "getElement",
    b: "querySelector",
    c: "selectElement",
    d: "findElement",
    correct: "b",
  },
  {
    que: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Highly Typed Markup Language",
    c: "Home Tool Markup Language",
    d: "Hyperlinks and Text Markup Language",
    correct: "a",
  },
];

let index = 0;
let total = questions.length;
let right = 0,
  wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

const shuffleArray = (array) => {
  for(let i = array.length - 1; i> 0; i--){
    const j = Math.floor(Math.random() * (i +1));
    [array[i],array[j]]=[array[j],array[i]]
  }
  return array
}

const loadQuestion = () => {
  if (index == total) {
    return endQuiz();
  }
  reset();
  shuffleArray(questions);
  const data = questions[index];
  quesBox.innerText = `${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Thank you for playing the quiz</h3>
    <h2>${right} / ${total} are correct </h2>
    `;
};

loadQuestion();

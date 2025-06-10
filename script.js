const questions = [
  {
    question: "Что делает оператор === в JavaScript?",
    answers: ["Сравнивает строго", "Сравнивает с преобразованием", "Это цикл"],
    correct: 0
  },
  {
    question: "Как объявить переменную?",
    answers: ["let x = 5", "define x = 5", "var x := 5"],
    correct: 0
  },
  {
    question: "Какой тип данных — null?",
    answers: ["Объект", "Строка", "Булевый"],
    correct: 0
  },
  {
    question: "Как вызвать функцию myFunc?",
    answers: ["myFunc()", "call myFunc", "run(myFunc)"],
    correct: 0
  },
  {
    question: "Что такое массив?",
    answers: ["Коллекция значений", "Оператор", "Тип цикла"],
    correct: 0
  },
  {
    question: "Какой результат у 2 + '2'?",
    answers: ["'22'", "4", "NaN"],
    correct: 0
  },
  {
    question: "Какое ключевое слово создаёт функцию?",
    answers: ["function", "func", "def"],
    correct: 0
  },
  {
    question: "Что делает метод .push()?",
    answers: ["Добавляет элемент в конец массива", "Удаляет последний элемент", "Сортирует массив"],
    correct: 0
  },
  {
    question: "Какой тип данных возвращает функция?",
    answers: ["Любой тип", "Только число", "Только строку"],
    correct: 0
  },
  {
    question: "Как обозначается комментарий в одну строку?",
    answers: ["// комментарий", "<!-- комментарий -->", "# комментарий"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.className = "answer-btn";
    btn.onclick = () => {
      if (index === q.correct) {
        score++;
        btn.style.backgroundColor = "#a0f0a0";
      } else {
        btn.style.backgroundColor = "#f08080";
      }
      document.querySelectorAll(".answer-btn").forEach(b => b.disabled = true);
    };
    answersEl.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.textContent = "Тест завершён!";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.textContent = `Вы набрали ${score} из ${questions.length} баллов.`;
}

showQuestion();

function checkAnswer(button, isCorrect) {
  const questionBlock = button.closest('.question');
  const resultDiv = questionBlock.querySelector('.result');

  if (isCorrect) {
    resultDiv.textContent = "✅ Правильно!";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "❌ Неправильно.";
    resultDiv.style.color = "red";
  }

  const buttons = questionBlock.querySelectorAll('button');
  buttons.forEach(btn => btn.disabled = true);
}

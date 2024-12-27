import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "რომელ წელს მოხდა დიდგორის ბრძოლა?",
      options: [
        { id: 0, text: "1120", isCorrect: false },
        { id: 1, text: "1140", isCorrect: false },
        { id: 2, text: "1125", isCorrect: false },
        { id: 3, text: "1121", isCorrect: true },
      ],
    },
    {
      text: "რომელ წელს მოხდა ბასიანის ბრძოლა ?",
      options: [
        { id: 0, text: "1202", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1274", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "რომელ წელს დაიდო ამასიის ზავი ?",
      options: [
        { id: 0, text: "1555", isCorrect: true },
        { id: 1, text: "1505", isCorrect: false },
        { id: 2, text: "1515", isCorrect: false },
        { id: 3, text: "1400", isCorrect: false },
      ],
    },
    {
      text: "რომელ წელს დაიშალა საბჭოთა კავშირი ?",
      options: [
        { id: 0, text: "1990", isCorrect: false },
        { id: 1, text: "1991", isCorrect: true },
        { id: 2, text: "1898", isCorrect: false },
        { id: 3, text: "1992", isCorrect: false },
      ],
    },
    {
      text: "ვინიყო გაერთიანებული საქართველოს პირველი მეფე ?",
      options: [
        { id: 0, text: "გიორგი IV", isCorrect: false },
        { id: 1, text: "დავით აღმაშენებელი", isCorrect: false },
        { id: 2, text: "ვახტანგ გორგასალი", isCorrect: false },
        { id: 3, text: "ბაგრატ III", isCorrect: true },
      ],
    },
    {
      text: "ყველაზე გრძელი მდინარე მსოფლიოში ?",
      options: [
        { id: 0, text: "ვოლგა", isCorrect: false },
        { id: 1, text: "რიონი", isCorrect: false },
        { id: 2, text: "მტკვარი", isCorrect: false },
        { id: 3, text: "ამაზონი", isCorrect: true },
      ],
    },
    {
      text: "ვინ დაწერა ვეფხისტყაოსანი ?",
      options: [
        { id: 0, text: "იაკობ გოგებაშვილმა", isCorrect: false },
        { id: 1, text: "შოთა რუსთაველმა", isCorrect: true },
        { id: 2, text: "ვახტანგ გორგასალმა", isCorrect: false },
        { id: 3, text: "აკაკი წერეთელმა", isCorrect: false },
      ],
    },
    {
      text: "ერთიანი საქართველოს უკანასკნელი მეფე ?",
      options: [
        { id: 0, text: "გიორგი VIII", isCorrect: true },
        { id: 1, text: "გიორგი III", isCorrect: false },
        { id: 2, text: "ვახტანგ გორგასალი", isCorrect: false },
        { id: 3, text: "ერეკლე II", isCorrect: false },
      ],
    },
    
  ];


  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Answer the Questions</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

const questions = [
    {
      question: "Question 1: CSS stand for -",
      choices: ["Cascade style sheets", "Color and style sheets", "Cascading style sheets"],
      correct: 2
    },
    {
      question: "Question 2: The CSS Property used to specify the order of flex in the grid container is -",
      choices: ["Order property ", "Float Property", "Overflow property"],
      correct: 0
    },
    {
      question: "Question 3:The property in CSS used to change the background color of an element is - ",
      choices: ["bgcolor", "color", "background-color"],
      correct: 2
    },
    {
      question: "Question 3:The property in CSS used to change the text color of an element is -",
      choices: ["bgcolor", "color", "background-color"],
      correct: 1
    },
    {
      question: "Question 4: The CSS property used to control the element's font-size is -",
      choices: ["text-style", "text-size", "font-size"],
      correct: 2
    },
    {
      question: "Question 5:The HTML attribute used to define the inline styles is -",
      choices: ["style", "styles", "class"],
      correct: 0
    },
    {
      question: "Question 6:The HTML attribute used to define the internal stylesheet is -",
      choices: ["<style>", "style", "<link>"],
      correct: 0
    },
    {
      question: "Question 7:Which of the following CSS property is used to set the background image of an element?",
      choices: ["background-attachment", "background-image", "background-color"],
      correct: 1
    },
    {
      question: "Question 8: Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
      choices: ["p {background-color : yellow;}", "p {background-color : #yellow;}", "all {background-color : yellow;}"],
      correct: 0
    },
    {
      question: "Question 9:Which of the following is the correct syntax to display the hyperlinks without any underline?",
      choices: ["a {text-decoration : underline;}", "a {decoration : no-underline;}", "a {text-decoration : none;}"],
      correct: 0
    },
    {
      question: "Question 10:Which of the following property is used as the shorthand property for the padding properties?",
      choices: ["padding-left", "padding-right", "padding"],
      correct: 2
    },
    {
      question: "Question 11:The CSS property used to make the text bold is -",
      choices: ["font-weight : bold", "weight: bold", "font: bold"],
      correct: 0
    },
    {
      question: "Question 12:Are the negative values allowed in padding property? ",
      choices: ["Yes", "No", "Can't say"],
      correct: 1
    },
    {
      question: "Question 13:Which of the following property is used as the shorthand property of margin properties?",
      choices: ["margin-left", "margin-right", "margin"],
      correct: 2
    },
    {
      question: "Question 14:The CSS property used to specify the transparency of an element is -?",
      choices: ["opacity", "filter", "visibility"],
      correct: 0
    },
    {
      question: "Question 15: Which of the following is used to specify the subscript of text using CSS?",
      choices: ["vertical-align: sub", "vertical-align: super", "vertical-align: subscript"],
      correct: 0
    },
    {
      question: "Question 16:Which of the following CSS property is used to specify the space between every letter inside an element? ",
      choices: ["alpha-spacing", "character-spacing", "character-spacing"],
      correct: 2
    },
    {
      question: "Question 17:The CSS property used to specify whether the text is written in the horizontal or vertical direction? ",
      choices: ["London", "Paris", "Nairobi"],
      correct: 0
    },
    {
      question: "Question 18: Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",
      choices: ["transform : capitalize;", "text-transform : capital;", "text-transform : capitalize;"],
      correct: 2
    },
    {
      question: "Question 19:How to select the elements with the class name example?",
      choices: ["example", "#example", ".example"],
      correct: 2
    },
    {
      question: "Question 20:Which of the following is the correct syntax for referring the external style sheet?",
      choices: ["<style src = example.css>", "<style src = "example.css" >", "<stylesheet> example.css </stylesheet>","<link rel="stylesheet" type="text/css" href="example.css">"],
      correct: 3
    },
    // Add more questions here...
  ];
  
  let currentQuestion = 0;
  let correctAnswers = 0;
  
  function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.textContent = questions[currentQuestion].question;
  
    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
      choice.textContent = questions[currentQuestion].choices[index];
    });
  
    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
  }
  
  function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === questions[currentQuestion].correct) {
      feedback.textContent = "Correct ✓";
      feedback.style.color ="green";
      feedback.style.fontSize="20px"
      correctAnswers++;
    } else {
      feedback.textContent = "Incorrect ✗";
      feedback.style.color ="red";
      feedback.style.fontSize="20px"
    }
  
    setTimeout(() => {
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
      }
    }, 2000);
  }
  
  showQuestion();
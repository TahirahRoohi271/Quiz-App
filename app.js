const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const scoreElement = document.getElementById('score');

const questions = [
    {
        question: "What can be used as an iterable with the for...of loop?",
        options: ["Objects", "Arrays", "Strings", "All of the above"],
        answer: 3
    },
    {
        question: "How can you handle the result of a resolved promise?",
        options: ["Using a .then() method and passing a callback function.", "Using a .catch() method and passing a callback function.", "Using a .finally() method and passing a callback function.", "Using a .result() method and passing a callback function."],
        answer: 0
    },
    {
        question: "What is the purpose of the HTML <meta> tag?",
        options: ["Define a new CSS style", "Insert an image", "Specify metadata about an HTML document", "Create a new paragraph"],
        answer: 2
    },
    {
        question: "What is the purpose of the let keyword in JavaScript",
        options: ["Declares a global variable", "Defines a function", "Declares a block-scoped variable", "Initiates a loop"],
        answer: 2
    },
    {
        question: "How do you declare a function in JavaScript?",
        options: ["func myFunction() {}", "function = myFunction() {}", "declare myFunction() {}", "function myFunction() {}"],
        answer: 3
    },
    {
        question: "What is the purpose of the for...of loop in JavaScript?",
        options: ["It iterates over the properties of an object.", "It iterates over the elements of an array.", "It creates a new object.", "It defines new variables."],
        answer: 1
    },
    {
        question: "What is a constructor in OOP?",
        options: ["A method that is used to destroy objects and free up memory.", "A special method used to create and initialize objects of a class.", "A data structure that stores key-value pairs.", "A variable that holds the current state of an object."],
        answer: 1
    },
    {
        question: "Which declarations are hoisted in JavaScript?",
        options: ["Only variable declarations.", "Only function declarations.", "Both variable and function declarations.", "Neither variable nor function declarations."],
        answer: 2
    },
    {
        question: "What is the benefit of using closures in JavaScript?",
        options: ["Closures simplify code and make it easier to read.", "Closures prevent memory leaks.", "Closures provide a way to create private variables and encapsulation.", "Closures improve the performance of functions."],
        answer: 2
    },
    {
        question: "What is the purpose of the rest parameter (...) in destructuring?",
        options: ["It indicates that the object being destructured is not complete.", "It is used to skip over certain properties during destructuring.", "It collects the remaining elements of an array or object into a new array.", "It is used to create a shallow copy of the object being destructured.."],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        questionElement.textContent = "Quiz finished!";
        options.forEach(option => {
            option.style.display = 'none';
        });
        scoreElement.textContent = `Final Score: ${score}/${questions.length}`;
    }
}

displayQuestion();
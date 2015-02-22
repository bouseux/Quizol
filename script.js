var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    ['I like big ______ I can not lie', 'Butts', 'Tuna', 'Monkeys', 'A'],
    ['Cause baby, There aint no _____ high enough Aint no valley low enough Aint no river wide enough to keep me from getting to you', 'Shirts', 'Panda', 'Mountain', 'C'],
    ['NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa _______', 'Buzz Lightyear', 'Batman', 'Taylor Swift', 'B'],
    ['Im to sexy for my ____', 'Eyebrows', 'Teeth', 'Shirt', 'C', ],
    ['Wake up in the morning feeling like ____', 'Mangos', 'P Diddy', 'Obama', 'B'],
];
function _(x) {
    return document.getElementById(x);
}
function renderQuestion() {
    test = _("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        // pos = 0;
        // correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";
    test.innerHTML += "<progress value=" + pos + " max=5></progress><br><br>"
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
    document.getElementById('bob').style.visibility = 'hidden';
}
function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == questions[pos][4]) {
        correct++;
        alert("You are a superstar");
    } else {
        alert("You tried");
    }
    pos++;
    renderQuestion();
}
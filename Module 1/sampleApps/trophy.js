
/*let dolphinScores = [];
let koalaScores = [];

function getInput() {
    let isValidInput = false;
    let counter = 0;

    while (!isValidInput && counter < 3) {
        let dolphinScore = parseInt(prompt(`Enter dolphin's score for match ${counter + 1}:`));
        let koalaScore = parseInt(prompt(`Enter koala's score for match ${counter + 1}:`));

        if (!isNaN(dolphinScore) && !isNaN(koalaScore) && dolphinScore >= 0 && koalaScore >= 0) {
            dolphinScores.push(dolphinScore);
            koalaScores.push(koalaScore);
            counter++;
        } else {
            alert("Invalid input. Scores must be non-negative numbers.");
        }
    }
}

function getAverage(scores) {
    let total = scores.reduce((acc, val) => acc + val, 0);
    return total / scores.length;
}

function trophy() {
    getInput();
    let dolphinAverage = getAverage(dolphinScores);
    let koalaAverage = getAverage(koalaScores);

    if (dolphinAverage > koalaAverage) {
        document.write(`Dolphins are the winners with an average score of ${dolphinAverage.toFixed(2)}.`);
    } else if (koalaAverage > dolphinAverage) {
        document.write(`Koalas are the winners with an average score of ${koalaAverage.toFixed(2)}.`);
    } else {
        document.write(`The result is a draw with an average score of ${dolphinAverage.toFixed(2)}.`);
    }
}

trophy();*/


let scoreArray = [];
function getInput() {

    for (let i = 0; i < 3; i++) {
        let isValidInput = false;
        do {
            let dolphinScore = parseInt(prompt(`Enter dolphin's score for match ${i + 1}:`));
            let koalaScore = parseInt(prompt(`Enter koala's score for match ${i + 1}:`));
            isValidInput = !isNaN(dolphinScore) && !isNaN(koalaScore) && dolphinScore >= 0 && koalaScore >= 0;
            if (isValidInput) {
                scoreArray.push(dolphinScore, koalaScore);
            } else {
                alert("Invalid input. Please enter a non-negative number for each score.");
            }
        } while (!isValidInput);
    }
    return scoreArray;
}



function averageScore(scoreArray) {

    var d_totalScore = 0
    var k_totalScore = 0
    for (let i = 0; i < scoreArray.length; i++) {
        if (i % 2 === 0) {
            d_totalScore += scoreArray[i]
        }
        else {
            k_totalScore += scoreArray[i]
        }

    }


    d_average = d_totalScore / 3;
    k_average = k_totalScore / 3

    return [d_average, k_average]

}
function trophy(dAverage, kAverage) {
    var [dAverage, kAverage] = averageScore(scoreArray);
    if (dAverage > kAverage) {
        document.write(`Dolphins are the winners with score: ${dAverage}`)
    }
    else if (kAverage > dAverage) {
        document.write(`Koalas are winners with score: ${kAverage}`)
    }
    else {
        document.write(`The result was draw`)
    }
}
getInput()
trophy()
function getInput() {
    let scoreArray = []
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
let calcAverage = (scoreArray) => {

    let d_totalScore = 0, k_totalScore = 0

    for (let j = 0; j < scoreArray.length; j++) {
        if (j % 2 === 0) {
            d_totalScore += scoreArray[j]
        }
        else {
            k_totalScore += scoreArray[j]
        }

    }


    d_average = d_totalScore / 3;
    k_average = k_totalScore / 3

    return [d_average, k_average]

};

let checkWinner = (avgDolphins, avgKoalas) => {

    if (avgDolphins == 2 * avgKoalas) {
        document.write(`Dolphins are the winners by ${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)}`)
    }
    else if (avgKoalas == 2 * avgDolphins) {
        document.write(`Koalas are the winners by ${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)}`)

    }
    else {
        document.write('There is no winner.')
    }
};
let avg = calcAverage(getInput())
checkWinner(avg[0], avg[1])

function miniGolf() {
    console.log("Welcome to Mini Golf!");

    // Get player's name
    let playerName = prompt("What is your name?") || "";

    let numberOfHoles = 0;

    while (numberOfHoles !== 3 && numberOfHoles !== 6) {
        let input = prompt(`Hello ${playerName}, would you like to play 3 or 6 holes?`);
        if (input) {
            let holes = parseInt(input);
            if (holes === 3 || holes === 6) {
                numberOfHoles = holes;
            } else {
                console.log("Please enter either 3 or 6.");
            }
        } else {
            console.log("Invalid input. Please try again.");
        }
    }

    let totalPutts = 0;

    // Loop through the holes
    for (let i = 1; i <= numberOfHoles; i++) {
        let puttsInput = prompt(`How many putts for hole ${i}? (par: 3)`);
        if (puttsInput) {
            let putts = parseInt(puttsInput);
            if (!isNaN(putts)) {
                totalPutts += putts;
            } else {
                console.log("Please enter a valid number for putts.");
                i--; 
            }
        } else {
            console.log("Invalid input. Please try again.");
            i--; 
        }
    }

    const par = numberOfHoles * 3;
    const totalPar = totalPutts - par;

    console.log(totalPar)

    if (totalPar > 0) {
        console.log(`Nice try, ${playerName}! Your total par was: +${totalPar}`);
    } else if (totalPar < 0) {
        console.log(`Great job, ${playerName}! Your total par was: ${totalPar}`);
    } else {
        console.log(`Good game, ${playerName}! Your total par was: 0`);
    }
}

miniGolf();


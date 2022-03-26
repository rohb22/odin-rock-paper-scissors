function computerPlay() {

    const pick = ["rock", "paper", "scissors"];
    const index = Math.floor((Math.random() * 3));

    return pick[index];
}
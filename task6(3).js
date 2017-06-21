
var beginGame = confirm('Do you want to begin game?');
var i, a = 0, b = 5, sum=0, key = 0, randomNumber, continueGame;
var money = [2], userNumber = [2];
money[0] = 10;
money[1] = 5;
money[2] = 2;
if(beginGame) {
    game();
    if(userNumber[0] != randomNumber && userNumber[1] != randomNumber && userNumber[2] != randomNumber) {
        gameAgain();
    }
   else {
        continueGame = confirm('Do you want continue game?');
        while (continueGame) {
            gameContinue();
        }
    }
}
else {
    alert('Today, you did not win a million but could');
}
function gameAgain() {
        alert('You win 0$');
        if(confirm('Do you want to play again?')) {
            game();
        }
}
function gameContinue() {
    b*=2;
    money[0]*=3;
    money[1]*=3;
    money[2]*=3;
    game();
    key++;
    continueGame  =  confirm('Do you want continue game?');
    if(!continueGame)
    {
        alert('Thanks for game yo win '+sum+'$');
    }
}
function random() {
    randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;
    return randomNumber;
}
function game () {
    random();
    randomNumber = 1;
    userNumber[0] = +prompt('Enter number: ', '');
    if (userNumber[0] == randomNumber) {
        alert('You win ' + money[0] + '$');
        sum=sum+money[0];
    }
    else {
        userNumber[1] = +prompt('Enter number: ', '');
        if (userNumber[1] == randomNumber) {
            alert('You win ' + money[1] + '$');
            sum=sum+money[1];
        }
        else {
            userNumber[2] = +prompt('Enter number: ', '');
            if (userNumber[2] == randomNumber) {
                alert('You win ' + money[2] + '$');
                sum=sum+money[2];
            }
        }
    }
}

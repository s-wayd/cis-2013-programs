/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
while (true) //this code line serves as a loop that repeats the game (back to the beginning) if the user succesfully guesses the correct number
//The above code is the second extra credit option
{
intMin = parseInt(prompt("Choose a number that is zero or greater to begin your guessing game. NOTE: This will be the lowest number in your guessing range.")); 
//the above code asks the user to choose a number that is zero or greater that will serve as the lowest number in their guessing range game.
while (isNaN(intMin) || intMin<0)
{
    intMin = parseInt(prompt("I'm sory but your lowest number choice is invalid. Please choose another number"));
    //this notification appears when the user guesses a number lower than the correct number.
}


/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/

intMax = parseInt(prompt("Choose the highest number in your guessing range. NOTE: Your highest number must be at least 2 more than 0."));
//this code asks the user to choose a number that is at least two numbers bigger than the lowest number option they previously entered.
while (isNaN(intMax) || intMax <= intMin +1)
{
    intMax = parseInt(prompt("I'm sorry but your highest number choice is invalid. Please choose another number"));
    //this code appears when the user guesses a number higher than the correct number
}
/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);
//the above code is the generator that chooses a random number between the smallest and biggest number choices the user made for this guessing game

// set the loop counter
intCount = 1;


/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/

intGuess = parseInt(prompt("Please choose a number that is between"  +  " "+intMin + " and " + intMax));
while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax)
{
    intGuess = parseInt(prompt("I'm sorry but your number choice is invalid. Please choose another number."));
}


/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

 
 while (intGuess != intRandom)
 {
    if (intGuess < intRandom)
    {
        alert("Your guess is too low. Please try entering a different number.");
    }    
        else
        {
            alert("Your guess is too high. Please try entering a different number.");
        }
    intCount++;

intGuess = parseInt(prompt("Please choose a number that is between" +  intMin + " and " + intMax));
while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax)
{
    intGuess = parseInt(prompt("I'm sorry but your number choice is invalid. Please choose another number."));
}

}

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");

}
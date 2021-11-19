//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id); 
}

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
	
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	
	var i=0;  // sets the first number in the Fibonacci series to 0
	var j=1;  //sets the second number in the Fibonacci series to 1
	var k;   //k is calculated by adding i+j and represents the next Fibonacci number
	var stringOutput = "0 1";//initialize the Fibonacci series output to include the first two numbers

if (isNaN(intCount) || intCount < 2 || intCount > 100) //when the input number is less than 2, more than 100, or a letter and not a number, the program with release an alert ERROR.
	{
		$("total_fib").value = ""; 
		$("output").value = "Please enter a valid number"; //this is a message is asking the user to choose a number that is between 2 and 100
		alert ("Error! You must pick a number between 2 and 100 to begin.");
		//the above is an error message that occurs when the user pics a number outside of 2 and 100 
	}

else 
	{
	while (intCount > 2) //as long as the input is greater than 2, the output will work smoothly
		{
			k=i+j; //this calculates the Fibonacci sequence and adds up the numbers through i and j
			i=j; //in other words, 0 equals 1 initially
			j=k; //this countinues the sequence: making 
			intCount --;
			stringOutput = stringOutput + k + " "; //this line adds the string output with the next sum of i+j which is k which then results in the accumulation of the Fibonacci ssequence.
			
		}
		$("output").value = stringOutput; // This pushes the solution back to the Output through DOM

	}

// write whatever kind of loop you want, given the above info, to generate the appropriate
	// number of fibonacci numbers and then post it to the html DOM 

}


/*
Start
Declare i,j,k,stringOutput
Set the first Fibonacci number i=0 
Set the second Fibonacci number j=1
Set the initial stringOutput to include the initial values of i and j
Get the number of requested Fibonacci numbers from the DOM, intCount 
Validate intCount to ensure the user enters a proper number and that number is between 1 – 100 (because who really needs to see more than that in their web browser…)
If intCount is not valid
   blank out the intCount DOM box
   provide an error message
Else run the main part of the program 
   While intCount >2 (because we are counting down from intCount)
      set k=i+j
      set i=j
      set j=k
      add k value to string Output
      decrement intCount
   End While
   Output stringOutput to the DOM
End
*/

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
}  
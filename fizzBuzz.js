var $ = function (id) 
{
    return document.getElementById(id);
}

doStuffComputer = function()
{
	var counter = 0;
	var output = "";
	
//insert code below    
for(counter = 1;counter<=100; counter ++)
    {
        if(counter % 15 ===0)
        {
            output= output + "FizzBuzz\n";
        }
        else if (counter % 3 ===0)
        {
            output= output + "Fizz\n";
        }
        else if (counter % 5 ===0)
        {
            output= output + "Buzz\n";
        }
        else
        {
            output= output + counter + "\n";	
        }
    }    
    
alert(output);
    
}



window.onload = function()
{
	$("doIt").onclick = doStuffComputer;
}
var floatMiles, floatGallons, floatMpg;
     floatMiles = parseFloat (prompt("Enter miles driven")); 
     floatGallons = parseFloat (prompt("Enter gallons of gas used")); 
     floatMpg = parseFloat(floatMiles/floatGallons);  //Divides number of values by gallons
     alert("Miles per gallon = " + floatMpg.toFixed(2));
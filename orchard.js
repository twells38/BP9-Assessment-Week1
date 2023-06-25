///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0; //initailize total number with 0. 
for (let i = 0; i < fujiAcres.length; i++){
    totalAcres += fujiAcres[i] //totalAcres will be updated after each loop.
}
console.log(totalAcres);


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres/ fujiAcres.length
console.log(averageDailyAcres);


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 //the number of acres that still have apples left. 
let days = 0 //how many more days of work are left.

// CODE HERE
while (acresLeft > 0) {
    days++; //add 1 to the `days` variable
    acresLeft -= averageDailyAcres; //subtract daily average from the number of acres left.
 }
console.log(days);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

 let fujiTons = []
 let galaTons =[]
 let pinkTons = []
 
 //daily amount of apples picked in tons of fujiAcres.
for (let i = 0; i < fujiAcres.length; i++){
    fujiTons.push(fujiAcres[i] * 6.5)
}
console.log(`Tons of fuji's acres : ${fujiTons}`);

//daily amount of apples picked in tons of galaAcres.
for (let i = 0; i < galaAcres.length; i++){
    galaTons.push(galaAcres[i] * 6.5)
}
console.log(`Tons of gala's acres : ${galaTons}`);

//daily amount of apples picked in tons of pinkAcres.
for (let i = 0; i < pinkAcres.length; i++){
    pinkTons.push(pinkAcres[i] * 6.5)
}
console.log(`Tons of pink's acres : ${pinkTons}`);



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = []
let galaPounds =[]
let pinkPounds = []

//pounds of fujiAcres
for (let i = 0; i < fujiAcres.length; i++){
    fujiPounds.push(fujiAcres[i] * 6.5* 2000);
    
}
console.log(fujiPounds);

// total pounds of fujiPounds array
let totalFujiPounds = 0;
for (let i = 0; i < fujiPounds.length; i++){
    totalFujiPounds += fujiPounds[i]
}
console.log(`***Total pounds of fuji's acres : ${totalFujiPounds}`);

//pounds of galaAcres
for (let i = 0; i < galaAcres.length; i++){
    galaPounds.push(galaAcres[i] * 6.5 * 2000)
}
console.log(galaPounds);

// total pounds of galaPounds array
let totalGalaPounds = 0;
for (let i = 0; i < galaPounds.length; i++){
    totalGalaPounds += galaPounds[i]
}
console.log(`***Total pounds of gala's acres : ${totalGalaPounds}`);


//pounds of pinkAcres
for (let i = 0; i < pinkAcres.length; i++){
    pinkPounds.push(pinkAcres[i] * 6.5 * 2000)
}
console.log(pinkPounds);

// total pounds of pinkPounds array
let totalPinkPounds = 0;
for (let i = 0; i < pinkPounds.length; i++){
    totalPinkPounds += pinkPounds[i]
}
console.log(`***Total pounds of pink's acres : ${totalPinkPounds}`);


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = totalFujiPounds * fujiPrice
console.log(`Total profit of fuji 's acres : ${fujiProfit}`)
let galaProfit = totalGalaPounds * galaPrice
console.log(`Total profit of gala 's acres : ${galaProfit}`)
let pinkProfit = totalPinkPounds * pinkPrice
console.log(`Total profit of pink 's acres : ${pinkProfit}`)






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit
  console.log(`***Total profit of all acres : ${totalProfit}`)
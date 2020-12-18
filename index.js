// *** A Very Big Sum.

// Problem: Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Function Description.

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// ar: an array of integers.

// function aVeryBigSum(ar) {
//     return ar.reduce((a, b) => a + b);
// }
// console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))// Returns 5000000015.




// *** Plus Minus.
// Problem: Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.

// For example, given the array arr = [1,1,0,-1,-1] there are 5 elements, two positive, two negative and one zero. Their ratios would be 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. It should be printed as:

// 0.400000
// 0.400000
// 0.200000

// Function Description.
// Complete the plusMinus function in the editor below. It should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimals.
// plusMinus has the following parameter(s):
// arr: an array of integers

// function plusMinus(arr) {
//     let positive = [],
//         negative = [],
//         zero = [],
//         n = arr.length;

//     for (let i = 0; i < n; i++) {
//         if (arr[i] > 0) {
//             positive.push(arr[i]);
//         } else if (arr[i] < 0) {
//             negative.push(arr[i]);
//         } else if (arr[i] === 0) {
//             zero.push(arr[i]);
//         }
//     }
//     console.log(positive.length/n),
//     console.log(negative.length/n),
//     console.log(zero.length/n);
// }
// console.log(plusMinus([0, 0, -1, 1, 1])); // Returns 0.400000, 0.200000, 0.400000.




// *** Staircase.
// Problem: Consider a staircase of size n = 4:
//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// Function Description.

// Complete the staircase function in the editor below. It should print a staircase as described above.

// staircase has the following parameter(s):

// n: an integer.


// // Complete the staircase function below.
// function staircase(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log('#'.repeat(i).padStart(n));
//     }
// }
// console.log(staircase(6)); 
// // Returns 
//      #
//     ##
//    ###
//   ####
//  #####
// ######




// *** Birthday Cake Candles.
// Problem: You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

// For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4,4,1,3, she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.

// Function Description.

// Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

// birthdayCakeCandles has the following parameter(s):

// ar: an array of integers representing candle heights.

// const birthdayCakeCandles = a =>
// (f => a.filter(v => v === f).length)(Math.max(...a));


// function birthdayCakeCandles(ar) {
//     var tallestCandle = Math.max(...ar);
//     var filteredAr = ar.filter(x => x == tallestCandle);
   
// 	 return filteredAr.length
// }
// console.log(birthdayCakeCandles(3 2 1 3)) // Returns 2.




// *** Breaking the Records.
// Problem: Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// For example, assume her scores for the season are represented in the array scores = [12, 24, 10, 24]. Scores are in the same order as the games played. She would tabulate her results as follows:

//                                  Count
// Game  Score  Minimum  Maximum   Min Max
//  0      12     12       12       0   0
//  1      24     12       24       0   1
//  2      10     10       24       1   1
//  3      24     10       24       1   1
// Given Maria's scores for a season, find and print the number of times she breaks her records for most and least points scored during the season.

// Function Description.

// Complete the breakingRecords function in the editor below. It must return an integer array containing the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.

// breakingRecords has the following parameter(s):

// scores: an array of integers


// function getRecord(games) {
//     let most = games[0];
//     let least = games[0];
    
//     let dMost = 0;
//     let dLeast = 0;
    
//     for (const score of games) {
//         if (most < score) {
//             most = score;
//             dMost++;
//         }
//         else if (score < least) {
//             least = score;
//             dLeast++;
//         }
//     }
    
//     return [dMost, dLeast];
// }


// function breakingRecords(score) {
// 		        const scoreLength = score.length;

// 	        	let mostScore = score[0];
// 	        	let worstScore = score[0];
// 	        	let mostScoreIncreased = 0;
// 	        	let worstScoreDecreased = 0;

// 	            for(let i = 0; i < scoreLength; i++){
// 	            	const curScore = score[i];

// 	            	if(mostScore < curScore){
// 	            		mostScore = curScore;
// 			            mostScoreIncreased++;
// 		            }
// 		            if(worstScore > curScore){
// 	            		worstScore = curScore;
// 			            worstScoreDecreased++;
// 		            }
// 	            }
// 	            return [mostScoreIncreased, worstScoreDecreased];
// 	        }


// function breakingRecords(score) {
// // Preparing variables
// let [ hi, lo ] = [ scores[0], scores[0] ];
// let [ max, min ] = [ 0, 0 ];

// // Calculating
// for (let i = 1; i < scores.length; i++) {
// 	if (scores[i] > hi) { hi = scores[i]; max++; }
// 	if (scores[i] < lo) { lo = scores[i]; min++; }
// }

// //Returning
// return [ max, min ];
// }
// console.log(breakingRecords(10 5 20 20 4 5 2 25 1)) // Returns 2 4.




// *** Bon Appétit.
// Problem: Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.
// For example, assume the bill has the following prices: bill = [2,4,6]. Anna declines to eat item k = bill[2] which costs 6. If Brian calculates the bill correctly, Anna will pay (2 + 4)/2 = 3. If he includes the cost of bill[2], he will calculate (2 + 4 + 6)/2 = 6. In the second case, he should refund 3 to Anna.

// Function Description.
// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

// bonAppetit has the following parameter(s):

// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill.

// function bonAppetit(bill, k, b) {
//     const annasBill = (bill.reduce((a, b) => a + b, 0) - bill[k]) / 2;
//     annasBill === b ? console.log('Bon Appetit') : console.log(b - annasBill);
// }
// console.log(bonAppetit(3 10 2 9, 1, 12)) // Returns: 5.




// *** Cats and a Mouse.
// Problem: Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse doesn't move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.
// You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C.
// Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.
// If cat A catches the mouse first, print Cat A.
// If cat B catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
// For example, cat A is at position X = 2 and cat B is at Y = 5. If mouse C is at position Z = 4, it is 2 units from cat A and 1
// unit from cat B. Cat B will catch the mouse.

// Function Description

// Complete the catAndMouse function in the editor below. It should return one of the three strings as described.

// catAndMouse has the following parameter(s):

// x: an integer, Cat A's position
// y: an integer, Cat B's position
// z: an integer, Mouse C's position

// // Complete the catAndMouse function below.
// function catAndMouse(x, y, z) {
//     return (Math.abs(x-z) > Math.abs(y-z)) ? 'Cat B' : ((Math.abs(x-z) < Math.abs(y-z)) ? 'Cat A' : 'Mouse C')
// }
// console.log(catAndMouse(2, 123, 132))
// // Returns Cat B, Mouse C.




// *** The Hurdle Race.
// Problem: Dan is playing a video game in which his character competes in a hurdle race. Hurdles are of varying heights, and Dan has a maximum height he can jump. There is a magic potion he can take that will increase his maximum height by 1 unit for each dose. How many doses of the potion must he take to be able to jump all of the hurdles.

// Given an array of hurdle heights height, and an initial maximum height Dan can jump, k, determine the minimum number of doses Dan must take to be able to clear all the hurdles in the race.
// For example, if height = [1,2,3,3,2] and Dan can jump 1 unit high naturally, he must take 3 - 1 = 2 doses of potion to be able to jump all of the hurdles.

// Function Description

// Complete the hurdleRace function in the editor below. It should return the minimum units of potion Dan needs to drink to jump all of the hurdles.

// hurdleRace has the following parameter(s):

// k: an integer denoting the height Dan can jump naturally
// height: an array of integers denoting the heights of each hurdle.

// // Complete the hurdleRace function below.
// function hurdleRace(k, height) {
//     return Math.max(0, Math.max(...height) - k);
// }
// console.log(hurdleRace(4, 16352)) // Return: 2.



// *** Grading Students
// Problem: HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .

// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// Function Description

// Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.

// gradingStudents has the following parameter(s):

// grades: an array of integers representing grades before rounding
// function gradingStudents(grades) {
//     // Write your code here
//     return grades.map((n) => {
//         let diff = 5 - (n % 5);
//         if (diff < 3 && n >= 38) {
//             n += diff;
//         }
//         return n;
//     })
// }




// *** Sock Merchant
// Problem:John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

// function sockMerchant(n, ar) {
//     const colors = {};
//     let matches = 0;
//     for (let i = 0; i < n; i++) {
//         if (colors[ar[i]]) {
//             matches++;
//             colors[ar[i]] = 0;
//         } else {
//             colors[ar[i]] = 1;
//         }
//     }
//     return matches;
// }




// *** Counting Valleys
// Problem: Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

// For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.

// Function Description

// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

// countingValleys has the following parameter(s):

// n: the number of steps Gary takes
// s: a string describing his path

// function countingValleys(n, s) {
//     let seaLevel = 0;
//     let currentLevel = 0;
//     let valleys = 0;
    
//     s = s.split('');
//     for (let i= 0; i < s.length; i++) {
//         if (s[i] === 'U') {
//            currentLevel += 1;
//             if (currentLevel === 0) {
//                 valleys += 1;
//             }
//         } else {
//             currentLevel -= 1;
//         }
//     }
//     return valleys;
// }




// Ping statistics for 8.8.8.8:
//     Packets: Sent = 100, Received = 100, Lost = 0 (0% loss),
// Approximate round trip times in milli-seconds:
//     Minimum = 43ms, Maximum = 222ms, Average = 51ms




// *** Minimum Distances
// Problem: We define the distance between two array values as the number of indices between the two values. Given a, find the minimum distance between any pair of equal elements in the array. If no such value exists, print -1.

// For example, if a = [3,2,1,2,3], there are two matching pairs of values: 3 and 2. The indices of the 3's are i = 0 and j = 4, so their distance is d[i, j] = [j - i] = 4. The indices of the 2's are i = 1 and j = 3, so their distance is d[i, j] = [j - i] = 2.

// Function Description

// Complete the minimumDistances function in the editor below. It should return the minimum distance between any two matching elements.

// minimumDistances has the following parameter(s):

// a: an array of integers

// Input Format

// The first line contains an integer n, the size of array a.
// The second line contains n space-separated integers a[i].
// Sample Input
// 6
// 7 1 3 4 1 7


// function minimumDistances(a) {
          
//     var res = new Array();
//     for(let i = 0; i < a.length; i++){
//         for(let j = i + 1; j < a.length; j++){
//             if(a[i] == a[j]){
//                 res[i] = Math.abs(j-i);
//             }
//         }
//     }
    
//     if(res.length === 0){
       
//         return -1;
        
//     }else {
//         let result = res.sort(function(a,b){return a-b;})
//         return result[0];
//     }

// }

// function minimumDistances(a) {
//     let lastseen = {};
//     let dist = -1;
//     [...a].forEach((v, i) => {
//         if (lastseen.hasOwnProperty(v)) {
//             let thisdist = i - lastseen[v];
//             dist = Math.min(thisdist, (dist === -1 ? thisdist : dist));
//         }
//         lastseen[v] = i;
//     })
//     return dist;
// }




// *** Jumping on the Clouds
// Problem: Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. For example, c = [0,1,0,0,0,1,0] indexed from 0...6. The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5. She could follow the following two paths: 0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6. The first path takes 3 jumps while the second takes 4.

// Function Description

// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

// jumpingOnClouds has the following parameter(s):

// c: an array of binary integers

// Input Format
// The first line contains an integer n, the total number of clouds. The second line contains n space-separated binary integers describing clouds c[i].

// Sample Input
// 7
// 0 0 1 0 0 1 0

// // Complete the jumpingOnClouds function below.
// function jumpingOnClouds(c) {
//     let count = -1;

//     for(let i = 0; i < c.length; i++, count++){
//         if(i < c.length-2 && c[i+2] == 0) i++;
//     }
        
//     return count;
// }

// console.log(umpingOnClouds(0 0 1 0 0 1 0)); //Returns 4.


// *** Electronics Shop
// Problem: Monica wants to buy a keyboard and a USB drive from her favorite electronics store. The store has several models of each. Monica wants to spend as much as possible for the  items, given her budget.

// Given the price lists for the store's keyboards and USB drives, and Monica's budget, find and print the amount of money Monica will spend. If she doesn't have enough money to both a keyboard and a USB drive, print -1 instead. She will buy only the two required items.

// For example, suppose she has  to spend. Three types of keyboards cost . Two USB drives cost . She could purchase a , or a . She chooses the latter. She can't buy more than  items so she can't spend exactly .

// Function Description

// Complete the getMoneySpent function in the editor below. It should return the maximum total price for the two items within Monica's budget, or  if she cannot afford both items.

// getMoneySpent has the following parameter(s):

// keyboards: an array of integers representing keyboard prices
// drives: an array of integers representing drive prices
// b: the units of currency in Monica's budget

// function getMoneySpent(keyboards, drives, b) {
//   return keyboards.reduce((acc, curr) =>
//     Math.max(acc, ...drives.map(usb => usb + curr).filter(ku => b >= ku))
//   , -1);

// }

// console.log(getMoneySpent(keyboards, drives, b));


// *** Picking Numbers
// Problem: Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute difference between any two of the chosen integers is less than or equal to . For example, if your array is , you can create two subarrays meeting the criterion:  and . The maximum length subarray has  elements.

// Function Description

// Complete the pickingNumbers function in the editor below. It should return an integer that represents the length of the longest array that can be created.

// pickingNumbers has the following parameter(s):

// a: an array of integers

// function pickingNumbers(a) {
//     let maxcount = 0;
//     [...new Set(a)].forEach(x => {
//         maxcount = Math.max(maxcount,
//             a.reduce((c, v) => c += (v === x || v === x + 1), 0));
//     })
//     return maxcount;
// }

// What this does:

// .starting with a unique list of values that appear in the array
// .for each value in turn, count how many members of the original array are either equal to that value or value+1
// .track the highest count in maxcount
// .return the maxcount at the end
// .win



// 2D Array - DS
// Problem: Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

// For example, given the 2D array:

// -9 -9 -9  1 1 1 
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// We calculate the following  hourglass values:

// -63, -34, -9, 12, 
// -10, 0, 28, 23, 
// -27, -11, -2, 10, 
// 9, 17, 25, 18
// Our highest hourglass value is  from the hourglass:

// 0 4 3
//   1
// 8 6 6
// Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

// Function Description

// Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

// hourglassSum has the following parameter(s):

// arr: an array of integers

// function hourGlass(arr) {
//     // we could set this to 3 given the problems constraings, but this allows changes
//     maxX = 3; // + (arr[0].length % 3)
//     maxY = 3; // + (arr.length % 3)
//     total = -Infinity;  // has to be -64, but
   
//     // begin at y == 0
//     for (let y = 0; y <= maxY; y++) {
//         for (let x = 0; x <= maxX; x++) {
//             // sum the top of hourglass
//             let sum = arr[y][x] + arr[y][x+1] + arr[y][x+2];
            
//             // get the middle of hourglass
//             sum += arr[y+1][x+1];
            
//             // sum the bottom of hourglass
//             sum += arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
            
//             // don't store result to keep space complexity down
//             if (total < sum)
//                  total = sum;
//         }
//     }
    
//     return total;
// }

// function hourglassSum(arr) {
//     let max = -63;

//     for (let i = 0; i < 4; i++) {
//         for (let j = 0; j < 4; j++) {
//             let sum = arr[i + 1][j + 1];
//             for (let k = 0; k < 3; k++) {
//                 sum += arr[i][j + k];
//                 sum += arr[i + 2][j + k]
//             }
//             if (sum > max) max = sum;
//         }
//     }

//     return max;
// }




// BENCHMARKING
// Benchmarking patterns
// There are a lot of ways to run benchmarks on JavaScript snippets to test their performance. The most common pattern is the following:

// Pattern A

// var totalTime;
// var start = new Date;
// var iterations = 6;
// while (iterations--) {
//     // Code snippet goes here.
// }
// // `totalTime` is the number of milliseconds it took to execute the code snippet 6 times.
// totalTime = new Date - start;

// This places the code to be tested inside a loop and executes it a predefined number of times (in this case, 6). After that, the start date is subtracted from the end date to get the time taken to perform the operations.

// The problem(s)
// As browsers and devices get faster, benchmarks that use fixed iteration counts have a greater chance of producing 0 ms results, which are unusable.


// Pattern B
// Another approach is to calculate how many operations are performed in a period of time. This has the advantage of not requiring you to pinpoint a number of iterations, as in the previous example.

// var hz;
// var period;
// var startTime = new Date;
// var runs = 0;
// do {
//     // Code snippet goes here.
//     runs++;
//     totalTime = new Date - startTime;
// } while (totalTime < 1000);

// // Convert milliseconds to seconds.
// totalTime /= 1000;

// // period → how long each operation takes
// period = totalTime / runs;

// // hz → the number of operations per second.
// hz = 1 / period;

// // This can be shortened to:
// // hz = (runs * 1000) / totalTime;

// This snippet executes the test code for about a second, i.e. until totalTime is greater than or equal to 1000 ms.

// The problem(s)
// When benchmarking, results will vary from test to re-test due to garbage collection, engine optimizations, and other background processes. Because of this variance a benchmark should be run several times to get an average result. V8 Suite only runs each benchmark once. Dromaeo runs each benchmark five times, but could do more in an effort to reduce its margin of error. One way would be to lower the minimum time a benchmark runs from 1000 ms to 50 ms, assuming a non-buggy timer, allowing more time for repeated runs.




// *** Task

// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

// Complete the function in the editor so that it does the following:

// **Find the initial values of s1 and s2 by plugging the area and perimeter values into the formula:
//    s = (p +- sqrt(p^2 - 16*a))/4
//    where a is the rectangle's area and p is its perimeter.

// **Creates an array consisting of s1 and s2 and sorts it in ascending order.
// **Returns the sorted array.


// function sides(literals, ...expressions) {
//     // ES6 allows destructuring of arrays into multiple variables
//     const [a, p] = expressions;
//     // Perform this operation only once and assign to variable
//     const root = Math.sqrt((p*p)-(16*a))
//     const s1 = (p + root)/4;
//     const s2 = (p - root)/4;
//     // s2 will always be smaller because of the (-/+) above
//     return ([s2, s1]);
// }
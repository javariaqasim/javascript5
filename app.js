
// .....FUNCTIONS, SWITCH STATEMENTS, WHILE... DO- WHILE LOOPS.....

// ANSWER 1

// function greeting (a,b) { 
//  var i, res=a; 
//  for(i=b;i>1;i--) 
//   res*=a 
//  return res; 
// } 
// console.log (greeting());
// console.log (a,b)


// ANSWER 2

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2012));
// console.log(leapyear(2016));
// console.log(leapyear(2020));


// ANSWER 3






// ANSWER  4


// ANSWER 5

// function say(message) {   
//     console.log(message);
// }

// let result = say('Hello');
// console.log('Result:', result);

// ANSWER 6

// var str = prompt("enter the word");

// var noVowels = str.replace(/[aeiou]/gi, '');

// console.log(noVowels);



// ANSWER 7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var chars = str.toLowerCase().split("");
//     var count = 0;
    
//     for(let i = 0; i < chars.length - 1; i++) {
//       var char = chars[i];
//       var next = chars[i + 1];
      
//       if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
//         count++
//       }
//     }
    
//     return count;
//   }
  
//   function isCorrectCharacter(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }
  
//   var found = findOccurrences();
  
//   console.log(found);
  

// ANSWER 8


// ANSWER 9


// ANSWER 10


// ..............EVENTS..............


// ANSWER 1

// function Alert() {
//     var answer = confirm ("Click ok and visit the website")
//     if (answer)
//     window.location="http://www.google.com";
//     }

// ANSWER 2



// ANSWER 3

// $(document).ready(function(){
//     $("#myTable").on('click','.btnDelete',function(){
//         $(this).closest('tr').remove();
//      });
//  });


// ANSWER 5

// var count = 0;
// var btn = document.getElementById("btn");
// var disp = document.getElementById("display");

// btn.onclick = function () {
//     count++;
//     disp.innerHTML = count;
// }


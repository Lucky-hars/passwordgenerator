


// var num1 = 10.5;
// var num2 = 20;
// var sum = num1 + num2
//  var a = 5;
//  var b;
//  var sum =a/b;

//  console.log(sum)
//   console.log(sum(sum));
// string data type
// var firstname ="lucky";
// var lastname ="john";
// var fullname=`${firstname}${lastname}`; //veriable interpolation//
// console.log(fullname);
//console.log(convertedResult);//
//console.log(typeof(convertedResult));//





// let choices = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// let numbers = "1234567890";

// console.log(Math.floor(2.5));

// console.log(Math.ceil(2.5));

// console.log(Math.random()*9)|+1
// console.log(Math.random()*26)
























// var num1=firstname 
// console.log(firstname.charAt(5))
// console.log(firstname.charAt)
// toString("lucky");

// var num1=firstname
// var num2=5;
// // console.log(firstname.charAt(5) )




// //nan// -zerodivisionError

// let a = 5;
// let b = 0;
// let division = a/b  // 5/0;
// console.log(division);


// let c;

// let result = a/c;    // 5/;
// console.log(result)

//console.log(isNaN(result));console.log(isFiniteINITE(division));//




//infinite -underfind (valid input error)



//CharAt()method

// let firstname = "lucky";

// console.log(firstname.length);



// let firstname = "lucky"
// let lastcharacter = [5];//y
// let firstcharacter =firstname.charAt(0) // l
//console.log(firstname.lenth, fivecharacter);

//converting string to array 


//concatination


// let first_name = "lucky"
// let last_name ="john"
// let full_name =`${first_name} ${last_name}`//ES6 - string literals




var first_text = "the brown fox";
var second_text = "was so quick to jump"
var concattext = first_text + second_text.slice(3);
console.log(concattext)


// Number Datatype

 var num1 =parseInt ("5");
 var num2 = Number ("15");
 var add =num1 + num2; // 20

// math method

var arrNum = [1,2,10,11,5,-8]
console.log(Math.min(...arrNum));//-8
console.log(Math.max(...arrNum));//11.5


// Math.random()*// 0 to 8
// console.log(Math.floor(Math.random))


// assignment create a password with eight Character
 
/*fuction to gnerate combination password*/
function generatepass(){
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random() * str.length ) + 1;
            pass += str.charAt(char)

    }
       return pass;


}

console.log(generatepass(8));











 
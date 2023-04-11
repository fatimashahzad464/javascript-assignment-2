//....................ASSIGNMENT:2....................//



///////////////////// Q1/////////////////////////////////////

// function parent_function(value_1){
//     return function child_function(value_2){
//      console.log(value_1 + value_2);
//     }
   
// }
//  let function_1 = parent_function(4);
//  let function_2 = function_1(9);



 //////////////////////Q2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// let search = +prompt("Enter the number");
// let arr = [];

// for (let i = 10; i < 30; i++) {
//   let number = Math.round(Math.random() * 100);
//   arr.push(number);
// }

// let sorted_array = arr.sort(function(a,b){
//   if (a > b){
//     return -1;
//   }
//   return 1;
// });

// let array_length = sorted_array.length;

// let i = 0;

// function recursion(arr) {
//   if (search === arr[i]) {
//     return true;
//   } else if (i < array_length - 1) {
//     i = i + 1;
//     return recursion(arr);
//   } else {
//     return false;
//   }
// }

// if (recursion(sorted_array) == true) {
//   console.log("true");
// } else {
//   console.log("false");
// }



     ////////////////////////Q3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



// let input_text = prompt("Enter content:");
// let para = document.createElement("p");
// let parent = document.getElementsByTagName("html")[0];
// para.innerText = input_text;
// console.log(para);


    //////////////////////////Q4\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// localStorage.clear()

// let object_1 = {
//     name:"saima",
//     age: 90,
//     phone_no:"038238585456",
//     height:"4'8",
//     cnic: "234624860986",
//     eng_marks:93,
//     urdu_marks:35,
//     maths_marks:200
// }


// let object_2 = {
//     name:"kaneez",
//     age: 65,
//     phone_no:"94500684",
//     height:"4'3",
//     cnic: "8058543456-9",
//     eng_marks:50,
//     urdu_marks:80,
//     maths_marks:40
// }


// let object_3 = {
//     name:" fatime",
//     age: 19,
//     phone_no:"09960693",
//     height:"5'6",
//     cnic: "0670056o050",
//     eng_marks:90,
//     urdu_marks:30,
//     maths_marks:10
// }

// function object_saving(key , value){
//     let new_object = JSON.stringify(value);
//     localStorage.setItem(key, new_object);
// }


// object_saving(object_1);
// object_saving(object_2 );
// object_saving(object_3 );
// object_saving(object_1);
// object_saving(object_2 );
// object_saving(object_3 );

      ////////////////////////////Q5\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
  
//   const bgcolor = document.getElementById("bgcolor");
//   changeBackgroundColor(bgcolor, "red");




    /////////////////////////////////Q6\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// let computer = {
//     brand: "hp",
//     model: "XPS 16",
//     ram: "19",
//     capacity:"561GB"
// };
// function compDetails (key, obj) {
//     let json = JSON.stringify(obj);
//     localStorage.setItem(key, json);
//   }
//   compDetails("computer", computer);

  
//   let json = localStorage.getItem("computer");
//   let computerFromStorage = JSON.parse(json);
  
  
//   console.log(computerFromStorage);
 
  
  
  /////////////////////////////Q7\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// let mySelf = {
//     name: "Fatima Shahzad",
//     age: "20",
//     hobbies: "learning, coding, poetry",
//   };
  
//   localStorage.setItem("mySelf", JSON.stringify(mySelf));


//   function myData(key) {
//     let data = localStorage.getItem(key);
//     if (data) {
//       return JSON.parse(data);
//     } else {
//       return null;
//     }
//   }
  
//   let mySelfFromLocalStorage  = myData ("mySelf");
//   console.log(mySelfFromLocalStorage);



        ////////////////////////////Q8\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\           


// let schoolData = localStorage.getItem("school");

// let school = schoolData ? JSON.parse(schoolData) : [];

// function myschoolData(){
    
//     let sch = {
//         name: "The Paradise School",
//         address: "nazimabad",
//         block: "C",
//     };

//     school.push(sch);

//     console.log(school);

//     let stringify = JSON.stringify(school);

//     localStorage.setItem("school", stringify);
// }
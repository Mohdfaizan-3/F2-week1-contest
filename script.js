/** @format */
// fgit
let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
 arr.map((value)=>{
    if(value.marks>50) console.log(value.name);
  });
  
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
   arr.forEach((value)=>{
      if(value.marks>50) console.log(value.name);
    });
}

function addData() {
  //Write your code here, just console.log
  const newData = {id:4,name:"susan",age:"20",marks:45};

  arr.push(newData);
  console.log(arr);

}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr.map((value,index) =>{
    if(value.marks < 50){
      arr.splice(index,1);
    }
  })
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log

  let newArr = [
    { id: 5, name: "rahul", age: "14", marks: 56 },
    { id: 6, name: "faizan", age: "21", marks: 57 },
    { id: 7, name: "ravi", age: "23", marks: 44 },
  ];

  arr.map(value=>{
    newArr.push(value);
  })
  console.log(newArr);

}

// PrintStudentswithMap();
// PrintStudentsbyForEach();
// addData();
// removeFailedStudent();
// concatenateArray();
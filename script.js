/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  let result = arr.map((item) => {
    if (item.marks > 50) {
      return item;
    }
  });
  console.log(result);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item) => {
    if (item.marks > 50) {
      console.log(item);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", marks: 45 });
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let result = arr.filter((item) => item.marks < 50);
  console.log(result);
}

function concatenateArray() {
  //Write your code here, just console.log

  let Newarr = [];
  arr.forEach((items) =>
    Newarr.push({
      id: items.id + 1,
      name: items.name,
      age: items.age,
      marks: items.marks,
    })
  );

  console.log(Newarr);
}

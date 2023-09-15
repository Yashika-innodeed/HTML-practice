console.log("This is a log message.");
console.warn("This is a warning message.");
console.error("This is an error message.");
const data = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
  ];
  
  console.table(data);
  //console.clear();
console.time('myTimer');
// Code to be timed
console.timeEnd('myTimer');

function processItem(item) {
    console.count("Item Processing");
    // Code to process the item goes here
  }
  
  processItem("A");
  processItem("B");
  processItem("A");
  processItem("C");
  processItem("B");
  


  
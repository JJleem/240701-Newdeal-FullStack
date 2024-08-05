// 순서대로 실행하기

function displayA() {
  console.log("A");
}
function displayB() {
  setTimeout(() => {
    console.log("B");
  }, 2000);
}
function displayC() {
  console.log("C");
}
displayA();
displayB();
displayC();


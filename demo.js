///bài 1
function calculateSum() {
    var a = document.querySelector("#a").value;
    var b = document.querySelector("#b").value;
    var primeNumbers = [];
    var primeSum = 0;
    for (var i = a; i <= b; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
        primeSum += i;
      }
    }
    document.querySelector("#primeNumbers").innerHTML = "Các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + primeNumbers.join(", ");
    document.querySelector("#result").innerHTML = "Tổng các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + primeSum;
  }

  function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }


///bài 2
const c = parseInt(prompt(' g = '))

for (let g = 1; g <= c; g++) {
    for (let q = 1; q <= g; q++) {
        document.write("*")
    }
    document.write("<br />")
}
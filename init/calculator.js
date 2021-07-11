function calc(num1 , num2)
{
  var add = num1+num2;
  console.log(`${add} is the sum `);
  var sub = num1-num2;
  console.log(`${sub} is difference`);
  var divide = num1/num2;
  console.log(`${divide} is division`);
  var mul = num1*num2;
  console.log(`${mul} is product`);
}
module.exports = calc ; 
var opr = prompt("Please Enter The Operator You Want To Use: ")
var num1 = parseInt(prompt("Number 1: "))
var num2 = parseInt(prompt("Number 2: "))

if (opr == "+")
{
    window.alert(num1 + num2)
} else if (opr == "-")
{
    window.alert(num1 - num2)
} else if (opr == "*")
{
    window.alert(num1 * num2)
} else if (opr == "/")
{
    window.alert(num1 / num2)
}
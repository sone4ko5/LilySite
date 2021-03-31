/*var obj={
prop: "yo";
prop: function() {}
}
regexp=/baba/g,
func=function() {},
arr=[1,2,3];
console.log(typeof obj);
console.log(typeof regexp);
console.log(typeof func);
console.log(typeof arr);
function double(){
var a= new Number (document.getElementsByTagName('input')[0].value);
var b=+document.getElementsByTagName('input')[1].value;
var c=(a+b)/2;
document.getElementById('rez').innerHTML=c;
}
var str=new String("fdf  dfgdg dfgf g");
document.write(str.fontcolor("green")+str.length);*/

//prompt();
/*
var st="Колодко Алена Владимировна";
var f1=st.indexOf(" ");
var f2=st.lastIndexOf(" ");
document.write(st);
document.write(f1);
document.write(f2);
var arr=st.split(" ");
document.write("<br>"+arr[0]+"<br>");
document.write(arr[1]+"<br>");
document.write(arr[2]+"<br>");
document.write("<br>");
document.write(st.substr(0, f1)+"<br>");
document.write(st.substr(f1+1, f2-f1)+"<br>");
document.write(st.substr(f2+1)+"<br>");
document.write("<br>");
var st1="Колодко, Алена";
var a1=st1.indexOf(", ");
document.write(st1.substr(a1+1)+" "+st1.substr(0, a1)+"<br>");


var firstArray = new Array('red', 'yellow', 'blue');
firstArray.shift();
firstArray.unshift("pink");
document.write(firstArray);
var ss=firstArray.join("/");
document.write("<br>"+ss);
*/
var tt;
var secondArray= new Array();
do {	
	tt=parseInt(prompt("Enter", " "));
		if(tt)	secondArray.push(tt);
}
while(tt)
document.write(secondArray);
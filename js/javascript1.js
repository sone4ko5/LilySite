var arr1 = new Array("red", "green", "blue", "yellow", "pink");
for (var i=0; i<arr1.length; i++){
	document.write(arr1[i]);
}
document.write("<br>");
var ff=arr1.join("~");
document.write(ff);
document.write("<br>");
document.write(arr1.reverse());
document.write("<br>");
document.write(arr1.sort());
document.write("<br>");
var arr2 = new Array(4,44,3,2,3,4345,67,45,54,334,22,23,45,5,0)
function compareNumbers(n1, n2){
	if (n1==n2) return 0;
	if (n1>n2) return 1;
	else return -1;
}
document.write(arr2.sort());
document.write("<br>");
document.write(arr2.sort(compareNumbers));
document.write("<br>");


var a;
var arr3 = new Array();
do {
//	a=prompt("please, write number"); 
	a=parseInt(a);
	if(a) arr3.push(a);
}
while (a);

var t=0;
for (var i=0; i<arr3.length; i++){
	t=+arr[i];
	var tt=t/arr3.length;
	document.write("<br>");
	document.write(tt);	
}

var b=Math.round(Math.random()*100);
//alert(b);

var d1=new Date();

var myBook=new Object();
myBook.title="Book";
myBook.price=200;

//alert(myBook["title"]);
//alert(myBook.price);

myBook.show=function () {
	for (var i in myBook){
		document.write(i + ": " +myBook[i]+"<br>");}
}
myBook.show();

function Book(title, price) {
	this.title="";
	this.price="";
	this.show=function() {
		document.write("The name: " + this.title + "<br>");
		document.write("Cost :" + this.price);
	}
}

var book=new Book("fff", 522);
var book2=new Book("ee", 587);
book.show();
book2.show();





var num=5;
var result=num/2==0?"even":"odd";
console.log(result);


var arr=[2,4,5];
var arr2=[...arr,34567];
console.log(arr);
console.log(arr2);
//distructing operator

var marks=[5,56,34,45,78];
var[m1,m2,m3,m4,m5]=marks;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);

//callback
function demo(){
    console.log("hi demo");
    
}
var callBack=(func)=>{
    console.log("hiiiiiiiiiiiiiiiiii");
 
}
callBack(demo);

//map
var arr=[1,2,3,4,6];
 var double=arr.map(num=>num*2)
 console.log(double);

 //filter
 var odd=arr.filter(num=>num%2!==0)
    console.log(odd);

    //reduce
    var total=arr.reduce((val,num)=>val+num,0)
    console.log(total);

    //
    
var result=arr.map(num=>num*2).filter(num=>num>5).reduce((val,num)=>val+num,0)
console.log(result);
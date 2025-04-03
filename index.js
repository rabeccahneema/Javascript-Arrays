//Last element of array
const arr1=[3,7,34,90,12];
const arr2=[true,"green","where",12,56];

const newArr1=arr1[arr1.length-1];
console.log({newArr1});
const newArr2=arr2[arr2.length-1];
console.log({newArr2});

//Join array element into a string
const myPets=["Cow","Bird","Snake","Dog"];
const joinedPets=myPets.join(",");
console.log({joinedPets});

//Sort array elements
const arr3=[-5,9,5,3,2,-3,6,8,4,1];
const newarr3= arr3.sort();
console.log({newarr3});

//Remove duplicate from arrays
let arr=["boy","man","girl","school","girl","woman"];
const newArr=[...new Set(arr)];
console.log({newArr});
const duplicateArr=arr.filter((item, index) => arr.indexOf(item) !== index);
console.log({duplicateArr});

//Search for a  word in array
let arr5=["the","way","x",4];
const search="food";
const found="the search word was not found";
if(arr5.includes("food")){
    console.log({search})
}else{
    console.log({found});
    
}

//Sort string
let word="renniw";
const sort=word.split('').sort().join('');
console.log({sort});

//insert an item in array
let fruit =["mango","lemon","pineapple","orange","banana","pear","kiwi","avocado","guava"];
fruit.splice(5, 0 ,"Tomato");
console.log({fruit});










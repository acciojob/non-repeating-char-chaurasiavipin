function firstNonRepeatedChar(str) {
 // Write your code here
	let map=new Map()
  for(let char of str){
    if(map.has(char)){
      map.set(char,map.get(char)+1)
    }
    else{
      map.set(char,1)
    }
  }
  let occurence=Infinity
  let num=str[0]
  map.forEach(function(value,key){
    if(value<occurence){
        occurence=value
        num=key
        //console.log(value)
      }
      // else if(value===occurence){
      //   if(num<key)
      // key=num
      // }
      else if (value === occurence) {
      if (num > key) {
    num = key;  // Update num if key is smaller
}
        // num = num < key ? num : key;  // Choose the smaller character
    }
  })
  return num
}
}
//const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

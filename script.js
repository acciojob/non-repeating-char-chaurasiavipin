function firstNonRepeatedChar(str) {
 //
	let map=new Map()
	for(let a of str ){
		if(map.has(a)){
			map.set(a,map.get(a)+1)
}
		else{
			map.set(a,1)
			
			
		}
}
	let ans=null;
	map.forEach((value,key)=>{
       // console.log(key+"=>"+typeof(value))
		if(value==1){
ans=key
return ans
		}
		
	})
	return ans
	
	 //aab
	//aaaaaa
	//aabb
	//abc
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

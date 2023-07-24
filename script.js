function threeSum(arr, target) {
// write your code here
	arr.sort(function(a,b){return (a-b)})
	let j=0;
	let k=0;
	for(let i=0;i<arr.length;i++){
		let j=i+1;
		let k=arr.length-1;
		let sum=0;
		let ans=0;
		while(i<j){
			sum=arr[i]+arr[j]+arr[k];
			let diff=sum-target;
			if(sum<target){diff=target-sum;}
			ans=Math.max(ans,diff);
			if(sum==target){
				return 0;
			}
			else if(sum<target){j++;}
			else{k--;}
		}
	}
  return ans;
}

module.exports = threeSum;
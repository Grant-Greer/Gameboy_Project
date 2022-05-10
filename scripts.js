function changeImage(a) {
  document.getElementById("screen-img").src = a;
}

function incrementImgs(arr) {
	for (let i = 0; i < arr.length; i++)
	 arr[i]++;
	return arr;
  
}

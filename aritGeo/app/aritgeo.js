
 exports.aritGeo=function(arr) { 


var diff1 = arr[1] - arr[0];
var diff1Remove_minus=Math.abs(diff1);
var diff2= arr[2]-arr[1];
var diff2Remove_minus=Math.abs(diff2);
var ratio1 = arr[1] / arr[0];
var ratio1Remove_minus=Math.abs(ratio1);
var ratio2 = arr[2] / arr[1];
var ratio2Remove_minus=Math.abs(ratio2);
if (arr.length < 1){
	return 0;
}
else if (diff1Remove_minus=== diff2Remove_minus) {
	for (var i=2; i< arr.length -1; i++) {
		var arithRem_minus= Math.abs(arr[i + 1] - arr[i])
		
		if ( arithRem_minus == diff2Remove_minus) {
			continue;
			
		}
		else {
			return -1;
			break;
		}
	}
	
		return 'Arithmetic'
	
}
else if(ratio1Remove_minus==ratio2Remove_minus) {
	for (var i=2; i< arr.length -1; i++) {
		var geoRem_minus= Math.abs(arr[i + 1] / arr[i])
		if (geoRem_minus === ratio2Remove_minus) {
			continue;
			
		}
		else {
			return -1;
			break;
		}
	}
	return 'Geometric'
}
else {
	return -1;
}
}


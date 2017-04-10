
exports.getPrimes = function(n) {

    if (n<=0) { 
        return 'invalid input';
    }
    else if (!n) {
        return 'invalid input';
    }
    else if (typeof n==='string') {
        return 'invalid input'
    }

    outarr=[];
    count=0;

    for(var j=1;j<=n;j++){
        for(var i=1;i<=j;i++){
            if(j%i==0){
                count++;   
            }
        }
        if(j==1){
            outarr.push(j);
        }
        if(count==2){
            outarr.push(j);
        }
    count=0;
    }
return outarr;
}

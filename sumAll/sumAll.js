const sumAll = function(a,n) {

    let aTest = Number.isInteger(a);
    let nTest = Number.isInteger(n);

    if(nTest == false || nTest == false || a < 0 || n < 0){
        return 'ERROR';
    }
    else{
        if(a > n){
            [a,n] = [n,a]
        }
    const d = 1;
    let ans = (n/2)*((2*a) +((n-1)*d))
    return ans;
    }
};

module.exports = sumAll;

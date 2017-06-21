function isBigger(a,b) {
    return a>b;
}

function isSmaller(a,b) {
    return a<b;
}

function getMin() {
    var i;
    var min = arguments[0];
    for(i=0; i<arguments.length; i++) {
        if (arguments[i] > arguments[i+1])
            min = arguments[i+1];
    }
    return min;
}

function pow (x,n) {
var i, result=x;
    for(i=1; i<n;i++)
    {
        result*=x;
    }
    return result;
}
function getClosestToZero() {
    var i, result;
    result = arguments[0];
    for(i = 0; i<arguments.length; i++) {
    if(Math.abs(arguments[i])> Math.abs(arguments[i+1]))
    {
        result = arguments[i+1];
    }
    }
return result;
}
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

function sum( a, b ) {
    return a+b;
}

function difference ( a, b ) {
    return a-b;
}

function composition ( a, b ) {
    return a*b;
}

function modulo ( a, b ) {
    return a%b;
}


var D;
var x1 = 0, x2 = 0;
function discriminant(a,b,c) {
    D = b*b - (4*a*c);
    return D;
}
function root (b,a,c) {
    discriminant(a,b,c)
    x1 = (-b + Math.sqrt(D))/(2*a);
    x2 = (-b - Math.sqrt(D))/(2*a);
}
function output (a,b,c) {
    var out = console.log('Equal',a,'*x^2','+',b,'*x','+',c,'has two root ',' x1 =', x1,' x2 =', x2);
    return out;
}
function quadratic(a,b,c) {
    root(b,a,c);
    output(a,b,c);
}

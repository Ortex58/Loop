function fibonachy(n) {
    var F = [];
    for (var i = 0; i < 2; i++) {
        F[i] = 1;
    }
    for (var i = 2; i < n; i++) {
        F[i] = F[i - 1] + F[i - 2];
    }
    var s = F[F.length - 1];
    return (s + '<br>');
}
var a = prompt('Input the number of fibonachy: ' + a + '<br>');
document.write(fibonachy(a));

function recursia(n) {
    if ( n == 0) {
        return 0;
    }
    if (n == 1){
        return 1;
    }else {
        return (recursia(n-1) + recursia(n-2));
    }
}

document.write(recursia(a));
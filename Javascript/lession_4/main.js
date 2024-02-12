function writeLog(){
    var res = "";
    for (var items of arguments) {
        res += `${items}_`;
    }
    console.log(res);
}

writeLog('pham', 'duy', 'chien');

solve();
// declaration function

function solve() {
    console.log('declaration');
}

// expression function

var res = function () {
    console.log('expression')
}
// arrow function

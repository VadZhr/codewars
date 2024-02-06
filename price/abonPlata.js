var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); }); 
rl.on('line', function (data) {   
data = data.split(' ');
if(parseInt(data[3])-parseInt(data[1])>0){
    total = (parseInt(data[3])-parseInt(data[1]))*parseInt(data[2]) +parseInt(data[0])
}else{
    total =parseInt(data[0])
}
});





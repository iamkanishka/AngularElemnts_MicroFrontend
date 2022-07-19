const concat = require('concat');
(async function build(){
 const files =[
    "./dist/ngelementspay/runtime.js",
    "./dist/ngelementspay/polyfills.js",
    "./dist/ngelementspay/main.js",
 ]
 await concat(files,'./app-myPay.js');
})();

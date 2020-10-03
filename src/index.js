module.exports = function reverse (n) {
   if(n<0){
       n= -n;
   }
    let tmp = n.toString().split('').reverse().join('');
    tmp= +tmp;
    return tmp;
}

var s="she sells sea shells on the sea shore ";
var count=0
var a=s.length;
for (let i=0;i<a;i++){
    if(s[i]==" ")
    {
        count++
    }
}
console.log(`${a} letters and ${count} words`)

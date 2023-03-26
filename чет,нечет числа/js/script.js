let m = [1,443,2,454,97.43,90,12];
let ml = m.length;
let one1 = 0;
let chet = 0;
let nechet = 0;
while (one1 < ml) {   
   if (!(m[one1] % 2)) {
    chet++;
    console.log("число" ,m[one1],"четное");
   }
   else {
    nechet++;
    console.log("число" ,m[one1],"нечетное");
   }
    one1++;
}
console.log("Всего чисел", ml);
console.log("Четных чисел", chet);
console.log("Нечетных чисел", nechet);
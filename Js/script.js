//==> 1-dars Tiplar bo'limi <==//
{
//==>1-masala <==//

let a=  +prompt('L sonni kiriting');
console.log("1.) " + a/100 + " metr");
}
{
//==>2-masala <==//

let M= +prompt ("M kg ni kiriting");
console.log("2.) "+ M/1000 + "tonna");
}
{
//==>3-masala <==//

let A= +prompt("A sonni kiriting");
let B= +prompt("B sonni kiriting");
console.log("3.) " + (A - A%B)/B + " marta joylashgan");
}
{
//==>4-masala <==//

let son= +prompt("2 xonali sonni kiriting.");
console.log("4.) o'nliklar xonasidagi raqami = " + (son-son%10)/10  + "  birliklar xonasidagi raqami = "+ son%10);
}
{
//==>5-masala <==//

let son= +prompt("2 xonali sonni kiriting.");
console.log("5.) 2 xonali sonning raqamlari yig'indisi ="+ ((son-son%10)/10+son%10));
}
{
//==>6-masala <==//

let son= +prompt("2 xonali sonni kiriting.");
console.log("6.) 2 xonali sonning raqamlari ko'paytmasi = "+ (((son-son%10)/10)*(son%10)));
}
{
//==>7-masala <==//

let son= +prompt("999 dan katta sonni kiriting.");
console.log("7.) sonning yuzlari soni = " + (son-son%100)/100);
}
{
//==>8-masala <==//

let N=+prompt("Kun boshidan N sekund o'tdi");
let S= (N-N%3600)/3600;
let minut= ((N-S*3600)-(N-S*3600)%60)/60;
let sekund =N%60;
console.log("8.) Kun boshidan " + S + " soat " + minut + " minut "+ sekund +"sekund o'tdi.");
}
//==>Mantiqiy amallar <==//

{
//==>1-masala <==//

let A= +prompt("A bbutun sonni kiriting.");
if(A>0){
  console.log("Bu son musbat");
}

else console.log("Bu son musbat emas");
}
{
//==> 2-masala <==//

let A= +prompt("A sonni kiriting.");
if(A%2==1){
  console.log("Bu son toq");
}
else  console.log("Bu son toq emas");
}
{
//==> 3-masala <==//

let A = +prompt("A sonni kiriting.");
if(A%2==0){
  console.log("Bu son juft");
}
else console.log("bu son juft emas");
}
{
//==> 4-masala <==//

let a= +prompt("a sonni kiriting.");
let b= +prompt("b sonni kiriting.");

if(a>0 && b>0)
console.log("a va b sonlar musbat.true");
else console.log("a va b son manfiy.false");
}
{
//==> 5-masala <==//

let a =+prompt("a sonni kiriting.");
let b =+prompt("b sonni kiriting.");
let c =+prompt("c sonni kiriting.");
if(a>b && b>c) console.log(true);
else console.log(false);
}
{
//==> 6-masala <==//

let a =+prompt("a sonni kiriting.");
let b =+prompt("b sonni kiriting.");
let c =+prompt("c sonni kiriting.");
if(a>c && a>b){
if(a>b && b>c){
console.log("b son a va c sonlarning orasida yotadi");
}
}
else if(c>a && c>b){
if(c>b && b>a){
console.log("b son a va c sonlarning orasida yotadi");
}
}
else 
console.log("b son a va c sonlarning orasida yotmaydi");
}
{
//==> 7-masala <==//

 let a =+prompt("a sonni kiriting.");
 let b =+prompt("b sonni kiriting.");

 if(a%2==1 && b%2==1){
  console.log("Bu sonlar toq");
 }
else console.log("Bu sonlar toq emas yoki hech bo'lmaganda 1tasi toq");
}
{
//==> 8-masala <==//

let a =+prompt("a sonni kiriting");
let b =+prompt("b sonni kiriting");
let c =+prompt("c sonni kiriting");
let d =+prompt("d sonni kiriting");
if(a>0 && b>0 && c>0 && d>0)
console.log("Bu sonlarning hammasi musbat");
else 
console.log("Bu sonlarning hammasi ham musbat emas");
}
{
//==> 9-masala <==//

let a =+prompt("a sonni kiriting");
let b =+prompt("b sonni kiriting");
let c =+prompt("c sonni kiriting");
if((a>0 && b>0) && c>0)
console.log("Bu sonlarning hammasi musbat");
else if((a>0 && b>0) && c<0)
console.log("Bu sonlarning 2 tasi musbat");
else if((a>0 && c>0) && b<0)
console.log("Bu sonlarning 2 tasi musbat");
else if((b>0 && c>0) && a<0)
console.log("Bu sonlarning 2 tasi musbat");
else console.log("bu sonning hammasi manfiy yoki kamida 1tasi musbat");
}
{
//==> 10-masala <==//

let k=+prompt("hafta kunini kiriting");
if(k==1) console.log(k +" - kun dushanba");
else if(k==2) console.log(k +" - kun seshanba");
else if(k==3) console.log(k +" - kun chorshanba");
else if(k==4) console.log(k +" - kun payshanba");
else if(k==5) console.log(k +" - kun juma");
else if(k==6) console.log(k +" - kun shanba");
else if(k==7) console.log(k +" - kun yakshanba");
else console.log("bunday hafta kuni yo'q");
}
{
//==> 11-masala <==//

let n=+prompt("Telefon raqam kodini kiriting.");
if(n==99) console.log("Uzmabile");
else if(n==93) console.log("Ucell");
else if(n==90) console.log("Beeline");
else  console.log("dasturga bunday raqam kompaniyasi kiritilmagan");
}
{
//==> 12-masala <==//

let a=+prompt("Butun son kiriting");
if(a>0) a++;
else a--;
console.log(a);
}
{
//==> 13-masala <==//

let a=+prompt("Butun son kiriting");
if(a>0) a+=3;
else a-=2;
console.log(a);
}
{
//==> 14-masala <==//

let a=+prompt("1-sonni kiriting");
let b=+prompt("2-sonni kiriting");
if(a>b) console.log(a+" soni "+ b+ " sonidan katta");
else if(b>a) console.log(b+" soni "+ a+ " sonidan katta");
else console.log("bu sonlar teng");
}
{
//==> 15-masala <==//

 let a=+prompt("1-sonni kiriting");
 let b=+prompt("2-sonni kiriting");
 let c=+prompt("3-sonni kiriting");
if(a>=b && a>=c) console.log(a+" soni kattasi");
else if(b>=a && b>=c) console.log(b+" soni kattasi");
 else if(c>=b && c>=a) console.log(c+" soni kattasi");

}
{
  //==> 16-masala <==//
  
   let a=+prompt("1-sonni kiriting");
   let b=+prompt("2-sonni kiriting");
   let c=+prompt("3-sonni kiriting");
  if(a<=b && a<=c) console.log(a+" soni kichigi");
  else if(b<=a && b<=c) console.log(b+" soni kichigi");
   else if(c<=b && c<=a) console.log(c+" soni kichigi");
  
  }
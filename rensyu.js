console.log("ax+by=1を解くプログラム");
let a=prompt("a=");
let b=prompt("b=");
let q1=[];
let r1=[];
let a1=[];
let b1=[];
let c1=[];
let d1=[];
let i=0;
let q=a/b|0;                         //商を求める
let r=a%b;                          //あまりを求める
q1.push(q);
r1.push(r);
a1.push(a);
b1.push(b);


console.log(a+"="+q+"*"+b+"+"+r);


while(r!=0){                        //あまり０まで計算する
  a=b;
  b=r;

  q=a/b|0;
  r=a%b;
  q1.push(q);
  r1.push(r);
  a1.push(a);
  b1.push(b);

  console.log(a+"="+q+"*"+b+"+"+r);  //ユークリッドの互除法の表示

  i=i+1;
}
i=i-1;                                  //あまりないところは除く
console.log(" ");                       //改行

for(let j=i;j>=0;j--){                 //あまり＝の形に変形
  console.log(r1[j]+"="+a1[j]+-q1[j]+"*"+b1[j]);
}

console.log(" ");

c1[i]=1;                                //一次不定方程式を解くプログラム
d1[i]= (-q1[i]);
console.log("1="+"("+c1[i]+")"+"*"+a1[i]+"+"+"("+d1[i]+")*"+b1[i]);

while(i!=0){
  i=i-1;
  c1[i]= d1[i+1];
  d1[i]= (1-c1[i]*a1[i])/b1[i];
  console.log("1="+"("+c1[i]+")"+"*"+a1[i]+"+"+"("+d1[i]+")*"+b1[i]);
}
console.log("x="+c1[i]+"+"+b1[i]+"*t");
console.log("y="+d1[i]+"-"+a1[i]+"*t");

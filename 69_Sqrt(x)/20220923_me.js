var mySqrt = function(x) {
  //1 ~ 100 사이에 있는 숫자인지 체크
  //101 ~ 400
 
 if(x === 0) return 0;
  if (x === 1) return 1;
  
 
 let sqrt =  2;
 
 while(sqrt <= x){
     if(sqrt * sqrt === x){
         return sqrt
     }else if(sqrt * sqrt > x){
         return sqrt - 1;
     }else if(sqrt * sqrt < x){
         sqrt++;
     }
 }
 
};
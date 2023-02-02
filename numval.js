function telephoneCheck(ch) {
    let p=0;
    ch=ch.replaceAll(' ','-');
    if(ch[0]==1){
          if(ch[1]=='-'){
              ch=ch.slice(2,ch.length);  
          }
          else{
              ch=ch.slice(1,ch.length);
          }
      }
      for(let i=0;i<ch.length;i++){
          if(ch[i]=='('){
            p=1;
          }
          if(ch[i]==')'&&(p==0||p==2)){
            return false;
          }
          if(ch[i]==')'&&p==1){
            p=2;
          }
          /*if(ch[i]=='('&&p==1){
            return false;
          }*/
         }
         if(p==1){
            return false;
          }
  
      let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re.test(ch);
    
      }
    telephoneCheck("555-555-5555");
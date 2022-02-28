function myfunction()
{
    const month=[31,28,31,30,31,30,31,31,30,31,30,31];
    const inputbday=document.getElementById('birthday').value;
    const inputAtd=document.getElementById('atd').value;
    //convert the user input input into date object
    let bdaydate = new Date(inputbday);
    let Adtdate = new Date(inputAtd);
    // extract the year,month and date from user data input
     let bdayYear=bdaydate.getFullYear();
     let bdayMonth=bdaydate.getMonth()+1;
     let bdayDay=bdaydate.getDate();

     let adtYear=Adtdate.getFullYear();
     let adtMonth=Adtdate.getMonth()+1;
     let adtDay=Adtdate.getDate();

     leapYear(adtYear);
     if(bdayYear>adtYear || bdayMonth > adtMonth && bdayYear===adtYear || bdayDay>adtDay && bdayMonth === adtMonth && bdayYear===adtYear)
     {
         alert("Not Yet BORN !");
         return;
     }
     let diffYear=adtYear-bdayYear;
     let diffMonth,diffDay;
     if(adtMonth>=bdayMonth){
          diffMonth=adtMonth-bdayMonth;
     }else{
         diffYear--;
         diffMonth=12+adtMonth-bdayMonth;
     }
     if(adtDay>=bdayDay){
         diffDay=adtDay-bdayDay;
     }else{
         diffMonth--;
         let days=month[adtMonth-1];
         diffDay=days+adtDay-bdayDay;
         if(diffMonth<0){
             diffMonth=11;
             diffYear--;
         }
     }
     //test leap year
     function leapYear(year){
         if((year % 4 ==0)&& (year % 100 !=0) || (year % 400==0)){
             month[1]=29;
         }else{
             month[1]=28;


         }
     }
     // display result
  document.getElementById('resYear').innerHTML=diffYear;
  document.getElementById('resMonth').innerHTML=diffMonth;
  document.getElementById('resDays').innerHTML=diffDay;
    
}
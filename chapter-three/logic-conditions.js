// function yearCount(day) {
//     const year = Math.floor(day / 365);
//     const remainDayFromYear = day % 365;
//     const month = Math.floor(remainDayFromYear / 30);
//     const remainDayFromMonth = remainDayFromYear % 30;
  
//     const yearStr = year > 0 ? `${year} year${year > 1 ? "s" : ""}` : "";
//     const monthStr = month > 0 ? `${month} month${month > 1 ? "s" : ""}` : "";
//     const dayStr = remainDayFromMonth > 0 ? `${remainDayFromMonth} day${remainDayFromMonth > 1 ? "s" : ""}` : "";
    
//     const resultArr = [yearStr, monthStr, dayStr].filter(Boolean);
//     const result = resultArr.length === 0 ? "0 days" : resultArr.join(" ");
    
//     console.log(`Total ${result}`);
//   }
  
//   yearCount(1091); // Output: "Total 2 years 11 months 26 days"

function yearCount(day)


    let year = Math.floor(day / 365)
    let remainDayFromYear = day % 365
    let month = Math.floor(remainDayFromYear / 30.41)
    let remainDayFromMonth = Math.round( remainDayFromYear % 30.41)

    if( day % 365 === 0){
        console.log(`Total ${year} year`)
    }
    if(day % 365 !== 0 && remainDayFromYear % 30.41 === 0 ){
        console.log(`Total ${year} year ${month} month`)
    }
    if(day % 365 !== 0 && remainDayFromYear % 30.41 !== 0 ){
        if(remainDayFromMonth === 30){
            month++
            console.log(`Total ${year} year ${month} month`)
        }
        else{
            console.log(`Total ${year} year ${month} month ${remainDayFromMonth}day`)
        }
    }
    if(day < 365){
        console.log(`Total ${month} month ${remainDayFromMonth} day`)
 
    
   


}

 
  yearCount(1091)
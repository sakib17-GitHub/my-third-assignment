// kilometerToMeter
function kilometerToMeter (kilometer){
   
    if( kilometer>=0){
        var meter = kilometer*1000;
        return meter;       
    }
    return "Please Check Your Input";
}

 var yourKilometer = kilometerToMeter(10);
 console.log(yourKilometer); 



// budgetCalculator

function budgetCalculator (watch, phone , laptop){
     
    if(watch>=0 && phone>=0 && laptop>=0 ){
       var priceWatch = watch*50 ;
       var  pricePhone = phone*100 ;
       var  priceLaptop = laptop*500 ;

       var totalCost =  priceWatch +  pricePhone +  priceLaptop ;
       return totalCost;
    }
   
       return "Please Check Your Input";
      
}

var total = budgetCalculator (1, 1 , 1);
console.log(total);



// hotelCost
function hotelCost (days){
    if (days>=0){
        var cost = 0;

    if(days<=10){
        cost = days*100;
        return cost;
    }
    else if (days<=20){
        var firstTenDaysCost = 10*100;
        var remainingDays = days-10;
        var secondCost = remainingDays*80;
        var cost = firstTenDaysCost + secondCost;
        return cost;
    }
    else {
        var firstTenDaysCost = 10*100;
        var secondTenDaysCost = 10*80;
        var remainingDays = days-20;
        var remainingDaysCost = remainingDays*50;
        var cost = firstTenDaysCost + secondTenDaysCost + remainingDaysCost;
        return cost;
    }
      
    }
    return "Please Check Your Days";
} 

var yourTotalCost = hotelCost (100) ;
console.log(yourTotalCost);




// megaFriend
var names = ["sakib", "hossain", "polash"]

    function megaFriend (names){
   
        var maxPosition = 0;
        var longestName = "";
        for (var i = 0; i< names.length ; i++){
            if(names[i].length > maxPosition){
                var maxPosition = names[i].length;
                longestName = names[i];               
            }        
        }
        return longestName; 
        }

var findLongestName = megaFriend (names);
console.log(findLongestName);





// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    if (pickUp >= 42) {
        return pickUp - 42;
    } else {
        return 42 - pickUp;
    }    
}

 function distanceFromHqInFeet(pickUp) {
    if (distanceFromHqInBlocks(pickUp) < 42) { 
        return distanceFromHqInBlocks(pickUp) * 264;
    } else { 
     return distanceFromHqInBlocks(pickUp) * 264;
    }
 }

 function distanceTravelledInFeet(startingPoint, endingPoint) {
    if (startingPoint > endingPoint) {
        return (startingPoint - endingPoint) * 264;
    } else {
        return (endingPoint - startingPoint) * 264;
    }
 }

 function calculatesFarePrice(Start , destination){
    if (distanceTravelledInFeet(Start , destination) > 2500) {
       return 'cannot travel that far'
    }
    else if (distanceTravelledInFeet(Start , destination) > 2000 && distanceTravelledInFeet(Start , destination) <= 2500)  {
        return  (distanceTravelledInFeet(Start , destination) * 0 + 25);
   }
        else if (distanceTravelledInFeet(Start , destination) > 400 && distanceTravelledInFeet(Start , destination) <= 2000) {
               return (distanceTravelledInFeet(34 , 32) - 400) * 0.02
       }    
        else if (distanceTravelledInFeet(Start , destination) < 4000) {
                return (distanceTravelledInFeet(Start , destination) - 400) * 0.0
   }
           
}


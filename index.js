// Code your solution in this file!
function distanceFromHqInBlocks(street, street2){
    return(street2 - street) + ('Blocks')
}
console.log(distanceFromHqInBlocks(5, 10))

function distanceFromHqInFeet(street, street2){
distanceFromHqInBlocks(street, street2);
if(distanceFromHqInBlocks = street2 - street)
    return(distanceFromHqInBlocks * 264) + 'Ft'
}
console.log(distanceFromHqInFeet(43, 50))

function distanceTraveledInFeet(start, destination){
    return((destination - start) * 264 +'Ft')
}
console.log(distanceTraveledInFeet(27, 52))

function calculatesFarePrice(start, destination){
    console.log(distanceTraveledInFeet(start, destination))
    if(((destination - start) * 264) < '2500'){
        return( ((destination - start) * 264) * .02 + 'Dollars')
    } else {
        return('Sorry, Over The Limit!')
    }
}
    
console.log(calculatesFarePrice(27, 52))
console.log(calculatesFarePrice(50, 52))
const binarySearch = (items, searchItem) => {
    /** 
     1. find the lowest and the hight index and point the to a vairable, and 
        while lowest is less than or equal to highest index
     2. calculate the average of the lowest and highest and compaire the value  to the 
        serach item.
     3. if it is equal to the rearch item return , else
     5. if the index value of the average it less than search item set maximum 
        to mid minus one, else set minimum to mid plus one;
     */
    //to store minimum and maximum index;
    let minimum = 0, maximum = items.length - 1;
    while (minimum <= maximum) {
        //to calculate mid-point of the items index
        let midPoint = Math.floor((minimum + maximum) / 2)
        //check if items at mid-point is equal to the search item
        if (items[midPoint] === searchItem) return true
        //to either increment or decrement mid point
        else if (items[midPoint] < searchItem) minimum = midPoint + 1
        else maximum = midPoint - 1
    }
    return false;
}
//Driver code
let items = [], n = 1000000;
for (let i = 0; i < n; i++) {
    items.push(i);
}
console.log(binarySearch(items, 56523))
function findFirstRepeated(gifts) {
    const obj = {};
    for(const gift of gifts){
        if(obj[gift] !== undefined){
            return gift;
        }
        obj[gift] = 1;
    }
    return -1;
}
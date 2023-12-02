function findFirstRepeated(gifts: number[]): number {
  const repeated = {};
  for(const gift of gifts){
      if(repeated[gift] !== undefined){
          return gift;
      }
      repeated[gift] = 1;
  }
  return -1;
}
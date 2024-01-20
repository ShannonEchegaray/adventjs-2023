/** 
* @function drawGift
* @param {number} size 
* @param {string} symbol 
*/
function drawGift(size, symbol) {
  if(size === 1) return "#\n";
  const totalSize = (size * 2) - 1;

  const result = Array.from({length: totalSize}, (_, i) => {
    const spacing = Math.max(totalSize - size - i, 0);
    const otherFaceSize = i < totalSize / 2 
      ? (totalSize - spacing - size) 
      : totalSize - size - (i % size) - 1;
    const isInCorner = i === 0 || i === totalSize - 1;
    const isIntersection = i % size === size - 1;
    const line = 
        " ".repeat(spacing) 
      + "#".repeat(isInCorner || isIntersection ? size : 1) 
      + symbol.repeat(isInCorner || isIntersection ? 0 : size - 2)
      + "#".repeat(isInCorner || isIntersection ? 0 : 1)
      + symbol.repeat(otherFaceSize > 1 ? otherFaceSize - 1 : 0)
      + "#".repeat(isInCorner ? 0 : 1);
    return line;
  }).join("\n")
  
  return result + "\n";
}

const test1 = drawGift(4, '+');
console.log(test1);
const test2 = drawGift(5, '*');
console.log(test2);
const test3 = drawGift(1, '^');
console.log(test3);
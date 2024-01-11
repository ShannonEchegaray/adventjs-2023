/** 
* @param {string} movements
* @returns {number}
*/
function maxDistance(movements) {
  const MAP = {
    "<": "left",
    ">": "right",
    "*": "wildcard"
  }
  const { left, right, wildcard } = movements.split("").reduce((acc, char) => {
    acc[MAP[char]]++
    return acc;
  }, {
    left: 0,
    right: 0,
    wildcard: 0
  })

  const maxLeft = left + wildcard - right;
  const maxRight = right + wildcard - left;

  return Math.max(maxLeft, maxRight);
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
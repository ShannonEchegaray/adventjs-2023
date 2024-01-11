// FIRST TRY
//TODO: Find a better solution

/** 
* @function cyberReindeer
* @param {string} road
* @param {number} time
* @returns {string[]}
*/
function cyberReindeer(road, time) {
  const firstBarrierIndex = road.indexOf("|");
  const sledIndex = road.indexOf("S");

  const roads = Array.from({ length: time }, (_, index) => {
    const withoutS = road.replace("S", ".");

    const newSIndex = index < 5
      ? sledIndex + index >= firstBarrierIndex ? firstBarrierIndex - 1 : sledIndex + index
      : sledIndex + index - (5 - firstBarrierIndex - sledIndex);
    const withS = withoutS.slice(0, newSIndex) + "S" + withoutS.slice(newSIndex + 1);
    return index >= 5 ? withS.replaceAll("|", "*") : withS
  });

  return roads;
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)
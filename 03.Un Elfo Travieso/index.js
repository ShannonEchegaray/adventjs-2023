function findNaughtyStep(original, modified) {

  const max = original.length >= modified.length ? original : modified;

  for(let i = 0; i < max.length; i++){
    const originalChar = original[i];
    const modifiedChar = modified[i];

    if(originalChar === modifiedChar){
      continue;
    }
    return original.length > modified.length
      ? originalChar
      : modifiedChar
  }
  return ''
}
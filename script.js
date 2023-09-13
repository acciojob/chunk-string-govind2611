function stringChop(inputString, chunkSize) {
  if (inputString === null) {
    return [];
  }

  const result = [];
  let startIndex = 0;

  while (startIndex < inputString.length) {
    const chunk = inputString.slice(startIndex, startIndex + chunkSize);
    result.push(chunk);
    startIndex += chunkSize;
  }

  return result;
}

console.log(stringChop(null, 5)); 
console.log(stringChop("abc", 5));
console.log(stringChop("Hello, world!", 5)); console.log(stringChop("12345", 2)); // ["12", "34", "5"]

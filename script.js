function stringChop(str, size) {
  if (str === null) {
    return [];
  }

  const result = [];
  let startIndex = 0;

  while (startIndex < str.length) {
    const chunk = str.slice(startIndex, startIndex + size);
    result.push(chunk);
    startIndex += size;
  }

  return result;
}

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
const chunks = stringChop(str, parseInt(size, 10));
alert(JSON.stringify(chunks));

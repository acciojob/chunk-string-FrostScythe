function stringChop(str, size) {
  // If input is null or empty, return empty array
  if (!str) return [];

  const chunkSize = Number(size); // convert size to number
  if (isNaN(chunkSize) || chunkSize <= 0) return []; // invalid size

  const result = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    result.push(str.slice(i, i + chunkSize));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

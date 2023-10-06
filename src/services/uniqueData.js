export function selectionUniqueData(array) {
  let unique = new Set();

  let findData = [];

  for (let i = 0; i < array.length; i++) {
    let elemen = array[i];

    if (!unique.has(elemen)) {
      unique.add(elemen);
      findData.push(elemen);
    }
  }

  return findData;
}

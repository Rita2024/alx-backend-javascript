export default function iterateThroughObject(reportWithIterator) {
  const result = [];

  for (const department of reportWithIterator) {
    for (const employee of department) {
      result.push(employee);
    }
  }

  return result.join(' | ');
}

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  console.log(`Querying API at endpoint: ${endpoint}`);
  weakMap.set(endpoint, { result: 'Some data from API' });
}

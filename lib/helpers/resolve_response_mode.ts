export function resolve(responseType: string|undefined) {
  if (responseType && responseType.includes('token')) {
    return "fragment";
  }
  else {
    return "query";
  }
}

export function isFrontChannel(responseType: string|undefined): boolean {
  return resolve(responseType) === 'fragment';
}

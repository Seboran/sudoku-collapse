export function createEmptyGrille<T>(clazz: new (...args: any[]) => T): T[][] {
  return Array(9)
    .fill(0)
    .map(() => Array(9).fill(new clazz()))
}

/**
 * return true is a is empty or non empty valid string
 */
export const isString = (a: any) => {
  return typeof a === 'string';
};

/**
 * return true if a is non empty valid string
 */
export const isNonEmptyString = (a: any): boolean => {
  return !!(isString(a) && a !== '');
};

/**
 * @flow
 */

import type {RefObject} from 'shared/ReactTypes';

// 具有单个可变值的不可变对象
// an immutable object with a single mutable value
export function createRef(): RefObject {
  const refObject = {
    current: null,
  };
  if (__DEV__) {
    // seal 密封 对象属性可以编辑，但是属性不能被删除，这样就保护了对象的key
    Object.seal(refObject);
  }
  return refObject;
}

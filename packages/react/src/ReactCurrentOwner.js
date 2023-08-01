/**
 * @flow
 */

import type {Fiber} from 'react-reconciler/src/ReactInternalTypes';

/**
 * 跟踪当前所有者
 * Keeps track of the current owner.
 * 当前所有者是应该拥有当前正在构造的任何组件的组件。
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
const ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: (null: null | Fiber),
};

export default ReactCurrentOwner;

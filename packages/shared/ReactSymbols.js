/**
 *
 * @flow
 */

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'

// The Symbol used to tag the ReactElement-like types.
export const REACT_ELEMENT_TYPE: symbol = Symbol.for('react.element');
export const REACT_PORTAL_TYPE: symbol = Symbol.for('react.portal');
export const REACT_FRAGMENT_TYPE: symbol = Symbol.for('react.fragment');
export const REACT_STRICT_MODE_TYPE: symbol = Symbol.for('react.strict_mode');
export const REACT_PROFILER_TYPE: symbol = Symbol.for('react.profiler');
export const REACT_PROVIDER_TYPE: symbol = Symbol.for('react.provider');
export const REACT_CONTEXT_TYPE: symbol = Symbol.for('react.context');
export const REACT_SERVER_CONTEXT_TYPE: symbol = Symbol.for(
  'react.server_context',
);
export const REACT_FORWARD_REF_TYPE: symbol = Symbol.for('react.forward_ref');
export const REACT_SUSPENSE_TYPE: symbol = Symbol.for('react.suspense');
export const REACT_SUSPENSE_LIST_TYPE: symbol = Symbol.for(
  'react.suspense_list',
);
export const REACT_MEMO_TYPE: symbol = Symbol.for('react.memo');
export const REACT_LAZY_TYPE: symbol = Symbol.for('react.lazy');
export const REACT_SCOPE_TYPE: symbol = Symbol.for('react.scope');
export const REACT_DEBUG_TRACING_MODE_TYPE: symbol = Symbol.for(
  'react.debug_trace_mode',
);
export const REACT_OFFSCREEN_TYPE: symbol = Symbol.for('react.offscreen');
export const REACT_LEGACY_HIDDEN_TYPE: symbol = Symbol.for(
  'react.legacy_hidden',
);
export const REACT_CACHE_TYPE: symbol = Symbol.for('react.cache');
export const REACT_TRACING_MARKER_TYPE: symbol = Symbol.for(
  'react.tracing_marker',
);
export const REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED: symbol = Symbol.for(
  'react.default_value',
);

export const REACT_MEMO_CACHE_SENTINEL: symbol = Symbol.for(
  'react.memo_cache_sentinel',
);

const MAYBE_ITERATOR_SYMBOL = Symbol.iterator;

/**
 *
 * @@iterator  Array类增加了一个@@iterator属性，需要通过Symbol.iterator来访问，
    不断调用迭代器的next方法，就能依次得到数组中的值

 */
const FAUX_ITERATOR_SYMBOL = '@@iterator';

/**
 * 不是Array类型，但是有迭代器，能遍历的情况
 * @param {*} maybeIterable
 * @returns
 */
export function getIteratorFn(maybeIterable: ?any): ?() => ?Iterator<any> {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  const maybeIterator =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

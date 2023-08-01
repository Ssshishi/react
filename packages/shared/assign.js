/**
 * @flow
 */

// 合并对象内部基础类型，后面的覆盖前面的，只能合并可迭代的基础类型
// https://www.php.cn/faq/462354.html
const assign = Object.assign;

export default assign;

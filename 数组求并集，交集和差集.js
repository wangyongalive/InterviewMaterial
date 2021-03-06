let a = new Set([1, 2, 3]);
let b = new Set([3, 5, 2]);

// 并集
let unionSet = new Set([...a, ...b]); //[1,2,3,5]

// 交集
let intersectionSet = new Set([...a].filter(x => b.has(x)));// [2,3]

// ab差集
let differenceABSet = new Set([...a].filter(x => !b.has(x)));

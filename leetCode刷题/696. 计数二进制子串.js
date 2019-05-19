// 696. 计数二进制子串
// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，
// 并且这些子字符串中的所有0和所有1都是组合在一起的。
// 重复出现的子串要计算它们出现的次数。

// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
// 请注意，一些重复出现的子串要计算它们出现的次数。
// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。

// 解题思路
// 统计连续出现的次数  并放到数组中
// 比如001101000这个字符串，那么统计数组中的值应该是2,2,1,1,3
// 那么总的次数就是min（2,2）+min（2,1）+min（1,1）+min（1,3），
// 因为要找的是1和0相等的组合，所以一定在交界处出现，
// 并且个数等于0和1中最小的那个，比如00011那么0的个数右3个，1的个数有2个，
// 那么组合就有01,0011这两个

let subStr = (str) => {
    // 统计连续的0或者1的个数存进一个数组
    // 总的组合数就是相邻的个数的最小值的加和
    let result = str.match(/([0]+)|([1]+)/g);
    result = result.map(item => item.length);
    result.unshift(0); // 向最开始添加一个0 保证
    // 相邻之间最小值求和
    let sum = result.reduce(function (pre, current, index, array) {
        return pre + Math.min(current, array[index - 1]);
    });
    return sum;
};
console.log(subStr('00110011'));
console.log(subStr('10101'));

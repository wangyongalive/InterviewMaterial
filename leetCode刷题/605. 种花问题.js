// 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。
// 可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
// 给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。
// 能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

/*
* 在首位都加上一个0 这样就不用考虑边界问题
* */

var canPlaceFlowers = function (flowerbed, n) {
    flowerbed.push(0);
    flowerbed.unshift(0);
    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i - 1] == 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
            n--;
            i++;
        }
    }
    return n <= 0 ? true : false;
};
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));

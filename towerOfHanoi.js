function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, 'A', 'B', 'C');

// Big-O => O(2^n).     // The time complexity is exponential because each move requires two recursive calls for the remaining disks.
// actual complexity is 2^n - 1 moves, where n is the number of disks.
// Study about master theorem for more details.
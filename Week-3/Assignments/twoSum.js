function twoSum(nums, target) {
    const collect = {};
    for (let i = 0; i < nums.length; i++) {
        const fulfill = target - nums[i];
        // if fulfill is already found
        if (fulfill in collect) {
            return [collect[fulfill], i];
        } else {
        collect[nums[i]] = i;
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
// should returns: [0, 1] Because: nums[0] + nums[1] is 9

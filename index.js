function uniqueOccurrences(arr) {
    let uniqueArr = [...new Set(arr)]
    let countArr = []
    for (let i = 0; i < uniqueArr.length; i++) {
        countArr.push(arr.filter(item => {
            return item == uniqueArr[i]
        }).length)
    }
    console.log(countArr);
    return countArr.length == new Set(countArr).size
};
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true

function uninqueOccurrences(arr) {
    let uniqueArr = [...new Set(arr)]
    let countArr = []

}
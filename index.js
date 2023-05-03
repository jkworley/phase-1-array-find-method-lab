
function superbowlWin(arr) {
    let findWin = arr.find(item => item.result === "W");
    if (typeof findWin === 'object') {
        return findWin.year;
    } else {
        return findWin;
    }
}
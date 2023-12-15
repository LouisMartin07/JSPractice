function getUnique(arr) {
    let tempArr = arr.map(item => item.company);
    return[...new Set(tempArr)];
}

function getUnique(arr) {
return [
    ...arr.reduce((acc,curr) => {
    acc.add(curr.company)
    return acc
    }, new Set())];
}
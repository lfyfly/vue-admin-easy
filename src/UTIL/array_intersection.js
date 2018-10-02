// 求来个数组的交集
export default (arr1, arr2) => {
  let arr = []
  arr2.forEach(item => {
    if (arr1.indexOf(item) !== -1) arr.push(item)
  })
  return arr
}

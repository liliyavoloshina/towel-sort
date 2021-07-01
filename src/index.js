// You should implement your task here.

module.exports = function towelSort(matrix) {
  let combined = []
  for (m in matrix) {
    let units = []
    if (m % 2 == 0) {
      let unit = [...matrix[m]] 
      units.push(...unit)
    } else {
      let unit = [...matrix[m]].reverse()
      units.push(...unit)
    }
    combined.push(...units)
  }
  return combined
}

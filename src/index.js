
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let combined = []
  for (let m in matrix) {
    combined.push(...matrix[m])
  }
  return combined
}

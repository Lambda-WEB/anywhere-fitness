export function arrayByPage(arr, pageSize, pageNum) {
  return arr.slice((pageNum-1)*pageSize, pageNum*pageSize);
}
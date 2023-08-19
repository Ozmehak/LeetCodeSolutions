let list1 = [1,2,4]
let list2 = [1,3,4]
let list3 = []

var mergeTwolists = function(list1, list2) {
  if (list1.length < 1 && list2.length < 1){
    console.log(list3)
  return list3}
  else if (list1.length < 1) {
    console.log(list2)
    return list2
  }
  else if (list2.length < 1) {
    console.log(list1)
    return list1
  }
  else {
    list3.push(list1.shift());
    list3.push(list2.shift());
    return mergeTwolists(list1, list2)
  }
}
mergeTwolists(list1, list2)


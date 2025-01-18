let val1 = 10
let val2 = 5
function addNum (nums1, nums2) {
    let total = nums1 + nums2
    return total
}
let result1s = addNum (val1, val2)
let result2 = addNum (10, 2)

// Step 1 : Execute in the global execution locate in (this)
// Step 2 : In memory phase all the values are kept
// val1 = undefined
// val2 = undefined
// addNum = defination
// result1 = undefined
// result2 = undefined
// Executin Phase : val1 = 10
// val2 = 5
// addNum = creat new environment execution context
// repeat the memory creation and execution phase for this function
// Now in Memory Phase :
// val1 = undefined
// val2 = undrfined
// total = undefined
// Exection Phase
// nums1 = 10
// nums2 = 5
// total = 15
// total is return by the global rxrction context
// Then new environment execution context (deleted)
// Complete one result1

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userfn){
        // const originalArr = this

        for(let i=0; i<this.length; i++){
            userfn(this[i], i)
        }
    }
}


const arr = [1,2,3,4,5,6]

// .forEach

// no return, function input, value, index 
// call my fn for every value

arr.myForEach(function(value,index){
    console.log(`value at index ${index} is ${value}`)
})



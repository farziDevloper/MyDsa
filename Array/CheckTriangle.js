//  Program to check if a triangle is scalene, isosceles or equilateral.
let arr = [4, 4,2];
    const checkTriangle = (arr) => {
        if(arr.length !== 3){   
            return "Not a Triangle"
        }else if(arr[0] ==0 || arr[1]==0 || arr[2]==0){
        return "Not a valid input"
    }
    else if((arr[0] === arr[1] && arr[1]=== arr[2] && arr[2]  === arr[0])){
            return "Equilateral Triangle"
        }else if(arr[0] == arr[1] || arr[1] == arr[2] || arr[2] == arr[0] ){
                return "Isosceles Triangle"
        }else{
            return "scalene Triangle"
        }
        // return arr.length
        // arr.length !== 3 ?  "Not a Triangle" :( arr[0] === arr[1] === arr[2]) ? "Equilateral Triangle"  : (arr[0] == arr[1] || arr[1] == arr[2] || arr[2] == arr[0] ) ?  "Isosceles Triangle" : "scalene Triangle"

   
    }

 
   console.log( checkTriangle(arr));
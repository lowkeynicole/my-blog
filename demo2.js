//calculator that adds 2 numbers performs addition subtraction multiplication and division

const calculator = (num1, num2, operation)=>{
    for(let i = 0; i<operation.length; i++){
       switch(operation[i]){
        case 'addition':
            console.log(num1 + num2);
            break;
        case 'subtraction':
            console.log(num1 - num2);
            break;
        case 'multiply':
            console.log(num1 * num2);
            break;
        case 'divide':
             console.log(num1 / num2);
            break;
       }
    }
}

const arr = ['addition', 'subtraction', 'multiply', 'divide'];

calculator(3,4, arr);
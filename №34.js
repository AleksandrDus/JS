
    function f(day) {
    if (typeof day === 'number') {
        
        switch(day) {
            
            case 1:
            console.log('Понедельник')
            break;

            case 2:
                console.log('Вторник')
                break;
                case 3:
                console.log('Среда')
            break;
            case 4:
                 console.log('Черверг')
            break;
            case 5:
                console.log('Пятница')
            break;
            case 6:
                 console.log('Суббота')
            break;
            case 7:
                 console.log('Воскресенье')
            break;

            default: 
                 console.log('Error: parameter should be in the range of 1 to 7')
                 
        }
                } else {


        throw new Error('parameter type is not a Number')
    }
    
}   
    
f(1)
f(7)
f(9)
f('1')
    var color = 'green';

    switch (color) {
        case 'red':
            console.log('color is red');
            break;
        case 'blue' :
            console.log('color is blue');
            break;
        case 'green' :
            console.log('color is green');
            break;
            default:
            console.log('color is not found');
    }

        var frndsAge = [ 50, 60, 25, 30, 40, 64, 70, 32, 24];

        for ( var i = 0; i < (frndsAge.length); i++ ){
            console.log('serial number:-' , i);
            var eachAge = frndsAge[i];
            if(eachAge>=60){
                continue;
            }
            console.log(eachAge);
        }
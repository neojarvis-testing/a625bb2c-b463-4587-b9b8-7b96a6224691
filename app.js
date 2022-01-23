function add(numbers) {
    var result = 0;
    var parts = numbers.split(',');
    for (var i = 0; i < parts.length; i++) {
        var integer = parseInt(parts[i]);
        if (!isNaN(integer)) {
            if (integer >= 0) {
                if (integer <= 1000) {
                    result += integer;
                }
            }
        }
    }
    
    return result;
}

function sum(numbers) {
    var result = 0;
    var parts = numbers.split(',');
    for (var i = 0; i < parts.length; i++) {
        var integer = parseInt(parts[i]);
        if (!isNaN(integer)) {
            if (integer >= 0) {
                if (integer <= 1000) {
                    result += integer;
                }
            }
        }
    }
    
    return result;
}

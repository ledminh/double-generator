import compose from './compose';

function toInt({value}){
    if(value === ""){
        return {
            value: 0
        }
    }

    var thisVal = parseInt(value);

    if(isNaN(thisVal)){
        return {
            error: true
        }
    }
    
    return {value: thisVal};
}

function restrict({value}){
    if(value > 99){
        return {
            exceed: true,
            value: value
        };
    }

    return {value};
}

function transform({exceed, value}){
    if(exceed){
        var thisVal = (value + "").substring(1);
        
        thisVal = parseInt(thisVal);

        return {
            value: thisVal
        }
    }

    return {value};
}

export default compose(transform, restrict, toInt);
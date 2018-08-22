var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
    return Object.assign({},object,{[key]: value})
}


/*
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var copy = Object.assign({}, object);
console.log(copy)
}
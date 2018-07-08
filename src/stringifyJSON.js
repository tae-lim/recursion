// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
  	return '\"' + obj.toString() + '\"';
  }
  if (obj === null) {
  	return 'null';
  }
  if (typeof obj === 'function' || typeof obj === undefined) {
  	return undefined;
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
  	return obj.toString();
  }
  if (Array.isArray(obj)) {
    if (obj.length < 1) {
    	return '[]';
    }
    var result = '[';
    for (var i = 0; i < obj.length; i++) {
      result += stringifyJSON(obj[i]) + ',';
    }
    return result.slice(0, -1) + ']';
  }
  if (typeof obj === 'object') {
  	if (Object.keys(obj).length < 1) {
  	  return '{}';
  	}
  	var result = '{';
  	for (var key in obj) {
  	  if (key.slice(0, 8) === 'function' || typeof obj[key] === 'function' || key === 'undefined' || obj[key] === undefined) {
  	  	return '{}';
  	  }
  	  result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
  	}
    return result.slice(0, -1) + '}';
  }
};
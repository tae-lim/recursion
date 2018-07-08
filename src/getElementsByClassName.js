// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var getElementsWithClass = function(element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    if (element.childNodes) {
      for (var i = 0; i < element.childNodes.length; i++) {
      	getElementsWithClass(element.childNodes[i]);
      }
    }
  };
  getElementsWithClass(document.body);
  return result;
};

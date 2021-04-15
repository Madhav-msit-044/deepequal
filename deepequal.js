var deepEqual = function (a, b) {
    if (a === b) {
      return true;
    }
    else if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) {
      if (Object.keys(a).length != Object.keys(b).length)
        return false;

      for (var prop in a) {
        if (b.hasOwnProperty(prop))
        {
          if (! deepEqual(a[prop], b[prop]))
            return false;
        }
        else
          return false;
      }

      return true;
    }
    else
      return false;
  }

  var obj = {madhav: {krishna: "an", tony: "3"}, madhu: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {madhav: 1, madhu: 2}));
  // → false
  console.log(deepEqual(obj, {madhav: {krishna: "an"}, madhu: 2}));
  // → false
  console.log(deepEqual(obj, {madhav: {krishna: "an", tony: "2"}, madhu: 2}));
  // → false
  console.log(deepEqual(obj, {madhav: {krishna: "and", tony: "3"}, madhu: 2}));
  // → true

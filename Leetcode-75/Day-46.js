/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const obj = {};
    for (let i = 0; i < equations.length; i++) {
      const equa = equations[i];
      const value = values[i];
      const data1 = equa[0];
      const data2 = equa[1];
      obj[data1] = !obj[data1] ? {[data2]: value} : {...obj[data1], [data2]: value};
      obj[data2] = !obj[data2] ? {[data1]: 1/value} : {...obj[data2], [data1]: 1/value};
    }
    let keys = Object.keys(obj);
    let queue = [];
    let data = {};
    const resultData = [];
    while (keys.length > 0) {
      const key = queue[queue?.length - 1] || keys[0];
      if (queue.length === 0) {
        if (Object.keys(data).length > 0) {
          resultData.push(data);
          data = {};
        }
        data[key] = 1;
        queue.push(key);
      } 
      const dataValue = obj[key];
      const keyinside = Object.keys(dataValue);
      queue.pop();
      for (const inside of keyinside) {
        if (isNaN(data[inside])) {
          queue.push(inside);
          data[inside] = data[key] / dataValue[inside]
        }
      }
      delete obj[key];
      keys = Object.keys(obj)
    }
    resultData.push(data);
    const result = [];
    for (const query of queries) {
      result.push(checkAndCalculate(resultData, query[0], query[1]))
    }
    return result;
};

const checkAndCalculate = (resultData, target1, target2) => {
  for (const data of resultData){
    if (data[target1] && data[target2]) return data[target1] / data[target2];
  }
  return -1;
}

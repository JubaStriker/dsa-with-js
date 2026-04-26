//Input:  [[1,3],[2,6],[8,10],[15,18]]
//Output: [[1,6],[8,10],[15,18]]

function mergeInterval(intervals) {
  intervals.sort((a,b)=> a[0] - b[0]);

  const res = [intervals[0]]

  for ( let i=1; i< intervals.length; i++) {
    const current = intervals[i];
    const last = res[res.length-1];

    if(current[0] <= last[1]){
        last[1] = current[1];
    }else {
        res.push(current);
    }
  }

  return res;
}

console.log(mergeInterval([[1,3],[2,6],[8,10],[15,18]]))
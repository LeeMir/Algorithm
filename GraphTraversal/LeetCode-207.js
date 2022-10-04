// https://leetcode.com/problems/course-schedule/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const course = [];
  const visited = [];
  const hasPreSet = new Set();
  for (const [a, b] of prerequisites) {
    if (!course[a]) course[a] = [];
    course[a].push(b);
    hasPreSet.add(a);
  }
  
  const dfs = (node) => {
    if(visited[node]){
      return false;
    }
    if(course[node]){
      if (course[node].length === 0){
        return true;
      }
      
      visited[node] = true;
      for(const val of course[node]){
        if(!dfs(val)){
          return false;
        }
      }
      visited[node] = false;
      course[node] = [];
    }
    return true;
  }
    
  for(const i of hasPreSet) {
    if(!dfs(i)){
      return false;
    }
  }
  return true;
};

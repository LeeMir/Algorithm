// https://leetcode.com/problems/my-calendar-iii

class MyCalendarThree {
  calendar = [];  

  book(start, end) {
    this.calendar[start] = (this.calendar[start] || 0) + 1;
    this.calendar[end] = (this.calendar[end] || 0) - 1;

    let ans = 0;
    let intersections = 0;
    
    for (const day in this.calendar) {
      intersections += this.calendar[day];
      ans = Math.max(ans, intersections);
    }

    return ans;
  }
}

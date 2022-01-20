#include<iostream>
#include<string>
#include<algorithm>

using namespace std;

int dp[1001][1001] = { 0, };

int main(int argc, char** argv)
{
  cin >> a >> b;
  string a, b;
  if (a.size() > b.size()) {
    swap(a, b);
  }
  int maxLen = 0;
  for (int i = 1; i <= a.size(); i++) {
    char chA = a[i - 1];
    for (int j = 1; j <= b.size(); j++) {
      char chB = b[j - 1];
      if (chA == chB) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        maxLen = max(maxLen, dp[i][j]);
      } else {
        dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  cout << maxLen;
	return 0;
}

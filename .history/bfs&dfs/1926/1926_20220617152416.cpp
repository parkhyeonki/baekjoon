#include <bits/stdc++.h>
using namespace std;

#define X first
#define Y second

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n,m;
    cin>>n>>m;

    int board[n][m];

    int picture_cnt=0;
    int picture_max=0;
    for(int i=0;i<n;i++){
      for(int j=0;j<n;j++){
        int tmp;
        cin>>tmp;
        board[i][j] = tmp;
      }
    }




  

}
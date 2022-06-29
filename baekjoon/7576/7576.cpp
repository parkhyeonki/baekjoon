#include <bits/stdc++.h>
using namespace std;

int n,m,x,y,ret=0;
int graph[1002][1002];
int visited[1002][1002];

int dx[4] = {0,1,0,-1};
int dy[4] = {1,0,-1,0};

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>m>>n;

    for(int i=0;i<n;i++){
      fill(visited[i],visited[i]+m,-2);
    }

    queue<pair<int,int>> q;
    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        cin>>graph[i][j];
        if(graph[i][j]==1) {
          q.push({i,j}); 
          visited[i][j]=0;
          }
        if(graph[i][j]==0){
          visited[i][j]=-1;
        }
      }
    }

      while(!q.empty()){
        tie(x,y) = q.front();
        q.pop();
        for(int dir=0;dir<4;dir++){
          int nx = x+dx[dir];
          int ny = y+dy[dir];
          if(nx<0||nx>=n||ny<0||ny>=m) continue;
          if(graph[nx][ny]==-1||visited[nx][ny]>=0) continue;
          visited[nx][ny]=visited[x][y]+1;
          q.push({nx,ny});
        }
      }
      for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
          if(visited[i][j]==-1){
            cout<<-1;
            return 0;
          }
          ret = max(ret,visited[i][j]);
        }
      }
      cout<<ret;
    
}
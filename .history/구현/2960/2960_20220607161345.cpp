#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n,k,cnt=0,a[1001];

    cin>>n>>k;
    for(int i=2;i<=n;i++){
        if(a[i]){
          continue;
        }
      for(int j=2*i;j<=n;j+=i){
          a[j]=1;
          cnt++;
    }
    }





  return 0;
}
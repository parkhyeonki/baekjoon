#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll a,b,c;

ll go(ll a,ll b){
  if(b==1) return a % c;
  ll _c = go(a,b / 2);
  _c= (_c*_c)%c;
  if(b%2) _c=(_c*a)%c;
  cout<<_c<<"\n";
  return _c;
}
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin >>a>>b>>c;
  cout << go(a,b)<<"\n";

  return 0;
}
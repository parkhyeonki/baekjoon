#include <bits/stdc++.h>
using namespace std;
int n;
string s,p,temp,ret;
long long pos;
vector<string> vec;
int main()

{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n;
  cin>>s;


  for(int i=0; i<n;i++){
    cin>>p;
    if(s[0] ==p[0] && s[2]==p[p.size()-1]){
      cout << "DA"<<"\n";
    } else {
      cout<< "NE"<<"\n";
    }
  }

  return 0;
}
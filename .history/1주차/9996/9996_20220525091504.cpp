#include <bits/stdc++.h>
using namespace std;
int n;
string p,temp;
long long pos;
vector<string> s;
int main()

{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n;
  cin>>s;

  while(pos=find(s.begin(),s.end(),'*') != string::npos){
    temp=substr(0,pos);

  }

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
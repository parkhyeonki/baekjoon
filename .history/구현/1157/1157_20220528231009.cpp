#include <bits/stdc++.h>
using namespace std;
int arr[26],cnt; 
string s;


int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>s;

  for(char a : s){
    a = toupper(a);
    arr[a-65]++;
  }
  
  cnt = *max_element(arr,arr.length());



  return 0;
}
#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

	int n,temp,psum=0,avg,mid,mode,cnt[8001]={0,},area;
	bool b = false;
	cin>>n;
	vector<int> v;

	for(int i=0;i<n;i++){
		cin>>temp;
		v.push_back(temp);
		psum += temp;
		cnt[temp+4000]++;
	}
	//avg
	avg = round((float)psum/n);
	cout<<avg<<"\n";
	//mid
	sort(v.begin(),v.end());
	mid = v.size()/2;
	cout<<v[mid]<<"\n";

	//mode
	
	cout<<mode<<"\n";

	//area
	area = v[v.size()-1] - v[0];

	cout<<area<<"\n";


	return 0;
}
#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;
int main() {
	int N, input; cin >> N;
	vector<int> v, vv;
	for (int i = 0; i < N; i++) {
		cin >> input;
		v.push_back(input);
		vv.push_back(input); }
	sort(vv.begin(), vv.end());
	vv.erase(unique(vv.begin(), vv.end()), vv.end());
	for (int i = 0; i < N; i++) {
		auto it = lower_bound(vv.begin(), vv.end(), v[i]);
		cout << it - vv.begin() << ' '; }
	return 0;
}
#include<iostream>
using namespace std;
int fib(int n){
  if(n<=1) return n;
  else return fib(n-1)+fib(n-2);
}

int main(){
    int num;
    cin>>num;
    cout<<fib(num)<<endl;
}
[0][1][2][3]
0   1   2  3
{0,1,2,3}
{2}

#include<iostream>
#include<vector>
using namespace std;

    bool check(vector<int>& nums) {
       int n=nums.size();
       int index=-1;
       for(int i=0;i<n-1;i++){
        if(nums[i]>nums[i+1]){
            index=i;
            break;
        }
       }
       for(int i=index+1;i<n-1;i++){
        if(nums[i]>nums[i+1]){
            return false;
            break;
        }
       }
       if(index!=-1 && nums[0]<nums[n-1]){
        return false;
       }
       return true;
        
    }

int main(){
    vector<int> v= {2,7,4,1,2,6,2};
    cout<<check(v);
   
}
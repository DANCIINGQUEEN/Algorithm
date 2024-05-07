class Solution {
    public int solution(int a, int d, boolean[] inc) {
        int result=0;
        for(int i=0;i<inc.length;i++){
            result+=inc[i]?(a+d*i):0;
        }
        return result;
    }
}
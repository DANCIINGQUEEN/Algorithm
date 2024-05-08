import java.util.*;
class Solution {
    public int[] solution(int s, int e) {
        int[] r=new int[e-s+1];
        for(int i=0;i<e-s+1;i++){
            r[i]=i+s;
        }
        return r;
    }
}
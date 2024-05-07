import java.util.Arrays;
class Solution {
    public int solution(int[] n) {
        int p=Arrays.stream(n).reduce((a,c)->a*c).getAsInt();
        int s=Arrays.stream(n).sum();
        return p<s*s?1:0;
    }
}
class Solution {
    public int solution(int a, int b) {
       int sa = Integer.parseInt(""+a+b);
        int sb=2*a*b;
        return sa>sb?sa:sb;
    }
}
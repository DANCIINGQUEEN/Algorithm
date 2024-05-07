class Solution {
    public int solution(int a, int b) {
        int sa=Integer.parseInt(""+a+b);
        int sb=Integer.parseInt(""+b+a);
        return sa>sb?sa:sb;
    }
}
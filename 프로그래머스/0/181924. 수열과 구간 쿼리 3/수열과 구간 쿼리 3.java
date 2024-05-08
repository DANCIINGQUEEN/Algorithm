class Solution {
    public int[] solution(int[] arr, int[][] q) {       
        for(int [] r: q){
            int x1=r[0];
            int x2=r[1];
            int t=arr[x1];
            arr[x1]=arr[x2];
            arr[x2]=t;
        }
        return arr;
    }
}
class Solution {
    public int solution(int[] n) {
        String odd="";
        String even="";
        for(int i:n){
            if(i%2==1){
                odd+=""+i;
            }else{
                even+=""+i;
            }
        }
        return Integer.parseInt(odd)+Integer.parseInt(even);
        
        
    }
}
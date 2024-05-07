class Solution {
    public String solution(String code) {
        int mode = 0;
        StringBuilder result = new StringBuilder();

        for (int idx = 0; idx < code.length(); idx++) {
            char cur = code.charAt(idx);

            if (mode == 0) {
                if (cur != '1' && idx % 2 == 0) {
                    result.append(cur);
                }
                if (cur == '1') {
                    mode = 1;
                }
            } else {
                if (cur != '1' && idx % 2 == 1) {
                    result.append(cur);
                }
                if (cur == '1') {
                    mode = 0;
                }
            }
        }

        if (result.length() == 0) {
            return "EMPTY";
        } else {
            return result.toString();
        }
    }
}
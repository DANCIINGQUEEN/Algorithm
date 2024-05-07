import java.util.HashMap;
import java.util.Map;

class Solution {
     // 연산 인터페이스 정의
    interface Operation {
        int apply(int n);
    }

    // 연산 맵 정의
    private Map<Character, Operation> operations;

    // 생성자에서 연산 맵 초기화
    public Solution() {
        operations = new HashMap<>();
        operations.put('w', (n) -> n + 1);   // w: n + 1
        operations.put('s', (n) -> n - 1);   // s: n - 1
        operations.put('d', (n) -> n + 10);  // d: n + 10
        operations.put('a', (n) -> n - 10);  // a: n - 10
    }
    public int solution(int n, String c) {
        for (char command : c.toCharArray()) {
            if (operations.containsKey(command)) {
                n = operations.get(command).apply(n);
            }
        }
        return n;
    }
}
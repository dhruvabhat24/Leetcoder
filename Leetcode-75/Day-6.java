public class Solution {
    public String reverseWords(String s) {
        // Split the input string into words using regex to handle multiple spaces
        String[] words = s.trim().split("\\s+");
        StringBuilder result = new StringBuilder();

        // Reverse the order of words and concatenate them with a single space
        for (int i = words.length - 1; i >= 0; i--) {
            result.append(words[i]);
            if (i > 0) {
                result.append(" "); // Add a space if it's not the first word
            }
        }

        return result.toString();
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String input = "   Hello  World   Java  ";
        String output = solution.reverseWords(input);
        System.out.println(output);  // Output: "Java World Hello"
    }
}

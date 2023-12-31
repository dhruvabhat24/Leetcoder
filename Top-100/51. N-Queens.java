class Solution {
    public List<List<String>> solveNQueens(int n) {
        boolean[][] board = new boolean[n][n];
        List<List<String>> solutions = new ArrayList<>();
        solve(board, 0, solutions);
        return solutions;
        
    }
     static void solve(boolean[][] board, int row, List<List<String>> solutions) {
        if (row == board.length) {
            solutions.add(display(board));
            return;
        }

        for (int col = 0; col < board.length; col++) {
            if (isSafe(board, row, col)) {
                board[row][col] = true;
                solve(board, row + 1, solutions);
                board[row][col] = false;
            }
        }
    }

    private static boolean isSafe(boolean[][] board, int row, int col) {
        for (int i = 0; i < row; i++) {
            if (board[i][col]) {
                return false;
            }
        }
        int maxLeft = Math.min(row, col);
        for (int i = 1; i <= maxLeft; i++) {
            if (board[row - i][col - i]) {
                return false;
            }
        }
        int maxRight = Math.min(row, board.length - col - 1);
        for (int i = 1; i <= maxRight; i++) {
            if (board[row - i][col + i]) {
                return false;
            }
        }
        return true;
    }

    private static ArrayList<String> display(boolean[][] board) {
        ArrayList<String> list = new ArrayList<>();
        for (boolean[] arr : board) {
            StringBuilder row = new StringBuilder();
            for (boolean num : arr) {
                if (num) {
                    row.append("Q");
                } else {
                    row.append(".");
                }
            }
            list.add(row.toString());
        }
        return list;
    }
}

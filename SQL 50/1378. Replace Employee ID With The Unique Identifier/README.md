# Employee Unique ID Assignment

## Problem Statement

Consider two tables `Employees` and `EmployeeUNI`:

### Employees Table

| Column Name | Type    |
|-------------|---------|
| id          | int     |
| name        | varchar |

- `id` is the primary key (column with unique values) for this table.
- Each row of this table contains the id and the name of an employee in a company.

### EmployeeUNI Table

| Column Name | Type    |
|-------------|---------|
| id          | int     |
| unique_id   | int     |

- `(id, unique_id)` is the primary key (combination of columns with unique values) for this table.
- Each row of this table contains the id and the corresponding unique id of an employee in the company.

Write a solution to show the unique ID of each user. If a user does not have a unique ID, replace it with null.

Return the result table in any order.

## Example 1:

### Input

# Employees Table

| id  | name      |
|-----|-----------|
| 1   | Alice     |
| 7   | Bob       |
| 11  | Meir      |
| 90  | Winston   |
| 3   | Jonathan  |

# EmployeeUNI Table

| id  | unique_id |
|-----|-----------|
| 3   | 1         |
| 11  | 2         |
| 90  | 3         |

# Output Table

| unique_id | name      |
|-----------|-----------|
| null      | Alice     |
| null      | Bob       |
| 2         | Meir      |
| 3         | Winston   |
| 1         | Jonathan  |

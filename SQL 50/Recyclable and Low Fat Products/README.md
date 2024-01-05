# SQL Challenge: Find Products with Low Fat and Recyclable

## Problem Description

You are given a table named `Products` with the following structure:

| Column Name | Type    |
|-------------|---------|
| product_id  | int     |
| low_fats    | enum    |
| recyclable  | enum    |

- `product_id` is the primary key (column with unique values) for this table.
- `low_fats` is an ENUM (category) of type ('Y', 'N') where 'Y' means this product is low fat and 'N' means it is not.
- `recyclable` is an ENUM (category) of types ('Y', 'N') where 'Y' means this product is recyclable and 'N' means it is not.

Write a SQL query to find the `product_id` of products that are both low fat and recyclable.

## Example

**Input:**
Products table:

| product_id  | low_fats | recyclable |
|-------------|----------|------------|
| 0           | Y        | N          |
| 1           | Y        | Y          |
| 2           | N        | Y          |
| 3           | Y        | Y          |
| 4           | N        | N          |

**Output:**

| product_id  |
|-------------|
| 1           |
| 3           |

**Explanation:**
Only products 1 and 3 are both low fat and recyclable.

## SQL Solution

```sql
-- Query to find the ids of products that are both low fat and recyclable
SELECT product_id
FROM Products
WHERE low_fats = 'Y' AND recyclable = 'Y';

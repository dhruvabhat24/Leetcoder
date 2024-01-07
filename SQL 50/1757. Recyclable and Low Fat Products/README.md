## Low Fat and Recyclable Products Query

We have a `Products` table with the following structure:

| Column Name | Type    |
|-------------|---------|
| product_id  | int     |
| low_fats    | enum    |
| recyclable  | enum    |

The `product_id` column is the primary key for this table. Each row of this table provides information about the id of a product, whether it is low fat ('Y' for yes, 'N' for no), and whether it is recyclable ('Y' for yes, 'N' for no).

The task is to find the ids of products that are both low fat and recyclable. The result can be returned in any order.

For example, consider the following `Products` table:

| product_id  | low_fats | recyclable |
|-------------|----------|------------|
| 0           | Y        | N          |
| 1           | Y        | Y          |
| 2           | N        | Y          |
| 3           | Y        | Y          |
| 4           | N        | N          |

## The output should be:

| product_id  |
|-------------|
| 1           |
| 3           |

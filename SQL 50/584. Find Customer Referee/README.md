## Non-Referred Customers Query

We have a `Customer` table with the following structure:

| Column Name | Type    |
|-------------|---------|
| id          | int     |
| name        | varchar |
| referee_id  | int     |

The `id` column is the primary key for this table. Each row of this table provides information about the id of a customer, their name, and the id of the customer who referred them.

The task is to find the names of the customers that are not referred by the customer with id = 2. The result can be returned in any order.

For example, consider the following `Customer` table:

| id | name | referee_id |
|----|------|------------|
| 1  | Will | null       |
| 2  | Jane | null       |
| 3  | Alex | 2          |
| 4  | Bill | null       |
| 5  | Zack | 1          |
| 6  | Mark | 2          |

## The output should be:

| name |
|------|
| Will |
| Jane |
| Bill |
| Zack |


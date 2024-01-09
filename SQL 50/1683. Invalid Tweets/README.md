# Tweets Table Schema

## Problem Statement

Consider a table `Tweets` that represents tweets in a social media app:

| Column Name | Type    |
|-------------|---------|
| tweet_id    | int     |
| content     | varchar |

tweet_id is the primary key (column with unique values) for this table. This table contains all the tweets in a social media app.

## Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is strictly greater than 15.
## Return the result table in any order.
## The result format is in the following example.

Example 1:

Input:
| tweet_id | content                          |
|----------|----------------------------------|
| 1        | Vote for Biden                   |
| 2        | Let us make America great again! |

Output: 
| tweet_id |
|----------|
| 2        |

/* Write your PL/SQL query statement below */
select customer_id, count(*) as count_no_trans from visits 
left join transactions on visits.visit_id=transactions.visit_id
where transaction_id is null
group by customer_id

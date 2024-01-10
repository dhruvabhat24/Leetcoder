# Write your MySQL query statement below
select eu.unique_id, e.name from employees e left JOIN employeeUNI eu ON e.id = eu.id;

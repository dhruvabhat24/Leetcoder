# Student Examinations Analysis

## Problem Statement

Consider three tables in a school database - Students, Subjects, and Examinations.

### Students Table

| student_id | student_name |
|------------|--------------|
| 1          | Alice        |
| 2          | Bob          |
| 13         | John         |
| 6          | Alex         |

### Subjects Table

| subject_name |
|--------------|
| Math         |
| Physics      |
| Programming  |

### Examinations Table

| student_id | subject_name |
|------------|--------------|
| 1          | Math         |
| 1          | Physics      |
| 1          | Programming  |
| 2          | Programming  |
| 1          | Physics      |
| 1          | Math         |
| 13         | Math         |
| 13         | Programming  |
| 13         | Physics      |
| 2          | Math         |
| 1          | Math         |

Write a SQL solution to find the number of times each student attended each exam.

## SQL Query

```sql
SELECT S.student_id, S.student_name, Sub.subject_name, COUNT(E.student_id) AS attended_exams
FROM Students S
CROSS JOIN Subjects Sub
LEFT JOIN Examinations E ON S.student_id = E.student_id AND Sub.subject_name = E.subject_name
GROUP BY S.student_id, Sub.subject_name
ORDER BY S.student_id, Sub.subject_name;

```
## Output
| student_id | student_name | subject_name | attended_exams |
|------------|--------------|--------------|----------------|
| 1          | Alice        | Math         | 3              |
| 1          | Alice        | Physics      | 2              |
| 1          | Alice        | Programming  | 1              |
| 2          | Bob          | Math         | 1              |
| 2          | Bob          | Physics      | 0              |
| 2          | Bob          | Programming  | 1              |
| 6          | Alex         | Math         | 0              |
| 6          | Alex         | Physics      | 0              |
| 6          | Alex         | Programming  | 0              |
| 13         | John         | Math         | 1              |
| 13         | John         | Physics      | 1              |
| 13         | John         | Programming  | 1              |


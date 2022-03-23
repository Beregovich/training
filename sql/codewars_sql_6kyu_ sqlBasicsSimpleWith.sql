/*https://www.codewars.com/kata/5811501c2d35672d4f000146*/
WITH special_sales AS (
  SELECT * FROM sales
  WHERE price > 90.00
)
SELECT id, name FROM departments
  WHERE id IN ( SELECT department_id
                FROM sales
                WHERE (price) > 90.00);
/*https://www.codewars.com/kata/5982020284a83baf2f00001c/*/
SELECT name, gd.count as "good", ok.count as "ok", bd.count as "bad"
from products
JOIN (SELECT product_id, count(*) AS "count" from details WHERE detail = 'good' GROUP BY product_id ) gd ON (products.id = gd.product_id)
JOIN (SELECT product_id, count(*) AS "count" from details WHERE detail = 'ok' GROUP BY product_id ) ok ON (products.id = ok.product_id)
JOIN (SELECT product_id, count(*) AS "count" from details WHERE detail = 'bad' GROUP BY product_id ) bd ON (products.id = bd.product_id)
group by name, gd.count, ok.count, bd.count
order by name;
/*https://www.codewars.com/kata/5802e32dd8c944e562000020*/
SELECT products.id,
  products.name AS name,
  companies.name AS company_name,
  isbn,
  company_id,
  price
  FROM products LEFT JOIN companies
  ON products.company_id = companies.id;
/*
https://stepik.org/lesson/297509/

*/


/*
step 5
*/

SELECT buy_book.buy_id, title, price, buy_book.amount FROM
    client INNER JOIN buy ON buy.client_id=client.client_id
    INNER JOIN buy_book ON buy_book.buy_id=buy.buy_id
    INNER JOIN book ON buy_book.book_id=book.book_id

WHERE client.name_client = 'Баранов Павел'
ORDER BY buy_book.buy_id, book.title;

/*
step 6
Посчитать, сколько раз была заказана каждая книга, для книги вывести ее автора
(нужно посчитать, в каком количестве заказов фигурирует каждая книга).
Вывести фамилию и инициалы автора, название книги, последний столбец назвать Количество.
Результат отсортировать сначала  по фамилиям авторов, а потом по названиям книг.
*/
SELECT author.name_author, book.title, count(buy_book.book_id) AS Количество
FROM
    book
    LEFT JOIN buy_book ON book.book_id=buy_book.book_id
    INNER JOIN author ON book.author_id=author.author_id
GROUP BY book.book_id
ORDER BY author.name_author, book.title;

/*
step 7
Вывести города, в которых живут клиенты, оформлявшие заказы в интернет-магазине.
Указать количество заказов в каждый город, этот столбец назвать Количество.
Информацию вывести по убыванию количества заказов, а затем в алфавитном порядке по названию городов.
*/
SELECT city.name_city, count(client.city_id) AS Количество FROM
    city
    INNER JOIN client ON city.city_id = client.city_id
    INNER JOIN buy ON buy.client_id = client.client_id
   GROUP BY client.city_id
ORDER BY Количество DESC, city.name_city ASC;
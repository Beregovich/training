/*
https://stepik.org/lesson/297509/

AUTHOR TABLE:
author_id	name_author
1	Булгаков М.А.
2	Достоевский Ф.М.
3	Есенин С.А.
4	Пастернак Б.Л.
5	Лермонтов М.Ю.

BOOK TABLE:
book_id	title	                author_id	genre_id	price	amount
1	    Мастер и Маргарита	        1	        1	    670.99	    3
2	    Белая гвардия	            1	        1	    540.50	    5
3	    Идиот	                    2	        1	    460.00	    10
4	    Братья Карамазовы	        2	        1	    799.01	    2
5	    Игрок	                    2	        1	    480.50  	10
6	    Стихотворения и поэмы	    3	        2	    650.00	    15
7	    Черный человек	            3	        2	    570.20	    6
8	    Лирика	                    4	        2	    518.99	    2


CITY TABLE:
city_id	    name_city	days_delivery
1	        Москва	            5
2	        Санкт-Петербург	    3
3	        Владивосток	        12

CLIENT TABLE:
client_id	name_client	    city_id	    email
1	        Баранов Павел	    3	baranov@test
2	        Абрамова Катя	    1	abramova@test
3	        Семенонов Иван	    2	semenov@test
4	        Яковлева Галина	    1	yakovleva@test

BUY_BOOK TABLE:

buy_book_id	buy_id	book_id	amount
1	            1	    1	    1
2	            1	    7	    2
3	            1	    3	    1
4	            2	    8	    2
5	            3	    3	    2
6	            3	    2	    1
7	            3	    1	    1
8	            4	    5	    1

STEP TABLE:
step_id	name_step
1	    Оплата
2	    Упаковка
3	    Транспортировка
4	    Доставка

BUY_STEP TABLE:

buy_step_id	    buy_id	step_id	    date_step_beg	date_step_end
1	                1	    1	    2020-02-20	    2020-02-20
2	                1	    2	    2020-02-20	    2020-02-21
3	                1	    3	    2020-02-22	    2020-03-07
4	                1	    4	    2020-03-08	    2020-03-08
5	                2	    1	    2020-02-28	    2020-02-28
6	                2	    2	    2020-02-29	    2020-03-01
7	                2   	3	    2020-03-02
8	                2	    4
9	                3	    1	    2020-03-05	    2020-03-05
10	                3	    2	    2020-03-05	    2020-03-06
11	                3	    3	    2020-03-06	    2020-03-10
12	                3	    4	    2020-03-11
13	                4	    1	    2020-03-20
14	                4	    2
15	                4	    3
16	                4	    4

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

/*
step 8
Вывести номера всех оплаченных заказов и даты, когда они были оплачены.
*/
SELECT buy_step.buy_id, buy_step.date_step_end FROM
    step INNER JOIN buy_step ON buy_step.step_id = step.step_id
WHERE step.name_step="Оплата" AND buy_step.date_step_end IS NOT NULL

/*
step 9
Вывести информацию о каждом заказе: его номер, кто его сформировал (фамилия пользователя) и его стоимость
(сумма произведений количества заказанных книг и их цены), в отсортированном по номеру заказа виде.
Последний столбец назвать Стоимость
*/
SELECT buy.buy_id, client.name_client, SUM(book.price*buy_book.amount) AS Стоимость FROM
    client
    INNER JOIN buy ON client.client_id = buy.client_id
    INNER JOIN buy_book ON buy.buy_id = buy_book.buy_id
    INNER JOIN book ON book.book_id = buy_book.book_id
GROUP BY buy.buy_id
ORDER BY buy.buy_id ASC;

/*
STEP 10
Вывести номера заказов (buy_id) и названия этапов, на которых они в данный момент находятся.
Если заказ доставлен –  информацию о нем не выводить. Информацию отсортировать по возрастанию buy_id.
*/
SELECT buy_step.buy_id, step.name_step FROM
    step INNER JOIN buy_step ON buy_step.step_id = step.step_id
    WHERE buy_step.date_step_end IS NULL AND buy_step.date_step_beg IS NOT NULL
ORDER BY buy_step.buy_id ASC;

/*
STEP 11
В таблице city для каждого города указано количество дней, за которые заказ может быть доставлен в этот город
(рассматривается только этап Транспортировка). Для тех заказов, которые прошли этап транспортировки,
вывести количество дней за которое заказ реально доставлен в город. А также, если заказ доставлен с опозданием,
указать количество дней задержки, в противном случае вывести 0. В результат включить номер заказа (buy_id),
а также вычисляемые столбцы Количество_дней и Опоздание. Информацию вывести в отсортированном по номеру заказа виде.
*/

/*
https://stepik.org/lesson/297509/
2.3

Таблица genre:
+----------+-------------+
| genre_id | name_genre  |
+----------+-------------+
| 1        | Роман       |
| 2        | Поэзия      |
| 3        | Приключения |
+----------+-------------+

Таблица author:
+-----------+------------------+
| author_id | name_author      |
+-----------+------------------+
| 1         | Булгаков М.А.    |
| 2         | Достоевский Ф.М. |
| 3         | Есенин С.А.      |
| 4         | Пастернак Б.Л.   |
| 5         | Лермонтов М.Ю.   |
+-----------+------------------+

Таблица book:
+---------+-----------------------+-----------+----------+--------+--------+
| book_id | title                 | author_id | genre_id | price  | amount |
+---------+-----------------------+-----------+----------+--------+--------+
| 1       | Мастер и Маргарита    | 1         | 1        | 670.99 | 3      |
| 2       | Белая гвардия         | 1         | 1        | 540.50 | 5      |
| 3       | Идиот                 | 2         | 1        | 460.00 | 10     |
| 4       | Братья Карамазовы     | 2         | 1        | 799.01 | 3      |
| 5       | Игрок                 | 2         | 1        | 480.50 | 10     |
| 6       | Стихотворения и поэмы | 3         | 2        | 650.00 | 15     |
| 7       | Черный человек        | 3         | 2        | 570.20 | 6      |
| 8       | Лирика                | 4         | 2        | 518.99 | 2      |
+---------+-----------------------+-----------+----------+--------+--------+
*/

/*
step 2
Для книг, которые уже есть на складе (в таблице book), но по другой цене, чем в поставке (supply),
необходимо в таблице book увеличить количество на значение, указанное в поставке,  и пересчитать цену.
А в таблице  supply обнулить количество этих книг. Формула для пересчета цены:
price={(p1*k1+p2*k2)\(k1+k2)

где  p1, p2 - цена книги в таблицах book и supply;
     k1, k2 - количество книг в таблицах book и supply.
*/
UPDATE book
     INNER JOIN author ON author.author_id = book.author_id
     INNER JOIN supply ON book.title = supply.title
                         and supply.author = author.name_author
SET book.amount = book.amount + supply.amount,
    supply.amount = 0,
    book.price=(book.price*book.amount+supply.price*supply.amount)/(supply.amount+book.amount)
WHERE book.amount>0 AND book.price<>supply.price;

SELECT * FROM book;

SELECT * FROM supply;

/*
step 3
Включить новых авторов в таблицу author с помощью запроса на добавление, а затем вывести все данные из таблицы author.
Новыми считаются авторы, которые есть в таблице supply, но нет в таблице author.
*/
INSERT INTO author(name_author)
(SELECT supply.author
FROM
    author
    RIGHT JOIN supply on author.name_author = supply.author
WHERE name_author IS Null);
SELECT * FROM author;

/*
step 4
Добавить новые книги из таблицы supply в таблицу book на основе сформированного выше запроса.
Затем вывести для просмотра таблицу book.
*/
INSERT INTO book(title, author_id, price, amount)
SELECT title, author_id, price, amount
FROM
    author
    INNER JOIN supply ON author.name_author = supply.author
WHERE amount <> 0;
select * from book;

/*
step 5
 Занести для книги «Стихотворения и поэмы» Лермонтова жанр «Поэзия»,
 а для книги «Остров сокровищ» Стивенсона - «Приключения». (Использовать два запроса).
*/
UPDATE book
SET genre_id =
      (
       SELECT genre_id
       FROM genre
       WHERE name_genre = 'Поэзия'
      )
WHERE book_id = 10;
UPDATE book
SET genre_id =
      (
       SELECT genre_id
       FROM genre
       WHERE name_genre = 'Приключения'
      )
WHERE book_id = 11;

SELECT * FROM book;

/*
step 6
Удалить всех авторов и все их книги, общее количество книг которых меньше 20.
*/
DELETE FROM author
WHERE author_id IN (
    SELECT author_id
    FROM book
    GROUP BY author_id
    HAVING SUM(amount)<20
);
SELECT * FROM author;
SELECT * FROM book;

/*
step 7
Удалить все жанры, к которым относится меньше 4-х книг. В таблице book для этих жанров установить значение Null.
*/
DELETE FROM genre
WHERE genre_id IN (
    SELECT genre_id
    FROM book
    GROUP BY genre_id
    HAVING count(title)<4
);
SELECT * FROM author;
SELECT * FROM book;

/*
step 8
Удалить всех авторов, которые пишут в жанре "Поэзия". Из таблицы book удалить все книги этих авторов.
В запросе для отбора авторов использовать полное название жанра, а не его id.
*/
DELETE FROM author
USING
    genre
    INNER JOIN book ON genre.genre_id = book.genre_id
    INNER JOIN author ON author.author_id = book.author_id
WHERE genre.name_genre="Поэзия";
SELECT * FROM author;
SELECT * FROM book;
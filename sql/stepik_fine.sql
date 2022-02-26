/*
https://stepik.org/lesson/297509/

fine table:
+---------------+--------------+----------------------------------+----------+------------------+--------------+
| name          | number_plate | violation                        | sum_fine | date_violation   | date_payment |
+---------------+--------------+----------------------------------+----------+------------------+--------------+
| Баранов П.Е.  | Р523ВТ       | Превышение скорости(от 40 до 60) | 500.00   | 2020-01-12       | 2020-01-17   |
| Абрамова К.А. | О111АВ       | Проезд на запрещающий сигнал     | 1000.00  | 2020-01-14       | 2020-02-27   |
| Яковлев Г.Р.  | Т330ТТ       | Превышение скорости(от 20 до 40) | 500.00   | 2020-01-23       | 2020-02-23   |
| Яковлев Г.Р.  | М701АА       | Превышение скорости(от 20 до 40) | NULL     | 2020-01-12       | NULL         |
| Колесов С.П.  | К892АХ       | Превышение скорости(от 20 до 40) | NULL     | 2020-02-01       | NULL         |
| Баранов П.Е.  | Р523ВТ       | Превышение скорости(от 40 до 60) | NULL     | 2020-02-14       | NULL         |
| Абрамова К.А. | О111АВ       | Проезд на запрещающий сигнал     | NULL     | 2020-02-23       | NULL         |
| Яковлев Г.Р.  | Т330ТТ       | Проезд на запрещающий сигнал     | NULL     | 2020-03-03       | NULL         |
+---------------+--------------+----------------------------------+----------+------------------+--------------+

traffic_violation table:
+--------------+----------------------------------+----------+
| violation_id | violation                        | sum_fine |
+--------------+----------------------------------+----------+
| 1            | Превышение скорости(от 20 до 40) | 500.00   |
| 2            | Превышение скорости(от 40 до 60) | 1000.00  |
| 3            | Проезд на запрещающий сигнал     | 1000.00  |
+--------------+----------------------------------+----------+
*/

/*
step 2
Создать таблицу fine следующей структуры:
*/
CREATE TABLE fine(
fine_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30),
number_plate VARCHAR(6),
violation VARCHAR(50),
sum_fine DECIMAL(8,2),
date_violation DATE,
date_payment DATE
)

/*
step 3
В таблицу fine первые 5 строк уже занесены. Добавить в таблицу записи с ключевыми значениями 6, 7, 8.
*/
INSERT INTO fine(name, number_plate, violation, sum_fine, date_violation, date_payment)
VALUES
    ('Баранов П.Е.', 'Р523ВТ', 'Превышение скорости(от 40 до 60)', NULL, '2020-02-14', NULL),
    ('Абрамова К.А.', 'О111АВ', 'Проезд на запрещающий сигнал', NULL, '2020-02-23', NULL),
    ('Яковлев Г.Р.', 'Т330ТТ', 'Проезд на запрещающий сигнал', NULL, '2020-03-03', NULL);

/*
step 4
Занести в таблицу fine суммы штрафов, которые должен оплатить водитель, в соответствии с данными из таблицы
traffic_violation. При этом суммы заносить только в пустые поля столбца  sum_fine.
*/
UPDATE fine AS f, traffic_violation AS tv
SET f.sum_fine=IF(f.sum_fine IS NULL,tv.sum_fine,f.sum_fine)
WHERE f.violation = tv.violation;

/*
step 5
Вывести фамилию, номер машины и нарушение только для тех водителей,
которые на одной машине нарушили одно и то же правило   два и более раз.
При этом учитывать все нарушения, независимо от того оплачены они или нет.
Информацию отсортировать в алфавитном порядке, сначала по фамилии водителя,
потом по номеру машины и, наконец, по нарушению.
*/

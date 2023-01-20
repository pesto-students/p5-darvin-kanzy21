select * from ITEMS where WEIGHT = (select MIN(weight) from ITEMS)

SELECT *
FROM Warehouses w 
LEFT JOIN Cities c ON w.city_id = c.id
GROUP BY w.Location;

SELECT *
FROM orders, customer
INNER JOIN orders ON orders.customer_id = customer.CNO
WHERE customer.CNAME like 'MR. PATIL';  
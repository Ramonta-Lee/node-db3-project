-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

-- SELECT P.ProductName, C.CategoryName FROM Product AS P
-- INNER JOIN Category AS C ON P.CategoryId = C.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

-- SELECT O.Id, S.CompanyName, O.OrderDate 
-- FROM [Order] AS O
-- INNER JOIN Shipper AS S ON O.ShipVia = S.Id
-- WHERE O.OrderDate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

-- SELECT P.ProductName, OD.Quantity, OD.OrderId 
-- FROM OrderDetail AS OD
-- INNER JOIN [Product] AS P ON OD.ProductId = P.Id
-- WHERE OD.OrderID = "10251";

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

-- SELECT O.Id, C.CompanyName, E.LastName
-- FROM [Order] AS O
-- INNER JOIN Customer AS C ON O.CustomerId = C.Id
-- INNER JOIN Employee AS E ON O.EmployeeId = E.Id

--STRETCH
 -- Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.

-- SELECT CategoryName, Count(*) AS Count FROM [Categories]
-- JOIN Products ON Products.CategoryID = Categories.CategoryID
-- GROUP BY CategoryName;

 -- Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.


-- SELECT [Orders].OrderID, Count() AS ItemCount FROM [Orders]
-- JOIN OrderDetails AS OD ON [Orders].OrderID = OD.OrderID
-- GROUP BY [Orders].OrderID;
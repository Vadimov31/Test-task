CREATE TABLE Customers  (
	id int PRIMARY KEY AUTO_INCREMENT,
    Name varchar(10)
    );

INSERT INTO Customers
VALUES(1,'Max');

INSERT INTO Customers
VALUES(2,'Pavel');

INSERT INTO Customers
VALUES(3,'Ivan');

INSERT INTO Customers
VALUES(4,'Leonid');

CREATE TABLE Orders (
	id INT PRIMARY KEY AUTO_INCREMENT,
    `CustomerId` varchar(10)    
    );

INSERT INTO Orders
VALUES(1,2);

INSERT INTO Orders
VALUES(2,4);

SELECT c.name AS Customers FROM Customers c
LEFT JOIN Orders o
ON c.Id = o.CustomerId
WHERE o.id IS null
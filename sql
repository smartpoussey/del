Select Statement:
$stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");

Insert Statement:
$stmt = $conn->prepare("INSERT INTO products (name, price) VALUES (?, ?)");

Update Statement:
$stmt = $conn->prepare("UPDATE orders SET status = ? WHERE id = ?");

Delete Statement:
$stmt = $conn->prepare("DELETE FROM customers WHERE id = ?");

Join Statement:
$stmt = $conn->prepare("SELECT users.name, orders.product_id FROM users INNER JOIN orders ON users.id = orders.user_id WHERE users.id = ?");

Group By Statement:
$stmt = $conn->prepare("SELECT category, COUNT(*) as count FROM products GROUP BY category");

Having Statement:
$stmt = $conn->prepare("SELECT category, COUNT(*) as count FROM products GROUP BY category HAVING count > ?");

Order By Statement:
$stmt = $conn->prepare("SELECT * FROM products ORDER BY price DESC");

Limit Statement:
$stmt = $conn->prepare("SELECT * FROM products LIMIT ?");

Subquery Statement:
$stmt = $conn->prepare("SELECT * FROM products WHERE price > (SELECT AVG(price) FROM products)");


$stmt->bind_param("sssssi", $firstName, $lastName, $gender, $email, $password, $number);
$execval = $stmt->execute();
echo $execval;

<?php
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$gender = $_POST['gender'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$number = $_POST['number'];

	// Database connection
	$conn = new mysqli('localhost','root','','db_name');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(firstName, lastName, gender, email, password, number) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssssi", $firstName, $lastName, $gender, $email, $password, $number);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>

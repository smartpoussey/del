<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JavaScript Syntax Demo</title>
</head>
<body>

<h1>JavaScript Syntax Demo</h1>

<p id="demo">This paragraph will be changed by JavaScript.</p>

<script>
  // Variables
  let x = 5;
  const y = 10;
  var z = x + y;
  
  // Functions
  function greet(name) {
    return "Hello, " + name + "!";
  }
  
  // Conditionals
  if (z > 10) {
    document.getElementById("demo").innerHTML = greet("World");
  } else {
    document.getElementById("demo").innerHTML = "Sum is less than or equal to 10";
  }
  
  // Loops
  for (let i = 0; i < 3; i++) {
    console.log("Loop iteration: " + i);
  }
  
  // Arrays
  let fruits = ["Apple", "Banana", "Orange"];
  console.log("Fruit at index 1: " + fruits[1]);
  
  // Objects
  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  console.log("Full name: " + person.fullName());
</script>

</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Password Validation</title>
</head>
<body>

<h1>Password Validation</h1>

<form id="passwordForm">
  <label for="password">Enter Password:</label><br>
  <input type="password" id="password" name="password"><br>
  <label for="confirmPassword">Confirm Password:</label><br>
  <input type="password" id="confirmPassword" name="confirmPassword"><br><br>
  <button type="button" onclick="validatePassword()">Submit</button>
</form>

<script>
function validatePassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  // Password criteria
  let regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  if (!regex.test(password)) {
    alert("Password must contain at least one uppercase letter and one digit.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Password validated successfully!");
}
</script>

</body>
</html>


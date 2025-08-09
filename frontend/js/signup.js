console.log("Signup JS Loaded");

document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!name || !email || !password) {
    alert("Please fill in all fields");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message || "Signup successful! Please login.");
      window.location.href = "login.html";
    } else {
      alert(data.message || "Signup failed. Please try again.");
    }
  } catch (error) {
    console.error("Error during signup:", error);
    alert("Something went wrong. Please try again later.");
  }
});

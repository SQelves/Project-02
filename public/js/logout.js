console.log("Logout script attached");

const logoutBtn = document.getElementById('logoutBtn');

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

logoutBtn.addEventListener('click', logout);

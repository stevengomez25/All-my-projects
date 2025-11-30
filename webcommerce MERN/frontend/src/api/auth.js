const API_URL = "http://localhost:5000/api/auth";

export const registerUser = async (data) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getMe = async () => {
  const res = await fetch(`${API_URL}/profile`, {
    method: "GET",
    credentials: "include"
  });

  return res.json();
};


export const logoutUser = async () => {
  const res = await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include"
  });

  return res.json();
};

export const createProduct = async() =>{
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    credentials: "include"
  });

  return res.json();
};

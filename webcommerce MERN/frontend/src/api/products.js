 const API_URL = "http://localhost:5000/api";


 export const getProducts = async () =>{
    const res = await fetch(`${API_URL}/products`, {
        method:'GET',
        credentials:'include',
    });
    return res.json();
 };


export const createProduct = async(data) =>{
    const res = await fetch(`${API_URL}/products`,{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        credentials:'include',
        body: JSON.stringify(data)
    });
    return res.json();
};

export const updateProduct = async (id, data) => {
  // La solicitud incluye el ID del producto en la URL
  const res = await fetch(`${API_URL}/products/${id}`, { 
    method: "PUT", // Usar PUT o PATCH
    headers: { "Content-Type": "application/json" },
    credentials: "include", // Importante para la autenticación
    body: JSON.stringify(data),
  });

  // Puedes devolver la respuesta completa o solo el JSON
  return res.json();
};


export const deleteProduct = async (id) => { 
    const res = await fetch(`${API_URL}/products/${id}`,{
        method:'DELETE',
        headers:{"Content-Type":"application/json"},
        credentials:'include'
    });
    return res.json();
};
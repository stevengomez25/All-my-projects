 const API_URL = "http://localhost:5000/api";


 export const getProducts = async () =>{
    const res = await fetch(`${API_URL}/products`, {
        method:'GET',
        credentials:'include',
    });
    return res.json();
 };

 export const getProductById = async (id) =>{
    const URL = `${API_URL}/products/${id}`; 

    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Para productos públicos (como en este caso), no necesitas headers de autenticación.
            },
        });

        // 2. Manejar la respuesta HTTP
        if (!response.ok) {
            // Si la respuesta no es 2xx, lanza un error o devuelve un objeto de error.
            if (response.status === 404) {
                return { ok: false, message: 'Product not found' };
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // 3. Devolver los datos del producto
        return { 
            ok: true, 
            product: data.product
        };

    } catch (error) {
        console.error("Error fetching product by ID:", error);
        return { 
            ok: false, 
            message: 'Error de red o del servidor.',
            error: error.message
        };
    }
 }


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
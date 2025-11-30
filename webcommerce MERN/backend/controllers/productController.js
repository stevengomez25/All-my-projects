import Product from "../models/Product.js";

// Create product
export const createProduct = async (req, res) => {
  try {
    const product = new Product({
      ...req.body,
      createdBy: req.user._id,
    });

    await product.save();

    return res.status(201).json({
      ok: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, message: error.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
    try {
        // 1. Extracción y Conversión Robusta de Parámetros
        // Aseguramos que 'page' y 'limit' sean números enteros positivos válidos.
        const page = parseInt(req.query.page) > 0 ? parseInt(req.query.page) : 1;
        const limit = parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : 10;

        const { search, minCost, maxCost, sort } = req.query;

        const query = {};

        // Lógica de Búsqueda (Search)
        if (search) {
            query.name = { $regex: search, $options: "i" };
        }

        // Lógica de Filtrado por Costo
        if (minCost || maxCost) {
            query.cost = {};
            // El 'minCost' y 'maxCost' aquí ya han sido validados como números por express-validator.
            if (minCost) query.cost.$gte = Number(minCost);
            if (maxCost) query.cost.$lte = Number(maxCost);
        }

        // Cálculo de 'skip' con los valores numéricos validados
        const skip = (page - 1) * limit;

        // 2. Ejecución de la Consulta Mongoose
        const products = await Product.find(query)
            .sort(
                sort
                    ? sort.startsWith("-")
                        ? { [sort.substring(1)]: -1 }
                        : { [sort]: 1 }
                    : {}
            )
            .skip(skip)
            .limit(limit); // Usamos 'limit' que ya es un número

        const total = await Product.countDocuments(query);

        // 3. Respuesta Exitosa (200 OK)
        res.json({
            ok: true,
            total,
            page,
            pages: Math.ceil(total / limit),
            products,
        });
        
    } catch (error) {
        // 4. Manejo de Errores (500 Internal Server Error)
        // Corregido: Devolvemos el mensaje de error real para debugging
        console.error("Error al obtener productos:", error);
        res.status(500).json({ 
            ok: false, 
            message: "Error interno del servidor al obtener productos.",
            // Opcional: solo para desarrollo: message: error.message 
        });
    }
};


// Get single product
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ ok: false, message: "Product not found" });

    res.json({ ok: true, product });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};


// Update
export const updateProduct = async (req, res) => {
  try {
    // 1. Encontrar el producto y verificar que existe
    const productToUpdate = await Product.findById(req.params.id);

    if (!productToUpdate) {
      return res.status(404).json({ ok: false, message: "Product not found" });
    }

    // 2. VERIFICAR PROPIEDAD: Asegúrate de que el usuario logueado (req.user._id)
    //    sea el mismo que creó el producto (productToUpdate.createdBy)
    if (productToUpdate.createdBy.toString() !== req.user._id.toString()) {
      // Nota: Debes usar .toString() porque uno es un objeto (ObjectID) y el otro es una cadena.
      return res.status(403).json({ 
        ok: false, 
        message: "Not authorized to update this product" 
      });
    }

    // 3. Si la propiedad es correcta, realiza la actualización
    // (Opcional: puedes agregar el campo 'updatedAt' y 'updatedBy' al req.body antes de la actualización)
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // { new: true } devuelve el actualizado
    );

    res.json({ ok: true, product: updatedProduct });

  } catch (error) {
    // Manejar errores de validación de Mongoose o de servidor
    res.status(500).json({ ok: false, message: error.message });
  }
};

// Delete
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product)
      return res.status(404).json({ ok: false, message: "Product not found" });

    res.json({ ok: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};

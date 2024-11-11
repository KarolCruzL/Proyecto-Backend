const Router = require('express');

// API middlewares
const { createCompraAPI, viewComprasAPI, updateCompraAPI, deleteCompraAPI} = require('../api/compras.api');

// Inicializar Productos
const router = Router();

// Methods POST
router.post('/Compras/createCompra', createCompraAPI);

// Methods GET
router.get('/Compras/viewCompras', viewComprasAPI);

// Rutas put
router.put('/Compras/updateCompra', updateCompraAPI);

// Rutas delete
router.delete('/Compras/deleteCompra', deleteCompraAPI);

module.exports = router;
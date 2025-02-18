const Compras = require('../models/Compras.model.js');

async function createCompra(options) {
  const compras = new Compras(
    options.fecha_compra,
    options.estado,	
    options.ubicacion,
    options.id_usuario,
    options.id_producto	
  );


  let comprasResult;

  try {
    comprasResult = await compras.createCompra();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al crear la compra'
    };
  }

  return {
    message: 'Compra creada exitosamente',
  };
}

async function viewCompras() {
  const compras = new Compras();
  let comprasResult;

  try {
    comprasResult = await compras.viewCompras();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al obtener las compras'
    };
  }

  return comprasResult;
}

async function updateCompra(options) {
  const compras = new Compras(
    options.fecha_compra,
    options.estado,	
    options.ubicacion,
    options.id_usuario,
    options.id_producto
  );

  try {
    comprasResult = await compras.updateCompra(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al actualizar la compra'
    };
  }

  return {
    message: 'Compra actualizada exitosamente',
  };
}

async function deleteCompra(options) {
  const compras = new Compras();

  try {
    comprasResult = await compras.deleteCompra(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar la compra'
    };
  }

  return {
    message: 'Compra eliminada exitosamente',
  };
}

module.exports = {
  createCompra,
  viewCompras,
  updateCompra,
  deleteCompra,
};
const BlogModel = require("../Modules/modules")

const getAllProducts = async (req, res) => {
  try {
    const products = await BlogModel.find({});

    if (!products) {
      res.status(404).send({
        error: "data is not finded!!",
      });
    }
    res.status(200).send({
      data: products,
      message: "data has been succesfuly finded",
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      error: "error required!!",
    });
  }
};

const getDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await BlogModel.findById(id);
    if (!product) {
      res.status(404).send({
        error: "data is not finded!!",
      });
    }
    res.status(200).send({
      data: product,
      message: "data has been succesfuly finded",
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      error: "error required!!",
    });
  }
};

const searchById = async (req, res) => {
  const { title } = req.query;
  try {
    const products = await BlogModel.find({
      title: { $regex: title, $options: "i" },
    });
    if (products.length === 0) {
      res.status(404).send({
        error: "bele bir titlda product tapilmadi",
      });
    }
    res.status(200).json({
      product: products,
      message: "product has been succesfuly finded",
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      error: "error required!!",
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await BlogModel.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).send({
        error: "data is not finded!!",
      });
    }
    res.status(200).send({
      data: deleted,
      message: "data has been succesfuly finded",
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      error: "error required!!",
    });
  }
};

const postProduct = async (req, res) => {
  const { title, description, price } = req.body;
  if (!title || !description || !price) {
    res.status(404).send({
      error: "Enter all props because it is empty ",
    });
  }
  try {
    const PostedProd = await BlogModel({ ...req.body });
    const products = await BlogModel.find({});

    const product = await PostedProd.save();

    res.status(200).send({
      posted: product,
      data: products,
      message: "posted succesfuly",
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      error: "error required!!",
    });
  }
};

const editProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await BlogModel.findByIdAndUpdate(id, { ...req.body });
    const products = await BlogModel.find({});
    if (!updated) {
      res.status(404).send({
        error: "Enter all props because it is empty ",
      });
    }
    res.status(200).send({
      putted: updated,
      data: products,
      message: "puted succesfuly",
      error: null,
    });
  } catch (error) {
    res.status(500).send({
      error: "error required!!",
    });
  }
};

module.exports = {
    getAllProducts,
    getDataById,
    searchById,
    deleteProduct,
    postProduct,
    editProduct
}
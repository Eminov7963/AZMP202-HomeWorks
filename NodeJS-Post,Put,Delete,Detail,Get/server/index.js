const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const { v4: uuidv4 } = require("uuid");
const cors = require("cors")
app.use(cors())
app.use(express.json());

const fake_api_data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
  },
];

let currentTimestamp = Date.now();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/products", (req, res) => {
  if (fake_api_data.length > 0) {
    res.status(200).send({
      data: fake_api_data,
      message: "Data getting succesfuly",
      error: null
    });
  }
  else{
    res.status(404).send({
        error:"error ecquired!!"
    })
  }
});

app.get("/products/search", (req, res) => {
  const { title: serachQuery } = req.query;

  const filteredProducts = fake_api_data.filter((q) =>
    q.title.toLowerCase().includes(serachQuery)
  );

  console.log(filteredProducts);

  if (filteredProducts.length > 0) {
    res.status(200).send({
      data: filteredProducts,
      message: "success",
      error: null,
    });
  } else {
    res.status(204).send({
      data: [],
      message: "data is empty!",
    });
  }
});


app.get("/products/:id", (req, res) => {
  if (fake_api_data.length > 0) {
    const {id} = req.params;
    const product = fake_api_data.find((q) => q.id === +id); 
    if (product !== undefined) {
      res.status(200).send({
        data: product,
        message: "Data getting by id succesfuly",
        error: null,
      });
    } else {
      res.status(404).send({
        error: "bele bir data yoxdur",
      });
    }
  } else {
    res.status(404).send({
      error: "error ecquired!!",
    });
  }
});

app.delete("/products/:id", (req, res) => {
  if (fake_api_data.length > 0) {
    const {id} = req.params;
    const idx = fake_api_data.findIndex((q)=>q.id === +id)
    if (idx !== -1) {
    const product = fake_api_data.splice(idx,1)
      res.status(200).send({
        deleted: product,
        data: fake_api_data,
        message: "Data getting succesfuly",
        error: null,
      });
    } else {
      res.status(404).send({
        error: "ele bir id-li element tapilmadi",
      });
    }
  } else {
    res.status(404).send({
      error: "error ecquired!!",
    });
  }
});

app.post("/products", (req, res) => {
  const { title, price, description, category } = req.body;
  const newProduct = {
    id: currentTimestamp++,
    title,
    price
  };
  fake_api_data.push(newProduct);
  res.status(201).send({
    product: fake_api_data,
    message: "Post olundu",
    error: null
  });
});

app.put("/products/:id", (req, res) => {
    const{id}=req.params;
    const{ title, price, description, category } = req.body
    const idx = fake_api_data.findIndex((q)=>q.id === +id)
    if (idx!== -1) {
        const newProduct = {
          id: +id,
          title,
          price,
          description,
          category,
        };
        fake_api_data[idx] = newProduct;
        res.status(200).send({
          data: fake_api_data,
          message: "updated"
        });
    }
    else{
        res.status(404).send({
            message:"not found"
        })
    }

});

app.patch("/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, description, category } = req.body;
  const idx = fake_api_data.findIndex((q) => q.id === +id);
  if (idx !== -1) {
    
    if (title !== undefined) {
        fake_api_data[idx].title = title
    }
    if (price !== undefined) {
      fake_api_data[idx].price = price;
    }
    if (description !== undefined) {
      fake_api_data[idx].description = description;
    }
    if (category !== undefined) {
      fake_api_data[idx].category = category;
    }
    res.status(200).send({
      data: fake_api_data[idx],
      message: "updated",
    });
  } else {
    res.status(404).send({
      message: "not found",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

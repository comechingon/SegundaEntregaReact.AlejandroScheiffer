const products = [
  {
    id: "1",
    name: "Piscina Romana",
    price: 200000,
    category: "piscinas",
    img: "https://www.piscinasgraf.com/wp-content/uploads/2018/05/piscina-poliester-romana-graf_3-1024x683.jpg",
    stock: 10,
    description: "Descripcion de Piscina Romana",
  },
  {
    id: "2",
    name: "Piscina Solarium",
    price: 250000,
    category: "piscinas",
    img: "https://www.lavoz.com.ar/resizer/sagZ3d0S-kRkVRy9u17H6MxSr6s=/1023x683/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/IU5VJ2PCPJAXPONTCDBYOCHIMQ.jpg",
    stock: 10,
    description: "Descripcion de Piscina Solarium",
  },
  {
    id: "3",
    name: "Bomba Vulcano 1hp",
    price: 50000,
    category: "accesorios",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetGeH9ZxFKuZn215CloEFy6PxdYEhbSPGWg&usqp=CAU",
    stock: 10,
    description: "Descripcion Bomba Vulcano 1hp",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};

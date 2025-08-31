export const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Example product object
// {
//     img: "https://i.postimg.cc/YqS20htm/catalog-Image1.jpg",
//     name: "Angels malu zip jeans slim black used",
//     price: 139,
//    size: "W30",
//.    quantity: 2,
//     colors: ["#24426A", "#18574A", "#666689"],
//     choosenColor: "#24426A",
//   }
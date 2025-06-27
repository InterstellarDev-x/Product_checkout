interface Card {
    imageLink : string,
    productName : string,
    productCode : string,
    productPrice : number,
    productDescrptions? : string
}


export const cards: Card[] = [
  {
    imageLink: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Imported Chocolate",
    productCode: "CHOC123",
    productPrice: 20,
    productDescrptions: "Rich dark chocolate with nuts from Belgium."
  },
  {
    imageLink: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Galaxy S21",
    productCode: "PHN456",
    productPrice: 699,
    productDescrptions: "Samsung's flagship with AMOLED display."
  },
  {
    imageLink: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "MacBook Air M2",
    productCode: "LPT789",
    productPrice: 999,
    productDescrptions: "Lightweight laptop with Apple Silicon chip."
  },
  {
    imageLink: "https://images.unsplash.com/photo-1635329086694-d02f81549dea?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Noise Cancelling Headphones",
    productCode: "HP123",
    productPrice: 150,
    productDescrptions: "Wireless with deep bass and ANC."
  },
  {
    imageLink: "https://images.unsplash.com/photo-1579811216948-6f57c19376a5?q=80&w=396&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Apple Watch SE",
    productCode: "WTC234",
    productPrice: 249,
    productDescrptions: "Fitness tracking and smart notifications."
  },
  {
    imageLink: "https://images.unsplash.com/photo-1718353097583-8ca64c8f7c94?q=80&w=437&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "The Pragmatic Programmer",
    productCode: "BK456",
    productPrice: 30,
    productDescrptions: "Classic book on software engineering."
  },
  {
    imageLink: "https://images.unsplash.com/photo-1734238734314-38f47a6e3931?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Lego City Set",
    productCode: "TY789",
    productPrice: 59,
    productDescrptions: "Creative construction toy for kids."
  },
  {
    imageLink: "https://images.unsplash.com/photo-1662411198835-c5a151d2af9e?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Nike Air Max",
    productCode: "SH123",
    productPrice: 120,
    productDescrptions: "Comfortable and stylish sneakers."
  },
  {
    imageLink: "https://source.unsplash.com/featured/?tshirt",
    productName: "Graphic T-Shirt",
    productCode: "CL456",
    productPrice: 25,
    productDescrptions: "Cotton tee with cool designs."
  },
  {
    imageLink: "https://source.unsplash.com/featured/?coffee",
    productName: "Arabica Coffee Beans",
    productCode: "FD789",
    productPrice: 18,
    productDescrptions: "Freshly roasted premium coffee."
  },
  {
    imageLink: "https://source.unsplash.com/featured/?keyboard",
    productName: "Mechanical Keyboard",
    productCode: "ACC101",
    productPrice: 89,
    productDescrptions: "RGB backlit with tactile switches."
  },
  {
    imageLink: "https://source.unsplash.com/featured/?mouse",
    productName: "Wireless Mouse",
    productCode: "ACC102",
    productPrice: 40,
    productDescrptions: "Ergonomic and battery-efficient."
  },
  {
    imageLink: "https://source.unsplash.com/featured/?camera",
    productName: "Mirrorless Camera",
    productCode: "CAM103",
    productPrice: 850,
    productDescrptions: "High-resolution compact camera."
  },
  {
    imageLink: "https://source.unsplash.com/featured/?sunglasses",
    productName: "Ray-Ban Sunglasses",
    productCode: "SUN104",
    productPrice: 99,
    productDescrptions: "UV-protected premium shades."
  },
  {
    imageLink: "https://source.unsplash.com/featured/?backpack",
    productName: "Travel Backpack",
    productCode: "BG105",
    productPrice: 60,
    productDescrptions: "Waterproof with laptop compartment."
  },
  {
    imageLink: "https://source.unsplash.com/featured/?perfume",
    productName: "Versace Perfume",
    productCode: "PF106",
    productPrice: 75,
    productDescrptions: "Long-lasting and fresh fragrance."
  },
  {
    imageLink: "https://source.unsplash.com/featured/?lamp",
    productName: "Desk Lamp",
    productCode: "HM107",
    productPrice: 35,
    productDescrptions: "LED lamp with adjustable brightness."
  },
  {
    imageLink: "https://source.unsplash.com/featured/?bottle",
    productName: "Stainless Water Bottle",
    productCode: "BT108",
    productPrice: 15,
    productDescrptions: "Keeps water cold for 24 hours."
  },
  {
    imageLink: "https://source.unsplash.com/featured/?notebook",
    productName: "Classic Notebook",
    productCode: "ST109",
    productPrice: 10,
    productDescrptions: "Perfect for journaling and notes."
  },
  {
    imageLink: "https://source.unsplash.com/featured/?earbuds",
    productName: "Bluetooth Earbuds",
    productCode: "EB110",
    productPrice: 59,
    productDescrptions: "Compact with great battery life."
  }
];
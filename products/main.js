class Product {
    static numProducts = 0;
 
    constructor(name, price,id) {
     
      this.name = name;
      this.price = price;
      this.id=id;
      Product.numProducts++;
    }
  }
  
  // Create an array of products
  const products = [
    new Product("Product 1", 10,1),
    new Product("Product 2", 20,2),
    new Product("Product 3", 30,3),
    new Product("Product 4", 10,4),
    new Product("Product 5", 20,5),
    new Product("Product 6", 30,6),
  ];
  const tableBody = document.getElementById("productTableBody");
  
  // Function to generate table rows for products
  function generateProductRows() {
   
    products.forEach((product) => {
      const row = document.createElement("tr");
      

      const nameCell = document.createElement("td");
      
      const priceCell = document.createElement("td");
      const idCell = document.createElement("td");

  
      nameCell.textContent = product.name;
      priceCell.textContent = product.price;
      idCell.textContent = product.id;
      idCell.textContent = product.id;

      tableBody.appendChild(row);
  
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(idCell);
     

    });
  }
  generateProductRows();

   const totalPrice = products.reduce((total, product) => total + product.price, 0);
     const totalRow = document.createElement("tr");
     const totalCell = document.createElement("td");
     const totalCell2 = document.createElement("td");

 
      const totalPriceCell = document.createElement("td");
     

    
      totalCell.textContent = "Total";
      totalCell2.textContent = "Products Number";

   

      totalPriceCell.textContent = totalPrice;
     

    
     
      totalRow.appendChild(totalPriceCell);
      tableBody.appendChild(totalCell);
      tableBody.appendChild(totalCell2);


      tableBody.appendChild(totalRow);

   

      tableBody.appendChild(totalRow);
      const numProductsCell = document.createElement("td");
      numProductsCell.textContent = Product.numProducts;
      totalRow.appendChild(numProductsCell);
  
  // Call the function to generate the table rows
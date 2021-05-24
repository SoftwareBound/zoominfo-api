const data = require("./products.json");

function filterResults(keyword) {
  return data.filter((product) =>
    product.productName.toLowerCase().includes(keyword)
  );
}

exports.filterResults = filterResults;

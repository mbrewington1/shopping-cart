var count = 0;

// Grocery List array
let productList = [
  {
    name: 'Lobster',
    category: 'Seafood'
  },

  {
    name: 'T-Bone Steaks',
    category: 'Meat'
  },

  {
    name: 'Baked Potatoes',
    category: 'produce'
  },

  {
    name: 'Asparagus',
    category: 'veggie'
  },

  {
    name: 'Parmesean Cheese',
    category: 'dairy'
  },

  {
    name: 'Butter',
    category: 'dairy'
  },

  {
    name: 'Garlic Bread',
    category: 'bread'
  },

  {
    name: 'Shredded Cheese',
    category: 'dairy'
  },

  {
    name: 'Sour Cream',
    category: 'dairy'
  },

  {
    name: 'Strawberry Cheesecake',
    category: 'dessert'
  }

];

const render = function () {
  var products = $('.Product');
  products.empty()
  for (let i = 0; i < items.length; i++) {
    console.log(items[i].name)
    products.append('<div>' + items[i].name + '</div>');
  };
}

// Recieve the name and index as parameters.
function duplicateCheck(name, index) {
  // Get all items that are currently in the cart.
  var cartList = $('.cart-list');
  var item = $(`#btn-${index}`);

  console.log(cartList);
  // For each item in the cart list, check to see if the given name matches.
  for (let i = 0; i < cartList.length; i++) {
    if (item.text() === name) {
      // Alert the user if it already exists.
      alert(name + ' already exists in cart!');
    } else {
      count++;
      $('#totalItems').text(count)
      $('.product-quantity').text(count);
      // Create the button and event listener for the button that's in the shopping cart.
      cartList.append(`<button id="btn-${index}" class="cart m-2 btn-${index} btn-outline-success">${name}</button>`);
      $(`#btn-${index}`).on('click', function () {
        count--;
        $('#totalItems').text(count)
        $('.product-quantity').text(count);
        // Removes the button from the shopping cart.
        $(`#btn-${index}`).remove();
      });
    }
  }
}

// For each item in productList, create the button for it.
for (let i = 0; i < productList.length; i++) {
  $('.item-list').append(`<button class="product m-2 btn-${i} ${productList[i].category}">${productList[i].name}</button>`);
  // Create the event listener that checks the shopping cart for duplicates.
  $(`.btn-${i}`).on('click', function () {
    duplicateCheck(productList[i].name, i);
  });
}

// When all gets clicked, show all products button
$('#all').on('click', function () {
  $('.product').show();
});



$('#totalItems').text(count)
// $('.totalAmount').text('$ ' + total + ' USD')


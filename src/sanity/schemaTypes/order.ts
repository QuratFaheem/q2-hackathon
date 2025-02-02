
const orderSchema = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    { name: 'firstname', type: 'string', title: 'First Name' },
    { name: 'lastname', type: 'string', title: 'Last Name' },
    { name: 'phone', type: 'string', title: 'Phone' },
    { name: 'email', type: 'string', title: 'Email' },
    { name: 'address', type: 'text', title: 'Address' },
    { name: 'city', type: 'string', title: 'City' },
    { name: 'zip', type: 'string', title: 'Zip Code' },
    { 
      name: 'cartItems', 
      type: 'array', 
      title: 'Cart Items', 
      of: [{ type: 'reference', to: [{ type: 'product' }] }] 
    },
    { name: 'total', type: 'number', title: 'Total' },
    { name: 'orderDate', type: 'datetime', title: 'Order Date' },
  ],
};

export default orderSchema;

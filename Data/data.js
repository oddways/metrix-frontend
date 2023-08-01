export const Orders = [
  {
    productID: 1,
    productName: "iPhone 13",
    customerID: 101,
    orderDate: "12 Sept 2022",
    amount: 730000,
    quantity: 1,
    status: "Pending",
  },
  {
    productID: 2,
    productName: "Samsung",
    customerID: 102,
    orderDate: "5 Oct 2022",
    amount: 850000,
    quantity: 2,
    status: "Completed",
  },
  {
    productID: 3,
    productName: "Google Pixel 7",
    customerID: 103,
    orderDate: "9 Oct 2022",
    amount: 920000,
    quantity: 7,
    status: "Pending",
  },
  {
    productID: 4,
    productName: "Infinix Hot Lite",
    customerID: 104,
    orderDate: "1 Nov 2022",
    amount: 120000,
    quantity: 4,
    status: "Completed",
  },
  {
    productID: 5,
    productName: "Tecno spark",
    customerID: 101,
    orderDate: "2 Nov 2022",
    amount: 100000,
    quantity: 1,
    status: "Pending",
  },
]
export const AbandonedCart = {
  quantity: 20,
  quantityPercentage: "+0.00%",
  customers: 30,
}
export const Products = {
  quantity: 45,
  active: 32,
  activePercentage: "+24%",
}

export const Sales = {
  total: 40000000,
  volume: 450,
  volumePercentage: "+20.00%",
}

export const Customers = {
  customer: 1200,
  customersPercentage: "+15.80%",
  active: 1180,
  activePercentage: "+85.00%",
}

export const cartOverView = {
  percentage: "20%",
  customers: 30,
}

export const Conversations = [
  {
    conversationID: 1,
    user: {
      userid: 1,
      name: "Jane Doe",
      messages: [
        {
          message: "Hello, i want to make enquiries about your product",
          time: new Date(),
        },
      ],
    },
    admin: {
      adminID: 1,
      messages: [
        {
          messageID: 1,
          message: "Hello Jane, thanks for reaching out",
          time: new Date(),
        },
        {
          messageID: 2,
          message: "What do you need to know?",
          time: new Date(),
        },
      ],
    },
  },

  {
    conversationID: 2,
    user: {
      userid: 2,
      name: "Janet Adebayo",
      messages: [
        {
          message: "Hello, i want to make enquiries about your product",
          time: new Date(),
        },
      ],
    },
    admin: {
      adminID: 1,
      messages: [
        {
          messageID: 1,
          message: "Hello Janet, thanks for reaching out",
          time: new Date(),
        },
        {
          messageID: 2,
          message: "What do you need to know?",
          time: new Date(),
        },
      ],
    },
  },

  {
    conversationID: 3,
    user: {
      userid: 3,
      name: "Kunle Adebayo",
      messages: [
        {
          message: "Hello, i want to make enquiries about your product",
          time: new Date(),
        },
      ],
    },
    admin: {
      adminID: 1,
      messages: [
        {
          messageID: 1,
          message: "Hello Kunle, thanks for reaching out",
          time: new Date(),
        },
        {
          messageID: 2,
          message: "What do you need to know?",
          time: new Date(),
        },
      ],
    },
  },
]

// const salescalc = () => {
//   const total = Orders.reduce(
//     (acc, curVal) => acc + curVal.amount * curVal.quantity
//   )
//   console.log(total)
// }

// number.toLocaleString("en-US")
// salescalc()

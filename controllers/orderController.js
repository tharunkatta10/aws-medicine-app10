exports.getOrders = (req, res) => {
  const dummyOrders = [
    { id: 1, medicine: 'Paracetamol', quantity: 2 },
    { id: 2, medicine: 'Amoxicillin', quantity: 1 },
    { id: 3, medicine: 'Cough Syrup', quantity: 3 }
  ];

  res.status(200).json(dummyOrders);
};

const users = [
  {
    name: "Jean",
    revenue: [115.3, 48.7, 98.3, 14.5],
    outlay: [85.3, 13.5, 19.9]
  },
  {
    name: "Jéssica",
    revenue: [24.6, 214.3, 45.3],
    outlay: [185.3, 12.1, 120.0]
  },
  {
    name: "Carlos",
    revenue: [9.8, 120.3, 340.2, 45.3],
    outlay: [450.2, 29.9]
  }
];

function sumNumbers(numbers) {
  let sum = 0;

  for(let number of numbers) {
    sum = sum + number;
  }

  return sum;
}

function calculateBalance(revenue, outlay) {
  const sumRevenue = sumNumbers(revenue);
  const sumOutlay = sumNumbers(outlay);

  return sumRevenue - sumOutlay;
};

for(let user of users) {
  const balance = calculateBalance(user.revenue, user.outlay);
  
  if(balance < 0) {
    console.log(`${user.name} possui saldo NEGATIVO de ${balance.toFixed(2)}.`);
  } else if(balance == 0) {
    console.log(`${user.name} possui saldo ZERADO`);
  } else {
    console.log(`${user.name} possui saldo POSITIVO de ${balance.toFixed(2)}`);
  };
};
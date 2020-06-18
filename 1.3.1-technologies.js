const users = [
  {name: 'Jean', technologies: ['HTML', 'CSS', 'JavaScript']},
  {name: 'Jéssica', technologies: ['Node.js', 'PHP', 'Python']},
  {name: 'Carlos', technologies: ['CSS', 'JQuerry', 'Bootstrap']}
];

for (let user of users) {
  console.log(`${user.name} trabalha com ${user.technologies.join(', ')}.`);
};

function checkIfUserUsesCSS(user) {
  for (let tecnologia of user.technologies) {
    if (tecnologia == 'CSS') return true
  }

  return false
};

for (let i = 0; i < users.length; i++) {
  const userTrabalhaComCSS = checkIfUserUsesCSS(users[i]);
  
  if (userTrabalhaComCSS) {
    console.log(`O usuário ${users[i].name} trabalha com CSS`);
  };
};
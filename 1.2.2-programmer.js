const programmer = {
  name: 'Jean',
  age: 28,
  technologies: [
    {name: 'JavaScript', specialty: 'Web/Mobile'},
    {name: 'C++', specialty: 'Desktop'},
    {name: 'Python', specialty: 'Data Science'}
  ]
};

console.log(`O usuário ${programmer.name} tem ${programmer.age} anos e usa ${programmer.technologies[0].name} com especialidade em ${programmer.technologies[0].specialty}`);
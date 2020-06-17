const name = 'Jean';
const gender = 'M';
const age = 28;
const contribution = 10;
const calculateContribution = age + contribution;
const manCanRetire = gender == 'M' && contribution >= 35 && calculateContribution >= 95;
const womanCanRetire = gender == 'F' && contribution >= 30 && calculateContribution >= 85;

if (manCanRetire || womanCanRetire) {
  console.log(`${name}, você pode se aposentar!`)
} else {
  console.log(`${name}, você não pode se aposentar!`)
}
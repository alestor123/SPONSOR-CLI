var chalk = require('chalk'),
figlet = require('figlet'),
axios = require('axios');
(async () => {
figlet('Thanks To The Members', (err, data) => {
console.log(chalk.yellow(data))
})
var data = await axios.get(`https://opencollective.com/${process.argv[2] || 'github'}/members/organizations.json`)
data.data.map(members => console.log(' \n Name : '+chalk.green(members.name) + ' Twitter : ' + chalk.red(members.twitter || 'No Twitter') + ' Email : '+ chalk.red(members.email || 'No Email') + ' Type : ' + chalk.red(members.type)+'\n'))
})();

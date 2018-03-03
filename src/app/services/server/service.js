const express = require('express')
const app = express()

var map = [
  {_id: '123', username: 'alice',    password: 'alice',    firstName: 'Alice',  lastName: 'Wonder'  },
  {_id: '234', username: 'bob',      password: 'bob',      firstName: 'Bob',    lastName: 'Marley'  },
  {_id: '345', username: 'charly',   password: 'charly',   firstName: 'Charly', lastName: 'Garcia'  },
  {_id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose',   lastName: 'Annunzi' }
];

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send(map);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

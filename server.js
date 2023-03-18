const express = require('express')
const cors=require('cors')
const app = express()
const port = 3500
const bodyParser=require('body-parser');

app.use(cors())
app.get('/app', (request, response) => {
  response.send('Harvey')
})

app.use(bodyParser.json())
app.post('/submit', (request, response) => {
    const data=request.body;
    console.log(data);
    response.send('Data received');
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
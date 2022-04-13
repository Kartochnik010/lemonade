const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios').default;
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
const port = 3001

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})
app.get('/calc',(req, res) =>{
    res.sendFile(__dirname+"/calc.html")
})
app.post('/calc',(req,res)=>{
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result = num1 + num2
    res.send("Result: " + result)
})


app.get('/APITest', (req,res) => {
    res.sendFile(__dirname+'/APITest.html')
})
app.post('/apireq', (req,res) => {
    let name = req.body.apiin
    const params = {
        access_key: '1d4816a457fb3b9b32b2cc6091653014',
        query: `${name}`
    }
    axios.get('http://api.weatherstack.com/current', {params})
        .then(response => {
            const apiResponse = response.data;
            res.send(apiResponse)
            // res.send("Current temperature in " + apiResponse.location.name + " is " + apiResponse.current.temperature + " degrees.");
        }).catch(error => {
        res.send(error);
    });
})

app.listen(port, () => {
    console.log(`The app listening on port ${port}`)
})
const express = require("express")
const app = express()
const PORT = 4000
app.use(express.json())


const getArray = ["hello", "sure", "gotme"]

app.get('https://practiceapi602.netlify.app/', (req, res) => {
  res.sendFile(__dirname + '/pages' + '/index.html')
})

app.get('https://practiceapi602.netlify.app/cheese', (req, res) => {
  res.status(200).json({ message: getArray[0]})
})

app.get('https://practiceapi602.netlify.app/anything/:number', (req, res) => {
  const { number } = req.params
  res.status(200).json({ message: "Congrats, here's " + number})
})

app.get('https://practiceapi602.netlify.app/turkey', (req, res) => {
  const { jelly } = req.query
  res.status(200).json({ message: "here's the type of jelly: " + jelly})
})

app.get('https://practiceapi602.netlify.app/keyvalue', (req, res) => {
  const { key, value } = req.query
  res.status(200).json({ message: {
    [key]: value
  }})
})

//

app.post('https://practiceapi602.netlify.app/postit/:value', (req, res) => {
  const { item } = req.body
  const { value } = req.params
  const { type } = req.query

  console.log(item)

  // getArray.push({
  //   body: body.message,
  //   type: type,
  //   value: value
  // })

  getArray.push(item)

  res.status(200).json({
    message: "Added " + item + " to the array.",
    database: getArray,
    value: value,
    type: type
  })
})



app.listen(PORT, () => {console.log(`Server listening on port: `, PORT)})
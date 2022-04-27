import express from 'express';
import { consoleLog } from './helper/help';

// const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  
  consoleLog("hello world");

  res
  .status(201)
  .json({
      ok:true,
      message: "Hola mudno!!!",
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

import express from 'express'

const app = express ()

const add = (a:number, b:number) => {
  return a + b;
}

//exclamation point after variabale -not undefined or leave me alone

app.get ('/', (req) => {
  add (1, 2)
})

app.listen (3001, () => {
  console.log(`Listening to server 3001`);
})


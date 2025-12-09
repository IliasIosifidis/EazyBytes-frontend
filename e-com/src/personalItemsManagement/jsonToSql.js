import fs from 'fs'
import mysql from 'mysql2/promise'

const raw = fs.readFileSync("./products.json", "utf8")
const data = JSON.parse(raw)

const connection = await mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "a123b123c123",
  database: "easystore"
})
try{
  const rows = data.map(item => [
    // item.id,
    item.name,
    item.categories,
    item.image,
    item.price
  ])
  const sql =`
      INSERT INTO textures (name, categories, image_url, price)
      VALUES ?
  `
  await connection.query(sql, [rows])
  console.log(`inserted ${rows.length} tows.`)
}catch (err){
  console.log(err)
}
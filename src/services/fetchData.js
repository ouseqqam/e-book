import axios from 'axios'

const url = "http://localhost:3000/categories"

export const fetchBooks = async () => {
  try {
      const res = await axios.get(`${url}`)
      return res.data
  } catch (err) {
    console.log(err)
  }
}

export const fetchBook = async (id) => {
  try {
    const res = await axios.get(`${url}/${id}`)
    return res.data.books
  } catch (err) {
    console.log(err)
  }
}
import axios from "axios"

export const fetchUsersTodos = async (userId, authToken) => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/${userId}/todos`, 
    { headers: { Authorization: `Bearer ${authToken}` } })
  return response.data.todos
}

export const newTodo = async (todo, authToken) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/todos`,
    { todo },
    { headers: { Authorization: `Bearer ${authToken}` } }
  )
  return response.data.todo
}

export const removeTodo = async (todoId, authToken) => {
  const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/todos/${todoId}`,
    { headers: { Authorization: `Bearer ${authToken}` } }
  )
  return response.data.todo
}

export const editTodos = (task, id, authToken) => {
  axios.put(`${process.env.REACT_APP_API_URL}/api/todos/${id}`,
    { task },
    { headers: { Authorization: `Bearer ${authToken}` } }
  ).then(response => {
    console.log(response.data)
  })
    .catch(err => console.log(err))
}

import React       from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/'

let AddTodo = ({ dispatch }) => {
  let input

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input ref={node => {input = node}} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
const hren = connect()(AddTodo)

export default hren
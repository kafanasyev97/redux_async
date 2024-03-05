const InputField = ({ text, handleInput, handleSubmit }) => {
  console.log('aa')

  return (
    <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  )
}

export default InputField

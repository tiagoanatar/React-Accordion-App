const DeleteItem = ({ text, onClick, person}) => {
  return (
    <button style={{backgroundColor: "black", color:"white"}} className="btn" onClick={() => onClick(person.id)}>
      {text}
    </button>
  )
}

export default DeleteItem

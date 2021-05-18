import List from './List'

const Birthday = ({ people, deleteTask, setPeople }) => {
    return (
        <>
        <h3>{people.length} birthdays today</h3>
        <List people={people} deleteTask={deleteTask} />
        <button onClick={() => setPeople([])}>clear all</button>
        </>
    )
}

export default Birthday

import DeleteItem from "./DeleteItem"

const List = ({ people, deleteTask }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <DeleteItem text={'Delete Item'} onClick={deleteTask} person={person} />
          </article>
        );
      })}
    </>
  );
};

export default List;

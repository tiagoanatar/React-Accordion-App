import React, { useState } from 'react'
import data from './data'
import AccordionItem from './components/AccordionItem'
import Birthday from './components/Birthday'
import Header from './components/Header'

function App() {

  // accordion data
  const accordionData = [
    {
      id: 1,
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      id: 2,
      title: 'Section 2',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

  // people data
  const [people, setPeople] = useState(data)

  // delete people item
  const deleteTask = (id) => {
    setPeople(
      people.filter((task) =>
        task.id !== id)
      )
  }

  return (
    <>
    <main>
      <section className='container'>
        <Header />

        <div className="accordion">
          {accordionData.map(({ id, title, content }) => (
            <AccordionItem
              title={title}
              content={content}
              key={id}
            />
          ))}
          <AccordionItem
            title='Birth Day'
            content={<Birthday people={people} deleteTask={deleteTask} setPeople={setPeople} />}
            key='3'
          />
        </div>

      </section>
    </main>
    </>
  )
}

export default App

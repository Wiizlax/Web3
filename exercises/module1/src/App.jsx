
const Header = () => {
  return (
    <h1>Half Stack application development</h1>
  )
}

const Content = ({part , nbrExos}) => {
  return (
    <>
      <p>
        {part} {nbrExos}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header />
      <Content part={part1} nbrExos={exercises1}/>
      <Content part={part2} nbrExos={exercises2}/>
      <Content part={part3} nbrExos={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App
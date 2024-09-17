import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import Total from "./components/Total/Total"

const App = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 500
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
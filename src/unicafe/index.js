import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Part 1 - unicafe

const App = () => {
  const titles = ['give feedback', 'statistics']
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [grades, setGrade] = useState([])

  const handleClick = (type) => () => {
    if (type === 'good') {
      setGood(good + 1)
      setGrade(grades.concat(1))
    } else if (type === 'neutral') {
      setNeutral(neutral + 1)
      setGrade(grades.concat(0))
    } else {
      setBad(bad + 1)
      setGrade(grades.concat(-1))
    }
  }

  const calculatedStatistics = () => {
    let amount = grades.length    
    let average = grades.reduce((a, b) => a + b, 0) / amount
    let positive = good / amount * 100 + '%'
    
    return {
      good: good,
      neutral: neutral,
      bad: bad,
      all: amount,
      average: average,
      positive: positive
    }
  }

  return (
    <div>
      <Header title={titles[0]} />
      <br />
      <Button do={handleClick('good')} text="good" />
      <Button do={handleClick('neutral')} text="neutral" />
      <Button do={handleClick('bad')} text="bad" />
      <br />
      <Header title={titles[1]} />
      <br />
      <Statistics statistics={calculatedStatistics()} />
    </div>
  )
}

const Header = ({ title }) => (<h1>{title}</h1>)

const Button = (props) => (
  <button onClick={props.do}>
    {props.text}
  </button>
)

const Statistics = ({ statistics }) => {
  let stats = []
  for (let [key, value] of Object.entries(statistics)) {
    stats.push(<Statistic key={key} text={key} value={value} />)
  }

  if (statistics.all === 0) return (<div>No feedback given</div>)
  
  return (
    <table>
      <tbody>
        {stats}
      </tbody>
    </table>
  )
}

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

ReactDOM.render(<App />, document.getElementById('root'))
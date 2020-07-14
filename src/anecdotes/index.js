import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Part 1 - anecdotes

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0)
  )
  const getRandom = () => {
    let max = anecdotes.length - 1 || 0
    let index = Math.floor(Math.random() * (max - 0 + 1) + 0)    
    setSelected(index)
  }
  const vote = () => {
    let anecdoteVotes = [...votes]    
    anecdoteVotes[selected] += 1
    setVotes(anecdoteVotes)
  }
  let mostVoted = votes.indexOf(Math.max(...votes))

  console.log(votes);
  console.log(mostVoted);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={vote}>vote</button>
      <button onClick={getRandom}>next anecdote</button>
      <br />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[mostVoted]}</div>
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
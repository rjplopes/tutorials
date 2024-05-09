import Student from './Student.jsx'

function App() {
  
  return (
    <>
      <Student name="SpongeBob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42}></Student>
      <Student name="Squidward" isStudent={false}></Student>
      <Student age={27} isStudent={true}></Student>
    </>
  )
}

export default App

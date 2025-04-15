const Course =({course})=>{
    return(
      <>
          <Header course={course}/>
          <Content course={course}/>
          <Total course={course}/>
  
      </>
    )
  }
  
  const Header =({course})=> <h1>{course.name}</h1>
  
  const Content = ({course})=>{
    return(
      <div>
        {course.parts.map((part,i)=> <Part key={i} part={part}/>)}
      </div>
  )}
  const Total = ({course}) => {
    
    const total = course.parts.reduce((sum,part)=> sum +part.exercises,0)
    return (
      <h4>total of {total} exercises</h4>
    )
  }
  
  const Part =({part})=>   <p>{part.name} {part.exercises}</p>

export default Course
import './UsersCount.css'

export const UsersCount = ({userslist}) => {
  return (
    <div className="count" >
        <h1>{userslist.length} users left </h1>
    </div>
  )
}

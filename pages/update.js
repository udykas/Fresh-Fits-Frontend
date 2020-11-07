import UpdateItem from '../components/UpdateItem';

// destructured props to get query
const Update = ({ query }) => {
  return(
    <div>
      <UpdateItem id={query.id} />
    </div>
  )
}

export default Update;
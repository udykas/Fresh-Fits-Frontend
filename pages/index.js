import Link from 'next/link';

const Home = (props) => {
  return (
    <div>
      <h3>Home</h3>
      <Link href="/sell">
        <a>Sell!</a>
      </Link>
    </div>
  )
}
export default Home;
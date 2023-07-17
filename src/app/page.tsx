import Image from 'next/image'

export default async function Home() {

  const data = await getPopular()
  console.log(data)

  return (
    <main>
      <div className="my-10 mx-10 text-2xl font-semibold">
        <h1>Popular Movies</h1>
      </div>
      <div>
        {data && data.results.map(movie => ( <p key={movie.id}>{movie.title}</p>))}
      </div>
    </main>
  )
}


async function getPopular() {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4f298a53e552283bee957836a529baec")
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



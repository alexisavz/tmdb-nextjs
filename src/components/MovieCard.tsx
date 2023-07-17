'use client'

import Image from 'next/image'
import ScoreGauge from './SocreGauge'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function MovieCard({movie}) {

  console.log(movie)
  console.log(`https://image.tmdb.org/t/p/w500/${movie.poster}`)

  const date = new Date(movie.release_date)
  const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })


  return (
    <div className="m-0 grid place-items-center" style={{maxWidth: "150px"}}>
        <Image className="rounded m-0" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width={150} height={225} />
        <div style={{width: "150px", top: "-19px", position: "relative"}}>
            <div style={{width: "38px", height: "38px"}}>
                <CircularProgressbar value={movie.vote_average} maxValue={10} minValue={0} text={movie.vote_average} background={true}
                    styles={buildStyles({
                        rotation: 0.55,
                        textSize: '34px',
                        pathColor: `rgba(0,179,0, ${movie.vote_average / 10})`,
                        textColor: '#fff',
                        trailColor: '#333',
                        backgroundColor: '#000',
                    })}/>
            </div>
            <p className="mt-2 font-extrabold text-base">{movie.title}</p>
            <p className="font-light text-sm">{formattedDate}</p>
        </div>
    </div>
  )
}


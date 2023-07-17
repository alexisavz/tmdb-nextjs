import Image from 'next/image'

export default function Navigation() {
  return (
    <nav>
        <div className="py-4 px-5 bg-[#032541]">
            <Image src={"./tmdb-logo.svg"} alt='The Movie Data Base Logo' width={200} height={200}/>
        </div>
    </nav>
  )
}

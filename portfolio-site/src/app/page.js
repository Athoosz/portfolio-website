import Image from 'next/image'
import HeadSection from './components/HeadSection'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#060708]  mx-auto px-12 py-4">
      <Navbar/>
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeadSection />
      </div>
    </main>
  )
}

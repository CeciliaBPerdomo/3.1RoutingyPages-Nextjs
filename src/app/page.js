import Header from "@/Components/Header"

export const metadata = { 
  title: "CoderHouse - app (CP)",
  description: "app de muestra en Next.js",
  keywords: ["CoderHouse", "NextJS", "Vercel", "SSR"],
  openGraph: {
    title: "Next.js", 
    description: "The React framework for the web",
    type: "article", 
    publishedTime: "2024-01-12",
    authors: ["Cecilia Perdomo"]
  }
}

export default function Home() {
  return (
    <>
    <Header />

    <main className='container m-auto'>
      <h1 className="text-4xl text-blue-600 text-bold my-4">Routing y pages</h1>
    </main>
    </>
  )
}

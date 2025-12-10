export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
          BURN MY FACE
        </h1>
        <p className="text-2xl md:text-3xl mb-12 text-gray-300">
          Upload a selfie. Get absolutely destroyed by Grok in 3 seconds.
        </p>
        <w3m-button size="lg" label="Connect wallet to roast" />
      </div>
    </main>
  )
}

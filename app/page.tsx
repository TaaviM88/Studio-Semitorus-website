import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-gray-900">
        <div className="flex flex-col items-center">
        <Image 
            src="/company/studioSemitorus_logo.png" 
            alt="Studio Semitorus Logo" 
            width={200} 
            height={200} 
            className="mb-6"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Studio Semitorus</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">Crafting Immersive Gaming Experiences</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Discover Our Games
        </button>
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Games Showcase Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Game 1 */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
              <div className="h-64 bg-gray-500 flex items-center justify-center">
                <p className="text-lg font-bold">Game Screenshot</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cosmic Conquest</h3>
                <p className="text-gray-300 mb-4">An epic space adventure where players navigate the cosmos, build alliances, and conquer new worlds.</p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Game 2 */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
              <div className="h-64 bg-gray-500 flex items-center justify-center">
                <p className="text-lg font-bold">Game Screenshot</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Dragon&apos;s Realm</h3>
                <p className="text-gray-300 mb-4">A fantasy RPG where heroes embark on quests, slay dragons, and discover ancient artifacts in a vast open world.</p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Game 3 - False Hope */}
            <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
            <div className="h-64 bg-gray-500 overflow-hidden">
                <Image 
                src="/games/False Hope/falseHope_main.png" 
                alt="False Hope Game Screenshot" 
                width={600} 
                height={400}
                className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">False Hope</h3>
                <p className="text-gray-300 mb-4">A spine-chilling horror experience that will test your courage and survival instincts in a world of psychological terror.</p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Learn More
                </button>
            </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="bg-gray-800 h-80 rounded-lg flex items-center justify-center">
                <p className="text-lg font-bold">Company Image</p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-6">About Studio Semitorus</h2>
              <p className="text-gray-300 mb-6">
              Studio Semitorus is a passionate team of developers, artists, and storytellers dedicated to creating memorable gaming experiences. 
                Founded in 2015, our studio has grown from a small indie team to a recognized name in the gaming industry.
              </p>
              <p className="text-gray-300 mb-6">
                We believe in pushing the boundaries of interactive entertainment, blending innovative gameplay with compelling narratives 
                and stunning visuals to create games that resonate with players around the world.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded transition duration-300">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Contact Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-700 rounded-lg p-8">
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-gray-800 border border-gray-600 rounded py-2 px-4 text-white focus:outline-none focus:border-purple-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-gray-800 border border-gray-600 rounded py-2 px-4 text-white focus:outline-none focus:border-purple-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full bg-gray-800 border border-gray-600 rounded py-2 px-4 text-white focus:outline-none focus:border-purple-500"></textarea>
                </div>
                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-300 hover:text-purple-500 transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-500 transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Studio Semitorus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

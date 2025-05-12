import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>RumiAi – Personalized Self-Improvement</title>
        <meta name="description" content="Discover what lifts your spirit with AI-powered personalized recommendations for events, movies, games, and more." />
      </Head>
      <main className="min-h-screen bg-white text-gray-800 font-sans">
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white shadow-sm">
  <div className="flex items-center space-x-1">
    <Image src={logo} alt="RumiAi Logo" width={60} height={60} />
    <span className="text-2xl md:text-1xl font-bold text-black">RumiAi</span>
  </div>
  <div>
    <a href="#waitlist" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
      Join Waitlist
    </a>
  </div>
</header>


<section
  className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center px-6"
  style={{ backgroundImage: "url('/hero-bg.png')" }}
>
  <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl max-w-3x3">
    <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
      RumiAI: Self-Improvement Platform Powered by AI Agents
    </h1>
    <p className="text-lg md:text-xl text-gray-700 mb-6">
      Discover what lifts your spirit — AI-powered experiences for calm, clarity, and joy.
    </p>
    <a
    >
    </a>
  </div>
</section>
        <section className="px-6 py-16 bg-violet-50" id="get-started">
          <h2 className="text-3xl font-semibold text-center text-black mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">1. Discover Your Personality</h3>
              <p className="text-black">Take a short psychological test to understand your emotional needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">2. Get Tailored Suggestions</h3>
              <p className="text-black">Let our AI match you with uplifting experiences.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">3. Take Immediate Action</h3>
              <p className="text-black">Book events, watch media, or play a game instantly.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-2">4. Feel Better Daily</h3>
              <p className="text-black">Rumi learns and adapts to support your peace of mind.</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-indigo-50 text-center">
          <h2 className="text-3xl font-semibold text-black mb-6">Why RumiAi?</h2>
          <p className="max-w-3xl mx-auto text-lg text-black">
            Most apps offer content. Rumi offers connection — a one-stop experience that meets you emotionally and practically.
          </p>
        </section>

        <section className="px-6 py-20 bg-violet-100 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Contact Us: </h2>
          <p className="text-3xl text-black mb-8">contact@rumi.team</p>
        </section>
<section className="px-6 py-20 bg-amber-50 text-center">
  <h2 className="text-3xl font-semibold text-black mb-6">Join the Waitlist</h2>
  <p className="mb-6 text-black">Be the first to try RumiAi when we launch.</p>
  <form
    onSubmit={async (e) => {
      e.preventDefault();
      const email = e.target.email.value;

      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        alert('Thanks! You’re on the waitlist.');
        e.target.reset();
      } else {
        const { error } = await res.json();
        alert('Error: ' + error);
      }
    }}
    className="max-w-md mx-auto flex flex-col items-center space-y-4"
  >
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-fuchsia-900"
    />
    <button
      type="submit"
      className="bg-black text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition"
    >
      Join Waitlist
    </button>
  </form>
</section>

        <footer className="py-8 text-center text-sm text-gray-500">
  © 2025 Rumi Team LLC. All rights reserved.
  <div className="mt-2 text-gray-600">Made with love ❤️</div>
</footer>
      </main>
    </>
  );
}

import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Head>
        <title>Taigers | Ecommerce Growth and Automation Services</title>
        <meta name="description" content="Taigers helps ecommerce brands grow smarter with full-channel management, SEO, PPC, content design, and AI-driven automation." />
        <meta property="og:title" content="Taigers | Empowering Ecommerce Growth" />
        <meta property="og:description" content="Specialized services for Amazon, Shopify, Google, and Walmart. Full account management, SEO optimization, PPC strategy, and more." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:url" content="https://taigers.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4 shadow">
        <div className="text-2xl font-bold">Taigers</div>
        <div className="space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center text-center py-20 space-y-6 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="bg-white bg-opacity-70 p-6 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold">Where Ecommerce Growth Meets Intelligence</h1>
          <p className="text-lg md:text-2xl max-w-2xl">Helping brands grow smarter with full-channel management, performance marketing, and AI-driven optimization.</p>
          <a href="#contact" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Get In Touch</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto text-center py-16 space-y-8 px-4">
        <h2 className="text-3xl font-semibold">About Taigers</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img src="https://images.unsplash.com/photo-1601233746120-6e8d2ca78c90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="About" className="w-64 h-64 object-cover rounded-2xl shadow-lg" />
          <p className="text-lg max-w-2xl">
            At Taigers, we help ecommerce brands grow smarter with full-channel account management, performance marketing, and data-driven optimization strategies.
            With 10+ years of experience across Amazon, Walmart, Google Ads, Shopify, and DTC platforms, we specialize in connecting marketing execution—like SEO, PPC, and content creation—with strategic automation and growth systems.
            Our mission is simple: to deliver measurable business impact through agile, scalable, and intelligent ecommerce solutions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Services content ... (omitted for brevity) */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto text-center py-16 space-y-4">
        <h2 className="text-3xl font-semibold">Get In Touch</h2>
        <p>Ready to grow your ecommerce brand? Reach out today and discover how Taigers can help you succeed.</p>
        <a href="mailto:info@taigers.com" className="inline-block bg-black text-white text-lg px-6 py-3 rounded-full mt-4 hover:bg-gray-800">
          Email Us
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t">
        © {new Date().getFullYear()} Taigers.com | Empowering Ecommerce Growth
      </footer>
    </div>
  );
}

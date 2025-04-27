
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
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
      <section id="home" className="flex flex-col items-center justify-center text-center py-20 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Where Ecommerce Meets Automation</h1>
        <p className="text-lg md:text-2xl max-w-2xl">Taigers empowers brands with smarter Amazon operations, SEO strategies, and AI-driven growth.</p>
        <a href="#contact" className="mt-8 underline text-blue-600">Get In Touch</a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto text-center py-16 space-y-4">
        <h2 className="text-3xl font-semibold">About Taigers</h2>
        <p>
          Taigers is a dedicated ecommerce marketing service partner, focused on helping brands succeed on platforms like Amazon, Shopify, and beyond.
          By combining data-driven strategies with creative execution, Taigers empowers your brand to grow faster, smarter, and stronger in today's competitive online market.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Amazon Account Management</h3>
            <p>Full-service management to optimize your Amazon operations, compliance, and sales.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Amazon SEO Optimization</h3>
            <p>Improve your product rankings and visibility with tailored SEO strategies.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Amazon PPC Management</h3>
            <p>Maximize your ad spend ROI through data-driven PPC campaign optimization.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Content Design & Listing Optimization</h3>
            <p>Professional content creation to enhance your brand image and product listings.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-4xl mx-auto text-center py-16 space-y-6">
        <h2 className="text-3xl font-semibold">Why Choose Taigers?</h2>
        <ul className="space-y-2 text-lg">
          <li>✔️ 10+ years of ecommerce experience across global marketplaces</li>
          <li>✔️ Expert in data automation and marketing analytics</li>
          <li>✔️ Customized, client-focused strategies</li>
          <li>✔️ Agile development and quick response times</li>
        </ul>
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

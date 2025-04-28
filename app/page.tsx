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
        <div className="text-2xl font-bold text-blue-700">Taigers</div>
        <div className="space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Where Ecommerce Growth Meets Intelligence</h1>
        <p className="text-lg md:text-2xl max-w-2xl mt-6">Helping brands grow smarter with full-channel management, performance marketing, and AI-driven optimization.</p>
        <a href="#contact" className="mt-8 inline-block bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600">Get In Touch</a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto text-center py-20 px-6">
        <h2 className="text-3xl font-semibold text-blue-700">About Taigers</h2>
        <p className="text-lg mt-6 text-gray-700">
          At Taigers, we help ecommerce brands grow smarter with full-channel account management, performance marketing, and data-driven optimization strategies.
          With 10+ years of experience across Amazon, Walmart, Google Ads, Shopify, and DTC platforms, we specialize in connecting marketing execution—like SEO, PPC, and content creation—with strategic automation and growth systems.
          Our mission is simple: to deliver measurable business impact through agile, scalable, and intelligent ecommerce solutions.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto py-20">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Full Ecommerce Account Management</h3>
            <p>Cross-platform account operations for Amazon, Walmart, Shopify, Google Shopping, and more—covering listings, inventory, compliance, and growth management.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Listings SEO & Content Optimization</h3>
            <p>Boost visibility and conversion rates by optimizing titles, descriptions, and keywords across major marketplaces and DTC websites.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">PPC Advertising Strategy & Management</h3>
            <p>Custom PPC campaigns with ongoing optimization for Amazon Ads, Google Ads, Facebook Ads—maximizing your ROAS efficiently.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Content Design & Creative Production</h3>
            <p>Professional image design and video production to enhance product branding on Amazon, Google, Shopify, and beyond.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Ecommerce Data Reporting & Analytics</h3>
            <p>Custom automated dashboards (using Tableau, Power BI) to monitor sales, ads, and inventory performance in real-time.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto text-center py-20 px-6">
        <h2 className="text-3xl font-semibold text-blue-700">Get In Touch</h2>
        <p className="text-lg text-gray-700">Ready to grow your ecommerce brand? Reach out today and discover how Taigers can help you succeed.</p>
        <a href="mailto:info@taigers.com" className="mt-6 inline-block bg-orange-500 text-white text-lg px-6 py-3 rounded-full hover:bg-orange-600">
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

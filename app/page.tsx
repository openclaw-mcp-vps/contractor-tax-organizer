export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Contractors
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Organize Contractor Receipts<br />
          <span className="text-[#58a6ff]">for Tax Season</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload receipts and PDFs, auto-categorize business expenses with AI, track mileage, and export clean tax-ready reports — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $9/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required to try</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📷</div>
            <h3 className="text-white font-semibold mb-1">Receipt Scanning</h3>
            <p className="text-[#8b949e] text-sm">Upload photos or PDFs. AI extracts vendor, amount, and date automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🗂️</div>
            <h3 className="text-white font-semibold mb-1">Smart Categories</h3>
            <p className="text-[#8b949e] text-sm">Expenses sorted into IRS-friendly categories: travel, meals, software, and more.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📄</div>
            <h3 className="text-white font-semibold mb-1">Tax Reports</h3>
            <p className="text-[#8b949e] text-sm">Generate a clean PDF summary ready to hand to your accountant or file yourself.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need for tax season</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited receipt uploads',
              'AI-powered expense categorization',
              'Mileage tracker with IRS rate',
              'Unlimited PDF tax reports',
              'Secure cloud storage',
              'Email support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get Started — $9/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">What file types can I upload?</h3>
            <p className="text-[#8b949e] text-sm">You can upload JPEG, PNG, and PDF files. Our AI will extract the relevant expense data from each file automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does mileage tracking work?</h3>
            <p className="text-[#8b949e] text-sm">Log trips manually or import from your calendar. We apply the current IRS standard mileage rate and include it in your tax report.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Is my data secure?</h3>
            <p className="text-[#8b949e] text-sm">Yes. All files are encrypted at rest and in transit. We use Supabase with row-level security so only you can access your data.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} ContractorTax. All rights reserved.
      </footer>
    </main>
  )
}

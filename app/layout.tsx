import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ContractorTax — Organize Receipts for Tax Season',
  description: 'Categorize business expenses, track mileage, and generate tax-ready reports. Built for freelancers and contractors.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c7fc1b1f-04e0-4526-896e-85eb74988a66"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

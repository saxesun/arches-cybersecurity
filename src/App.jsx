import logo from './assets/logo.png'
import {
  ShieldCheck,
  Wifi,
  MonitorUp,
  LockKeyhole,
  Users,
  HardDriveDownload,
  WifiCog,
} from "lucide-react";
export default function App() {
  return (
   <div className="min-h-screen bg-black text-white relative overflow-hidden">
    <div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-yellow-500/10 blur-3xl rounded-full" />
  <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full" />
</div>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="font-bold tracking-[0.25em]">ARCHES</div>
        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#services">Services</a>
          <a href="#why">Why Arches</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
  <a
    href="tel:+18015555555"
    className="border border-white/20 px-4 py-2 rounded-xl text-sm hover:bg-white/10 transition"
  >
    Call: (801) 505-9256
  </a>

  <a
    href="#contact"
    className="bg-yellow-400 text-black px-4 py-2 rounded-xl text-sm font-semibold hover:bg-yellow-300 transition"
  >
    Contact
  </a>
</div>
      </nav>
      <div className="md:hidden sticky top-[73px] z-40 flex gap-2 px-4 py-3 bg-black/70 backdrop-blur-md border-b border-white/10">
  <a
    href="tel:+18015059256"
    className="flex-1 text-center border border-white/20 px-4 py-2 rounded-xl text-sm hover:bg-white/10 transition"
  >
    Call
  </a>

  <a
    href="#contact"
    className="flex-1 text-center bg-yellow-400 text-black px-4 py-2 rounded-xl text-sm font-semibold hover:bg-yellow-300 transition"
  >
    Contact
  </a>
</div>

      <section className="relative overflow-hidden min-h-[85vh] flex flex-col items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.25),transparent_50%)]"></div>

<div className="absolute top-[-200px] w-[700px] h-[700px] bg-yellow-500/10 blur-3xl rounded-full"></div>
       <img
  src={logo}
  alt="Arches Cybersecurity"
 className="w-[750px] max-w-full drop-shadow-[0_0_60px_rgba(234,179,8,0.18)] hover:scale-[1.01] transition duration-500"
/>

        <p className="mt-10 text-yellow-400 tracking-[0.35em] uppercase text-sm font-semibold">
          Solid Foundations. Secure Futures.
        </p>

        <p className="mt-8 max-w-2xl text-slate-300 text-xl leading-relaxed">
          Cybersecurity and IT services for Utah small businesses that need stronger networks, safer systems, and less technical chaos.
        </p>

        <div className="mt-12 flex gap-4">
          <a href="#contact" className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Get Consultation
          </a>

          <a href="#services" className="border border-blue-400 px-6 py-3 rounded-xl hover:bg-blue-900 transition">
            View Services
          </a>
        </div>
      </section>

      <section id="services" className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="text-slate-400 mb-10">Practical IT and cybersecurity fixes for small businesses.</p>

<div className="grid md:grid-cols-3 gap-6">
  {[
    {
      title: "Network Security",
      desc: "Review router, firewall, port, and device settings to reduce unnecessary exposure.",
      icon: ShieldCheck,
    },
    {
      title: "Wi-Fi Segmentation",
      desc: "Separate guest Wi-Fi from business systems so customers are not sitting on your internal network.",
      icon: WifiCog,
    },
    {
      title: "Windows 11 Upgrades",
      desc: "Check hardware compatibility, back up important data, and upgrade systems with minimal downtime.",
      icon: MonitorUp,
    },
    {
      title: "Secure Remote Access",
      desc: "Replace risky remote access habits with safer VPN or zero-trust style access options.",
      icon: LockKeyhole,
    },
    {
      title: "User Account Hardening",
      desc: "Clean up shared accounts, admin access, passwords, MFA, and employee access permissions.",
      icon: Users,
    },
    {
      title: "Backup Planning",
      desc: "Create practical backup and recovery plans so one bad click does not become a business-ending dumpster fire.",
      icon: HardDriveDownload,
    },
  ].map((service) => (
<div
  key={service.title}
  className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">


  <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-white transition">
    {service.title}
  </h3>

  <p className="mt-3 text-slate-300 leading-relaxed">
    {service.desc}
  </p>
</div>
  ))}
</div>

      </section>
<section id="process" className="px-8 py-24 bg-slate-950">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">How It Works</h2>
    <p className="text-slate-400 mb-10">
      Simple, low-disruption security improvements for small businesses.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          step: "01",
          title: "Assess",
          desc: "Review devices, users, Wi-Fi, backups, remote access, and basic security settings.",
        },
        {
          step: "02",
          title: "Fix",
          desc: "Prioritize practical changes that reduce risk without breaking daily operations.",
        },
        {
          step: "03",
          title: "Maintain",
          desc: "Provide ongoing checks, documentation, and support so systems stay secure.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="p-6 rounded-2xl bg-black/30 border border-white/10"
        >
          <div className="text-yellow-400 text-sm font-bold tracking-widest">
            {item.step}
          </div>
          <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
          <p className="mt-3 text-slate-300 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      <section id="why" className="px-8 py-24 bg-gradient-to-b from-black/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Arches</h2>
          <p className="text-slate-300 text-lg max-w-3xl">
            Most small businesses do not need buzzword-heavy enterprise nonsense. They need working backups, secured accounts, segmented Wi-Fi, safer remote access, and someone who can explain the risk without sounding like a vendor demon.
          </p>
        </div>
      </section>

      <section
  id="contact"
  className="px-8 py-24 bg-gradient-to-b from-black to-slate-950"
>
  <div className="max-w-4xl mx-auto">
    <div className="text-center">
      <h2 className="text-4xl font-bold">Request a Consultation</h2>
      <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
        Tell us what is going on with your business systems, network, users, or security setup.
      </p>
    </div>

<form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="mt-12 max-w-3xl mx-auto grid gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
>
  <input type="hidden" name="access_key" value="53dd5819-99b4-401d-b80a-192fd78de863" />

  <div className="grid md:grid-cols-2 gap-5">
    <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-3" name="business_name" placeholder="Business name" />
    <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-3" name="contact_name" placeholder="Person to contact" />
    <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-3" name="phone" placeholder="Phone number" />
    <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-3" name="email" placeholder="Email address" />
  </div>

  <input
    className="rounded-xl bg-black/40 border border-white/10 px-4 py-3"
    name="business_address"
    placeholder="Business address"
  />

  <select
    className="rounded-xl bg-black/40 border border-white/10 px-4 py-3"
    name="desired_service"
  >
    <option value="">What do you need help with?</option>
    <option>Network security review</option>
    <option>Wi-Fi segmentation</option>
    <option>Windows 10 to Windows 11 upgrade</option>
    <option>User accounts / admin access cleanup</option>
    <option>Backup planning</option>
    <option>Secure remote access</option>
    <option>General IT support</option>
    <option>Not sure yet</option>
  </select>

  <textarea
    className="min-h-36 rounded-xl bg-black/40 border border-white/10 px-4 py-3"
    name="message"
    placeholder="Briefly describe the issue, goal, or desired service."
  />

  <button
    type="submit"
    className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition"
  >
    Send Request
  </button>
</form>
  </div>
</section>
<section
  id="contact"
  className="px-8 py-24 bg-gradient-to-b from-black to-slate-950"
>
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold">
      Secure Your Business Before Problems Start
    </h2>

    <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
      Arches Cybersecurity helps Utah small businesses improve security,
      reduce risk, and modernize systems without unnecessary complexity.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="mailto:saxon@archescyber.com"
        className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition"
      >
        Email Us
      </a>

      <a
        href="tel:+18015555555"
        className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition"
      >
        Call Now
      </a>
    </div>

    <div className="mt-10 text-slate-500 text-sm">
      Salt Lake City, Utah • Small Business IT & Cybersecurity
    </div>
  </div>
</section>
<section className="px-8 py-16 border-t border-white/10 bg-slate-950">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
    
    <div>
      <h3 className="text-3xl font-bold text-yellow-400">Small Business Focused</h3>
      <p className="mt-3 text-slate-400">
        Practical cybersecurity and IT improvements designed for real small business operations.
      </p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-yellow-400">Low Disruption</h3>
      <p className="mt-3 text-slate-400">
        Security upgrades and system improvements without interrupting day-to-day business.
      </p>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-yellow-400">Local Support</h3>
      <p className="mt-3 text-slate-400">
        Salt Lake City based support for businesses that need direct communication and fast response.
      </p>
    </div>

  </div>
</section>
      <footer className="px-8 py-8 border-t border-white/10 text-center text-slate-500 text-sm">
        © 2026 Arches Cybersecurity. Solid Foundations. Secure Futures.
      </footer>
    <footer className="px-8 py-8 border-t border-white/10 bg-black text-slate-500 text-sm">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
    <p>© 2026 Arches Cybersecurity. All rights reserved.</p>
    <p>Salt Lake City, Utah • Small Business IT & Cybersecurity</p>
  </div>
</footer>
</div>
  )
}
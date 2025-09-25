import { PageHeader } from "@/components/page-header";

type Dealer = {
  country: string;
  flag: string;
  company: string;
  contact?: string;
  email?: string;
  phones?: string[];
  address?: string;
};

const dealers: Dealer[] = [
  {
    country: "Italy",
    flag: "https://flagcdn.com/w20/it.png",
    company: "New House Steel by Brescia Roberto",
    contact: "Roberto Brescia",
    email: "roberto@steelframings.com",
    phones: ["+39 329 611 7121"],
    address: "Strada delle Canestrelle 17, 70124 Bari (BA), Italy",
  },
  {
    country: "Greece",
    flag: "/flags/gr.svg",
    company: "A Metal Komotini",
    email: "a.metal.komotini@gmail.com",
    phones: ["+30 6934 975 252"],
    address:
      "1st km Komotini – Alexandroupoli Road (Opposite Lagakis Market) Kikidion, Komotini, Greece",
  },
  {
    country: "Armenia",
    flag: "/flags/am.svg",
    company: "Mina Taheri",
    email: "ceo@arshamtrade.com",
    phones: ["+374-43 657011", "+374-33 657011"],
    address: "46/4, Yerevan 0054, Armenia",
  },
];

export default function DealersPage() {
  return (
    <>
      <PageHeader
        title="Authorized Dealers"
        description="Find our trusted partners and sales points."
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Authorized Dealers" },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Dealers vertical list */}
          <div className="space-y-6">
            {dealers.map((d, i) => (
              <div key={i} className="border rounded-lg p-6 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <img src={d.flag} alt={d.country} width={18} height={12} className="rounded-none border" />
                  <span className="text-sm" style={{ color: '#565656' }}>{d.country}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: 'black' }}>{d.company}</h3>
                {d.contact && <p className="text-sm mb-1" style={{ color: '#565656' }}>Contact: {d.contact}</p>}
                {d.address && <p className="text-sm mb-1" style={{ color: '#565656' }}>{d.address}</p>}
                {d.phones && d.phones.map((p, idx) => (
                  <p key={idx} className="text-sm mb-1" style={{ color: '#565656' }}>Phone: {p}</p>
                ))}
                {d.email && <p className="text-sm mb-1" style={{ color: '#565656' }}>E-mail: {d.email}</p>}
              </div>
            ))}
          </div>

          {/* Right: Contact form */}
          <div className="rounded-lg border p-6 bg-white h-fit">
            <h2 className="text-xl font-semibold mb-6" style={{ color: 'black' }}>Contact our Authorized Dealers</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="firstName" style={{ color: 'black' }}>First Name</label>
                  <input id="firstName" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="lastName" style={{ color: 'black' }}>Last Name</label>
                  <input id="lastName" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="phone" style={{ color: 'black' }}>Phone Number</label>
                  <input id="phone" type="tel" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="email" style={{ color: 'black' }}>E-mail Address</label>
                  <input id="email" type="email" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="country" style={{ color: 'black' }}>Country</label>
                  <input id="country" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="company" style={{ color: 'black' }}>Company Name</label>
                  <input id="company" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="title" style={{ color: 'black' }}>Job Title</label>
                  <input id="title" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="subject" style={{ color: 'black' }}>Subject</label>
                  <input id="subject" className="w-full border px-3 py-2 rounded-md focus:outline-none" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="preferredDealer" style={{ color: 'black' }}>Preferred Dealer to Contact</label>
                <select id="preferredDealer" className="w-full border px-3 py-2 rounded-md focus:outline-none">
                  <option value="">Select a Dealer</option>
                  <option value="italy">Italy</option>
                  <option value="greece">Greece</option>
                  <option value="armenia">Armenia</option>
                  <option value="turkey">Turkey</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="message" style={{ color: 'black' }}>Your Message</label>
                <textarea id="message" rows={6} className="w-full border px-3 py-2 rounded-md focus:outline-none" />
              </div>
              <button type="button" className="px-4 py-2 bg-black text-white rounded-md">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}



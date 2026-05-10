import React, { useMemo, useState } from "react";
import {
  Home,
  BarChart3,
  ClipboardList,
  ReceiptText,
  Package,
  Banknote,
  Monitor,
  Truck,
  FileSpreadsheet,
  Users,
  User,
  ChevronDown,
  Search,
  Info,
  Star,
  Box,
  CreditCard,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Legend,
} from "recharts";

const RED = "#df231f";
const DARK = "#5f5c5c";
const BG = "#f3f6f8";
const GRID = "#e7e7e7";
const GREEN = "#45cf86";
const AMBER = "#e0ad35";
const BLUE = "#3c7bdc";

const navItems = [
  { key: "home", label: "HOME", icon: Home },
  { key: "insights", label: "INSIGHTS", icon: BarChart3 },
  { key: "purchaseOrders", label: "PURCHASE ORDERS", icon: ClipboardList },
  { key: "invoices", label: "INVOICES", icon: ReceiptText },
  { key: "inventory", label: "INVENTORY", icon: Package },
  { key: "ap", label: "ACCOUNTS PAYABLE", icon: Banknote },
  { key: "assets", label: "ASSET LOOKUP", icon: Monitor },
  { key: "shipments", label: "SHIPMENT TRACKING", icon: Truck },
  { key: "reports", label: "REPORT LIBRARY", icon: FileSpreadsheet },
];

const spendHistory = [
  { month: "Apr-25", value: 20000 },
  { month: "May-25", value: 22000 },
  { month: "Jun-25", value: 22000 },
  { month: "Jul-25", value: 25000 },
  { month: "Sep-25", value: 26000 },
  { month: "Oct-25", value: 19000 },
  { month: "Nov-25", value: 8000 },
  { month: "Dec-25", value: 32000 },
  { month: "Jan-26", value: 25000 },
  { month: "Feb-26", value: 45000 },
  { month: "Mar-26", value: 62000 },
];

const topSkus = [
  { name: "APPLE-001", value: 87465 },
  { name: "DELL-001", value: 63509 },
  { name: "HP-001", value: 57359 },
  { name: "DELL-002", value: 52311 },
  { name: "APPLE-002", value: 34317 },
  { name: "HP-002", value: 26010 },
  { name: "JABRA-001", value: 22113 },
  { name: "YUBICO-001", value: 10191 },
];

const categories = [
  { name: "Laptop Notebook", value: 208333 },
  { name: "Monitors", value: 78321 },
  { name: "Docks/Hubs/Adapters", value: 34317 },
  { name: "Business Headsets", value: 22113 },
  { name: "Components/Interface Cards", value: 10191 },
];

const brands = [
  { name: "APPLE", value: 121782 },
  { name: "DELL", value: 115820 },
  { name: "HP", value: 83369 },
  { name: "JABRA", value: 22113 },
  { name: "YUBICO", value: 10191 },
  { name: "OTHER", value: 0 },
];

const purchaseOrders = [
  ["PO-20260331-032", "3/31/2026", "Processing", "ABC Inc", "ABC Inc - NY\n333 W 19TH ST\nNEW YORK, NY", 6696],
  ["PO-20260330-028", "3/30/2026", "Completed", "ABC Inc", "ABC Inc - NY\n333 W 19TH ST\nNEW YORK, NY", 19992],
  ["PO-20260330-029", "3/30/2026", "Completed", "ABC Inc", "ABC Inc - VA\n1000 HEATHER HILL CT\nMCLEAN, VA", 10843],
  ["PO-20260330-030", "3/30/2026", "Processing", "ABC Inc", "ABC Inc - VA\n1772 SAG HARBOR LN\nFREDERICKSBURG, VA", 12591],
  ["PO-20260330-031", "3/30/2026", "Partially Fulfilled - Processing", "ABC Inc", "ABC Inc - OK\n1301 S PARK ST\nSAPULPA, OK", 3402],
  ["PO-20260310-027", "3/10/2026", "Completed", "ABC Inc", "ABC Inc - VA\n1000 HEATHER HILL CT\nMCLEAN, VA", 27882],
  ["PO-20260211-026", "2/11/2026", "Completed", "ABC Inc", "ABC Inc - NY\n333 W 19TH ST\nNEW YORK, NY", 44982],
];

const invoices = [
  ["INV-00031", "PO-20260330-031", "4/2/2026", "ABC Inc", "ABC Inc - OK", "1301 S PARK ST\nSAPULPA, OK", 3402],
  ["INV-00032", "PO-20260331-032", "4/2/2026", "ABC Inc", "ABC Inc - NY", "333 W 19TH ST\nNEW YORK, NY", 6696],
  ["INV-00030", "PO-20260330-030", "4/1/2026", "ABC Inc", "ABC Inc - VA", "1772 SAG HARBOR LN\nFREDERICKSBURG, VA", 12591],
  ["INV-00029", "PO-20260330-029", "3/31/2026", "ABC Inc", "ABC Inc - VA", "1000 HEATHER HILL CT\nMCLEAN, VA", 10843],
  ["INV-00028", "PO-20260330-028", "3/30/2026", "ABC Inc", "ABC Inc - NY", "333 W 19TH ST\nNEW YORK, NY", 19992],
  ["INV-00027", "PO-20260310-027", "3/12/2026", "ABC Inc", "ABC Inc - VA", "1000 HEATHER HILL CT\nMCLEAN, VA", 27882],
  ["INV-00026", "PO-20260211-026", "2/13/2026", "ABC Inc", "ABC Inc - NY", "333 W 19TH ST\nNEW YORK, NY", 44982],
  ["INV-00025", "PO-20260110-025", "1/12/2026", "ABC Inc", "ABC Inc - OK", "1301 S PARK ST\nSAPULPA, OK", 22384],
  ["INV-00033", "PO-20260401-033", "1/3/2026", "ABC Inc", "ABC Inc - VA", "1000 HEATHER HILL CT\nMCLEAN, VA", 2370],
  ["INV-00024", "PO-20251209-024", "12/11/2025", "ABC Inc", "ABC Inc - VA", "1772 SAG HARBOR LN\nFREDERICKSBURG, VA", 31913],
];

const inventory = [
  ["Apple SKU 1", "Apple MacBook Pro 14 Laptop", "Laptop Notebook", "Warehouse", 44, 10, 1.3, 16.0, "3/18/2026", 16, 26, 16],
  ["Apple SKU 2", "Apple USB-C Dock", "Docks/Hubs/Adapters", "Retail", 5, 71, 2.0, 2.5, "2/28/2026", 34, 12, -1],
  ["Dell SKU 1", "Dell Latitude 14 Laptop", "Laptop Notebook", "Retail", 58, 15, 4.2, 13.9, "2/18/2026", 44, 25, 16],
  ["Dell SKU 2", "Dell 27 Monitor", "Monitors", "Operations", 65, 0, 0.0, 16.0, "3/30/2026", 4, "", ""],
  ["HP SKU 1", "HP EliteBook 14 Laptop", "Laptop Notebook", "Retail", 72, 0, 0.7, 16.0, "3/18/2026", 16, 20, 14],
  ["HP SKU 2", "HP 27 Monitor", "Monitors", "Warehouse", 80, 35, 0.0, 16.0, "1/1/2026", 92, "", ""],
  ["Jabra SKU 1", "Jabra Wireless Headset", "Business Headsets", "Operations", 105, 0, 3.0, 16.0, "3/18/2026", 16, 18, -1],
  ["Yubico SKU 1", "Yubico Security Key NFC", "Components/Interface Cards", "Retail", 112, 0, 0.0, 16.0, "3/30/2026", 4, "", 30],
];

const assets = Array.from({ length: 16 }).map((_, i) => {
  const sku = i < 6 ? "Apple SKU 1" : i < 10 ? "Apple SKU 2" : i < 14 ? "Dell SKU 2" : "Dell SKU 1";
  const desc = sku === "Apple SKU 2" ? "Apple USB-C Dock" : sku === "Dell SKU 2" ? "Dell 27 Monitor" : sku === "Dell SKU 1" ? "Dell Latitude 14 Laptop" : "Apple MacBook Pro 14 Laptop";
  return [`SN-${String(i + 5).padStart(5, "0")}`, sku, sku.includes("Apple") ? "APPLE-001" : "DELL-001", desc, "PO-20240207-002", "INV-00002", i < 3 ? "2.15" : "1.46", i < 3 ? "Mid-life" : "New"];
});

const shipments = invoices.map((r, i) => [r[0], r[1], ["4/1/2026", "4/1/2026", "3/31/2026", "3/31/2026", "3/30/2026", "3/12/2026", "2/13/2026", "1/12/2026", "1/3/2026", "12/10/2025"][i], `TRK2026${String(i + 23).padStart(5, "0")}`, "FEDEX", r[5], `QTY: ${[18, 12, 7, 4, 8, 18, 18, 16, 30, 97][i]} - ${["Jabra Wireless Headset", "Apple USB-C Dock", "Dell Latitude 14 Laptop", "HP EliteBook 14 Laptop", "Apple MacBook Pro 14 Laptop", "Dell Latitude Laptop", "Apple MacBook Pro 14 Laptop", "HP EliteBook 14 Laptop", "Yubico Security Key NFC", "Dell 27 Monitor"][i]}`]);

function money(v) {
  return v.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function Dot({ color = GREEN }) {
  return <span className="inline-block h-2.5 w-2.5 rounded-full align-middle shadow-sm" style={{ backgroundColor: color }} />;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function Filter({ label, wide }) {
  return (
    <label className={wide ? "min-w-[260px] flex-1" : "min-w-[150px] flex-1"}>
      <div className="mb-1.5 text-[11px] font-medium text-gray-900">{label}</div>
      <div className="flex h-7 items-center justify-between border border-gray-200 bg-gray-50 px-2 text-xs text-gray-700">
        All <ChevronDown size={14} />
      </div>
    </label>
  );
}

function Shell({ page, setPage, children }) {
  return (
    <div
      className="customer-dashboard-shell relative h-[920px] overflow-hidden bg-[#eef2f6] text-[12px] text-black"
      style={{ fontFamily: "Aptos, Arial, sans-serif" }}
    >
      <div className="absolute left-0 right-0 top-0 z-20 h-6 bg-[#5d5a5a] px-7 text-[11px] font-bold leading-6 text-white">
        Last Refreshed: 04/06/2026 5:00 AM EST
      </div>

      <aside className="absolute left-0 top-6 z-10 h-[calc(920px-24px)] w-[185px] border-r border-gray-200 bg-white shadow-md">
        <div className="flex h-[50px] items-center gap-2 border-b border-gray-100 px-4">
          <span className="text-2xl font-bold text-[#e1261c]">▱ ABC Inc.</span>
        </div>

        <nav>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.key === page;

            return (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className={`flex w-full items-center gap-4 border-b border-gray-100 px-3 py-3 text-left text-[12px] tracking-wide ${
                  active ? "bg-gray-50" : "hover:bg-gray-50"
                }`}
              >
                <Icon size={22} className="text-[#e1261c]" />
                <span className="text-gray-700">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="ml-[185px] pt-2">
        <div className="p-3">{children}</div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="grid grid-cols-2 gap-3 pb-10">
      <Card className="p-4">
        <h1 className="text-lg font-semibold">Welcome</h1>
        <p className="text-[12px] leading-6 text-gray-800">Your data is refreshed nightly and reflects information <b>as of the close of the previous business day.</b><br />The dataset includes <b>just over three years of rolling transaction history</b>, providing a comprehensive view of your purchasing and operational activity. Use these dashboards to stay informed, improve visibility, and make smarter business decisions with confidence.</p>
      </Card>
      <Card className="p-4">
        <h2 className="text-lg font-semibold">Support Team</h2>
        <div className="mt-6 grid grid-cols-2 gap-8 px-6">
          <div className="flex items-center gap-4"><User size={48} fill={RED} color={RED} /><div><b>Dedicated Account Manager</b><br />John Doe<br /><a className="text-blue-700 underline">John.Doe@ABCinc.com</a><br />(800) 123-4567</div></div>
          <div className="flex items-center gap-4"><Users size={50} fill={RED} color={RED} /><div><b>Strategic Support Team</b><br />SupportTeam@ABCinc.com<br />Monday - Friday<br />8AM - 5PM EST</div></div>
        </div>
      </Card>
      <Card className="p-4">
        <h2 className="mb-6 text-lg font-semibold">Weekly Activity</h2>
        <div className="grid grid-cols-2 gap-4 px-3">
          <MetricTile title="SPEND" value="$53,524" subtitle="Total" bullets={["This Month: $81,406", "vs. Last Month: 81%"]} />
          <MetricTile title="PURCHASE ORDERS" value="5" subtitle="Received" bullets={["Avg Order Size: $10,705", "On Backorder: 0"]} />
          <MetricTile title="SHIPMENTS" value="2" subtitle="Orders Shipped Complete" bullets={["Orders Partially Fulfilled: 1", "Avg Business Days to Ship: 1.0"]} />
          <MetricTile title="PAYABLES" value="$83,776" subtitle="Amount Due This Week" bullets={["Invoices Due: 7", "New Invoices Posted: 5"]} />
        </div>
      </Card>
      <Card className="p-4">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <div className="mt-7 max-h-[370px] overflow-y-auto pr-3">
          {[
            ["4/5/2026", "📦 Inventory Received", "Received 240 units of:", "Dell Latitude 5450 Laptop"],
            ["4/5/2026", "⭐ High-Value Order", "An order > $10,000 was received:", "Purchase order PO-104582 in the amount of $18,450."],
            ["4/4/2026", "💳 Credit Issued", "Credit memo CM-28741 was issued in the amount of $3,275 related to purchase order PO-104233.", ""],
            ["4/4/2026", "⭐ High-Value Order", "An order > $10,000 was received:", "Purchase order PO-104517 in the amount of $26,980."],
            ["4/3/2026", "📦 Inventory Received", "Received 125 units of:", "HP USB-C Dock G5"],
          ].map((n, i) => <div key={i} className="border-t py-3 leading-7"><span>{n[0]} - </span><b className="font-medium">{n[1]}</b><br />{n[2]}<br />{n[3]}</div>)}
        </div>
      </Card>
    </div>
  );
}

function MetricTile({ title, value, subtitle, bullets }) {
  return <div className="h-[230px] border border-gray-200 bg-white"><div className="bg-[#df231f] py-2 text-center text-sm font-bold text-white">{title}</div><div className="flex h-[138px] flex-col items-center justify-center"><div className="text-2xl font-light text-gray-800">{value}</div><div className="mt-1 text-xs text-gray-600">{subtitle}</div></div><div className="px-3 text-xs leading-6 text-gray-600">{bullets.map(b => <div key={b}>• {b}</div>)}</div></div>
}

function InsightsPage() {
  return <div className="grid grid-cols-12 gap-3"><Card className="col-span-7 p-4"><h1 className="text-lg font-semibold">Your Insights</h1><div className="mt-8 flex justify-around text-xs"><Tab active>SPEND</Tab><Tab>ORDERS</Tab><Tab>SHIPMENTS</Tab><Tab>INVENTORY</Tab><Tab>ASSETS</Tab><Tab>ACCOUNTS<br/>PAYABLE</Tab></div></Card><Card className="col-span-5 p-4"><h2 className="text-lg font-semibold">Select a Timeframe</h2><div className="mt-8 flex justify-around text-xs"><Tab>2024</Tab><Tab>2025</Tab><Tab active>LAST 365 DAYS</Tab></div></Card><ChartCard className="col-span-6" title="Spend History" subtitle="Total: $306,367"><ResponsiveContainer width="100%" height={220}><LineChart data={spendHistory} margin={{ top: 25, right: 25, left: 0, bottom: 0 }}><CartesianGrid strokeDasharray="4 4" stroke={GRID}/><XAxis dataKey="month" fontSize={11}/><YAxis tickFormatter={(v)=>`$${v/1000}K`} fontSize={11}/><Tooltip formatter={(v)=>money(v)}/><Line type="monotone" dataKey="value" stroke={RED} strokeWidth={3} dot={false}/></LineChart></ResponsiveContainer></ChartCard><ChartCard className="col-span-6" title="Top SKUs"><HorizontalBars data={topSkus} max={90000}/></ChartCard><ChartCard className="col-span-6" title="Top Product Categories"><HorizontalBars data={categories} max={220000}/></ChartCard><ChartCard className="col-span-6" title="Top Brands"><ResponsiveContainer width="100%" height={240}><BarChart data={brands} margin={{ top: 30, right: 15, left: 0, bottom: 0 }}><CartesianGrid strokeDasharray="4 4" vertical={false} stroke={GRID}/><XAxis dataKey="name" fontSize={11}/><YAxis tickFormatter={(v)=>`$${v/1000}K`} fontSize={11}/><Tooltip formatter={(v)=>money(v)}/><Bar dataKey="value">{brands.map((_,i)=><Cell key={i} fill={i===0?RED:"#cfcfcf"}/>)}</Bar></BarChart></ResponsiveContainer></ChartCard></div>;
}
function Tab({active, children}) { return <div className={`px-8 pb-4 text-center ${active ? "border-b-4 border-[#df231f] font-bold" : ""}`}>{children}</div> }
function ChartCard({title, subtitle, children, className=""}) { return <Card className={`p-3 ${className}`}><h2 className="text-lg font-semibold">{title}</h2>{subtitle && <div className="text-xs text-gray-600">{subtitle}</div>}<div className="mt-2">{children}</div></Card> }
function HorizontalBars({data,max}) { return <div className="space-y-3 py-2 pr-4">{data.map((d,i)=><div key={d.name} className="grid grid-cols-[130px_1fr_75px] items-center gap-2 text-xs"><b className="text-right">{d.name}</b><div className="h-4 bg-gray-100"><div className="h-4" style={{width:`${Math.max(3,d.value/max*100)}%`, background:i===0?RED:"#cfcfcf"}} /></div><span>{money(d.value)}</span></div>)}</div> }

function TablePage({ title, filters, columns, rows, summary, button, type }) {
  return <Card className="min-h-[700px] p-3"><h1 className="mb-7 text-lg font-semibold">{title}</h1><div className="mb-7 flex flex-wrap gap-4">{filters.map(f=><Filter key={f} label={f} wide={f.includes("Address") || f.includes("Description")}/>)}</div><div className="grid gap-4" style={{gridTemplateColumns: summary ? "290px 1fr" : "1fr"}}>{summary && <SummaryPanel items={summary}/>}<div className="overflow-hidden"><table className="w-full border-collapse text-xs"><thead><tr className="border-b border-gray-300 text-left">{columns.map(c=><th key={c} className="px-2 py-3 font-bold">{c}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i} className="border-b border-gray-100 align-top">{r.map((cell,j)=><td key={j} className="whitespace-pre-line px-2 py-4">{j===2 && type==="po" ? <><Dot color={cell.includes("Completed")?GREEN:cell.includes("Partial")?BLUE:"#c8b7e6"}/> {cell}</> : j===3 && type==="ap" ? <><Dot color={cell.includes("Past")?"#d43d57":"#ff7f4a"}/> {cell}</> : j===7 && type==="asset" ? <><Dot color={cell==="New"?GREEN:AMBER}/> {cell}</> : cell}</td>)}</tr>)}</tbody></table></div></div>{button && <button className="float-right mt-7 rounded bg-white px-6 py-4 text-gray-300 shadow-md"><Search size={15} className="inline text-blue-500"/> {button}</button>}</Card>
}
function SummaryPanel({items}) { return <div className="rounded-lg border border-gray-200">{items.map((it,i)=><div key={it.label} className="border-b p-4 last:border-b-0"><div className="flex items-center justify-between"><b>{it.label}</b><span>{it.value}</span></div><div className="mt-3 h-2 bg-gray-200"><div className="h-2 bg-[#df231f]" style={{width:`${it.pct}%`}} /></div></div>)}</div> }

function PODetail() {return <Card className="min-h-[633px] p-4"><h1 className="text-lg font-semibold">Purchase Order Detail</h1><div className="mt-8 grid grid-cols-3 gap-4 text-center"><div></div><KpiBox title="PO Status"><Dot/> Completed</KpiBox><KpiBox title="PO Number">PO-20260330-028</KpiBox></div><div className="mt-10 grid grid-cols-3 gap-8 text-xs leading-5"><InfoBlock rows={[["Account Number:","123ABC"],["Account Name:","ABC Inc"],["Contact:","Giovanni Rivera 800-309-5965"],["Phone:","8003095965"]]}/><InfoBlock rows={[["Customer Name:","ABC Inc"],["Order Number:","SLS428"],["Order Date:","3/30/2026"],["Type:","Drop Shipment"],["Warehouse:","Third Party"]]}/><InfoBlock rows={[["Ship-to Name:","ABC Inc - NY"],["Ship-to Address1:","333 W 19TH ST"],["Ship-to City:","NEW YORK"],["Ship-to State:","NY"],["Ship to Zip Code:","10011"]]}/></div><div className="mt-8"><SimpleTable columns={["Type","Line","Order Number","Invoice Number","SKU","Description","Qty Ordered","Qty Backordered","Qty Shipped","Ship Date","Unit Price","Amount","Freight","Misc"]} rows={[["INV","1","SLS428","INV-00028","Apple SKU 1","Apple MacBook Pro 14 Laptop","8","0","8","3/30/2026","$2,499.00","$19,992.00","$0.00","$0.00"],["Total","","","","","","","","","","","$19,992.00","$0.00","$0.00"]]} darkHeader /></div><div className="mt-48 grid grid-cols-3 gap-10"><SimpleTable columns={["Tracking Number(s)","Carrier",""]} rows={[["TRK20260028","FEDEX","Track Shipment"]]} darkHeader/><div></div><SimpleTable columns={["Device Serial Numbers"]} rows={[]} darkHeader/></div><button className="float-right mt-24 rounded-xl border bg-white px-10 py-4 text-gray-600 shadow-sm">Return to Previous Page</button></Card>}
function KpiBox({title,children}) { return <div className="border"><div className="bg-[#5f5c5c] py-3 text-base font-bold text-white">{title}</div><div className="py-4 text-sm">{children}</div></div> }
function InfoBlock({rows}) { return <div>{rows.map(([a,b])=><div key={a} className="grid grid-cols-[130px_1fr]"><b className="text-right">{a}</b><span className="pl-2">{b}</span></div>)}</div> }
function SimpleTable({columns,rows,darkHeader}) { return <table className="w-full border-collapse text-xs"><thead><tr className={darkHeader?"bg-[#5f5c5c] text-white":"border-b"}>{columns.map(c=><th key={c} className="px-2 py-3">{c}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i} className="border-b bg-white">{r.map((c,j)=><td key={j} className="px-2 py-2 text-center font-normal">{c}</td>)}</tr>)}</tbody></table> }

function InventoryDetail() {return <Card className="min-h-[633px] p-4"><h1 className="text-lg font-semibold">SKU Detail</h1><div className="mt-10 grid grid-cols-2 gap-8"><div><InfoBlock rows={[["SKU:","Apple SKU 2"],["Manufacturer:","APPLE"],["Part Number:","APPLE-002"],["Description:","Apple USB-C Dock"]]}/><h2 className="mt-8 text-lg font-semibold">Shipments by Location</h2><div className="text-xs">Last 365 Days</div><div className="relative mt-1 h-[420px] overflow-hidden bg-gray-200"><div className="absolute inset-0 flex items-center justify-center text-2xl tracking-widest text-gray-400">UNITED STATES</div><div className="absolute left-[48%] top-[55%] h-12 w-12 rounded-full bg-[#df231f] opacity-95"></div><div className="absolute right-[16%] top-[34%] h-3 w-3 rounded-full bg-[#df231f]"></div></div></div><div className="border-l pl-8"><h2 className="text-lg font-semibold">Product Quantities</h2><div className="mt-10 grid grid-cols-3 text-center"><BigStat label="On-Hand" value="5"/><BigStat label="In-Transit to Warehouses" value="71"/><BigStat label="Total" value="76"/></div><div className="mt-10"><SimpleTable columns={["DELAWARE","GEORGIA","MISSOURI","STS-TRG","STS-CROSSCOM","STS-HTG","STS-ASI"]} rows={[[0,0,0,0,0,0,0]]}/></div><h2 className="mt-16 text-lg font-semibold">Weekly Usage vs. On Hand</h2><div className="text-xs">Last 6 Weeks</div><ResponsiveContainer width="100%" height={240}><LineChart data={[{m:"Jul 2024",u:34,s:5},{m:"Jan 2025",u:61,s:5},{m:"Oct 2025",u:90,s:5},{m:"Apr 2026",u:12,s:5}]} margin={{top:25,right:25,left:5,bottom:0}}><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="m" fontSize={11}/><YAxis fontSize={11}/><Tooltip/><Legend/><Line dataKey="u" name="Weekly Units Purchased" stroke={RED} strokeWidth={3} dot={false}/><Line dataKey="s" name="Units In Stock" stroke="#777" strokeDasharray="4 4" strokeWidth={3} dot={false}/></LineChart></ResponsiveContainer></div></div><button className="float-right mt-4 rounded-xl border bg-white px-10 py-4 text-gray-600 shadow-sm">Return to Previous Page</button></Card>}
function BigStat({label,value}) {return <div><div className="text-base text-gray-500">{label}</div><div className="mt-3 text-2xl font-light text-gray-800">{value}</div></div>}

function ReportsPage(){const reports=["OPEN ORDERS REPORT","ACCOUNTS PAYABLE REPORT","SPEND & USAGE REPORT","ASSET SERIAL NUMBER REPORT","STOCKED PRODUCTS & INVENTORY REPORT","SHIPPING & TRACKING NUMBER REPORT"];return <div className="grid grid-cols-2 gap-4">{reports.map((r,i)=><Card key={r} className="h-[188px] p-4"><b>{r}</b><p className="mt-5 max-w-2xl leading-5">{["The open orders report provides a detailed view of all orders that have been placed but not yet shipped or billed. It includes key information such as product details, quantities ordered, expected ship dates, and current order status.","The accounts payable report offers a comprehensive overview of outstanding invoices and their payment status. It includes details such as invoice numbers, due dates, amounts owed, and payment aging buckets.","The standard usage report provides a comprehensive summary of all billed transactions within the selected period. It includes key details such as product descriptions, quantities billed, shipment tracking numbers, and device serial numbers.","The asset serial number report provides a line-level view of all shipped products with their associated device serial numbers. It includes details such as order numbers, product descriptions, and corresponding invoice information.","The stocked products and inventory report provides a clear snapshot of all items currently available in your inventory. It highlights available quantities, incoming shipments, recent usage trends, and stock coverage.","The shipping and tracking number report consolidates all outbound shipment details to provide end-to-end delivery visibility. It includes tracking numbers, carrier information, ship dates, and ship-to locations."][i]}</p><a className="float-right mt-8 text-blue-600 underline">Click to View Report --&gt;</a></Card>)}</div>}

export default function CustomerDashboardProject() {
  const [page, setPage] = useState("home");

  const content = useMemo(() => {
    if (page === "home") return <HomePage />;
    if (page === "insights") return <InsightsPage />;
    if (page === "purchaseOrders") return <TablePage title="Your Purchase Orders" filters={["PO Number","PO Status","Ship-to Contact","Ship-to Address","Ship-to City","Ship-to State"]} summary={[{label:"COMPLETED (LAST 30 DAYS)",value:3,pct:95},{label:"PROCESSING",value:2,pct:62},{label:"PARTIALLY FULFILLED",value:1,pct:32},{label:"DELAYED",value:0,pct:0}]} columns={["PO NUMBER","ORDER DATE","STATUS","CUSTOMER NAME","SHIP-TO LOCATION","AMOUNT"]} rows={purchaseOrders} button="View PO Details" type="po" />;
    if (page === "poDetail") return <PODetail />;
    if (page === "invoices") return <TablePage title="Your Invoice History" filters={["Invoice","PO Number","Timeframe","Ship-to Contact","Ship-to Address","Ship-to City","Ship-to State"]} columns={["INVOICE NUMBER","PO NUMBER","INVOICE DATE","CUSTOMER NAME","SHIP-TO NAME","SHIP-TO LOCATION","AMOUNT"]} rows={invoices} button="View Invoice Details" />;
    if (page === "inventory") return <TablePage title="Your Inventory" filters={["SKU","Manufacturer Part Number","SKU Description","Brand","Product Category"]} columns={["SKU","DESCRIPTION","PRODUCT CATEGORY","LINE OF BUSINESS","AVAILABLE UNITS","INCOMING UNITS","UNITS PURCHASED WEEKLY","STOCK COVERAGE (WEEKS)","LAST STOCKED DATE","DAYS AGED","90 DAY USAGE","LARGEST DEVIATION"]} rows={inventory.map(r => r.map((c, i) => i === 7 ? <><Dot color={Number(c) < 4 ? AMBER : GREEN} /> {c}</> : i === 9 && Number(c) > 90 ? <span className="bg-yellow-200 px-5 py-2">{c}</span> : c))} button="View SKU Details" />;
    if (page === "inventoryDetail") return <InventoryDetail />;
    if (page === "ap") return <TablePage title="Your Accounts Payable" filters={["Transaction Type","PO Number","Invoice","Invoice Status","Aging Category"]} summary={[{label:"TOTAL OUTSTANDING:",value:"$524,572",pct:0},{label:"CURRENT INVOICES",value:0,pct:0},{label:"DUE THIS WEEK",value:7,pct:22},{label:"DUE NEXT WEEK",value:0,pct:0},{label:"PAST DUE",value:26,pct:88}]} columns={["PO NUMBER","INVOICE","INVOICE DATE","STATUS","DUE DATE","AMOUNT","APPLIED","OPEN"]} rows={invoices.map(r => [r[1], r[0], r[2], r[2].includes("2025") || r[2].includes("2/") || r[2].includes("1/") ? "Past Due" : "Due This Week", "4/3/2026", money(r[6]), "$0.00", money(r[6])])} type="ap" />;
    if (page === "assets") return <TablePage title={<span>Your Hardware Assets <Info size={18} className="inline text-blue-500" /></span>} filters={["Device Serial Number","SKU","Manufacturer Part Number","SKU Description","PO Number","Invoice","Status"]} columns={["SERIAL NUMBER","SKU","MANUFACTURER PART NUMBER","DESCRIPTION","PO NUMBER","INVOICE","ASSET AGE (YEARS)","STATUS"]} rows={assets} type="asset" />;
    if (page === "shipments") return <TablePage title="Your Shipment Tracking" filters={["Invoice","PO Number","Timeframe","Carrier","Contents"]} columns={["INVOICE NUMBER","PO NUMBER","SHIP DATE","TRACKING NUMBER","CARRIER","SHIP TO LOCATION","CONTENTS"]} rows={shipments.map(r => r.map((c, i) => i === 3 ? <a className="text-blue-600 underline">{c}</a> : c))} />;
    if (page === "reports") return <ReportsPage />;

    return <HomePage />;
  }, [page]);

  return (
  <>
    <section className="project-case-study">
      <div className="section-heading">
        <h2>Customer Business Dashboard <span>🖥️</span></h2>
      </div>

      <div className="project-detail-card">
        <p className="project-detail-intro">
          Designed a customer-facing analytics portal that consolidated operational,
          purchasing, inventory, invoice, and shipment visibility into a centralized
          reporting experience powered by Power BI.
        </p>
      </div>

      <div className="project-detail-grid">
        <div className="project-detail-card">
          <h3>Business Problem</h3>

          <p>
            Customers relied heavily on manual requests to access operational data,
            including purchase order status, invoice history, shipment tracking,
            inventory visibility, and spend analytics. This created reporting
            bottlenecks, delayed decision-making, and limited transparency.
          </p>
        </div>

        <div className="project-detail-card">
          <h3>Solution</h3>

          <p>
            Developed a scalable customer reporting portal providing self-service
            access to operational and financial data through a unified dashboard
            experience. The solution emphasized usability, executive visibility,
            and reduction of ad hoc reporting dependency.
          </p>
        </div>

        <div className="project-detail-card">
          <h3>Key Features</h3>

          <ul>
            <li>Purchase order and invoice visibility</li>
            <li>Inventory and stock coverage monitoring</li>
            <li>Shipment tracking and fulfillment insights</li>
            <li>Accounts payable aging visibility</li>
            <li>Customer-specific reporting library</li>
          </ul>
        </div>

        <div className="project-detail-card">
          <h3>Business Impact</h3>

          <ul>
            <li>Reduced dependence on manual reporting requests</li>
            <li>Improved transparency and customer experience</li>
            <li>Strengthened strategic value proposition</li>
            <li>Enabled scalable external reporting delivery</li>
          </ul>
        </div>
      </div>
    </section>

    <div className="customer-dashboard-page">
      <div className="customer-dashboard-demo">
        <Shell page={page} setPage={setPage}>
          {content}
        </Shell>
      </div>
    </div>
  </>
);
}

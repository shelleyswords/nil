/* THE NIL GAME PLAN — Course curriculum data.
   Loaded as a plain script (no fetch) so the player works on any host AND when
   opened locally. After filming each faceless lesson video, paste its embed URL
   into the matching `video` field below (YouTube/Vimeo embed URL, or a file path).
   Leave `video` empty ("") to show the "coming soon" placeholder.
   `free: true` lessons are the free preview; the rest unlock after purchase. */
window.NIL_CURRICULUM = {
  title: "The NIL Game Plan Course",
  modules: [
    {
      id: "m0", title: "Welcome",
      lessons: [
        { id:"L00", title:"Welcome: How this course works", dur:"3 min", free:true, video:"/assets/videos/L00.mp4",
          recap:"A quick tour of how the course works and the one promise that makes all of this easy: keep it simple and do the steps in order.",
          action:"Commit to going through the lessons in order, one at a time." }
      ]
    },
    {
      id: "m1", title: "Mindset — Don't Fumble the First Check",
      lessons: [
        { id:"L01", title:"Treat it like a tool, not a trophy", dur:"5 min", free:true, video:"/assets/videos/L01.mp4",
          recap:"Your NIL money is a tool that can build the rest of your life — not a trophy to show off. The athletes who stay wealthy think this way from day one.",
          action:"Decide before your next check lands: this money is a tool, not a trophy." },
        { id:"L02", title:"The 30-day rule (beating lifestyle creep)", dur:"4 min", free:false, video:"/assets/videos/L02.mp4",
          recap:"New money makes everyone want to level up their lifestyle. The 30-day rule lets the hype cool so you don't trade real wealth for a quick flex.",
          action:"Make a personal rule: no big purchases for 30 days after any new deal." },
        { id:"L03", title:"Why athletes go broke — and why you won't", dur:"5 min", free:false, video:"/assets/videos/L03.mp4",
          recap:"Broke athletes almost never earned too little — they made four avoidable mistakes. You're about to learn all four so you can dodge them.",
          action:"Write down the four mistakes and keep them somewhere you'll see them." }
      ]
    },
    {
      id: "m2", title: "Taxes First",
      lessons: [
        { id:"L04", title:"Why nobody withholds your taxes", dur:"5 min", free:false, video:"",
          recap:"Unlike a normal job, nobody takes taxes out of your NIL money. The full amount lands in your account — but a chunk secretly belongs to the government.",
          action:"Accept the mindset: part of every NIL dollar isn't yours to spend." },
        { id:"L05", title:"The 30% rule: set money aside the day it lands", dur:"5 min", free:false, video:"",
          recap:"The simplest habit that saves you from a tax nightmare: move 30% of every NIL payment to a separate account the moment it arrives.",
          action:"Open a separate 'Taxes' savings account and start moving 30% of every check into it." },
        { id:"L06", title:"Self-employment tax and the 1099 form", dur:"6 min", free:false, video:"",
          recap:"NIL income makes you self-employed, which adds a ~15% self-employment tax most athletes never see coming. The 1099 form means the IRS already knows about your income.",
          action:"Understand your ~30% set-aside covers income + self-employment tax, and always report your 1099 income." },
        { id:"L07", title:"Quarterly taxes, deductions & keeping receipts", dur:"6 min", free:false, video:"",
          recap:"You pay taxes four times a year, not once — and business expenses lower your bill if you keep the receipts.",
          action:"Add the four quarterly tax dates to your calendar and start a receipts folder." },
        { id:"L08", title:"Hiring a CPA (and exactly what to ask)", dur:"5 min", free:false, video:"",
          recap:"A CPA is the one pro worth paying early. A single session can save you far more than it costs — if you ask the right questions.",
          action:"Find a CPA and book a session before your first real tax season." }
      ]
    },
    {
      id: "m3", title: "The Simple Foundation",
      lessons: [
        { id:"L09", title:"Your emergency fund", dur:"4 min", free:false, video:"",
          recap:"A cash cushion for life's surprises keeps one bad week from wrecking everything. Start with $1,000 and build toward 3–6 months of expenses.",
          action:"Set a goal to save your first $1,000 emergency fund." },
        { id:"L10", title:"High-yield savings accounts explained", dur:"4 min", free:false, video:"",
          recap:"A high-yield savings account pays you real interest for the same safety as a normal bank. It's where your emergency fund and tax money should live.",
          action:"Open a high-yield savings account (about 5 minutes online)." },
        { id:"L11", title:"Killing high-interest (credit card) debt", dur:"4 min", free:false, video:"",
          recap:"Credit card debt grows faster than any investment can. Paying it off is a guaranteed return you can't get anywhere else.",
          action:"List your debts by interest rate and attack anything above ~8–10% first." }
      ]
    },
    {
      id: "m4", title: "Investing Without Getting Ripped Off",
      lessons: [
        { id:"L12", title:"The fee trap: how 1% steals a fortune", dur:"6 min", free:false, video:"",
          recap:"A 'small' 1% annual fee can quietly cost you $300,000–$500,000+ over a lifetime. Learn to spot and skip it.",
          action:"Memorize the question: 'Are you a fee-only fiduciary, and how exactly do you get paid?'" },
        { id:"L13", title:"What is an index fund?", dur:"5 min", free:false, video:"",
          recap:"An index fund buys a tiny slice of thousands of companies at once. It's cheap, spread-out, and quietly beats most expensive stock-pickers.",
          action:"Understand the core idea: own a little of everything, cheaply, for a long time." },
        { id:"L14", title:"The Roth IRA superpower", dur:"5 min", free:false, video:"",
          recap:"A Roth IRA is a bucket where your investments grow completely tax-free. Starting young makes it worth a fortune.",
          action:"Plan to open a Roth IRA at a major low-cost brokerage." },
        { id:"L15", title:"Build your boring portfolio (step by step)", dur:"7 min", free:false, video:"",
          recap:"The whole strategy: open a Roth IRA, buy a low-cost index fund inside it, add money automatically every month, and don't touch it.",
          action:"Set up an automatic monthly contribution into a broad, low-cost index fund." },
        { id:"L16", title:"What to avoid: meme stocks, crypto gambling, hot tips", dur:"5 min", free:false, video:"",
          recap:"Exciting investing is how people lose money. Boring is the cheat code. Keep gambling money separate from your foundation.",
          action:"Promise yourself: no panic-selling, and never risk your foundation on hype." }
      ]
    },
    {
      id: "m5", title: "Protect Yourself",
      lessons: [
        { id:"L17", title:"Spotting scams and red flags", dur:"5 min", free:false, video:"",
          recap:"Most scams share the same signals: guaranteed returns, urgency, confusion, and DMs. Learn them once and you'll spot them for life.",
          action:"Adopt the rule: an unsolicited DM 'opportunity' is never real." },
        { id:"L18", title:"Friends and family who want your money", dur:"5 min", free:false, video:"",
          recap:"The hardest money situations are people you love. A simple rule protects both your money and the relationship.",
          action:"Decide your 'money I'd never miss' limit for helping others — and never cross it." },
        { id:"L19", title:"How to read an NIL contract", dur:"6 min", free:false, video:"",
          recap:"NIL deals are binding contracts. Watch for exclusivity, length, rights, and obligations — and get meaningful deals reviewed.",
          action:"For any meaningful contract, get a paid review before signing." },
        { id:"L20", title:"When you actually need a pro (and what to pay)", dur:"5 min", free:false, video:"",
          recap:"You don't need a full-time money manager. You might want a CPA, a flat-fee planner, or a lawyer — paid the right way.",
          action:"Use the magic questions to hire only fee-only, flat-rate pros when you need them." }
      ]
    },
    {
      id: "m6", title: "Your Year-One Plan",
      lessons: [
        { id:"L21", title:"The order of operations", dur:"5 min", free:false, video:"",
          recap:"Everything in the course, in order: taxes → emergency fund → kill debt → grow the fund → Roth IRA + index funds → protect yourself.",
          action:"Write out your personal order of operations and check off step one." },
        { id:"L22", title:"Your plan by income level", dur:"6 min", free:false, video:"",
          recap:"The plan never really changes — only the numbers get bigger. Here's exactly what to do whether you earn $1k, $10k, or $50k+.",
          action:"Find your income tier and follow its specific checklist." },
        { id:"L23", title:"Next steps & staying consistent", dur:"4 min", free:false, video:"",
          recap:"You don't need to be a finance genius — just consistent. Keep it boring, keep adding, and let time do the work.",
          action:"Schedule a monthly 15-minute money check-in with yourself." }
      ]
    }
  ]
};

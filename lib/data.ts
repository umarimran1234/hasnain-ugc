export type WorkItem = {
  id: string;
  cat: string;
  img: string;
  alt: string;
  type: string;
  dur: string;
  seconds: number;
  hook: string;
};

export const WORK: WorkItem[] = [
  { id: "w1", cat: "Skincare", img: "/images/skin-face.webp", alt: "Skincare close-up", type: "Testimonial", dur: "0:28", seconds: 28, hook: "POV: my skin after 14 days of this serum" },
  { id: "w2", cat: "Fashion", img: "/images/fash-friends.webp", alt: "Friends reacting to a shopping haul", type: "Haul", dur: "0:34", seconds: 34, hook: "We ordered 5 fits and kept every single one" },
  { id: "w3", cat: "Fitness", img: "/images/fit-move.webp", alt: "Fitness creator mid-movement", type: "Hook test", dur: "0:22", seconds: 22, hook: "I tried this for 30 days so you don’t have to" },
  { id: "w4", cat: "Food", img: "/images/food-pancake.webp", alt: "Honey poured on a pancake stack", type: "ASMR", dur: "0:31", seconds: 31, hook: "Sunday pancakes in 60 seconds" },
  { id: "w5", cat: "Apps & tech", img: "/images/tech-phones.webp", alt: "Two friends using their phones", type: "App demo", dur: "0:24", seconds: 24, hook: "The app that split our bill in 5 seconds" },
  { id: "w6", cat: "Skincare", img: "/images/skin-hand.webp", alt: "Hand opening a skincare bottle", type: "Product demo", dur: "0:21", seconds: 21, hook: "The 3-second step I never skip" },
  { id: "w7", cat: "Fashion", img: "/images/fash-denim.webp", alt: "Creator in a denim jacket", type: "Try-on", dur: "0:25", seconds: 25, hook: "One jacket, three ways to wear it" },
  { id: "w8", cat: "Food", img: "/images/food-chef.webp", alt: "Chef plating a dish", type: "Behind the scenes", dur: "0:26", seconds: 26, hook: "How the chef plates our best seller" },
  { id: "w9", cat: "Skincare", img: "/images/skin-oil.webp", alt: "Body oil bottle with a leaf", type: "Voiceover", dur: "0:18", seconds: 18, hook: "Stop scrolling if your skin feels dry" },
  { id: "w10", cat: "Fashion", img: "/images/fash-rack.webp", alt: "Creator beside a clothing rack", type: "Founder style", dur: "0:30", seconds: 30, hook: "Why our sizes actually fit" },
  { id: "w11", cat: "Fitness", img: "/images/fit-gym.webp", alt: "Smiling man at the gym", type: "Day in the life", dur: "0:19", seconds: 19, hook: "What’s actually in my gym bag" },
  { id: "w12", cat: "Fitness", img: "/images/fit-run.webp", alt: "Woman running on a treadmill", type: "Before / after", dur: "0:27", seconds: 27, hook: "5 am run, but make it fun" },
  { id: "w13", cat: "Food", img: "/images/food-friends.webp", alt: "Friends sharing pizza", type: "Reaction", dur: "0:40", seconds: 40, hook: "We rated every pizza on the menu" },
  { id: "w14", cat: "Apps & tech", img: "/images/tech-laptop.webp", alt: "Hands typing on a laptop", type: "Tutorial", dur: "0:29", seconds: 29, hook: "3 shortcuts that save me an hour a day" },
];

export const CATS = ["All", "Skincare", "Fashion", "Fitness", "Food", "Apps & tech"];

export const SERVICES = [
  { title: "UGC video ads", icon: "M3 6h13v12H3zM16 10l5-3v10l-5-3", text: "Testimonials, unboxings, demos and reactions, filmed vertically for paid and organic." },
  { title: "Hook variations", icon: "M13 2L4 14h7l-1 8 9-12h-7z", text: "Several opening lines per video, so you can test angles without paying for a reshoot." },
  { title: "Scripts & voiceovers", icon: "M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM5 11a7 7 0 0 0 14 0M12 18v3", text: "Scripts written around your offer, with clean English or Urdu voiceovers." },
  { title: "Video editing", icon: "M4 5h16v14H4zM4 9h16M9 5v4M15 5v4M10 13l4 2-4 2z", text: "Send your raw clips and get captions, cuts, sound design and motion graphics." },
  { title: "Product photos", icon: "M4 7h4l2-3h4l2 3h4v12H4zM12 10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z", text: "Lifestyle and in-hand stills shot in the same session, ready for your store and ads." },
  { title: "Ad creative strategy", icon: "M4 20V10M10 20V4M16 20v-7M22 20H2", text: "A monthly plan for which angles to test next, based on what your ads are already doing." },
];

export const TOOLS = ["After Effects", "Photoshop", "CapCut", "Figma"];

export const WHY = [
  { n: "01", title: "The hook lands in the first 3 seconds", text: "Every script opens with a question, a reaction or a bold claim, so thumbs stop before they scroll past." },
  { n: "02", title: "Native to the feed", text: "Shot on a phone, in real rooms, with captions and pacing that match what people already watch." },
  { n: "03", title: "Built for testing", text: "Extra hooks and CTAs on every video, so your media buyer can test angles without a reshoot." },
];

export const PROCESS = [
  { n: "01", title: "Brief & product", text: "A short call about your audience, offer and goal. You ship the product." },
  { n: "02", title: "Script & hooks", text: "I write the script and hook options. You approve before filming." },
  { n: "03", title: "Film & edit", text: "Filmed in 4K vertical, edited with captions, sound design and B-roll." },
  { n: "04", title: "Deliver & revise", text: "Final files in a shared folder, with revisions included in every package." },
];

export const PLANS = [
  { id: "starter", name: "Starter", popular: false, desc: "One polished video to test UGC for your brand.", feat: ["1 UGC video (up to 30s)", "2 hook variations", "Script included", "2 rounds of revisions", "Organic usage rights", "Delivery in [X] days"], monthlyFeat: ["1 UGC video / month", "2 hook variations", "Script included", "2 rounds of revisions", "Organic usage rights", "Delivery in [X] days"] },
  { id: "growth", name: "Growth", popular: true, desc: "Enough content to run and compare real ad tests.", feat: ["3 UGC videos (up to 45s)", "3 hooks per video", "Script + voiceover", "Raw footage included", "Paid-ads usage, [X] days", "Delivery in [X] days"], monthlyFeat: ["3 UGC videos / month", "3 hooks per video", "Script + voiceover", "Raw footage included", "Paid-ads usage, [X] days", "Delivery in [X] days"] },
  { id: "partner", name: "Brand partner", popular: false, desc: "A steady flow of fresh creatives for scaling brands.", feat: ["6 UGC videos", "3 hooks per video", "10 product photos", "Monthly strategy call", "Paid-ads usage, [X] days", "Priority delivery"], monthlyFeat: ["6 UGC videos / month", "3 hooks per video", "10 product photos / month", "Monthly strategy call", "Paid-ads usage, [X] days", "Priority delivery"] },
];

export const ADDONS = ["Extra hook · [PRICE]", "Raw footage · [PRICE]", "Paid-ads usage rights · [PRICE]", "Rush delivery · [PRICE]"];

export const FAQS = [
  { q: "Who owns the videos after delivery?", a: "You do. Organic use is included in every package, and paid-ads usage rights are included in Growth and Brand partner, or available as an add-on." },
  { q: "How long does a project take?", a: "Usually [X] working days from receiving the product to the first cut, and [X] days for revisions." },
  { q: "Do I need to send the product?", a: "Yes, for reviews and demos. For apps and services I only need access or a demo account." },
  { q: "Can you edit footage I already have?", a: "Yes. Send your raw clips and I’ll turn them into ad-ready edits with captions, music and hooks." },
  { q: "Which languages do you work in?", a: "English and Urdu, with on-screen captions in either language." },
];

export const NEEDS = ["UGC videos", "Hook variations", "Voiceover", "Editing only", "Product photos", "Strategy"];
export const BUDGETS = ["Under [X]", "[X] – [Y]", "[Y]+", "Not sure yet"];
export const NICHES = ["Skincare & beauty", "Fashion", "Fitness", "Food & cafés", "Apps & tech"];
export const MARQUEE = ["UGC video ads", "Hook variations", "Voiceovers", "Product demos", "Unboxings", "Testimonial ads"];

export const CONTACT = {
  whatsapp: "[NUMBER]",
  whatsappLink: "#contact",
  instagram: "@[handle]",
  instagramLink: "#contact",
  email: "[EMAIL]",
};

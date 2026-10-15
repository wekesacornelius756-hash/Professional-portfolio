// Shared Firebase setup (Firestore + Auth only — no Storage needed)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCIBqHCTlD_7IZiqlJvsyZ7xGt39jnSHw",
  authDomain: "cornel-portfolio.firebaseapp.com",
  projectId: "cornel-portfolio",
  storageBucket: "cornel-portfolio.firebasestorage.app",
  messagingSenderId: "554388068933",
  appId: "1:554388068933:web:617b7d443cf7d860e0a12c",
  measurementId: "G-3BQFMNY4ML"
};

export const app = initializeApp(firebaseConfig);
try { getAnalytics(app); } catch (e) {}
export const db = getFirestore(app);
export const auth = getAuth(app);

// Defaults shown until you save your own content in the admin panel
export const DEFAULTS = {
  brand: "Cornelius & Associates",
  greeting: "Hello, I'm",
  name: "Wekesa Cornelius",
  role: "Full Stack Web Developer & Digital Creator",
  tagline: "I build modern, fast and secure web applications, helping individuals and businesses grow online.",
  heroImg: "", aboutImg: "", logoImg: "",
  aboutTitle: "About Me",
  aboutSub: "Passionate Developer & Problem Solver",
  aboutText: "I am Wekesa Cornelius, a dedicated web developer from Kenya. I love building innovative solutions, learning new technologies and turning ideas into real products.",
  aboutPoints: ["3+ Years Experience", "BSc. in Computer Science", "Based in Kenya"],
  stats: [
    { n: "50+", label: "Projects Completed", icon: "fa-diagram-project" },
    { n: "98%", label: "Client Satisfaction", icon: "fa-heart-circle-check" },
    { n: "3+", label: "Years Experience", icon: "fa-user-gear" }
  ],
  techs: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Node.js", "Python", "PHP"],
  services: [
    { title: "Web Development", desc: "Fast, secure and responsive websites and web apps.", icon: "fa-mobile-screen-button" },
    { title: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android.", icon: "fa-apple-whole" },
    { title: "UI/UX Design", desc: "Clean, intuitive interfaces that provide great user experiences.", icon: "fa-desktop" }
  ],
  phone: "+254 712 8082", 
  email: "info@cornelius.co.ke", 
  location: "Nairobi, Kenya",
  socials: { 
    whatsapp: "", 
    facebook: "", 
    youtube: "", 
    linkedin: "", 
    github: "" 
  },
  cvUrl: "",
  gold: "#ffc107", 
  bg: "#050b24"
};
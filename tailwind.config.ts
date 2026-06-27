import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"], theme: { extend: { colors: { obsidian: "#0B0B0B", midnight: "#111827", gold: "#D4AF37", "premium-gold": "#C9A96E", ivory: "#F8F5EF", body: "#D1D5DB", muted: "#9CA3AF" }, fontFamily: { display: ["var(--font-playfair)", "Georgia", "serif"], sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"] }, boxShadow: { gold: "0 20px 70px rgba(212,175,55,.16)", velvet: "0 26px 90px rgba(0,0,0,.45)" } } }, plugins: [] };
export default config;

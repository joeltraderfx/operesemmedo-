import { LeadModalProvider } from "@/lib/leadModalContext";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { Hero } from "@/components/Hero";
import { DayByDay } from "@/components/DayByDay";
import { Mentor } from "@/components/Mentor";

function App() {
  return (
    <LeadModalProvider>
      <div className="min-h-screen bg-[var(--color-ink)] text-[var(--color-ivory)]">
        <Hero />
        <DayByDay />
        <Mentor />
        <footer className="px-5 py-8 text-center border-t border-[var(--color-line)]">
          <p className="font-display uppercase text-sm tracking-widest text-[var(--color-gold)]">Opere Sem Medo</p>
          <p className="text-[11px] text-[var(--color-stone)] mt-2">© {new Date().getFullYear()} — Todos os direitos reservados</p>
        </footer>
      </div>
      <LeadCaptureModal />
    </LeadModalProvider>
  );
}

export default App;

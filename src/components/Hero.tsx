import { useLeadModal } from "@/lib/leadModalContext";
import { ShieldCheck } from "lucide-react";

const ACCOUNT_URL = "https://www.vtmarkets.net/pt/trade-now/?affid=MjQzNjA3Mzc=&invitecode=wiQxT28t";
const WHATSAPP_URL = "https://chat.whatsapp.com/L0qYY0jfrl8IMgNhTsUPQX";

export function Hero() {
  const { openModal } = useLeadModal();

  return (
    <section className="relative pt-10 pb-16 px-5 overflow-hidden">
      {/* glow ambiente sutil, sem exagero */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[140%] h-72 bg-[var(--color-gold)]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-md mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-5 font-semibold">
          Desafio de 7 dias · Conta real
        </p>

        <h1 className="font-display uppercase text-5xl leading-[0.95] mb-6">
          Opere <span className="strike-medo">sem medo</span>
        </h1>

        <p className="text-[var(--color-ivory)]/90 text-base leading-relaxed mb-2">
          Com no mínimo <strong className="text-[var(--color-gold-bright)]">$300</strong>, abra sua conta internacional — no seu nome — e me acompanhe por <strong className="text-[var(--color-gold-bright)]">7 dias</strong> operando de verdade.
        </p>
        <p className="text-[var(--color-stone)] text-sm leading-relaxed mb-6">
          Você replica as operações direto na sua própria conta, olhando cada passo comigo.
        </p>

        <div className="flex items-center justify-center gap-2 bg-[var(--color-panel)] border border-[var(--color-line)] rounded-xl px-4 py-3 mb-8 text-left">
          <ShieldCheck className="w-9 h-9 text-[var(--color-gold)] shrink-0" />
          <p className="text-xs text-[var(--color-ivory)]/90 leading-snug">
            <strong className="text-[var(--color-gold-bright)]">Eu nunca pego seu dinheiro.</strong> A conta é aberta no seu nome, numa corretora regulada. Seu capital não passa pelas minhas mãos em nenhum momento.
          </p>
        </div>

        {/* vídeo vertical (YouTube Shorts) */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-[var(--color-line)] shadow-2xl shadow-black/50 mx-auto max-w-[280px]">
          <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/icp_PyEzBuQ"
              title="Opere sem medo por 7 dias — como funciona"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <button
          onClick={() => openModal(WHATSAPP_URL)}
          className="btn-fearless w-full py-4 rounded-xl font-display uppercase text-base tracking-wide"
        >
          Quero acompanhar os 7 dias
        </button>
        <p className="text-[11px] text-[var(--color-stone)] mt-3">
          Mercado envolve risco. Resultado passado não garante resultado futuro.
        </p>
      </div>
    </section>
  );
}

export { ACCOUNT_URL, WHATSAPP_URL };

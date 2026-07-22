import { useLeadModal } from "@/lib/leadModalContext";
import { ACCOUNT_URL } from "./Hero";
import { GraduationCap, TrendingUp, Users } from "lucide-react";

const ways = [
  {
    icon: TrendingUp,
    title: "Aprenda a operar seu capital",
    desc: "Aprenda a metodologia do zero e passe a operar sua própria conta, com autonomia.",
  },
  {
    icon: Users,
    title: "Conta PAMM",
    desc: "Sem precisar fazer curso nenhum — sua conta replica minhas operações automaticamente.",
  },
  {
    icon: GraduationCap,
    title: "Curso VIP",
    desc: "3 horas ao vivo, direto comigo, aprofundando a metodologia de liquidez e regiões institucionais.",
  },
];

export function Mentor() {
  const { openModal } = useLeadModal();

  return (
    <section className="px-5 py-16">
      <div className="max-w-md mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3 font-semibold text-center">
          Quem te acompanha
        </p>

        <div className="rounded-2xl overflow-hidden border border-[var(--color-line)] mb-6">
          <img src={`${import.meta.env.BASE_URL}mentor.jpg`} alt="Mentor apresentando análise de mercado" className="w-full h-auto object-cover" />
        </div>

        <p className="text-[var(--color-ivory)]/90 text-[15px] leading-relaxed mb-4">
          Trader há <strong className="text-[var(--color-gold-bright)]">12 anos</strong>. Já perdi mais de <strong className="text-[var(--color-gold-bright)]">$200 mil dólares</strong> pra aprender o que realmente funciona.
        </p>
        <p className="text-[var(--color-stone)] text-sm leading-relaxed mb-4">
          Nesse caminho, entendi que a maioria dos indicadores é ferramenta de manipulação de mercado — e por isso desenvolvi minha própria metodologia, analisando regiões de liquidez e regiões institucionais.
        </p>
        <p className="text-[var(--color-stone)] text-sm leading-relaxed mb-10">
          Meu objetivo é treinar pessoas pra operar o próprio capital com consciência — não vender promessa fácil.
        </p>

        <h3 className="font-display uppercase text-2xl text-center mb-6 leading-tight">
          3 formas de<br />andar comigo
        </h3>

        <div className="space-y-4 mb-10">
          {ways.map((w) => (
            <div key={w.title} className="bg-[var(--color-panel)] border border-[var(--color-line)] rounded-xl p-5 flex gap-4">
              <w.icon className="w-6 h-6 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display uppercase text-base tracking-wide mb-1">{w.title}</h4>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => openModal(ACCOUNT_URL)}
          className="btn-fearless w-full py-4 rounded-xl font-display uppercase text-base tracking-wide"
        >
          Quero começar agora
        </button>

        <p className="text-[11px] text-[var(--color-stone)] text-center mt-6 leading-relaxed">
          Mercado financeiro envolve risco real de perda de capital. Resultado passado não garante resultado futuro.
          A conta é sempre aberta no nome e sob controle exclusivo do cliente.
        </p>
      </div>
    </section>
  );
}

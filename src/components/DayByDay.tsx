const days = [
  { n: "01", title: "Abra sua conta", desc: "Como abrir a conta internacional em seu nome e configurar o MetaTrader do zero." },
  { n: "02", title: "Manipulação do mercado", desc: "Como funcionam os movimentos de manipulação e os horários em que eles acontecem." },
  { n: "03", title: "Acompanhe as operações", desc: "Como acompanhar minhas operações em tempo real, direto na sua conta." },
  { n: "04", title: "Gráfico limpo", desc: "Tempos gráficos, ruído de mercado, e como enxergar as regiões que realmente importam." },
  { n: "05", title: "Gestão de risco", desc: "A parte mais importante do treinamento — como proteger seu capital antes de tudo." },
  { n: "06", title: "Operando ao vivo", desc: "Você acompanha comigo, operação por operação, em tempo real." },
  { n: "07", title: "Operando ao vivo", desc: "Segundo dia ao vivo — consolidando tudo que você aprendeu na semana." },
];

export function DayByDay() {
  return (
    <section className="px-5 py-16 bg-[var(--color-panel)]">
      <div className="max-w-md mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3 font-semibold text-center">
          O que você vai viver
        </p>
        <h2 className="font-display uppercase text-3xl text-center mb-3 leading-tight">
          7 dias, do zero<br />ao vivo
        </h2>
        <p className="text-[var(--color-stone)] text-sm text-center mb-10 leading-relaxed">
          Cada dia constrói em cima do anterior — da conta aberta até você me ver operar ao vivo.
        </p>

        <div className="relative pl-8">
          <div className="absolute left-[11px] top-2 bottom-2 w-[3px] rounded-full candle-track" />

          <div className="space-y-8">
            {days.map((d, i) => (
              <div key={d.n} className="relative">
                <div
                  className="absolute -left-8 top-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold font-display"
                  style={{
                    borderColor: i === days.length - 1 ? "var(--color-gold-bright)" : "var(--color-line)",
                    background: "var(--color-ink)",
                    color: i === days.length - 1 ? "var(--color-gold-bright)" : "var(--color-stone)",
                  }}
                >
                  {d.n}
                </div>
                <h3 className="font-display uppercase text-lg mb-1 tracking-wide">{d.title}</h3>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

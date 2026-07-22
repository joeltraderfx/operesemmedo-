import { useState } from "react";
import { useLeadModal } from "@/lib/leadModalContext";
import { X, Loader2 } from "lucide-react";

// Troque pela sua Access Key gratuita do Web3Forms (web3forms.com).
// Pública por natureza — fica visível no código do navegador, é assim que o
// serviço funciona.
const WEB3FORMS_ACCESS_KEY = "SUA_ACCESS_KEY_AQUI";

type Status = "idle" | "submitting" | "error";

export function LeadCaptureModal() {
  const { isOpen, destinationUrl, closeModal } = useLeadModal();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Novo lead — Opere Sem Medo",
          from_name: "Site Opere Sem Medo",
          name,
          email,
          phone,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Falha ao enviar.");
      window.location.href = destinationUrl;
    } catch {
      setStatus("error");
      setErrorMsg("Não foi possível enviar agora. Tenta de novo em instantes.");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={closeModal}
    >
      <div
        className="bg-[var(--color-panel)] border border-[var(--color-line)] rounded-2xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-[var(--color-stone)] hover:text-[var(--color-ivory)] transition"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-display text-2xl uppercase mb-2">Antes de continuar</h3>
        <p className="text-sm text-[var(--color-stone)] mb-6">
          Deixa seus dados pra eu poder te acompanhar nos 7 dias. Depois disso, você já segue direto pra abertura da conta.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[var(--color-stone)] mb-1.5">Nome</label>
            <input
              type="text" required value={name} onChange={(e) => setName(e.target.value)}
              className="w-full bg-[var(--color-ink)] border border-[var(--color-line)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-gold)] transition"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-[var(--color-stone)] mb-1.5">E-mail</label>
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[var(--color-ink)] border border-[var(--color-line)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-gold)] transition"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-[var(--color-stone)] mb-1.5">Telefone (com WhatsApp)</label>
            <input
              type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[var(--color-ink)] border border-[var(--color-line)] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-gold)] transition"
              placeholder="(11) 99999-9999"
            />
          </div>

          {status === "error" && <p className="text-sm text-[var(--color-ember)]">{errorMsg}</p>}

          <button
            type="submit" disabled={status === "submitting"}
            className="btn-fearless w-full py-3.5 rounded-lg font-display uppercase tracking-wide text-sm flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {status === "submitting" ? (<><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>) : "Quero acompanhar os 7 dias"}
          </button>
        </form>

        <p className="text-[11px] text-[var(--color-stone)] text-center mt-4">
          Seus dados são usados só pra te acompanhar no processo. Nunca compartilhados com terceiros.
        </p>
      </div>
    </div>
  );
}

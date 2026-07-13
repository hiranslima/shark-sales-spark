import { createFileRoute } from "@tanstack/react-router";
import xrayExecutive from "@/assets/xray-executive.jpg";

// TODO: substitua pelo link real de checkout da Hotmart
const CHECKOUT_URL = "#buy";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Diagnóstico Comercial Shark Experience" },
      { name: "description", content: "Workshop ao vivo e 100% prático para empresários que vendem, mas sentem que o crescimento travou. Saia com um plano de ação de 90 dias." },
      { property: "og:title", content: "Diagnóstico Comercial Shark Experience" },
      { property: "og:description", content: "Workshop ao vivo e 100% prático para empresários que vendem, mas sentem que o crescimento travou." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function CtaButton({
  children,
  href = CHECKOUT_URL,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-10 py-5 text-lg font-bold uppercase tracking-tighter transition-all";
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/20 hover:brightness-110"
      : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground";

  return (
    <a href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-[family-name:var(--display-font)] font-extrabold tracking-tighter text-xl">
            SHARK<span className="text-primary">CON</span>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="text-primary">[ Live Workshop ]</span>
            <span>02.08.2026</span>
            <span>10:00 BRT</span>
          </div>
          <a
            href="#buy"
            className="bg-foreground text-background px-5 py-2 text-xs font-bold uppercase tracking-tighter hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Reservar Vaga
          </a>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-primary/30 scan-line" />
            <div className="absolute inset-0 grid-xray" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto w-full reveal-stagger">
            <div
              className="inline-block font-mono text-xs text-primary border border-primary/30 px-3 py-1 mb-8"
              style={{ animationDelay: "100ms" }}
            >
              DIAGNÓSTICO COMERCIAL 2026
            </div>
            <h1
              className="font-[family-name:var(--display-font)] text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.85] text-balance mb-10"
              style={{ animationDelay: "200ms" }}
            >
              PARE DE VENDER <br />
              <span className="text-primary italic">NO ESCURO.</span>
            </h1>
            <p
              className="max-w-2xl text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12"
              style={{ animationDelay: "300ms" }}
            >
              Entenda por que sua empresa vende, mas não cresce. Um workshop
              100% prático para empresários que querem subir o nível
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animationDelay: "400ms" }}
            >
              <CtaButton>Garantir minha vaga agora</CtaButton>
              <div className="flex flex-col justify-center font-mono text-[10px] text-muted-foreground uppercase">
                <span>Vagas limitadas</span>
                <span className="text-foreground">Acesso ao vivo + Gravação</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem / X-Ray */}
        <section className="py-32 bg-white text-background">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img
                src={xrayExecutive}
                alt="Executivo analisando dados complexos em um painel de vidro iluminado"
                width={800}
                height={1000}
                className="w-full h-auto rounded-sm object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--display-font)] text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 leading-tight">
                SEU ESFORÇO É ALTO,
                <br />
                MAS O RETORNO É{" "}
                <span className="text-primary">IMPREVISÍVEL.</span>
              </h2>
              <div className="space-y-6 text-lg opacity-80">
                <p>
                  Você já vende, mas sente que o crescimento travou. Sem
                  estrutura e metas claras, o dono vive de apagar incêndios
                  enquanto a equipe vende no instinto.
                </p>
                <p className="font-bold">
                  O resultado? Dinheiro escapando por gargalos que você ainda
                  não enxergou.
                </p>
                <ul className="space-y-4 pt-4 font-mono text-sm">
                  <li className="flex items-center gap-3">
                    <div className="size-1.5 bg-primary" />
                    Vendas que oscilam sem motivo aparente
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-1.5 bg-primary" />
                    Falta de método comercial replicável
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-1.5 bg-primary" />
                    Sensação de teto de crescimento
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The 5 Pillars Grid */}
        <section className="py-32 bg-background border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <span className="font-mono text-xs text-primary uppercase tracking-widest">
                Metodologia Shark
              </span>
              <h2 className="font-[family-name:var(--display-font)] text-5xl font-extrabold tracking-tighter mt-4">
                OS 5 PILARES DA VIRADA
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-px bg-border border border-border">
              {[
                {
                  num: "01.",
                  title: "Atração",
                  desc: "Como gerar demanda qualificada sem depender da sorte.",
                },
                {
                  num: "02.",
                  title: "Conversão",
                  desc: "O método de fechamento que não deixa dinheiro na mesa.",
                },
                {
                  num: "03.",
                  title: "Retenção",
                  desc: "Maximizando o LTV e transformando clientes em advogados.",
                },
                {
                  num: "04.",
                  title: "Gestão",
                  desc: "Indicadores e KPIs reais que mostram a saúde do negócio.",
                },
                {
                  num: "05.",
                  title: "Cultura",
                  desc: "Treinamento e mentalidade para uma equipe comercial de elite.",
                },
              ].map((pillar) => (
                <div
                  key={pillar.num}
                  className="bg-background p-8 group hover:bg-primary/5 transition-colors"
                >
                  <span className="font-mono text-primary text-sm">{pillar.num}</span>
                  <h3 className="font-[family-name:var(--display-font)] font-bold text-xl mt-4 mb-2 uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables CTA Section */}
        <section id="buy" className="py-32 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-[family-name:var(--display-font)] text-5xl md:text-7xl font-extrabold tracking-tighter mb-12">
              SAIA COM UM PLANO PARA OS PRÓXIMOS{" "}
              <span className="underline decoration-4 underline-offset-8">
                90 DIAS.
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-8 text-left mb-16">
              <div className="flex gap-4 items-start">
                <div className="mt-1 size-5 bg-white flex-shrink-0" />
                <p className="font-bold uppercase tracking-tight">
                  Raio-X completo do seu processo de vendas atual
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 size-5 bg-white flex-shrink-0" />
                <p className="font-bold uppercase tracking-tight">
                  Workshop ao vivo com análise prática do comercial
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 size-5 bg-white flex-shrink-0" />
                <p className="font-bold uppercase tracking-tight">
                  Clareza absoluta sobre o gargalo principal
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 size-5 bg-white flex-shrink-0" />
                <p className="font-bold uppercase tracking-tight">
                  Plano de ação aplicável nos próximos 90 dias
                </p>
              </div>
            </div>

            <div className="bg-background p-10 text-foreground inline-block w-full max-w-lg">
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                Investimento Único
              </div>
              <div className="text-6xl font-[family-name:var(--display-font)] font-extrabold tracking-tighter mb-8">
                R$ 49<span className="text-xl">,90</span>
              </div>
              <CtaButton variant="primary" className="w-full text-xl">
                Quero meu Diagnóstico
              </CtaButton>
              <div className="mt-6 font-mono text-[10px] text-muted-foreground uppercase">
                📅 02 de Agosto • 10h Brasília • Online
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 px-6 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-[family-name:var(--display-font)] text-3xl font-extrabold tracking-tighter mb-12 uppercase">
              Perguntas Frequentes
            </h3>
            <div className="space-y-8">
              <div className="pb-8 border-b border-border">
                <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">
                  É para quem está começando?
                </h4>
                <p className="text-muted-foreground">
                  Não. O Diagnóstico é para empresas que já vendem, mas sentem
                  que o crescimento estagnou por falta de método.
                </p>
              </div>
              <div className="pb-8 border-b border-border">
                <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">
                  Terei acesso à gravação?
                </h4>
                <p className="text-muted-foreground">
                  Sim. Todos os inscritos recebem o acesso vitalício à gravação
                  e as ferramentas utilizadas no workshop, além de materiais
                  complementares.
                </p>
              </div>
              <div className="pb-8 border-b border-border">
                <h4 className="font-bold mb-4 uppercase text-sm tracking-widest">
                  Quanto tempo dura o workshop?
                </h4>
                <p className="text-muted-foreground">
                  A experiência ao vivo tem duração aproximada de 3 horas, com
                  análise prática e espaço para tirar dúvidas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-[family-name:var(--display-font)] font-extrabold tracking-tighter text-lg">
            SHARK<span className="text-primary">CON</span>
          </div>
          <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2026 SHARK CONSULTORIA. TODOS OS DIREITOS
            RESERVADOS.
          </div>
        </div>
      </footer>
    </div>
  );
}

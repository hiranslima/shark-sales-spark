import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const consultorImage = { url: "/diagnostico-consultor.png" };

const CHECKOUT_URL = "https://pay.hotmart.com/J102586899P?off=2vjmy2lh&checkoutMode=10";
const EVENT_DATE = new Date("2026-08-30T10:00:00-03:00").getTime();

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Diagnóstico Comercial Shark | Descubra o gargalo que trava sua empresa",
      },
      {
        name: "description",
        content:
          "Diagnóstico Comercial ao vivo para empresas que já vendem mas pararam de crescer. Descubra onde seu processo comercial perde dinheiro e saia com um plano de 90 dias.",
      },
      {
        name: "keywords",
        content:
          "diagnóstico comercial, consultoria comercial, processos comerciais, crescimento empresarial, previsibilidade de vendas",
      },
      {
        property: "og:title",
        content: "Diagnóstico Comercial Shark Experience",
      },
      {
        property: "og:description",
        content:
          "Descubra o gargalo que está impedindo sua empresa de crescer. Diagnóstico prático, ao vivo, com plano de ação para 90 dias.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function CheckoutLink({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-bold uppercase tracking-tighter bg-primary text-primary-foreground transition-[filter] hover:brightness-110 ${className}`}
    >
      {children}
    </a>
  );
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Countdown() {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const tick = () =>
      setLeft(Math.max(0, Math.floor((EVENT_DATE - Date.now()) / 1000)));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Dias", value: Math.floor(left / 86400) },
    { label: "Horas", value: Math.floor(left / 3600) % 24 },
    { label: "Minutos", value: Math.floor(left / 60) % 60 },
    { label: "Segundos", value: left % 60 },
  ];

  return (
    <div className="flex flex-wrap gap-3 border-t border-border pt-7">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex-[1_1_110px] border border-border bg-card px-[18px] py-4"
        >
          <div className="font-[family-name:var(--display-font)] text-4xl font-extrabold tracking-tighter leading-none text-primary tabular-nums">
            {pad(u.value)}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground mt-1.5">
            {u.label}
          </div>
        </div>
      ))}
      <div className="flex-[2_1_220px] flex items-center px-[18px] py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground leading-relaxed">
        AS INSCRIÇÕES FECHAM QUANDO A SALA ABRIR, DIA 30 ÀS 10H.
      </div>
    </div>
  );
}

const leaks = [
  {
    t: "Leads esquecidos",
    d: "Entraram, ninguém retornou, viraram cliente do concorrente.",
  },
  {
    t: "Atendimento lento",
    d: "Quem responde primeiro costuma fechar. Sua empresa responde quando dá.",
  },
  {
    t: "Orçamentos sem retorno",
    d: 'Propostas paradas no "vou pensar" há semanas.',
  },
  {
    t: "Vendedor sem processo",
    d: "Cada um improvisa, e o desconto vira o único argumento.",
  },
  {
    t: "Falta de indicadores",
    d: "Você sabe quanto vendeu. Não sabe quanto deixou de vender.",
  },
  {
    t: "Dependência de uma pessoa",
    d: "Se o melhor vendedor sai, o resultado sai junto.",
  },
];

const pillars = [
  {
    num: "01.",
    title: "Atração",
    desc: "De onde vêm seus clientes e quanto disso você controla.",
  },
  {
    num: "02.",
    title: "Conversão",
    desc: "Onde a oportunidade morre entre o primeiro contato e o fechamento.",
  },
  {
    num: "03.",
    title: "Retenção",
    desc: "Quanto vale um cliente ao longo do tempo e quanto disso você perde.",
  },
  {
    num: "04.",
    title: "Gestão",
    desc: "Quais números você precisa olhar toda semana e hoje não olha.",
  },
  {
    num: "05.",
    title: "Cultura",
    desc: "Por que o time não repete o que funciona.",
  },
];

const steps = [
  {
    n: "1",
    t: "Mapeamento",
    d: "Como sua empresa vende hoje, do primeiro contato ao pós venda.",
  },
  {
    n: "2",
    t: "Identificação",
    d: "Onde estão os gargalos e qual deles custa mais caro.",
  },
  {
    n: "3",
    t: "Plano de ação",
    d: "O que fazer, em que ordem, com quem da sua equipe.",
  },
  {
    n: "4",
    t: "Prioridades",
    d: "O recorte dos próximos 90 dias, para executar sem travar.",
  },
];

const deliverables = [
  "Diagnóstico comercial do seu negócio",
  "Análise do seu processo de vendas atual",
  "Identificação do gargalo principal",
  "Plano de crescimento para 90 dias",
  "Ordem de prioridade do que executar",
  "Recomendações para o seu cenário",
];

const stack = [
  ["Diagnóstico ao vivo de 3 horas", "R$ 1.200"],
  ["Análise do processo comercial", "R$ 890"],
  ["Plano de ação para 90 dias", "R$ 690"],
  ["Material de apoio e ferramentas", "R$ 390"],
  ["Gravação vitalícia", "R$ 290"],
  ["Grupo no WhatsApp com os inscritos", "R$ 190"],
];

const faqs = [
  [
    "Quanto tempo dura?",
    "Cerca de 3 horas ao vivo, com análise prática e espaço para dúvidas.",
  ],
    [
    "É online ou presencial?",
    "Online e ao vivo, dia 30 de agosto às 10h de Brasília.",
  ],
  [
    "É individual? Preciso levar a equipe?",
    "O acesso é individual e o dono consegue aplicar sozinho. Levar quem lidera o comercial acelera a execução, mas não é obrigatório.",
  ],
  [
    "Serve para qualquer empresa?",
    "Serve para empresas que já vendem e querem organizar o processo. Quem ainda não faturou não vai aproveitar.",
  ],
  [
    "O que exatamente eu recebo?",
    "Diagnóstico do seu processo, identificação do gargalo principal, plano de ação para 90 dias, material de apoio, grupo no WhatsApp e a gravação.",
  ],
  [
    "E se eu não puder assistir ao vivo?",
    "A gravação fica com você para sempre. Quem está ao vivo leva o próprio caso para a análise.",
  ],
  [
    "E se eu não gostar?",
    "Você tem 7 dias para pedir o reembolso e recebe o valor de volta.",
  ],
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <div className="font-[family-name:var(--display-font)] font-extrabold tracking-tighter text-xl">
            SHARK<span className="text-primary">CON</span>
          </div>
          <div className="hidden md:flex gap-7 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="text-primary animate-pulse">[ Ao vivo ]</span>
            <span>30.08.2026</span>
            <span>10:00 BRT</span>
          </div>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background px-5 py-2.5 text-xs font-bold uppercase tracking-tighter whitespace-nowrap transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Reservar minha vaga
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative px-6 pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.12] pointer-events-none grid-xray" />
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none bg-[radial-gradient(ellipse_at_center,var(--primary),transparent_65%)] opacity-20" />
          <div className="relative max-w-5xl mx-auto flex flex-col gap-9">
            <div className="flex flex-wrap gap-3 items-center">
              <span className="font-mono text-[11px] text-primary border border-primary/40 px-3 py-1.5 uppercase tracking-[0.1em]">
                Diagnóstico Comercial 2026
              </span>
              <span className="font-mono text-[11px] text-muted-foreground border border-border px-3 py-1.5 uppercase tracking-[0.1em]">
                3 horas ao vivo · online
              </span>
            </div>
            <h1 className="font-[family-name:var(--display-font)] text-[clamp(2.75rem,7.5vw,5.9rem)] font-extrabold tracking-[-0.055em] leading-[0.88] text-balance">
              DESCUBRA O GARGALO QUE IMPEDE SUA EMPRESA DE{" "}
              <span className="text-primary">CRESCER.</span>
            </h1>
            <p className="max-w-[700px] text-[clamp(1.125rem,2.2vw,1.45rem)] leading-relaxed text-muted-foreground">
              Em um diagnóstico prático você identifica exatamente onde seu
              comercial perde dinheiro e sai com um plano de ação para os
              próximos 90 dias.
            </p>
            <div className="flex flex-wrap gap-7 items-center">
              <CheckoutLink className="px-10 py-5 text-[17px] shadow-2xl shadow-primary/30">
                Quero descobrir meu gargalo
              </CheckoutLink>
              <div className="grid grid-cols-2 gap-x-7 gap-y-2 text-sm text-muted-foreground">
                <span>✓ Diagnóstico do seu caso</span>
                <span>✓ Plano de ação</span>
                <span>✓ Aplicação imediata</span>
                <span>✓ Sem teoria desnecessária</span>
              </div>
            </div>
            <Countdown />
          </div>
        </section>

        {/* Strip */}
        <div className="border-y border-border bg-card px-6 py-3.5">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span>30 DE AGOSTO · 10H BRASÍLIA</span>
            <span>3 horas ao vivo</span>
            <span>Gravação vitalícia</span>
            <span className="text-primary">R$ 49,90</span>
          </div>
        </div>

        {/* O verdadeiro problema */}
        <section className="py-28 px-6 bg-white text-background">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-14 items-start">
            <div className="flex flex-col gap-9">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                O verdadeiro problema
              </span>
              <h2 className="font-[family-name:var(--display-font)] text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.05em] leading-[0.95] text-balance">
                TALVEZ VOCÊ NÃO PRECISE DE MAIS CLIENTES.
              </h2>
              <p className="text-xl leading-relaxed">
                Quando as vendas param, a conta quase sempre cai no mesmo lugar.
              </p>
              <div className="flex flex-wrap gap-3">
                {["É o marketing", "É o tráfego", "É a equipe", "É o mercado"].map(
                  (t) => (
                    <span
                      key={t}
                      className="border border-background/20 px-[18px] py-2.5 text-[15px]"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
              <p className="text-xl leading-relaxed font-bold max-w-[760px]">
                Na maioria das empresas que já vendem, o problema está antes
                disso. Está no processo comercial.
              </p>
              <div className="flex flex-wrap gap-5">
                {[
                  [
                    "Atendimento",
                    "O lead chega e demora horas para receber resposta.",
                  ],
                  [
                    "Follow up",
                    "O orçamento é enviado e ninguém volta a falar com o cliente.",
                  ],
                  [
                    "Conversão",
                    "Cada vendedor fecha de um jeito e nada disso é replicável.",
                  ],
                  ["Gestão", "Não existe indicador. Existe percepção."],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="flex-[1_1_220px] border-t-[3px] border-primary pt-4"
                  >
                    <div className="font-bold text-[17px] mb-1.5">{t}</div>
                    <p className="text-[15px] leading-relaxed opacity-75">{d}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg leading-relaxed opacity-80 max-w-[760px]">
                Investir mais em marketing antes de arrumar isso é colocar água
                em um balde furado.
              </p>
            </div>
            <img
              src={consultorImage.url}
              alt="Consultor apresentando análise do processo comercial em um quadro branco"
              width={800}
              height={1000}
              className="w-full h-auto object-cover rounded-sm"
              loading="lazy"
            />
          </div>
        </section>

        {/* Custo invisível */}
        <section className="py-28 px-6 border-b border-border">
          <div className="max-w-5xl mx-auto flex flex-col gap-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              O custo invisível
            </span>
            <h2 className="font-[family-name:var(--display-font)] text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.05em] leading-[0.95] text-balance">
              O DINHEIRO NÃO SOME DE UMA VEZ. SOME UM POUCO POR DIA.
            </h2>
            <div className="flex flex-wrap gap-px bg-border border border-border">
              {leaks.map((l) => (
                <div
                  key={l.t}
                  className="flex-[1_1_240px] bg-background p-7"
                >
                  <div className="font-bold mb-2">{l.t}</div>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {l.d}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[19px] leading-relaxed max-w-[760px]">
              Nenhum desses itens aparece no extrato. Todos aparecem no
              faturamento que não veio.
            </p>
            <CheckoutLink className="self-start px-9 py-[18px] text-base">
              Quero meu diagnóstico
            </CheckoutLink>
          </div>
        </section>

        {/* Método */}
        <section className="py-28 px-6 border-b border-border">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              O método
            </span>
            <h2 className="font-[family-name:var(--display-font)] text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.05em] leading-[0.95] text-balance">
              DIAGNÓSTICO SHARK: ANTES DE INVESTIR MAIS, DESCUBRA ONDE ESTÁ O
              DESPERDÍCIO.
            </h2>
            <p className="text-[19px] leading-relaxed max-w-[760px] text-muted-foreground">
              A maioria dos treinamentos entrega técnica de vendas. O
              Diagnóstico faz o contrário: primeiro examina a sua operação,
              depois indica o que mexer. Você não sai com cinco tarefas novas.
              Sai com uma, a que destrava as outras.
            </p>
            <p className="text-[19px] leading-relaxed max-w-[760px] text-muted-foreground">
              O exame passa por cinco pontos. Todo comercial que travou, travou
              em um deles.
            </p>
            <div className="flex flex-wrap gap-px bg-border border border-border">
              {pillars.map((p) => (
                <div
                  key={p.num}
                  className="flex-[1_1_200px] bg-background p-[30px] transition-colors hover:bg-primary/5"
                >
                  <span className="font-mono text-[13px] text-primary">
                    {p.num}
                  </span>
                  <h3 className="font-[family-name:var(--display-font)] font-bold text-xl uppercase tracking-[-0.03em] mt-3.5 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-28 px-6 border-b border-border">
          <div className="max-w-5xl mx-auto flex flex-col gap-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              Como funciona
            </span>
            <h2 className="font-[family-name:var(--display-font)] text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.05em] leading-[0.95]">
              QUATRO ETAPAS. TRÊS HORAS.
            </h2>
            <div className="flex flex-wrap gap-5">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="flex-[1_1_210px] bg-card border border-border p-7"
                >
                  <div className="font-[family-name:var(--display-font)] text-[44px] font-extrabold tracking-tighter leading-none text-primary">
                    {s.n}
                  </div>
                  <div className="font-bold text-lg mt-3 mb-1.5">{s.t}</div>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
            <CheckoutLink className="self-start px-9 py-[18px] text-base">
              Reservar minha vaga
            </CheckoutLink>
          </div>
        </section>

        {/* O que você recebe */}
        <section className="py-28 px-6 border-b border-border">
          <div className="max-w-5xl mx-auto flex flex-col gap-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              O que você recebe
            </span>
            <h2 className="font-[family-name:var(--display-font)] text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.05em] leading-[0.95]">
              O QUE SAI DAS TRÊS HORAS.
            </h2>
            <div className="flex flex-wrap gap-4">
              {deliverables.map((d) => (
                <div
                  key={d}
                  className="flex-[1_1_280px] flex gap-3.5 items-start border border-border p-[22px]"
                >
                  <div className="size-3.5 bg-primary flex-shrink-0 mt-1" />
                  <span className="text-base leading-snug">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Para quem é */}
        <section className="py-28 px-6 border-b border-border">
          <div className="max-w-5xl mx-auto flex flex-col gap-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              Para quem é
            </span>
            <h2 className="font-[family-name:var(--display-font)] text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.05em] leading-[0.95]">
              ANTES DE COMPRAR, VEJA SE É O SEU CASO.
            </h2>
            <div className="flex flex-wrap gap-5">
              <div className="flex-[1_1_300px] border border-primary/35 bg-primary/5 p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary mb-5">
                  É para você
                </div>
                <div className="flex flex-col gap-3.5 text-base leading-relaxed">
                  <div>✔ Empresas que cresceram e travaram</div>
                  <div>✔ Empresários que querem previsibilidade</div>
                  <div>✔ Negócios que dependem de indicação</div>
                  <div>✔ Quem quer vender mais sem aumentar o orçamento</div>
                  <div>✔ Quem prefere ouvir o diagnóstico a ouvir elogio</div>
                </div>
              </div>
              <div className="flex-[1_1_300px] border border-border p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground mb-5">
                  Não é para você
                </div>
                <div className="flex flex-col gap-3.5 text-base leading-relaxed text-muted-foreground">
                  <div>✘ Quem ainda não tirou a empresa do papel</div>
                  <div>✘ Quem procura fórmula mágica</div>
                  <div>✘ Quem não pretende executar nada depois</div>
                  <div>✘ Quem acredita que a culpa é sempre do mercado</div>
                  <div>✘ Empresas sem interesse em mexer no processo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-28 px-6 border-b border-border">
          <div className="max-w-5xl mx-auto flex flex-col gap-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              Resultados
            </span>
            <h2 className="font-[family-name:var(--display-font)] text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.05em] leading-[0.95]">
              O QUE MUDA DEPOIS DO DIAGNÓSTICO.
            </h2>
            <div className="flex flex-wrap gap-5">
              {[
                [
                  "Antes",
                  "Você acha que o problema é falta de lead e aumenta o investimento em anúncio.",
                ],
                [
                  "Depois",
                  "Você sabe qual etapa perde oportunidade e corrige antes de gastar mais.",
                ],
                [
                  "Antes",
                  "O time vende por instinto e o resultado depende do humor do mês.",
                ],
                [
                  "Depois",
                  "Existe uma ordem clara de prioridades e um plano para os 90 dias.",
                ],
              ].map(([t, d], i) => (
                <div
                  key={i}
                  className="flex-[1_1_240px] bg-card border border-border p-7"
                >
                  <div className="font-bold text-[17px] mb-2">{t}</div>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Oferta */}
        <section
          id="buy"
          className="scroll-mt-20 py-28 px-6 bg-primary text-primary-foreground"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="font-[family-name:var(--display-font)] text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold tracking-[-0.055em] leading-[0.9] text-center text-balance mb-5">
              UM DIAGNÓSTICO CUSTA MENOS QUE UM MÊS DE ERRO.
            </h2>
            <p className="text-center max-w-[620px] mx-auto mb-14 text-lg leading-relaxed font-semibold">
              Você não está comprando um workshop. Está comprando clareza sobre
              onde sua empresa perde dinheiro.
            </p>

            <div className="bg-background text-foreground p-11 max-w-[560px] mx-auto">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary mb-5">
                O que está incluso
              </div>
              <div className="flex flex-col gap-3.5 text-[15px] leading-snug mb-6">
                {stack.map(([label, price]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span>{label}</span>
                    <span className="text-muted-foreground line-through">
                      {price}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between gap-4 pt-3.5 border-t border-border">
                  <span className="font-bold">Valor total</span>
                  <span className="font-bold text-muted-foreground line-through">
                    R$ 3.650
                  </span>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary mb-2.5">
                  Você paga hoje
                </div>
                <div className="flex items-baseline flex-wrap gap-3.5 mb-2">
                  <div className="font-[family-name:var(--display-font)] text-6xl font-extrabold tracking-[-0.055em] leading-none">
                    R$ 49<span className="text-[22px]">,90</span>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                    98% de desconto
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  Uma hora de consultoria comercial não sai por menos de R$ 800.
                  Aqui você paga menos que um almoço de negócios.
                </p>
              </div>

              <CheckoutLink className="w-full py-5.5 px-6 text-[19px] shadow-2xl shadow-primary/40">
                Quero meu diagnóstico
              </CheckoutLink>

              <div className="mt-4.5 text-center font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground">
                30 DE AGOSTO · 10H BRASÍLIA · ONLINE
              </div>
            </div>

            <p className="text-center max-w-[560px] mx-auto mt-7 text-[15px] leading-relaxed font-semibold">
              Garantia de 7 dias. Assistiu, achou que não valeu, devolvemos o
              valor. Sem formulário e sem entrevista de saída.
            </p>
          </div>
        </section>

        {/* Depois da compra */}
        <section className="py-28 px-6 border-b border-border">
          <div className="max-w-5xl mx-auto flex flex-col gap-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              O que acontece depois da compra
            </span>
            <h2 className="font-[family-name:var(--display-font)] text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.05em] leading-[0.95]">
              SEM MISTÉRIO, PASSO A PASSO.
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                "Você garante a vaga pelo checkout seguro.",
                "Recebe o acesso e entra no grupo dos inscritos.",
                "Participa do diagnóstico ao vivo dia 30, às 10h.",
                "Sai com o plano pronto e começa a executar.",
              ].map((t, i) => (
                <div
                  key={t}
                  className="flex-[1_1_200px] border-l-[3px] border-primary py-1 pl-[18px]"
                >
                  <div className="font-mono text-[11px] text-primary tracking-[0.16em] mb-2">
                    0{i + 1}
                  </div>
                  <p className="text-base leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-[family-name:var(--display-font)] text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold tracking-[-0.05em] uppercase mb-10">
              Perguntas frequentes
            </h3>
            <div className="flex flex-col">
              {faqs.map(([q, a], i) => (
                <div
                  key={q}
                  className={`py-6 border-t border-border ${
                    i === faqs.length - 1 ? "border-b" : ""
                  }`}
                >
                  <h4 className="font-bold uppercase text-sm tracking-[0.12em] mb-2.5">
                    {q}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fechamento */}
        <section className="py-32 px-6 border-t border-border text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
            <h2 className="font-[family-name:var(--display-font)] text-[clamp(2.1rem,5.5vw,4.1rem)] font-extrabold tracking-[-0.055em] leading-[0.92] text-balance">
              O MAIOR RISCO NÃO É DESCOBRIR UM PROBLEMA. É CONTINUAR PERDENDO
              DINHEIRO SEM SABER ONDE ELE ESTÁ.
            </h2>
            <p className="text-[19px] leading-relaxed text-muted-foreground max-w-[560px]">
              São R$ 49,90 e 3 horas para saber exatamente onde mexer.
            </p>
            <CheckoutLink className="px-13 py-6 text-[19px] shadow-2xl shadow-primary/30">
              Quero descobrir meu gargalo
            </CheckoutLink>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              30 DE AGOSTO · 10H BRASÍLIA · 7 DIAS DE GARANTIA
            </span>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6">
          <div className="font-[family-name:var(--display-font)] font-extrabold tracking-tighter text-lg">
            SHARK<span className="text-primary">CON</span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            © 2026 Shark Consultoria. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

import { CheckCircle, Search, Layers, Users } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Diagnóstico de Eficiência",
      description: "Auditoria aos processos atuais e infraestrutura (Office 365).",
      icon: Search,
      color: "text-blue-400",
    },
    {
      number: 2,
      title: "Arquitetura de Soluções",
      description: "Desenho do ecossistema de IA (Agentes Gemini/Claude) e Software à Medida.",
      icon: Layers,
      color: "text-cyan-400",
    },
    {
      number: 3,
      title: "Implementação & Dev",
      description: "Desenvolvimento assistido por Devin e configuração de ferramentas de produtividade.",
      icon: CheckCircle,
      color: "text-teal-400",
    },
    {
      number: 4,
      title: "Capacitação & Formação",
      description: "Workshop para equipas dominarem Copilot e ferramentas customizadas.",
      icon: Users,
      color: "text-emerald-400",
    },
  ];

  return (
    <section className="py-24 border-t border-devin-border">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A nossa <span className="text-teal">Metodologia</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo estruturado de 4 fases para transformar a sua organização com IA
          </p>
        </div>

        {/* Timeline / Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div key={idx} className="relative">
                {/* Card */}
                <div className="group bg-devin-surface/50 border border-devin-border rounded-2xl p-8 hover:border-devin-teal/50 transition-all hover:bg-devin-card/50 hover:shadow-lg cursor-pointer h-full flex flex-col">
                  {/* Step Number Circle */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-devin-card border-2 border-devin-border rounded-full flex items-center justify-center font-bold text-devin-teal group-hover:border-devin-teal transition-all">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`${step.color} mb-6 mt-6 transition-transform group-hover:scale-110`}>
                    <IconComponent size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-devin-teal transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 w-0 group-hover:w-12 bg-gradient-to-r from-devin-teal to-transparent transition-all" />
                </div>

                {/* Connector line (hidden on mobile) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-devin-teal/30 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Pronto para transformar a sua organização?
          </p>
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 rounded-full bg-devin-teal text-background font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Começar a Jornada
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

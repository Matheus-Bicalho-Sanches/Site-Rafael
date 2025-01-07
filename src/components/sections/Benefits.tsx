'use client'

import { motion } from 'framer-motion'

interface Benefit {
  title: string
  description: string
  icon: JSX.Element
}

export default function Benefits() {
  const benefits: Benefit[] = [
    {
      title: "Resiliência Emocional",
      description: "Na psicoterapia você vai aprender a identificar e lidar com emoções que influenciam diretamente em suas relações íntimas, na resolução de problemas e tomadas de decisões no trabalho e na vida.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Tratamento de Transtornos",
      description: "A terapia é capaz de regular os processos psicológicos e biológicos subjacentes a esses sintomas através de técnicas adequadas, propiciando o alívio da ansiedade, depressão e vários outros sintomas.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Autoeficácia",
      description: "Através da identificação de valores e metas pessoais, é possível otimizar seu desenvolvimento pessoal e profissional, fortalecendo sua convicção e sua capacidade de realizar tarefas importantes.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Habilidades Sociais",
      description: "Falar em público, pedir ajuda, comunicar-se de forma assertiva, iniciar e manter conversas em geral são exemplos de habilidades sociais. Na psicoterapia é possível desenvolver essas habilidades, o que irá refletir em relações interpessoais mais saudáveis.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Superar Vícios",
      description: "Vícios são hábitos disfuncionais que podem estar relacionados com substâncias químicas, quanto com certos comportamentos. A terapia é eficaz para superar e além disso, propicia o desenvolvimento de novos hábitos, que sejam saudáveis.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
      )
    },
    {
      title: "Dormir bem",
      description: "A psicoterapia oferece a melhor forma de lidar com essas questões, entendendo que o sono adequado leva a melhora na regulação das emoções, da atenção, da memória e diversas outras funções do organismo. Uma boa noite de sono é a base para um dia melhor!",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-white" id="beneficios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Benefícios da Psicoterapia
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Os benefícios da psicoterapia são vastos tanto para a vida pessoal, amorosa e social quanto para a profissional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-500 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "Por que fazer terapia?",
      answer: "A terapia é uma forma de encontrar soluções para os seus problemas e resolver os seus conflitos a partir de um trabalho profissional. Quando o terapeuta é psicólogo, ou seja, quando se trata de uma psicoterapia, existem métodos e técnicas para auxiliar cada paciente a identificar as situações adoecedoras do seu cotidiano. O tratamento da psicoterapia acontece a partir da relação e convivência entre terapeuta e paciente, portanto é importante encontrar um profissional qualificado, ético, responsável e que te faça sentir bem!"
    },
    {
      question: "Qual a frequência e duração das sessões?",
      answer: "As sessões costumam ser semanais com duração de 50 minutos. Porém, dependendo da natureza e da gravidade das questões a serem trabalhadas, a frequência das sessões pode ser aumentada ou espaçada, sendo isso combinado previamente."
    },
    {
      question: "Possui convênio ou plano de saúde?",
      answer: "Não, somente particular. Porém, caso você possua plano de saúde, posso lhe encaminhar um documento para que você possa solicitar o reembolso com o seu plano."
    },
    {
      question: "Qual a melhor idade para iniciar a psicoterapia?",
      answer: "A psicoterapia alcança todas as idades, pois o cuidado é dirigido para todas as fases da vida: infância, adolescência, juventude, adulta e idosa."
    }
  ]

  return (
    <section className="py-20 bg-gray-50" id="duvidas">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Dúvidas Frequentes
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
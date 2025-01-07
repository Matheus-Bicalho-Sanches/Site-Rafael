'use client'

import { motion } from 'framer-motion'

export default function AboutMe() {
  const qualifications = [
    'Terapia Cognitivo-Comportamental',
    'Neurociências e Comportamento',
    'Prática Baseada em Evidências'
  ]

  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600">
            Arthur César
          </h3>
          <p className="text-xl text-gray-600">
            Melo de Souza
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-gray-900">Olá, tudo bem?</span> Seja bem-vindo(a), aqui é o Arthur, sou graduado em psicologia com formações em:
              </p>
              <ul className="space-y-3">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-gray-700 mb-4">
                Prezo sempre por um <span className="font-semibold text-gray-900">serviço de qualidade</span> e acredito que as pessoas merecem receber o que temos de melhor a oferecer.
              </p>
              <p className="text-gray-700">
                Por esse motivo, <span className="font-semibold text-gray-900">meu objetivo</span> é proporcionar ao meu paciente o melhor tratamento disponível para a demanda solicitada, para que juntos possamos realizar mudanças saudáveis e adequadas que estejam de acordo com <span className="font-semibold text-gray-900">os seus objetivos e valores.</span>
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <p className="text-gray-700">
                Ficarei feliz em ajudar! <span className="font-semibold text-gray-900">Estarei do seu lado</span>, lhe acompanhando nesta trajetória de transformação para uma vida melhor!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-[500px] bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50">
              {/* Placeholder for professional photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-blue-300 text-lg">Foto do Profissional</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
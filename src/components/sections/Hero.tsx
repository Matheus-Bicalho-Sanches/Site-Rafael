'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Como posso te ajudar?
              </h1>
              <p className="text-xl text-gray-600">
                Atendimento Particular para Adultos e Adolescentes com abordagem Cognitivo-comportamental
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-gray-700">Psicoterapia Online</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-gray-700">Atendimento Particular</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-gray-700">Abordagem Cognitivo-comportamental</p>
              </div>
            </div>

            <div className="pt-4">
              <Link 
                href="#contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Vamos Conversar?
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image/Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50">
              {/* Placeholder for future image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-blue-300 text-lg">Imagem do Profissional</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
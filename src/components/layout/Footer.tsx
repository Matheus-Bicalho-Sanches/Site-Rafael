'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Dúvidas Frequentes', href: '#duvidas' }
  ]

  const contactInfo = {
    phone: '(92) 9445-3184',
    email: 'contato@psicologoarthur.com',
    schedule: 'Segunda à Sexta das 8:00 as 21:00'
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {contactInfo.phone}
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {contactInfo.email}
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-white mb-4">Horários de Atendimento</h3>
            <div className="space-y-2">
              <p>{contactInfo.schedule}</p>
              <p className="text-sm">Obs: As consultas necessitam ser previamente agendadas.</p>
            </div>

            <Link
              href="#contact"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Agendar Consulta
            </Link>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()}. Todos os Direitos Reservados
          </p>
          <p className="text-sm mt-2">
            <span className="font-semibold">Arthur César</span> | Psicólogo Clínico – CRP 20/12140
          </p>
        </div>
      </div>
    </footer>
  )
} 
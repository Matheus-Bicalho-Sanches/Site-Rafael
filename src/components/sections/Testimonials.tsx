'use client'

import { motion } from 'framer-motion'

interface Testimonial {
  content: string
  author: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      content: "O arthur é um terapeuta fora da curva, me ajudou a entender como funciona minha mente e isso foi MUITO libertador. Além da minha ansiedade ter diminuído, sempre sei o porquê ela está aumentando kkkk, me sinto no controle e acho que isso vai me ajudar pra sempre, obrigada <3",
      author: "Maria Tenório"
    },
    {
      content: "Um excelente profissional, atencioso, cuidadoso, pontual, gentil e é notório o quanto estar sempre buscando aperfeiçoamento em sua área. Um abraço!",
      author: "William Rodrigues"
    },
    {
      content: "Sempre procurei uma terapia mais científica e você conseguiu unir isso com um ambiente acolhedor, obrigado por ter me ajudado a ser mais feliz 🤍.",
      author: "Luan Cavalcante"
    },
    {
      content: "Não tem preço o poder que o autoconhecimento tem, e você conseguiu me ajudar nessa aventura. Nunca vou esquecer das discussões e reflexões que fazíamos. Obrigado novamente querido.",
      author: "Paulo Fagundes"
    },
    {
      content: "Por ser psicólogo também, já sabia desde o começo você era um profissional diferente da grande maioria. Agradeço bastante pelo tempo que passamos juntos.",
      author: "Maurício Junior"
    },
    {
      content: "Arthur, meu amigo você sabe que eu não acreditava muito nesse negócio de terapia, mas me dei essa chance de experimentar e essa foi a melhor coisa que decidi adotar na minha vida. Você tem me ajudado muito a superar minhas dificuldades e entender minhas emoções, obrigado mais uma vez meu amigo.",
      author: "Felipe Aguiar"
    }
  ]

  return (
    <section className="py-20 bg-gray-50" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Depoimentos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-full flex flex-col">
                <div className="flex-grow">
                  <svg
                    className="h-8 w-8 text-blue-500 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
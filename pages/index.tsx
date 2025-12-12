'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Something amazing is coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-gradient bg-300%">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Circles */}
          <motion.div
            className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '10%', left: '10%' }}
          />
          <motion.div
            className="absolute w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ bottom: '10%', right: '10%' }}
          />
          <motion.div
            className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '50%', left: '50%' }}
          />
        </div>

        {/* Animated SVG Graphics */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <animate attributeName="x1" values="0%;100%;0%" dur="20s" repeatCount="indefinite" />
                <animate attributeName="y1" values="0%;100%;0%" dur="15s" repeatCount="indefinite" />
                <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 0.8 }} />
              </linearGradient>
              <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <animate attributeName="x1" values="100%;0%;100%" dur="18s" repeatCount="indefinite" />
                <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.6 }} />
              </linearGradient>
            </defs>

            {/* Animated Geometric Shapes */}
            <motion.circle
              cx="20%"
              cy="30%"
              r="100"
              fill="url(#grad1)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                r: [80, 120, 80]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.polygon
              points="80%,20% 85%,35% 75%,35%"
              fill="url(#grad2)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              style={{ transformOrigin: '80% 28%' }}
            />
            <motion.rect
              x="70%"
              y="70%"
              width="80"
              height="80"
              fill="url(#grad1)"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity }}
              style={{ transformOrigin: '75% 75%' }}
            />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Animated Logo/Icon */}
            <motion.div
              className="flex justify-center mb-8"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#A78BFA', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#F472B6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M60 10 L90 35 L90 70 L60 95 L30 70 L30 35 Z"
                  fill="none"
                  stroke="url(#logoGrad)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="60"
                  cy="52.5"
                  r="20"
                  fill="url(#logoGrad)"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.circle
                  cx="60"
                  cy="52.5"
                  r="10"
                  fill="white"
                  animate={{
                    scale: [1, 0.8, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="mb-6 text-6xl font-bold text-white md:text-8xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Coming Soon
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mb-12 text-xl text-gray-300 md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Something amazing is on the horizon
            </motion.p>

            {/* Animated Border Box */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.div
                className="relative px-12 py-6 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-[2px] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
                <div className="relative text-2xl font-bold tracking-wider text-white uppercase">
                  <motion.span
                    animate={{
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Stay Tuned
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>

            {/* Loading Bar Animation */}
            <motion.div
              className="max-w-md mx-auto mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="h-2 overflow-hidden bg-white/10 rounded-full backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 320" className="w-full h-auto">
            <motion.path
              fill="url(#grad1)"
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,149.3C672,128,768,96,864,96C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>
      </div>
    </>
  )
}

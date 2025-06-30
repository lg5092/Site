'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Mail,
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-8 md:px-32 py-20 font-sans">
      <section className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8 flex justify-center">
            <Image
              src="/LG.jpg"
              alt="Louiggi Gaitan"
              width={140}
              height={140}
              className="rounded-full shadow-lg"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Hello, I am Louiggi Gaitan</h1>
          <p className="text-xl md:text-2xl mb-8">
            Computer Science and Engineering Student | UC Irvine 
          </p>
          <div className="flex justify-center space-x-4 mb-16">
            <Link
              href="https://github.com/lg5092"
              target="_blank"
              className="border rounded-full p-2 hover:bg-gray-200 transition"
            >
              <GithubIcon size={28} />
            </Link>
            <Link
              href="mailto:mrlouiggi@gmail.com"
              className="border rounded-full p-2 hover:bg-gray-200 transition"
            >
              <Mail size={28} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/louiggi-gaitan-167649139/"
              target="_blank"
              className="border rounded-full p-2 hover:bg-gray-200 transition"
            >
              <LinkedinIcon size={28} />
            </Link>
          </div>

          <div className="text-left md:text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 text-lg md:text-xl">
          I&apos;m a passionate computer science and engineering student focused on building systems that are scalable and cloud-based. From real-time trading algorithms to full-stack apps, I enjoy solving technical problems that blend data and functionality. I am currently deepening my experience with AWS, backend development, and hardware-level logic through both academic and personal projects.
          </p>
          </div>

          <div className="text-left md:text-center max-w-4xl mx-auto mt-20 mb-24">
            <h2 className="text-3xl font-semibold mb-6">Skills & Technologies</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'C++',
                'Python',
                'Java',
                'JavaScript',
                'TypeScript',
                'Verilog',
                'HTML',
                'CSS',
                'Flask',
                'AWS',
                'Lambda',
                'DynamoDB',
                'REST API',
                'Git',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 text-lg md:text-xl bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <section className="space-y-16 mt-20">
          <h2 className="text-3xl font-semibold">Projects</h2>

          <a
            href="https://github.com/lg5092/TradingAlgo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border rounded-xl p-6 shadow cursor-pointer hover:bg-gray-50 transition"
            >
              <h3 className="text-2xl font-bold">Stock Trading Algorithm</h3>
              <p className="mt-3 text-gray-700 text-lg">
                C++ bot using Alpaca API with SMA strategy for real-time and backtested trades.
              </p>
            </motion.div>
          </a>

          <a
            href="https://lg5092.github.io/StockChart/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border rounded-xl p-6 shadow cursor-pointer hover:bg-gray-50 transition"
            >
              <h3 className="text-2xl font-bold">Search Trends vs Stock Price Web App</h3>
              <p className="mt-3 text-gray-700 text-lg">
                Flask + JS dashboard using Google Trends and Polygon APIs with interactive Chart.js.
              </p>
            </motion.div>
          </a>

          <a
            href="https://github.com/lg5092/UrlShortener"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border rounded-xl p-6 shadow cursor-pointer hover:bg-gray-50 transition"
            >
              <h3 className="text-2xl font-bold">Cloud-Based URL Shortener</h3>
              <p className="mt-3 text-gray-700 text-lg">
                Serverless AWS Lambda + DynamoDB project that hashes URLs for scalable shortening.
              </p>
            </motion.div>
          </a>

          <a
            href="https://github.com/lg5092/mips"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border rounded-xl p-6 shadow cursor-pointer hover:bg-gray-50 transition"
            >
              <h3 className="text-2xl font-bold">MIPS 32-bit Pipelined Processor</h3>
              <p className="mt-3 text-gray-700 text-lg">
                Verilog project simulating a 5-stage pipelined CPU with forwarding and hazard handling.
              </p>
            </motion.div>
          </a>
        </section>
      </section>
    </main>
  );
}

"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const { language } = useLanguage();
  //const lang = language === "en" ? "en" : "ar";

  return (
    <div className="min-h-screen bg-harmony-soft-white">
      
      {/* Hero Section - "About Us" */}
      <motion.section
        className="relative w-full h-[450px] flex items-center justify-center text-center bg-gradient-to-r from-harmony-warm-gray to-harmony-deep-bronze shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold gradient-text text-shadow mb-6">
          {language === "en" ? "ABOUT US" : "معلومات عنا"}
        </h1>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-20 space-y-20">
        
        {/* Our Mission */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-12 p-10 rounded-xl shadow-lg bg-white/90 backdrop-blur-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          >
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold gradient-text text-shadow mb-6">
              {language === "en" ? "Our Mission" : "مهمتنا"}
            </h2>
            <p className="text-harmony-slate-gray leading-relaxed text-lg">
              At Harmony Precision Solutions, our mission is to redefine industrial efficiency by integrating 
              cutting-edge automation, artificial intelligence, and energy management solutions.  
              We empower industries with innovative and sustainable strategies to enhance productivity 
              while ensuring environmental responsibility.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image src="/mission.png" alt="Our Mission" width={500} height={300} className="rounded-lg" />
          </div>
        </motion.div>

        {/* Our Vision - Now Fully Visible */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center md:items-start space-x-0 md:space-x-12 p-10 rounded-xl shadow-lg bg-gradient-to-r from-harmony-warm-gray to-harmony-deep-bronze"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="md:w-1/2">
          <h2 className="text-4xl font-bold gradient-text text-shadow mb-6">
          {language === "en" ? "Our Vision" : "رؤيتنا"}
            </h2>
            
            {/* ✅ FIX: Ensured text is fully visible */}
    
            <p className="text-harmony-slate-gray leading-relaxed text-lg">
              We envision a future where industries <strong>seamlessly integrate AI-driven automation</strong>, sustainability, 
              and operational intelligence.  
              Our goal is to <strong>bridge the gap</strong> between technological advancements and environmental responsibility, 
              creating smarter, greener industriess that lead global innovation.
            </p>
          </div>

          <div className="md:w-1/2">
            <Image src="/vision.png" alt="Our Vision" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          className="p-10 rounded-xl bg-white/90 shadow-lg backdrop-blur-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text text-shadow">
            {language === "en" ? "Our Values" : "قيمنا"}
          </h2>
          <ul className="space-y-5 text-lg">
            {[
              { title: "Innovation", description: "We push the boundaries of technology to develop transformative solutions." },
              { title: "Sustainability", description: "We prioritize eco-conscious strategies to protect our planet." },
              { title: "Quality", description: "We uphold the highest industry standards in every product and service." },
              { title: "Collaboration", description: "We work closely with clients to deliver customized and impactful solutions." },
              { title: "Integrity", description: "We maintain transparency and ethical business practices in everything we do." },
            ].map((value, index) => (
              <motion.li
                key={value.title}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <span className="text-harmony-deep-bronze text-xl font-bold">•</span>
                <div>
                  <span className="text-harmony-slate-gray font-semibold">{value.title}:</span>{" "}
                  <span className="text-harmony-slate-gray">{value.description}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Our Journey */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h2 className="text-4xl font-bold gradient-text text-shadow mb-6">
          {language === "en" ? "Our Journey" : "رحلتنا"}
          </h2>
          <div className="relative h-64 mb-8 rounded-lg overflow-hidden mx-auto max-w-3xl shadow-xl">
            <Image src="/Journey.png" alt="Our Journey" layout="fill" objectFit="cover" />
          </div>
          <p className="text-harmony-slate-gray text-lg text-left max-w-3xl mx-auto mb-8">
            From humble beginnings to global impact, Harmony precision has continuously evolved 
            to meet the challenges of a rapidly changing industrial landscape.  
            We have expanded our expertise, leveraging AI, automation, and sustainability to drive progress.
          </p>

          {/* Timeline */}
          <div className="space-y-12 max-w-3xl mx-auto">
            {[
              { year: "2014", event: "Founded Harmony precision Solutions with a vision to innovate industrial processes." },
              { year: "2021", event: "Expanded operations across 6 countries, serving diverse global industries." },
              { year: "2025", event: "Launched a breakthrough sustainable industrial solutions initiative." },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="flex items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-1/4 text-right pr-4">
                  <h3 className="text-xl font-bold gradient-text text-shadow">{milestone.year}</h3>
                </div>
                <div className="w-3/4 border-l-4 border-harmony-deep-bronze pl-6 pb-8">
                  <p className="text-harmony-slate-gray text-lg font-medium">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

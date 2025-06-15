import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head"; // Added for SEO

// Utility function for class names
const cn = (...inputs) => twMerge(clsx(inputs));

// Button component
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-green-500 text-white hover:bg-green-600",
        outline: "border border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

// Card component
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border bg-[#1a1f1d] border-green-800 shadow-md", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));
CardContent.displayName = "CardContent";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Edet Joseph Ebong - Data Scientist Portfolio</title>
        <meta name="description" content="Portfolio of Edet Joseph Ebong, Data Scientist and Machine Learning Engineer showcasing projects in Python, ML, and Power BI." />
        <meta name="keywords" content="Data Scientist, Machine Learning, Portfolio, Edet Joseph Ebong, Python, Power BI, Streamlit" />
        <meta name="author" content="Edet Joseph Ebong" />
      </Head>
      <main className="bg-[#0a0f0d] text-white min-h-screen px-4 py-8 font-sans">
        {/* Header Section */}
        <section className="text-center max-w-4xl mx-auto">
          <motion.img 
            src="/profile.jpg" 
            alt="Edet Joseph Ebong" 
            className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-green-500 object-cover"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-2 text-green-300"
          >
            Edet Joseph Ebong
          </motion.h1>
          <p className="text-xl text-green-400 mb-4">
            Data Scientist | Machine Learning Engineer | Building Intelligent Systems
          </p>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            I am a Data Scientist: passionate, analytical, and results-oriented. I combine strong technical skills and inquisitive thinking to unlock insights from data. Adept at both independent and collaborative work ⚙, I leverage a continuous learning mindset to adapt to evolving technologies and drive impactful solutions.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <Link href="https://github.com/joedetDS" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://twitter.com/simplyjoedet" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="mailto:simplyedetjoseph@gmail.com" className="text-green-400 hover:text-green-300 transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
            <Link href="https://edetjoseph.hashnode.dev" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
              Blog
            </Link>
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-6xl mx-auto mt-12">
          <h2 className="text-4xl font-semibold mb-8 text-green-300 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "BSCApeTracker",
                desc: "Tracks every BSC wallet with buy and sell, including total activity of whale accounts.",
                tech: "Python, Telegram Bot",
                link: "https://github.com/joedetDS/bsc_ape_tracker",
              },
              {
                title: "Basketball Player Career Longevity",
                desc: "Classifies player career longevity in basketball using ML and Streamlit.",
                tech: "Python, Streamlit",
                link: "https://predictplayerlongevity.streamlit.app",
              },
              {
                title: "TOURISM DEMAND",
                desc: "Forecasts tourism demand in Akwa Ibom using Python forecasting models.",
                tech: "Python",
                link: "https://akstourdemand.streamlit.app/",
              },
              {
                title: "Pokemon Analysis",
                desc: "Analyzes Pokemon data with Power BI to find trends and top battle-ready Pokemons.",
                tech: "Power BI",
                link: "https://github.com/joedetDS/Pokemon-Analysis-PBIX",
              },
            ].map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent>
                    <h3 className="text-2xl font-semibold text-green-200 mb-2">{proj.title}</h3>
                    <p className="text-gray-300 mb-2">{proj.desc}</p>
                    <p className="text-sm italic text-green-400 mb-4">{proj.tech}</p>
                    <Button asChild variant="outline" className="w-full">
                      <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-4xl mx-auto mt-12 text-center">
          <h2 className="text-4xl font-semibold mb-6 text-green-300">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg text-gray-300">
            {["Python", "Machine Learning", "Streamlit", "Power BI", "Data Analysis", "TensorFlow", "Pandas"].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-2 bg-[#1a1f1d] rounded-lg hover:bg-green-800 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-2xl mx-auto mt-12 text-center">
          <h2 className="text-4xl font-semibold mb-6 text-green-300">Contact</h2>
          <p className="text-lg text-gray-300 mb-4">Want to collaborate or say hi?</p>
          <a href="mailto:simplyedetjoseph@gmail.com" className="text-xl text-green-400 hover:text-green-300 transition-colors underline">
            simplyedetjoseph@gmail.com
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm py-4 border-t border-green-800">
          <p>© 2025 Edet Joseph Ebong. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}

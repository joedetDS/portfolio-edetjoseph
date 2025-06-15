import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
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
    <main className="bg-[#0a0f0d] text-white min-h-screen px-6 py-10 font-sans">
      <section className="text-china">
        <img 
          src="/profile.jpg" 
          alt="Edet Joseph Ebong" 
          className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-green-500"
        />
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          className="text-4xl font-bold mb-2"
        >
          Edet Joseph Ebong
        </motion.h1>
        <p className="text-lg text-green-400">
          Data Scientist | Machine Learning Engineer | Building Intelligent Systems
        </p>
        <p className="mt-4 max-w-2xl mx-auto">
          I am a Data Scientist: passionate, analytical, and results-oriented. I combine strong technical skills and inquisitive thinking to unlock insights from data. Adept at both independent and collaborative work ⚙, I leverage a continuous learning mindset to adapt to evolving technologies and drive impactful solutions.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Link href="https://github.com/joedetDS" target="_blank" rel="noopener noreferrer"><Github className="w-6 h-6" /></Link>
          <Link href="https://twitter.com/simplyjoedet" target="_blank" rel="noopener noreferrer"><Twitter className="w-6 h-6" /></Link>
          <Link href="mailto:simplyedetjoseph@gmail.com"><Mail className="w-6 h-6" /></Link>
          <Link href="https://edetjoseph.hashnode.dev" target="_blank" rel="noopener noreferrer" className="text-green-400">Blog</Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-green-300">Projects</h2>
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
            <Card key={i} className="bg-[#1a1f1d] border border-green-800">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-green-200 mb-2">{proj.title}</h3>
                <p className="mb-2">{proj.desc}</p>
                <p className="text-sm italic text-green-400 mb-4">{proj.tech}</p>
                <Button asChild variant="outline">
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-20 text-center">
        <p className="text-lg">Want to collaborate or say hi?</p>
        <p className="text-green-400 text-xl">simplyedetjoseph@gmail.com</p>
      </section>
    </main>
  );
}

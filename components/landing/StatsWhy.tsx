"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "2040", label: "Projects" },
  { value: "250", label: "Satisfied Clients" },
  { value: "18", label: "years of experience" },
  { value: "750", label: "Services Provided" },
];

const whyItems = [
  {
    title: "Compliance is Top Priority",
    description:
      'We firmly believe that "data privacy & data security is at the heart of all businesses," and we do everything in our power to maximize security and efficiency, minimize downtime and maintain compliance.',
  },
  {
    title: "We Embrace Diversity",
    description:
      "We are minority-owned, and our women-led team is made up of more than 30 multicultural, multilingual and multigenerational experts.",
  },
  {
    title: "We Know Small Business",
    description:
      "Metallic isn't a large corporate entity; our team understands the challenges that small-medium businesses face.",
  },
];

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeSmooth },
  },
};

export function StatsWhy() {
  return (
    <section
      id="stats-why"
      className="border-b border-black/[0.06] bg-background py-20 md:py-28"
      aria-label="Stats and why choose us"
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_1fr] lg:gap-20 xl:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          {/* Stats — stacked, with stagger */}
          <motion.div
            className="flex flex-col"
            variants={staggerItemVariants}
          >
            <motion.p
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: easeSmooth }}
            >
              By the numbers
            </motion.p>
            <motion.div
              className="mt-6 flex flex-col gap-6 sm:gap-8 md:gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainerVariants}
            >
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={staggerItemVariants}
                  className="border-b border-black/[0.08] pb-6 last:border-0 last:pb-0 sm:pb-8 md:pb-10"
                >
                  <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-foreground/60 sm:text-base">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Why us — heading + staggered cards */}
          <motion.div
            className="flex flex-col"
            variants={staggerItemVariants}
          >
            <motion.h2
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: easeSmooth }}
            >
              Why choose us
            </motion.h2>
            <motion.p
              className="mt-3 text-lg font-medium text-foreground sm:text-xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.08, ease: easeSmooth }}
            >
              We’re built different. Here’s what that means for you.
            </motion.p>
            <motion.ul
              className="mt-8 space-y-6"
              role="list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainerVariants}
            >
              {whyItems.map(({ title, description }) => (
                <motion.li
                  key={title}
                  variants={staggerItemVariants}
                  className="rounded-xl border border-black/[0.08] bg-card p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] sm:p-7"
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Activity, ArrowRight, Shield, Zap } from "lucide-react"
import Link from "next/link"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Showcase() {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: 'url("/showcase.jpeg")',
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      />
      <div className="relative container mx-auto px-4 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center text-white max-w-4xl mx-auto"
        >
          <motion.div variants={item} className="flex flex-wrap gap-2 justify-center mb-6">
            <Badge variant="secondary" className="animate-pulse">
              Real-Time Monitoring
            </Badge>
            <Badge variant="secondary">IoT Solutions</Badge>
            <Badge variant="secondary">Worker Safety</Badge>
          </motion.div>
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Smart Air Quality Monitoring for Safer Factories
          </motion.h1>
          <motion.p variants={item} className="text-lg md:text-xl mb-8">
            Protect your workers with real-time air quality monitoring. Our IoT-driven solution provides immediate
            alerts and comprehensive analytics for maintaining healthy factory environments.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="group">
              <Link href="/about" className="flex items-center gap-2">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="#contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative -mt-12 mx-4 md:mx-auto max-w-4xl"
      >
        <Card className="backdrop-blur-xl bg-background/95">
          <CardHeader>
            <CardTitle className="text-center">Why Air Quality Monitoring Matters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div whileHover={{ y: -5 }} className="text-center">
                <Shield className="h-8 w-8 mb-2 mx-auto text-primary" />
                <h3 className="font-semibold mb-2">Worker Safety</h3>
                <p className="text-muted-foreground">
                  Protect your workforce from harmful pollutants and ensure a healthy work environment.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="text-center">
                <Activity className="h-8 w-8 mb-2 mx-auto text-primary" />
                <h3 className="font-semibold mb-2">Compliance</h3>
                <p className="text-muted-foreground">
                  Meet regulatory requirements with automated monitoring and reporting.
                </p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="text-center">
                <Zap className="h-8 w-8 mb-2 mx-auto text-primary" />
                <h3 className="font-semibold mb-2">Efficiency</h3>
                <p className="text-muted-foreground">
                  Optimize ventilation systems and reduce energy costs with data-driven insights.
                </p>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}


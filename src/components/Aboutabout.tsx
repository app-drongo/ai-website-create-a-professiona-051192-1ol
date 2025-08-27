// Aboutabout Component
// Generated: 2025-08-27T09:14:10.668Z
// Template: about-c001
// Context: About
// Position: pages.2.sections.1

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function Aboutabout() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven Excellence",
      description: "We're committed to delivering measurable business outcomes through strategic SAP ERP implementations that drive operational efficiency and growth."
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "We leverage cutting-edge SAP technologies and best practices to transform your business processes and competitive advantage."
    },
    {
      icon: Heart,
      title: "Client Partnership",
      description: "Your success defines our success. We build lasting partnerships with enterprises, ensuring continuous optimization and support throughout your ERP journey."
    },
    {
      icon: Globe,
      title: "Enterprise Impact",
      description: "From Fortune 500 companies to growing enterprises, we're helping organizations worldwide achieve digital transformation excellence."
    }
  ]

  const stats = [
    { value: "2012", label: "Founded", icon: Award },
    { value: "200+", label: "Enterprise Clients", icon: Users },
    { value: "98%", label: "Project Success Rate", icon: TrendingUp },
    { value: "15+", label: "Industries Served", icon: Globe }
  ]

  const team = [
    {
      name: "Robert Mitchell",
      role: "CEO & SAP Principal Consultant",
      image: "RM",
      bio: "Former SAP VP with 20+ years leading enterprise transformations across Fortune 500 companies."
    },
    {
      name: "Jennifer Walsh",
      role: "CTO & Technical Director", 
      image: "JW",
      bio: "SAP-certified architect specializing in S/4HANA migrations and complex system integrations."
    },
    {
      name: "Marcus Thompson",
      role: "Head of Business Strategy",
      image: "MT",
      bio: "McKinsey alum with expertise in digital transformation and change management for large enterprises."
    },
    {
      name: "Lisa Chen",
      role: "VP of Client Success",
      image: "LC",
      bio: "Former Accenture partner focused on post-implementation optimization and continuous improvement."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Strategic ERP Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Enterprises Through
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              SAP ERP Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a team of seasoned SAP consultants, business strategists, and digital transformation experts 
            dedicated to helping enterprises achieve operational excellence through strategic ERP solutions.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2012 by former SAP executives, Strategic ERP Solutions emerged from a clear vision: 
                enterprise resource planning implementations shouldn't be complex, risky endeavors that disrupt business operations.
              </p>
              <p>
                After witnessing countless failed ERP projects across industries, we developed a proven methodology 
                that combines deep SAP expertise with strategic business consulting to ensure successful transformations.
              </p>
              <p>
                Today, we're proud to have guided over 200 enterprises through successful SAP implementations, 
                delivering measurable ROI and operational excellence across manufacturing, retail, healthcare, and financial services.
              </p>
            </div>
            <Button className="group">
              View Our Case Studies
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Every enterprise deserves an ERP system that drives growth, not complexity."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Robert Mitchell, CEO</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our approach to every SAP implementation and client partnership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Leadership Team</h3>
            <p className="text-muted-foreground">
              Industry veterans with decades of combined experience in SAP consulting and enterprise transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Meet Our Full Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Strategic ERP Solutions transformed our entire operation. Their SAP S/4HANA implementation 
                reduced our processing time by 60% and gave us real-time visibility across all business units."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  MD
                </div>
                <div className="text-left">
                  <div className="font-semibold">Michael Davis</div>
                  <div className="text-sm text-muted-foreground">CFO, Global Manufacturing Corp</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
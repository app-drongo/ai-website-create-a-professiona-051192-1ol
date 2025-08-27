// Services1 Component
// Generated: 2025-08-27T09:14:10.668Z
// Template: services-c001
// Context: Services
// Position: pages.1.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Settings,
  Database,
  TrendingUp,
  Users,
  Shield,
  Zap,
  BarChart3,
  Cog,
  ArrowRight
} from "lucide-react"

export default function Services1() {
  const services = [
    {
      id: "sap-implementation",
      title: "SAP ERP Implementation",
      description: "Complete end-to-end SAP implementation services tailored to your business processes and industry requirements.",
      icon: Settings,
      badge: "Core Service",
      features: ["S/4HANA Migration", "Module Configuration", "Go-Live Support"],
      link: "/services/sap-implementation"
    },
    {
      id: "system-optimization",
      title: "System Optimization",
      description: "Enhance your existing SAP environment for peak performance, efficiency, and user satisfaction.",
      icon: TrendingUp,
      features: ["Performance Tuning", "Process Automation", "Cost Reduction"],
      link: "/services/optimization"
    },
    {
      id: "data-migration",
      title: "Data Migration & Integration",
      description: "Seamless data migration and system integration services ensuring data integrity and business continuity.",
      icon: Database,
      badge: "Specialized",
      features: ["Legacy System Migration", "Real-time Integration", "Data Validation"],
      link: "/services/data-migration"
    },
    {
      id: "change-management",
      title: "Change Management",
      description: "Comprehensive change management strategies to ensure successful user adoption and organizational transformation.",
      icon: Users,
      features: ["Training Programs", "User Adoption", "Process Redesign"],
      link: "/services/change-management"
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      description: "Robust security frameworks and compliance solutions to protect your enterprise data and meet regulatory requirements.",
      icon: Shield,
      features: ["GRC Implementation", "Audit Support", "Risk Management"],
      link: "/services/security-compliance"
    },
    {
      id: "business-intelligence",
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and reporting solutions.",
      icon: BarChart3,
      features: ["SAP Analytics Cloud", "Custom Dashboards", "Predictive Analytics"],
      link: "/services/business-intelligence"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise Solutions for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive SAP ERP consulting services designed to optimize your business processes and drive sustainable growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Service Details Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>View Service Details</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need a customized solution for your enterprise?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule Strategy Session
            </Button>
            <Button size="lg" variant="outline">
              Request Proposal
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
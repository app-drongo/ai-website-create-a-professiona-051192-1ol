// Services Component
// Generated: 2025-08-27T09:14:10.668Z
// Template: services-c002
// Context: Homepage
// Position: pages.0.sections.1

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Settings,
  Database,
  TrendingUp,
  Shield,
  Rocket,
  Users,
  BarChart3,
  Cog
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "sap-implementation",
      title: "SAP S/4HANA Implementation",
      description: "Complete end-to-end SAP S/4HANA implementation and migration",
      longDescription: "Our comprehensive SAP S/4HANA implementation service transforms your legacy systems into a modern, intelligent ERP platform. We handle everything from system design to go-live support, ensuring minimal disruption to your operations.",
      icon: Database,
      benefits: [
        "Greenfield and brownfield implementations",
        "Data migration and system integration",
        "Custom development and configuration",
        "User training and change management"
      ],
      pricing: "Starting at $150,000",
      timeline: "6-18 months typical project",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "business-transformation",
      title: "Digital Business Transformation",
      description: "Strategic consulting for enterprise-wide digital transformation",
      longDescription: "We help organizations reimagine their business processes and operating models through strategic digital transformation initiatives. Our approach combines industry best practices with innovative technology solutions.",
      icon: TrendingUp,
      benefits: [
        "Business process reengineering",
        "Digital strategy development",
        "Technology roadmap planning",
        "Organizational change management"
      ],
      pricing: "Custom engagement pricing",
      timeline: "3-12 months per initiative"
    },
    {
      id: "sap-optimization",
      title: "SAP System Optimization",
      description: "Performance tuning and optimization for existing SAP environments",
      longDescription: "Maximize the value of your existing SAP investment through comprehensive system optimization. We analyze performance bottlenecks, streamline processes, and implement best practices to enhance system efficiency.",
      icon: Settings,
      benefits: [
        "Performance analysis and tuning",
        "Process optimization and automation",
        "System health checks and monitoring",
        "Upgrade planning and execution"
      ],
      pricing: "Starting at $25,000",
      timeline: "4-8 weeks"
    },
    {
      id: "managed-services",
      title: "SAP Managed Services",
      description: "Ongoing support and maintenance for your SAP landscape",
      longDescription: "Ensure your SAP systems run smoothly with our comprehensive managed services. From 24/7 monitoring to regular maintenance and updates, we keep your ERP environment optimized and secure.",
      icon: Shield,
      benefits: [
        "24/7 system monitoring and support",
        "Regular maintenance and updates",
        "Security patch management",
        "Performance optimization"
      ],
      pricing: "Monthly retainer from $15,000",
      timeline: "Ongoing service agreements",
      badge: "Enterprise Ready"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            SAP ERP Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise Solutions for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive SAP consulting services designed to accelerate your business transformation and maximize ERP investment returns
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Request Proposal
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Ready to Transform Your Enterprise?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your SAP transformation goals and create a customized roadmap for your digital journey.
          </p>
          <Button size="lg">
            Book Strategy Session
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
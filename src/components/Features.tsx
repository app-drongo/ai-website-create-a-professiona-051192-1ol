// Features Component
// Generated: 2025-08-27T09:14:10.668Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Settings, 
  Shield, 
  BarChart3, 
  Globe, 
  Users, 
  Zap,
  Database,
  Headphones,
  TrendingUp
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Settings,
      title: "SAP Implementation",
      description: "Complete end-to-end SAP ERP implementation with proven methodologies and best practices.",
      badge: "Core Service"
    },
    {
      icon: Shield,
      title: "System Integration",
      description: "Seamless integration of SAP with existing systems and third-party applications.",
      badge: "Integration"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Advanced analytics and reporting solutions to drive data-driven decision making.",
      badge: "Analytics"
    },
    {
      icon: Globe,
      title: "Multi-Site Deployment",
      description: "Global rollout capabilities for multi-location enterprises with standardized processes.",
      badge: "Enterprise"
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Comprehensive training and change management to ensure successful user adoption.",
      badge: "Training"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "System tuning and optimization to maximize SAP performance and efficiency.",
      badge: "Optimization"
    },
    {
      icon: Database,
      title: "Data Migration",
      description: "Secure and accurate data migration from legacy systems to SAP ERP.",
      badge: "Migration"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for your SAP environment.",
      badge: "Support"
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Strategic guidance to leverage SAP for complete business transformation.",
      badge: "Strategy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete SAP ERP Solutions for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Enterprise Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive SAP consulting services designed to transform your business processes 
            and drive operational excellence across your organization.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your business with SAP ERP?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule Consultation
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  AlertTriangle,
  BarChart,
  Cloud,
  Database,
  GitBranch,
  HardDrive,
  LineChart,
  Shield,
  Users,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">About Our Project</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The Real-Time IoT-Driven Air Condition Monitoring System for Factory Environments combines IoT hardware,
          cloud-based analytics, and a user-friendly web dashboard to provide continuous monitoring and immediate alerts
          for maintaining healthy indoor air conditions in factory settings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Worker Safety
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ensure safe air quality in factories, reducing health risks and boosting worker morale through
                continuous monitoring and immediate alerts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Immediate Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Deploy local and remote alerts to minimize response times when threshold levels are exceeded, ensuring
                quick action.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HardDrive className="h-5 w-5 text-primary" />
                IoT Device Network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Sensors</Badge>
                  CO, CO₂, PM2.5, PM10, VOCs, Methane
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Alerts</Badge>
                  Local buzzers and LED indicators
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Power</Badge>
                  Optimized battery management
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-primary" />
                Cloud Platform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Security</Badge>
                  Secure data ingestion
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Scale</Badge>
                  Handles multiple factory zones
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Analytics</Badge>
                  Built-in visualization tools
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Real-Time Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Display</Badge>
                  Live metrics and charts
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Alerts</Badge>
                  Email, SMS, in-app notifications
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline">Reports</Badge>
                  Automated compliance reporting
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">System Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Data Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Secure MySQL database integration</li>
                <li>Comprehensive audit logging</li>
                <li>Efficient data retrieval system</li>
                <li>Long-term data retention</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                User Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Role-based access control</li>
                <li>Customizable user permissions</li>
                <li>Secure authentication system</li>
                <li>Activity logging and tracking</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Future Enhancements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-primary" />
                Predictive Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Machine learning models to predict pollution spikes before they occur.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-primary" />
                Advanced Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Integration with industrial control systems for automated ventilation adjustment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-primary" />
                Multi-Cloud Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Optional redundancy across different cloud providers for enhanced availability.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}


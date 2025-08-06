import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, TrendingUp, Rocket, Users, Star, CheckCircle, Play, BarChart3, Bot, Globe, Smartphone } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              LaunchPad Digital
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-purple-600 transition-colors">Services</a>
            <a href="#tools" className="text-gray-600 hover:text-purple-600 transition-colors">AI Tools</a>
            <a href="#success" className="text-gray-600 hover:text-purple-600 transition-colors">Success Stories</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
          </nav>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Get Started Free
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">
            <Zap className="w-4 h-4 mr-1" />
            From Idea to Income in 30 Days
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent leading-tight">
            We Don't Just Build Your Digital Presence,{" "}
            <span className="text-purple-600">We Engineer Your Growth</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The all-in-one platform that transforms solo entrepreneurs and small businesses into digital powerhouses with AI-driven websites, marketing automation, and growth strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3">
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-purple-200 hover:bg-purple-50">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo (2 min)
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              No Setup Fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              30-Day Money Back
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Launch in 30 Days
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-gray-500 mb-4">Trusted by 500+ growing businesses</p>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600 font-medium">4.9/5 from 200+ reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">500+</div>
              <div className="text-sm text-gray-500">Businesses Launched</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">$2.5M+</div>
              <div className="text-sm text-gray-500">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">150%</div>
              <div className="text-sm text-gray-500">Avg. Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">30 Days</div>
              <div className="text-sm text-gray-500">Avg. Launch Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Dominate Digital</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From stunning websites to AI-powered marketing, we provide the complete toolkit for digital success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
              <CardHeader>
                <Globe className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Build & Design</CardTitle>
                <CardDescription>
                  Custom websites, web apps, and digital experiences that convert visitors into customers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Responsive Design</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />SEO Optimized</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Fast Loading</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
              <CardHeader>
                <Bot className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>AI Marketing</CardTitle>
                <CardDescription>
                  Automated marketing campaigns, content creation, and customer engagement powered by AI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Email Automation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Social Media</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Lead Generation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Growth Analytics</CardTitle>
                <CardDescription>
                  Real-time insights, performance tracking, and data-driven recommendations for growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Performance Dashboard</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Customer Insights</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Growth Forecasting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:border-purple-300 transition-all hover:shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Expert Support</CardTitle>
                <CardDescription>
                  Dedicated growth strategists and technical experts to guide your digital transformation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />1-on-1 Coaching</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />24/7 Support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Growth Workshops</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of entrepreneurs who've already made the leap to digital success. 
            Get your free growth assessment and see how we can 10x your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-purple-600 hover:bg-gray-100">
              Get Free Assessment
              <TrendingUp className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">LaunchPad Digital</span>
              </div>
              <p className="text-gray-400">
                Empowering entrepreneurs to build, grow, and scale their digital presence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Website Development</li>
                <li>AI Marketing</li>
                <li>Growth Analytics</li>
                <li>Business Coaching</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Success Stories</li>
                <li>Growth Blog</li>
                <li>Free Tools</li>
                <li>Webinars</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@launchpaddigital.com</li>
                <li>1-800-LAUNCH</li>
                <li>Live Chat Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LaunchPad Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

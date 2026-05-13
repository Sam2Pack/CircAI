import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, BarChart3, Shield, Zap, Globe, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Recycle,
      title: 'Circularity Assessment',
      description: 'Evaluate the circular potential of metal products throughout their lifecycle.'
    },
    {
      icon: BarChart3,
      title: 'Carbon Footprint Analysis',
      description: 'Comprehensive carbon impact analysis with detailed breakdowns and benchmarks.'
    },

    {
      icon: Zap,
      title: 'AI-Powered Insights',
      description: 'Advanced AI algorithms provide actionable recommendations for sustainability improvements.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 text-sm">
              <Leaf className="w-4 h-4" />
              <span>AI-Powered Sustainability Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Sustainable Metal<br />
              <span className="text-primary-glow">Life Cycle Assessment</span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Transform your metal production with comprehensive LCA analysis, circularity insights, 
              and AI-driven recommendations for a sustainable future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-card">
                <Link to="/assessment" className="flex items-center space-x-2">
                  <span>Start Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button variant="outline-light" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Comprehensive Sustainability Analysis
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Our platform provides end-to-end lifecycle assessment and circularity analysis 
              for metal products, helping you make informed sustainability decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-smooth border-0 bg-gradient-card">
                <CardHeader className="text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Optimize Your Metal Lifecycle?
          </h2>
          <p className="text-xl text-primary-foreground/90">
            Start your comprehensive LCA assessment today and discover opportunities 
            for sustainable improvement.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/assessment" className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>Begin Assessment</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Users, Award, Target, Globe, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze complex lifecycle data to provide accurate environmental assessments and actionable insights.'
    },
    {
      icon: Globe,
      title: 'Global Database',
      description: 'Access to comprehensive global databases including ecoinvent, GaBi, and custom industry-specific datasets for accurate modeling.'
    },
    {
      icon: Target,
      title: 'Precision Modeling',
      description: 'High-precision impact calculations with uncertainty analysis and sensitivity testing for reliable results.'
    }
  ];



  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto">
              <Leaf className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              About CircAI
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Transforming metal industry sustainability through AI-powered lifecycle assessment 
              and circularity analysis. Making environmental impact assessment accessible, 
              accurate, and actionable for manufacturers worldwide.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="shadow-card bg-gradient-card">
            <CardContent className="pt-8 pb-8">
              <div className="text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Our Mission
                </h2>
                <p className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
                  We believe that accurate environmental assessment should be accessible to every manufacturer. 
                  Our AI-powered platform democratizes Life Cycle Assessment for the metals industry, 
                  enabling companies of all sizes to make informed decisions about their environmental impact 
                  and drive meaningful progress toward a circular economy.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Technology & Approach
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Our platform combines cutting-edge AI technology with rigorous environmental science 
              to deliver the most accurate and actionable LCA insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>



        {/* CTA Section */}
        <section>
          <Card className="shadow-card bg-accent/30">
            <CardContent className="pt-8 pb-8">
              <div className="text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Ready to Start Your Sustainability Journey?
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                  Join hundreds of manufacturers who are already using CircAI to reduce their environmental impact 
                  and build more sustainable operations.
                </p>
                <Button asChild size="lg" className="shadow-soft">
                  <Link to="/assessment" className="flex items-center space-x-2">
                    <Leaf className="w-5 h-5" />
                    <span>Start Your Assessment</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
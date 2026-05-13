import { Link, useLocation } from 'react-router-dom';
import { downloadReport } from '@/api/report';

import {
  ArrowLeft,
  Download,
  TrendingDown,
  Recycle,
  Award,
  BarChart3,
  Activity,
  Database,
  Cpu
} from 'lucide-react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const Results = () => {

const location = useLocation();

const prediction = location.state?.prediction;
const formData = location.state?.formData;

if (!prediction) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">
          No Assessment Data Found
        </h1>

        <p className="text-muted-foreground">
          Please run a lifecycle assessment first.
        </p>

        <Link
          to="/assessment"
          className="text-primary underline"
        >
          Go to Assessment
        </Link>
      </div>
    </div>
  );
}

const {
  carbon_footprint,
  circularity_score,
  sustainability_grade
} = prediction;

  // BAR CHART DATA
  const carbonData = [
    {
      name: 'Carbon Footprint',
      value: carbon_footprint || 0
    }
  ];

  // PIE CHART DATA
  const circularityData = [
    {
      name: 'Circularity',
      value: circularity_score || 0
    },
    {
      name: 'Remaining',
      value: 100 - (circularity_score || 0)
    }
  ];

  // AI RECOMMENDATIONS
  const recommendations: string[] = [];

  if ((carbon_footprint || 0) > 20) {
    recommendations.push(
      'Switch to renewable or low-carbon energy sources to reduce lifecycle emissions.'
    );
  }

  if ((circularity_score || 0) < 50) {
    recommendations.push(
      'Increase recycled material usage and improve recyclability of the product.'
    );
  }

  if (sustainability_grade === 'D') {
    recommendations.push(
      'Current sustainability performance is poor. Consider redesigning the production workflow.'
    );
  }

  if ((carbon_footprint || 0) < 10) {
    recommendations.push(
      'Excellent carbon performance. Maintain current low-emission strategies.'
    );
  }

  if ((circularity_score || 0) > 80) {
    recommendations.push(
      'Strong circular economy performance detected. Product lifecycle strategy is highly optimized.'
    );
  }

  if (recommendations.length === 0) {
    recommendations.push(
      'Overall sustainability performance is balanced with moderate environmental impact.'
    );
  }

  return (

    <div className="min-h-screen bg-background py-8">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-8">

          <Button variant="ghost" asChild className="mb-4">

            <Link to="/assessment" className="flex items-center space-x-2">

              <ArrowLeft className="w-4 h-4" />

              <span>Back to Assessment</span>

            </Link>

          </Button>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

            <div className="space-y-2">

              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Assessment Results
              </h1>

              <p className="text-lg text-muted-foreground">
                AI-powered lifecycle assessment analysis
              </p>

            </div>

            <div className="flex gap-2">

              <Button
  onClick={() => downloadReport(formData)}
>

                <Download className="w-4 h-4 mr-2" />

                Generate Report

              </Button>

            </div>

          </div>

        </div>

        {/* RESULT CARDS */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">

          {/* CARBON */}
          <Card className="shadow-card">

            <CardHeader className="text-center">

              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">

                <TrendingDown className="w-6 h-6 text-primary" />

              </div>

              <CardTitle className="text-xl">
                Carbon Footprint
              </CardTitle>

              <CardDescription>
                Total lifecycle emissions
              </CardDescription>

            </CardHeader>

            <CardContent className="text-center">

              <div className="bg-gradient-card rounded-lg p-6 space-y-4">

                <div className="text-5xl font-bold text-primary">

                  {carbon_footprint ?? '--'}

                </div>

                <div className="text-sm text-muted-foreground">

                  tCO₂e

                </div>

              </div>

            </CardContent>

          </Card>

          {/* CIRCULARITY */}
          <Card className="shadow-card">

            <CardHeader className="text-center">

              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">

                <Recycle className="w-6 h-6 text-secondary" />

              </div>

              <CardTitle className="text-xl">
                Circularity Score
              </CardTitle>

              <CardDescription>
                Circular economy performance
              </CardDescription>

            </CardHeader>

            <CardContent className="text-center">

              <div className="bg-gradient-card rounded-lg p-6 space-y-4">

                <div className="text-5xl font-bold text-secondary">

                  {circularity_score ?? '--'}

                </div>

                <div className="text-sm text-muted-foreground">

                  /100

                </div>

              </div>

            </CardContent>

          </Card>

          {/* GRADE */}
          <Card className="shadow-card">

            <CardHeader className="text-center">

              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">

                <Award className="w-6 h-6 text-accent" />

              </div>

              <CardTitle className="text-xl">
                Sustainability Grade
              </CardTitle>

              <CardDescription>
                Overall performance rating
              </CardDescription>

            </CardHeader>

            <CardContent className="text-center">

              <div className="bg-gradient-card rounded-lg p-6 space-y-4">

                <div className="text-6xl font-bold text-accent">

                  {sustainability_grade ?? '--'}

                </div>

              </div>

            </CardContent>

          </Card>

        </div>

        {/* CHARTS */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* BAR CHART */}
          <Card className="shadow-card">

            <CardHeader>

              <CardTitle className="flex items-center space-x-2">

                <BarChart3 className="w-5 h-5 text-primary" />

                <span>Carbon Footprint Insights</span>

              </CardTitle>

              <CardDescription>
                Environmental impact overview
              </CardDescription>

            </CardHeader>

            <CardContent>

              <div className="bg-gradient-card rounded-lg p-6 h-[320px]">

                <ResponsiveContainer width="100%" height="100%">

                  <BarChart data={carbonData}>

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                      dataKey="value"
                      radius={[8, 8, 0, 0]}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>

            </CardContent>

          </Card>

          {/* PIE CHART */}
          <Card className="shadow-card">

            <CardHeader>

              <CardTitle className="flex items-center space-x-2">

                <Activity className="w-5 h-5 text-primary" />

                <span>Material Flow Analysis</span>

              </CardTitle>

              <CardDescription>
                AI-generated sustainability insights
              </CardDescription>

            </CardHeader>

            <CardContent>

              <div className="bg-gradient-card rounded-lg p-6 h-[320px]">

                <ResponsiveContainer width="100%" height="100%">

                  <PieChart>

                    <Pie
                      data={circularityData}
                      dataKey="value"
                      outerRadius={100}
                      label
                    >

                      <Cell />

                      <Cell />

                    </Pie>

                    <Tooltip />

                  </PieChart>

                </ResponsiveContainer>

              </div>

            </CardContent>

          </Card>

          {/* AI RECOMMENDATIONS */}
          <Card className="shadow-card lg:col-span-2">

            <CardHeader>

              <CardTitle className="flex items-center space-x-2">

                <Cpu className="w-5 h-5 text-primary" />

                <span>AI-Powered Recommendations</span>

              </CardTitle>

              <CardDescription>
                Personalized optimization insights
              </CardDescription>

            </CardHeader>

            <CardContent>

              <div className="bg-gradient-card rounded-lg p-8">

                <div className="space-y-6">

                  <div className="flex justify-center space-x-4">

                    <Database className="w-12 h-12 text-primary" />

                    <Cpu className="w-12 h-12 text-secondary" />

                  </div>

                  <div className="space-y-4">

                    {recommendations.map((recommendation, index) => (

                      <div
                        key={index}
                        className="bg-background rounded-lg p-4 border"
                      >

                        <div className="flex items-start space-x-3">

                          <Cpu className="w-5 h-5 text-primary mt-1" />

                          <p className="text-sm leading-relaxed">

                            {recommendation}

                          </p>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </CardContent>

          </Card>

        </div>

      </div>

    </div>
  );
};

export default Results;
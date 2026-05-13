import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Calendar, User, Building, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Reports = () => {
  const reportData = {
    projectName: 'Aluminum Window Frame Assessment',
    assessmentDate: new Date().toLocaleDateString(),
    company: 'Green Manufacturing Inc.',
    assessor: 'Dr. Sarah Johnson',
    totalPages: 24,
    status: 'Ready for Export'
  };

  const reportSections = [
    { title: 'Executive Summary', pages: '2-3', completed: true },
    { title: 'Methodology & Scope', pages: '4-6', completed: true },
    { title: 'Inventory Analysis', pages: '7-12', completed: true },
    { title: 'Impact Assessment Results', pages: '13-18', completed: true },
    { title: 'Circularity Analysis', pages: '19-21', completed: true },
    { title: 'Recommendations', pages: '22-23', completed: true }
  ];

  const exportFormats = [
    { format: 'PDF Report', description: 'Complete report with charts and analysis', size: '2.4 MB' },
    { format: 'Executive Summary', description: 'Key findings and recommendations only', size: '480 KB' }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/results" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Results</span>
            </Link>
          </Button>
          
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Assessment Report
            </h1>
            <p className="text-lg text-muted-foreground">
              Generate and export comprehensive LCA reports
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Report Preview */}
          <div className="lg:col-span-2 space-y-6">

            {/* Report Contents */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Report Contents</CardTitle>
                <CardDescription>
                  Complete breakdown of the assessment report sections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reportSections.map((section, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary">{index + 1}</span>
                          </div>
                          <div>
                            <p className="font-medium">{section.title}</p>
                            <p className="text-sm text-muted-foreground">Pages {section.pages}</p>
                          </div>
                        </div>
                        
                        {section.completed && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                      </div>
                      
                      {index < reportSections.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Report Preview */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Report Preview</CardTitle>
                <CardDescription>
                  Sample pages from your assessment report
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-card rounded-lg p-8 text-center space-y-4">
                  <div className="w-16 h-20 bg-white rounded shadow-soft mx-auto flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg">{reportData.projectName}</h3>
                    <p className="text-muted-foreground">Life Cycle Assessment Report</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-left max-w-md mx-auto">
                    <h4 className="font-semibold mb-2">Executive Summary</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      This comprehensive LCA study evaluates the environmental impact of aluminum window frames...
                    </p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Carbon Footprint: 2.8 kg CO₂-eq</span>
                      <span>Page 2 of 24</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Export Options */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
                <CardDescription>
                  Choose your preferred format and download the report
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {exportFormats.map((format, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{format.format}</h4>
                        <p className="text-sm text-muted-foreground">{format.description}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {format.size}
                      </Badge>
                    </div>
                    
                    <Button 
                      className="w-full" 
                      variant={index === 0 ? "default" : "outline"}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download {format.format}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
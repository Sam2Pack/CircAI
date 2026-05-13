import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Calculator, ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { predictAssessment } from '@/api/predict';

const Assessment = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    metalType: '',
    productionRoute: '',
    energyMix: '',
    transportDistance: '',
    productLifespan: '',
    endOfLife: '',
    projectName: '',
    description: ''
  });

  const metalTypes = [
    'Aluminium',
    'Copper',
    'Steel',
    'Zinc',
    'Lead',
    'Nickel',
    'Tin',
    'Titanium'
  ];

  const energyMixes = [
    'Global Average',
    'EU Mix',
    'Renewable Energy',
    'Coal Heavy',
    'Natural Gas',
    'Nuclear'
  ];

  const endOfLifeOptions = [
    'Recycling',
    'Landfill',
    'Reuse',
    'Energy Recovery'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {

    try {

      const prediction = await predictAssessment({
        metal_type: formData.metalType,
        energy_mix: formData.energyMix,
        production_route: formData.productionRoute,
        transport_distance_km: Number(formData.transportDistance),
        product_lifespan_years: Number(formData.productLifespan),
        end_of_life_treatment: formData.endOfLife
      });

      navigate('/results', {
  state: {
    prediction,
    formData: {
      project_name: formData.projectName,
      description: formData.description,
      metal_type: formData.metalType,
      energy_mix: formData.energyMix,
      production_route: formData.productionRoute,
      transport_distance_km: Number(formData.transportDistance),
      product_lifespan_years: Number(formData.productLifespan),
      end_of_life_treatment: formData.endOfLife
    }
  }
});

    } catch (error) {

      console.error(error);
      alert('Prediction failed');
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">

      <div className="max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="mb-8">

          <Button variant="ghost" asChild className="mb-4">

            <Link to="/" className="flex items-center space-x-2">

              <ArrowLeft className="w-4 h-4" />

              <span>Back to Home</span>

            </Link>

          </Button>

          <div className="space-y-2">

            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              New LCA Assessment
            </h1>

            <p className="text-lg text-muted-foreground">
              Fill in the details below to start your comprehensive lifecycle assessment
            </p>

          </div>

        </div>

        {/* Form */}
        <div className="space-y-6">

          {/* Project Information */}
          <Card className="shadow-card">

            <CardHeader>

              <CardTitle className="flex items-center space-x-2">

                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">

                  <Calculator className="w-4 h-4 text-primary" />

                </div>

                <span>Project Information</span>

              </CardTitle>

              <CardDescription>
                Basic information about your assessment project
              </CardDescription>

            </CardHeader>

            <CardContent className="space-y-4">

              <div className="space-y-2">

                <Label htmlFor="projectName">
                  Project Name
                </Label>

                <Input
                  id="projectName"
                  placeholder="e.g., Aluminum Window Frame Assessment"
                  value={formData.projectName}
                  onChange={(e) =>
                    handleInputChange('projectName', e.target.value)
                  }
                />

              </div>

              <div className="space-y-2">

                <Label htmlFor="description">
                  Description (Optional)
                </Label>

                <Textarea
                  id="description"
                  placeholder="Brief description of the product or process..."
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange('description', e.target.value)
                  }
                  rows={3}
                />

              </div>

            </CardContent>

          </Card>

          {/* Material & Production */}
          <Card className="shadow-card">

            <CardHeader>

              <CardTitle>
                Material & Production
              </CardTitle>

              <CardDescription>
                Select the metal type and production parameters
              </CardDescription>

            </CardHeader>

            <CardContent className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                {/* Metal Type */}
                <div className="space-y-2">

                  <Label>
                    Metal Type
                  </Label>

                  <Select
                    value={formData.metalType}
                    onValueChange={(value) =>
                      handleInputChange('metalType', value)
                    }
                  >

                    <SelectTrigger>
                      <SelectValue placeholder="Select metal type" />
                    </SelectTrigger>

                    <SelectContent>

                      {metalTypes.map((metal) => (

                        <SelectItem
                          key={metal}
                          value={metal}
                        >
                          {metal}
                        </SelectItem>

                      ))}

                    </SelectContent>

                  </Select>

                </div>

                {/* Energy Mix */}
                <div className="space-y-2">

                  <Label>
                    Energy Mix
                  </Label>

                  <Select
                    value={formData.energyMix}
                    onValueChange={(value) =>
                      handleInputChange('energyMix', value)
                    }
                  >

                    <SelectTrigger>
                      <SelectValue placeholder="Select energy mix" />
                    </SelectTrigger>

                    <SelectContent>

                      {energyMixes.map((energy) => (

                        <SelectItem
                          key={energy}
                          value={energy}
                        >
                          {energy}
                        </SelectItem>

                      ))}

                    </SelectContent>

                  </Select>

                </div>

              </div>

              {/* Production Route */}
              <div className="space-y-3">

                <Label>
                  Production Route
                </Label>

                <RadioGroup
                  value={formData.productionRoute}
                  onValueChange={(value) =>
                    handleInputChange('productionRoute', value)
                  }
                  className="flex flex-col space-y-2"
                >

                  <div className="flex items-center space-x-2">

                    <RadioGroupItem
                      value="Virgin Material"
                      id="virgin"
                    />

                    <Label htmlFor="virgin">
                      Virgin Material (Primary production from ore)
                    </Label>

                  </div>

                  <div className="flex items-center space-x-2">

                    <RadioGroupItem
                      value="Recycled Material"
                      id="recycled"
                    />

                    <Label htmlFor="recycled">
                      Recycled Material (Secondary production)
                    </Label>

                  </div>

                  <div className="flex items-center space-x-2">

                    <RadioGroupItem
                      value="Mixed"
                      id="mixed"
                    />

                    <Label htmlFor="mixed">
                      Mixed (Virgin + Recycled)
                    </Label>

                  </div>

                </RadioGroup>

              </div>

            </CardContent>

          </Card>

          {/* Transport & Lifecycle */}
          <Card className="shadow-card">

            <CardHeader>

              <CardTitle>
                Transport & Lifecycle Parameters
              </CardTitle>

              <CardDescription>
                Define transport distances and product lifecycle
              </CardDescription>

            </CardHeader>

            <CardContent className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                {/* Transport Distance */}
                <div className="space-y-2">

                  <Label htmlFor="transportDistance">
                    Transport Distance (km)
                  </Label>

                  <Input
                    id="transportDistance"
                    type="number"
                    placeholder="e.g., 500"
                    value={formData.transportDistance}
                    onChange={(e) =>
                      handleInputChange('transportDistance', e.target.value)
                    }
                  />

                </div>

                {/* Product Lifespan */}
                <div className="space-y-2">

                  <Label htmlFor="productLifespan">
                    Product Lifespan (years)
                  </Label>

                  <Input
                    id="productLifespan"
                    type="number"
                    placeholder="e.g., 25"
                    value={formData.productLifespan}
                    onChange={(e) =>
                      handleInputChange('productLifespan', e.target.value)
                    }
                  />

                </div>

              </div>

              {/* End Of Life */}
              <div className="space-y-2">

                <Label>
                  End-of-Life Treatment
                </Label>

                <Select
                  value={formData.endOfLife}
                  onValueChange={(value) =>
                    handleInputChange('endOfLife', value)
                  }
                >

                  <SelectTrigger>
                    <SelectValue placeholder="Select end-of-life option" />
                  </SelectTrigger>

                  <SelectContent>

                    {endOfLifeOptions.map((option) => (

                      <SelectItem
                        key={option}
                        value={option}
                      >
                        {option}
                      </SelectItem>

                    ))}

                  </SelectContent>

                </Select>

              </div>

            </CardContent>

          </Card>

          {/* Submit */}
          <Card className="shadow-card bg-gradient-card">

            <CardContent className="pt-6">

              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">

                <div>

                  <h3 className="font-semibold text-lg">
                    Ready to Run Assessment?
                  </h3>

                  <p className="text-muted-foreground">
                    All fields completed. Click below to generate your LCA results.
                  </p>

                </div>

                <Button
                  size="lg"
                  className="shadow-soft"
                  onClick={handleSubmit}
                >

                  <div className="flex items-center space-x-2">

                    <span>
                      Run Analysis
                    </span>

                    <ChevronRight className="w-4 h-4" />

                  </div>

                </Button>

              </div>

            </CardContent>

          </Card>

        </div>

      </div>

    </div>
  );
};

export default Assessment;
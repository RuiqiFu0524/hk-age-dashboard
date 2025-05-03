
'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const metrics = [
  { name: 'Barrier-Free Housing Coverage', value: 75, goal: 100 },
  { name: 'Elders Within 15-Min Access to Clinic', value: 90, goal: 100 },
  { name: 'Homes Retrofitted Annually', value: 20000, goal: 20000 },
  { name: 'Elderly Social Participation Rate', value: 80, goal: 100 },
  { name: 'Mobile Health Units Deployed', value: 50, goal: 50 },
  { name: 'Districts with Elder-Youth Hubs', value: 15, goal: 18 },
  { name: 'Digital Literacy Trainees (per year)', value: 20000, goal: 20000 },
  { name: 'Reduction in Falls (vs. baseline)', value: 25, goal: 25 }
];

export default function AgeFriendlyDashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="shadow-md">
          <CardContent className="space-y-2">
            <h3 className="text-lg font-semibold">{metric.name}</h3>
            {typeof metric.value === 'number' && metric.goal === 100 ? (
              <Progress value={metric.value} />
            ) : (
              <div className="text-sm">{metric.value} / {metric.goal}</div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

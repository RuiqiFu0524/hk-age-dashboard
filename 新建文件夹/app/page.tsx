import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const metrics = [
  // Built Environment & Housing
  { name: 'Barrier-Free Housing Coverage (%)', value: 55, goal: 75 },
  { name: 'Lifts Installed in Old Walk-Ups (2025)', value: 300, goal: 500 },
  { name: 'Homes Retrofitted with Safety Features', value: 60000, goal: 100000 },
  { name: 'New Public Housing with Aging-in-Place Design (%)', value: 90, goal: 100 },

  // Health Access & Services
  { name: 'Elders Within 15-Min Travel to Primary Care (%)', value: 85, goal: 90 },
  { name: 'Mobile Health Units Deployed', value: 35, goal: 50 },
  { name: 'Access to Regular Chronic Disease Screening (%)', value: 70, goal: 80 },
  { name: 'DHC Satisfaction Rate (%)', value: 82, goal: 85 },

  // Mobility & Transportation
  { name: 'Barrier-Free Bus Stops in Aging Districts (%)', value: 80, goal: 95 },
  { name: 'Increase in Elderly Transit Ridership (%)', value: 15, goal: 30 },
  { name: 'New Shuttle Routes Launched', value: 65, goal: 100 },
  { name: 'Avg. Travel Time to Hospital in Remote Areas (min)', value: 35, goal: 30 },

  // Social Inclusion & Participation
  { name: 'Elderly with Weekly Social Interaction (%)', value: 72, goal: 80 },
  { name: 'Age-Integrated Housing/Social Hubs Built', value: 12, goal: 20 },
  { name: 'Districts with Intergenerational Programs', value: 16, goal: 18 },
  { name: 'Older Adults Trained in Digital Literacy', value: 80000, goal: 100000 },

  // Caregiver & Community Support
  { name: 'Caregiver Ratio per 1000 Elderly', value: 32, goal: 33 },
  { name: 'Elders Receiving Community-Based Support (%)', value: 60, goal: 70 },
  { name: 'Trained Elder Monitors/Volunteers', value: 20000, goal: 30000 },
  { name: 'Reduction in Elderly Falls (vs. 2024 baseline %)', value: 18, goal: 25 },

  // Governance & Policy Integration
  { name: 'District Age-Friendliness Scorecards Published', value: 13, goal: 18 },
  { name: 'Policies Evaluated for Elderly Impact (%)', value: 85, goal: 100 },
  { name: 'District Budgets to Elder Infrastructure (%)', value: 10, goal: 15 },
  { name: 'Cross-Sector Elder Programs (2025)', value: 35, goal: 50 }
];

export default function AgeFriendlyDashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="shadow-md">
          <CardContent className="space-y-2">
            <h3 className="text-base font-semibold">{metric.name}</h3>
            {metric.goal <= 100 ? (
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

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartLegend, ChartTooltip } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface TotalHousePointsProps {
  counters: {
    Baldwin: number;
    Sotomayor: number;
    Mandela: number;
    Truth: number;
  };
}

const TotalHousePoints: React.FC<TotalHousePointsProps> = ({ counters }) => {
  const data = [
    { name: 'Baldwin', value: counters.Baldwin, color: '#D20F39' },
    { name: 'Sotomayor', value: counters.Sotomayor, color: '#1E66F5' },
    { name: 'Mandela', value: counters.Mandela, color: '#40A02B' },
    { name: 'Truth', value: counters.Truth, color: '#DF8E1D' },
  ];

  return (
    <Card className="w-full max-w-lg mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-jellee text-center">Total House Points</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip 
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              {payload[0].name}
                            </span>
                            <span className="font-bold text-muted-foreground">
                              {payload[0].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <ChartLegend className="mt-4 gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </ChartLegend>
      </CardContent>
    </Card>
  );
};

export default TotalHousePoints;
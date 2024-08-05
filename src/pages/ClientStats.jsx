import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', weight: 80, bodyFat: 20, muscle: 35 },
  { name: 'Week 2', weight: 79, bodyFat: 19, muscle: 35.5 },
  { name: 'Week 3', weight: 78.5, bodyFat: 18.5, muscle: 36 },
  { name: 'Week 4', weight: 78, bodyFat: 18, muscle: 36.5 },
  { name: 'Week 5', weight: 77.5, bodyFat: 17.5, muscle: 37 },
];

const ClientStats = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">My Stats</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Current Weight</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">77.5 kg</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Body Fat %</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">17.5%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Muscle Mass</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">37 kg</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Progress Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="weight" stroke="#8884d8" />
              <Line type="monotone" dataKey="bodyFat" stroke="#82ca9d" />
              <Line type="monotone" dataKey="muscle" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientStats;

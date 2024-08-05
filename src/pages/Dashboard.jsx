import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, DollarSign, Activity, CreditCard, UserPlus, Send } from 'lucide-react';

const Dashboard = () => {
  const [newMember, setNewMember] = useState({ name: '', phone: '' });
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentPhone, setPaymentPhone] = useState('');

  const handleAddMember = (e) => {
    e.preventDefault();
    // Add member logic here
    console.log('Adding member:', newMember);
    setNewMember({ name: '', phone: '' });
  };

  const handlePromptPayment = (e) => {
    e.preventDefault();
    // Payment prompt logic here
    console.log('Prompting payment:', { amount: paymentAmount, phone: paymentPhone });
    setPaymentAmount('');
    setPaymentPhone('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Gym Pay Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">204</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="members" className="space-y-4">
        <TabsList>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="members" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add New Member</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddMember} className="space-y-4">
                <Input
                  placeholder="Member Name"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                />
                <Input
                  placeholder="Phone Number"
                  value={newMember.phone}
                  onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
                />
                <Button type="submit">
                  <UserPlus className="mr-2 h-4 w-4" /> Add Member
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Add a table or list of members here */}
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Prompt Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePromptPayment} className="space-y-4">
                <Input
                  type="number"
                  placeholder="Amount"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                />
                <Input
                  placeholder="Phone Number"
                  value={paymentPhone}
                  onChange={(e) => setPaymentPhone(e.target.value)}
                />
                <Button type="submit">
                  <Send className="mr-2 h-4 w-4" /> Send Payment Request
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Add a table of recent payments or payment history here */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;

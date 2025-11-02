import { Save } from "lucide-react";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Manage device and user preferences</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>User Information</CardTitle>
                <CardDescription>Update personal and device details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter full name" defaultValue="John Doe" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="Enter age" defaultValue="65" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="device">Device ID</Label>
                  <Input id="device" placeholder="Enter device ID" defaultValue="EPRD-2024-001" />
                </div>
                
                <Button className="w-full gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Guardian Contact</CardTitle>
                <CardDescription>Emergency contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="guardian-name">Guardian Name</Label>
                  <Input id="guardian-name" placeholder="Enter guardian name" defaultValue="Jane Doe" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" defaultValue="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="guardian@example.com" defaultValue="guardian@example.com" />
                </div>
                
                <Button className="w-full gap-2">
                  <Save className="h-4 w-4" />
                  Save Contact
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-fade-in lg:col-span-2">
              <CardHeader>
                <CardTitle>Safe Zone Configuration</CardTitle>
                <CardDescription>Define geographic boundaries for alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="lat">Center Latitude</Label>
                    <Input id="lat" placeholder="37.7749" defaultValue="37.7749" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lng">Center Longitude</Label>
                    <Input id="lng" placeholder="-122.4194" defaultValue="-122.4194" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="radius">Radius (meters)</Label>
                    <Input id="radius" type="number" placeholder="500" defaultValue="500" />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Notification Preferences</h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive alerts via text message</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive alerts via email</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive alerts on this device</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <Button className="w-full gap-2">
                  <Save className="h-4 w-4" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;

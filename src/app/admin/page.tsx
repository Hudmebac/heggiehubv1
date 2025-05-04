'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ADMIN_PASSCODE = '100672'; // Store passcode securely in environment variables in a real app

export default function AdminPage() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      toast({
        title: 'Success',
        description: 'Authentication successful.',
      });
    } else {
      setIsAuthenticated(false);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Incorrect passcode.',
      });
      setPasscode(''); // Clear input on failure
    }
  };

  const handleLogout = () => {
     setIsAuthenticated(false);
     setPasscode('');
      toast({
        title: 'Logged Out',
        description: 'You have been logged out.',
      });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto section-padding">
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Admin Login</CardTitle>
                <CardDescription>Enter the passcode to manage content.</CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent>
                  <Input
                    type="password"
                    placeholder="Enter Passcode"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    required
                    className="w-full"
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">Login</Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
                 <h2 className="text-3xl">Admin Dashboard</h2>
                 <Button onClick={handleLogout} variant="outline">Logout</Button>
            </div>
            <p className="text-muted-foreground mb-4">Manage website content here.</p>
            {/* Placeholder for content management UI */}
            <Card>
                <CardHeader>
                    <CardTitle>Content Management</CardTitle>
                    <CardDescription>Add, edit, or delete apps and tools.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-muted-foreground">
                        (Content management functionality to be implemented here)
                    </p>
                     {/* Example: Add forms or tables to manage data */}
                </CardContent>
            </Card>

          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

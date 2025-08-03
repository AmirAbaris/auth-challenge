"use client";

import { useUserStore } from "@/features/user/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl font-semibold">No user found</h1>
          <p className="text-gray-500">Please login to access the dashboard</p>
          <Link href="/auth">
            <Button className="mt-4">Go to login</Button>
          </Link>
        </div>
      </div>
    );
  }

  const { name, email, phone, picture, location, dob, registered } = user;
  const fullName = `${name.title} ${name.first} ${name.last}`;
  const address = `${location.street.name} ${location.street.number}, ${location.city}, ${location.country}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-col items-center pb-4">
            <Avatar className="w-24 h-24 mb-4 border-2 border-white shadow-lg">
              <AvatarImage src={picture.large} alt={fullName} />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                {name.first.charAt(0)}{name.last.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl">{fullName}</CardTitle>
            <p className="text-gray-500">Member since {new Date(registered.date).getFullYear()}</p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h3>
              <div className="space-y-1">
                <p className="flex items-center">
                  <span className="w-20 text-gray-500">Email:</span>
                  <span className="font-medium">{email}</span>
                </p>
                <p className="flex items-center">
                  <span className="w-20 text-gray-500">Phone:</span>
                  <span className="font-medium">{phone}</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Address</h3>
              <div className="space-y-1">
                <p>{address}</p>
                <p>Postcode: {location.postcode}</p>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <Button className="w-full" variant="outline">
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Stats and Activity Cards */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="text-sm text-gray-500">Account Status</h4>
                  <p className="font-medium text-green-600">Active</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-sm text-gray-500">Member Since</h4>
                  <p className="font-medium">{new Date(registered.date).toLocaleDateString()}</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-sm text-gray-500">Age</h4>
                  <p className="font-medium">{dob.age} years</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-sm text-gray-500">Last Login</h4>
                  <p className="font-medium">Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Profile updated</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Payment received</p>
                    <p className="text-sm text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

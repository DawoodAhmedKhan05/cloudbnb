import { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Calendar, Star, Home, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("bookings");

  const bookings = [
    {
      id: "1",
      listingTitle: "Cozy Cloud House",
      location: "San Francisco, CA",
      checkIn: "2024-12-20",
      checkOut: "2024-12-23",
      price: 360,
      status: "Confirmed",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=200&h=150&fit=crop",
    },
    {
      id: "2",
      listingTitle: "Mountain Retreat",
      location: "Aspen, CO",
      checkIn: "2025-01-15",
      checkOut: "2025-01-20",
      price: 900,
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ee9c470a0?w=200&h=150&fit=crop",
    },
  ];

  const favorites = [
    {
      id: "1",
      title: "Beachfront Bungalow",
      location: "Miami, FL",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1506381773649-6e0ee62d2537?w=200&h=150&fit=crop",
    },
    {
      id: "2",
      title: "Urban Studio",
      location: "New York, NY",
      price: 110,
      image:
        "https://images.unsplash.com/photo-1462905291922-a4ff9fa48dc6?w=200&h=150&fit=crop",
    },
  ];

  const reviews = [
    {
      id: "1",
      listingTitle: "Cozy Cloud House",
      rating: 5,
      date: "November 2024",
      text: "Amazing stay! Sarah was a wonderful host.",
      status: "Published",
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome back!</h1>
            <p className="text-muted-foreground">
              Manage your bookings and preferences
            </p>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <LogOut size={20} />
            Sign Out
          </Button>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="bookings">
              <Calendar size={18} className="mr-2" />
              My Bookings
            </TabsTrigger>
            <TabsTrigger value="favorites">
              <Heart size={18} className="mr-2" />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="reviews">
              <Star size={18} className="mr-2" />
              Reviews
            </TabsTrigger>
            <TabsTrigger value="hosting">
              <Home size={18} className="mr-2" />
              Hosting
            </TabsTrigger>
          </TabsList>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="mt-8">
            <div className="space-y-4">
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex gap-4 p-4 border border-border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <img
                      src={booking.image}
                      alt={booking.listingTitle}
                      className="w-32 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {booking.listingTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {booking.location}
                      </p>
                      <p className="text-sm mb-2">
                        {booking.checkIn} to {booking.checkOut}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-bold">${booking.price}</p>
                        <span
                          className={`text-sm font-semibold px-3 py-1 rounded-full ${
                            booking.status === "Confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Calendar
                    size={48}
                    className="mx-auto mb-4 text-muted-foreground"
                  />
                  <p className="text-muted-foreground">No bookings yet</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((fav) => (
                <Link
                  key={fav.id}
                  to={`/listing/${fav.id}`}
                  className="group cloudbnb-card overflow-hidden"
                >
                  <div className="h-48 overflow-hidden bg-secondary relative">
                    <img
                      src={fav.image}
                      alt={fav.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md">
                      <Heart size={20} className="fill-accent text-accent" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1">{fav.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {fav.location}
                    </p>
                    <p className="font-bold">${fav.price}/night</p>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="mt-8">
            <div className="space-y-4">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{review.listingTitle}</h3>
                      <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                        {review.status}
                      </span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {review.date}
                    </p>
                    <p className="text-muted-foreground">{review.text}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Star
                    size={48}
                    className="mx-auto mb-4 text-muted-foreground"
                  />
                  <p className="text-muted-foreground">No reviews yet</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Hosting Tab */}
          <TabsContent value="hosting" className="mt-8">
            <div className="text-center py-12">
              <Home size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-4">
                You haven't listed any properties yet
              </p>
              <Link to="/host">
                <Button className="bg-primary hover:bg-primary/90">
                  Start Hosting
                </Button>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

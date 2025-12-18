import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";

interface Listing {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  type: string;
}

export default function Index() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [listings] = useState<Listing[]>([
    {
      id: "1",
      title: "Cozy Cloud House",
      location: "San Francisco, CA",
      price: 120,
      rating: 4.8,
      reviews: 143,
      image:
        "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "2",
      title: "Modern Apartment with Views",
      location: "Los Angeles, CA",
      price: 95,
      rating: 4.9,
      reviews: 267,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "3",
      title: "Serene Mountain Retreat",
      location: "Aspen, CO",
      price: 180,
      rating: 4.7,
      reviews: 89,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "4",
      title: "Beachfront Bungalow",
      location: "Miami, FL",
      price: 150,
      rating: 4.9,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "5",
      title: "Urban Studio",
      location: "New York, NY",
      price: 110,
      rating: 4.6,
      reviews: 198,
      image:
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&h=400&fit=crop",
      type: "Private room",
    },
    {
      id: "6",
      title: "Lakeside Cottage",
      location: "Seattle, WA",
      price: 125,
      rating: 4.8,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      type: "Entire home",
    },
  ]);

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="cloudbnb-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent">
              Discover Your Next Cloud
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore unique stays and unforgettable experiences around the
              world. Find the perfect place to rest your head.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8 animate-slide-in-right">
            <SearchBar inHero={true} />
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {["Beachfront", "Luxury", "Mountain", "City", "Nature"].map(
              (filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 rounded-full bg-white border border-border hover:bg-secondary transition-colors text-sm font-medium"
                >
                  {filter}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12">
          Why Choose Cloudbnb?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Verified Hosts</h3>
            <p className="text-muted-foreground text-sm">
              All our hosts are verified and reviewed by real guests.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Secure Payments</h3>
            <p className="text-muted-foreground text-sm">
              Your payment information is protected with enterprise-grade
              security.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">24/7 Support</h3>
            <p className="text-muted-foreground text-sm">
              Our support team is always ready to help with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Featured Stays</h2>
          <Link
            to="/search"
            className="text-primary hover:text-primary/90 font-semibold text-sm"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <Link
              key={listing.id}
              to={`/listing/${listing.id}`}
              className="group cloudbnb-card overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-secondary">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(listing.id);
                  }}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Heart
                    size={20}
                    className={
                      favorites.has(listing.id)
                        ? "fill-accent text-accent"
                        : "text-muted-foreground"
                    }
                  />
                </button>

                {/* Badge */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                  {listing.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {listing.title}
                </h3>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <MapPin size={16} />
                  <span>{listing.location}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(listing.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground/30"
                        }
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-sm">
                    {listing.rating}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    ({listing.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-lg">${listing.price}</span>
                  <span className="text-muted-foreground text-sm">/night</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Host?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Earn money by sharing your space with travelers from around the
            world.
          </p>
          <Link to="/host">
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold">
              Become a Host
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

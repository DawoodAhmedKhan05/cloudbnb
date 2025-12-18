import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import { MapPin, Star, Heart, Map } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = searchParams.get("guests");
  const category = searchParams.get("category");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const listings = [
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
  ];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Summary */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Search Results</h1>
          <div className="bg-secondary/50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {location && (
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-semibold">{location}</p>
                </div>
              )}
              {checkIn && (
                <div>
                  <p className="text-muted-foreground">Check-in</p>
                  <p className="font-semibold">{checkIn}</p>
                </div>
              )}
              {checkOut && (
                <div>
                  <p className="text-muted-foreground">Check-out</p>
                  <p className="font-semibold">{checkOut}</p>
                </div>
              )}
              {guests && (
                <div>
                  <p className="text-muted-foreground">Guests</p>
                  <p className="font-semibold">
                    {guests} {guests === "1" ? "guest" : "guests"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* New Search */}
          <SearchBar fullWidth={true} />
        </div>

        {/* Results Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Listings Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {listings.map((listing) => (
                <Link
                  key={listing.id}
                  to={`/listing/${listing.id}`}
                  className="group cloudbnb-card overflow-hidden hover:shadow-xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-secondary">
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
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
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
                            size={14}
                            className={
                              i < Math.floor(listing.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground/30"
                            }
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-xs">
                        {listing.rating}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1">
                      <span className="font-bold">${listing.price}</span>
                      <span className="text-muted-foreground text-xs">
                        /night
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Map Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-20 bg-secondary rounded-lg h-96 flex items-center justify-center border border-border">
              <div className="text-center">
                <Map size={48} className="mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Map view coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

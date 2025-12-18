import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import { MapPin, Star, Heart, Map } from "lucide-react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = searchParams.get("guests");
  const category = searchParams.get("category");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const allListings = [
    // San Francisco
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
      title: "Golden Gate Apartment",
      location: "San Francisco, CA",
      price: 135,
      rating: 4.7,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "3",
      title: "Downtown Modern Loft",
      location: "San Francisco, CA",
      price: 155,
      rating: 4.9,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      type: "Private room",
    },

    // Los Angeles
    {
      id: "4",
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
      id: "5",
      title: "Hollywood Hills Villa",
      location: "Los Angeles, CA",
      price: 210,
      rating: 4.8,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "6",
      title: "Beach City Studio",
      location: "Los Angeles, CA",
      price: 85,
      rating: 4.6,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop",
      type: "Private room",
    },

    // Miami
    {
      id: "7",
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
      id: "8",
      title: "Luxury Penthouse",
      location: "Miami, FL",
      price: 250,
      rating: 5.0,
      reviews: 87,
      image:
        "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "9",
      title: "Art Deco Apartment",
      location: "Miami, FL",
      price: 110,
      rating: 4.7,
      reviews: 201,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
      type: "Private room",
    },

    // New York
    {
      id: "10",
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
      id: "11",
      title: "Manhattan Penthouse",
      location: "New York, NY",
      price: 280,
      rating: 4.9,
      reviews: 321,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "12",
      title: "Brooklyn Brownstone",
      location: "New York, NY",
      price: 165,
      rating: 4.8,
      reviews: 247,
      image:
        "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=400&fit=crop",
      type: "Entire home",
    },

    // Seattle
    {
      id: "13",
      title: "Lakeside Cottage",
      location: "Seattle, WA",
      price: 125,
      rating: 4.8,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "14",
      title: "Pike Place Apartment",
      location: "Seattle, WA",
      price: 105,
      rating: 4.7,
      reviews: 178,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
      type: "Private room",
    },
    {
      id: "15",
      title: "Modern Downtown Loft",
      location: "Seattle, WA",
      price: 145,
      rating: 4.6,
      reviews: 134,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      type: "Entire home",
    },

    // Aspen
    {
      id: "16",
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
      id: "17",
      title: "Ski Chalet Luxury",
      location: "Aspen, CO",
      price: 320,
      rating: 4.9,
      reviews: 76,
      image:
        "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "18",
      title: "Mountain Cabin",
      location: "Aspen, CO",
      price: 145,
      rating: 4.8,
      reviews: 112,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
      type: "Private room",
    },

    // Chicago
    {
      id: "19",
      title: "Lake Michigan View Apartment",
      location: "Chicago, IL",
      price: 115,
      rating: 4.7,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "20",
      title: "Downtown Loft",
      location: "Chicago, IL",
      price: 135,
      rating: 4.8,
      reviews: 187,
      image:
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&h=400&fit=crop",
      type: "Private room",
    },
    {
      id: "21",
      title: "Pilsen Artist Loft",
      location: "Chicago, IL",
      price: 95,
      rating: 4.6,
      reviews: 145,
      image:
        "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=400&fit=crop",
      type: "Entire home",
    },

    // Austin
    {
      id: "22",
      title: "Live Music District Apartment",
      location: "Austin, TX",
      price: 105,
      rating: 4.7,
      reviews: 178,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
      type: "Private room",
    },
    {
      id: "23",
      title: "Eco-Friendly Home",
      location: "Austin, TX",
      price: 125,
      rating: 4.8,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "24",
      title: "South Congress Bungalow",
      location: "Austin, TX",
      price: 115,
      rating: 4.6,
      reviews: 167,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop",
      type: "Private room",
    },

    // Denver
    {
      id: "25",
      title: "Rocky Mountain View Cottage",
      location: "Denver, CO",
      price: 135,
      rating: 4.8,
      reviews: 134,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "26",
      title: "Downtown Brewery District",
      location: "Denver, CO",
      price: 105,
      rating: 4.7,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&h=400&fit=crop",
      type: "Private room",
    },
    {
      id: "27",
      title: "Luxury Modern Apartment",
      location: "Denver, CO",
      price: 155,
      rating: 4.9,
      reviews: 201,
      image:
        "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=400&fit=crop",
      type: "Entire home",
    },

    // Boston
    {
      id: "28",
      title: "Back Bay Brownstone",
      location: "Boston, MA",
      price: 165,
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "29",
      title: "Harvard Square Apartment",
      location: "Boston, MA",
      price: 125,
      rating: 4.7,
      reviews: 178,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      type: "Private room",
    },
    {
      id: "30",
      title: "Beacon Hill Studio",
      location: "Boston, MA",
      price: 145,
      rating: 4.6,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop",
      type: "Private room",
    },

    // Portland
    {
      id: "31",
      title: "Powell's Books District Apartment",
      location: "Portland, OR",
      price: 95,
      rating: 4.7,
      reviews: 167,
      image:
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&h=400&fit=crop",
      type: "Private room",
    },
    {
      id: "32",
      title: "Cottage in Forest Park",
      location: "Portland, OR",
      price: 115,
      rating: 4.8,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=400&fit=crop",
      type: "Entire home",
    },
    {
      id: "33",
      title: "Modern Pearl District Loft",
      location: "Portland, OR",
      price: 135,
      rating: 4.9,
      reviews: 212,
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
      type: "Entire home",
    },
  ];

  // Filter listings based on location search
  const filteredListings = location
    ? allListings.filter((l) =>
        l.location.toLowerCase().includes(location.toLowerCase()),
      )
    : allListings;

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-sm">
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
              {category && (
                <div>
                  <p className="text-muted-foreground">Type</p>
                  <p className="font-semibold capitalize">{category}</p>
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
            {location && filteredListings.length === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold mb-4 text-muted-foreground">
                  😔 This location is not available for rent right now
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  We don't have any properties in {location} at the moment. Try
                  searching in a different location.
                </p>
                <div className="bg-secondary/50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold mb-4">Popular Locations</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      "San Francisco, CA",
                      "Los Angeles, CA",
                      "New York, NY",
                      "Miami, FL",
                      "Seattle, WA",
                    ].map((city) => (
                      <Link
                        key={city}
                        to={`/search?location=${encodeURIComponent(city)}`}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        {city}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {location && (
                  <p className="text-sm text-muted-foreground mb-6">
                    Showing {filteredListings.length} properties in {location}
                  </p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredListings.map((listing) => (
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
              </>
            )}
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

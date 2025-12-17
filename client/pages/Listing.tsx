import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Star,
  MapPin,
  Users,
  Wifi,
  Wind,
  Utensils,
  Heart,
  Share2,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const allListings = [
  {
    id: "1",
    title: "Cozy Cloud House with Mountain Views",
    location: "San Francisco, CA",
    price: 120,
    rating: 4.8,
    reviews: 143,
    host: {
      name: "Sarah Chen",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      verified: true,
    },
    images: [
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    ],
    description:
      "Enjoy a wonderful stay in this beautifully designed modern home. Perfect for couples and small families looking for a peaceful getaway. The house features stunning mountain views, modern amenities, and is located near popular attractions.",
    amenities: [
      { icon: Wifi, label: "WiFi" },
      { icon: Wind, label: "AC" },
      { icon: Utensils, label: "Kitchen" },
    ],
    bedrooms: 2,
    beds: 3,
    baths: 2,
    guests: 4,
  },
  {
    id: "2",
    title: "Modern Apartment with Views",
    location: "Los Angeles, CA",
    price: 95,
    rating: 4.9,
    reviews: 267,
    host: {
      name: "Michael Johnson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      verified: true,
    },
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    ],
    description:
      "Modern luxury apartment with stunning city views. Perfect for business travelers and couples. Located in the heart of downtown LA with walking distance to restaurants and shops.",
    amenities: [
      { icon: Wifi, label: "WiFi" },
      { icon: Wind, label: "AC" },
      { icon: Utensils, label: "Kitchen" },
    ],
    bedrooms: 1,
    beds: 1,
    baths: 1,
    guests: 2,
  },
  {
    id: "3",
    title: "Serene Mountain Retreat",
    location: "Aspen, CO",
    price: 180,
    rating: 4.7,
    reviews: 89,
    host: {
      name: "Emma Wilson",
      image:
        "https://images.unsplash.com/photo-1517070213202-1e1f61588063?w=100&h=100&fit=crop",
      verified: true,
    },
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    ],
    description:
      "Peaceful mountain retreat surrounded by nature. Ideal for families and groups seeking a quiet escape. Features stunning views, hiking trails, and a cozy fireplace.",
    amenities: [
      { icon: Wifi, label: "WiFi" },
      { icon: Wind, label: "AC" },
      { icon: Utensils, label: "Kitchen" },
    ],
    bedrooms: 4,
    beds: 5,
    baths: 3,
    guests: 8,
  },
  {
    id: "4",
    title: "Beachfront Bungalow",
    location: "Miami, FL",
    price: 150,
    rating: 4.9,
    reviews: 312,
    host: {
      name: "David Martinez",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      verified: true,
    },
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    ],
    description:
      "Beautiful beachfront bungalow with direct beach access. Wake up to ocean views and enjoy the tropical paradise. Perfect for romantic getaways and beach lovers.",
    amenities: [
      { icon: Wifi, label: "WiFi" },
      { icon: Wind, label: "AC" },
      { icon: Utensils, label: "Kitchen" },
    ],
    bedrooms: 2,
    beds: 2,
    baths: 2,
    guests: 4,
  },
  {
    id: "5",
    title: "Urban Studio",
    location: "New York, NY",
    price: 110,
    rating: 4.6,
    reviews: 198,
    host: {
      name: "Lisa Anderson",
      image:
        "https://images.unsplash.com/photo-1541101767792-46b60b0b7497?w=100&h=100&fit=crop",
      verified: true,
    },
    images: [
      "https://images.unsplash.com/photo-1462905291922-a4ff9fa48dc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506381773649-6e0ee62d2537?w=800&h=600&fit=crop",
    ],
    description:
      "Chic urban studio in the heart of Manhattan. Perfect for solo travelers and short stays. Close to subway stations, restaurants, and entertainment.",
    amenities: [
      { icon: Wifi, label: "WiFi" },
      { icon: Wind, label: "AC" },
      { icon: Utensils, label: "Kitchen" },
    ],
    bedrooms: 0,
    beds: 1,
    baths: 1,
    guests: 2,
  },
  {
    id: "6",
    title: "Lakeside Cottage",
    location: "Seattle, WA",
    price: 125,
    rating: 4.8,
    reviews: 156,
    host: {
      name: "Robert Thompson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      verified: true,
    },
    images: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe3e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ee9c470a0?w=800&h=600&fit=crop",
    ],
    description:
      "Charming cottage on the shores of a beautiful lake. Enjoy peaceful mornings and relaxing evenings. Great for families and nature enthusiasts.",
    amenities: [
      { icon: Wifi, label: "WiFi" },
      { icon: Wind, label: "AC" },
      { icon: Utensils, label: "Kitchen" },
    ],
    bedrooms: 3,
    beds: 4,
    baths: 2,
    guests: 6,
  },
];

export default function Listing() {
  const { id } = useParams();
  const [isFavorited, setIsFavorited] = useState(false);

  const listing = allListings.find((l) => l.id === id) || allListings[0];

  const reviews = [
    {
      id: "1",
      author: "John Doe",
      rating: 5,
      date: "November 2024",
      text: "Amazing place! Sarah was a wonderful host and the views were incredible.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop",
    },
    {
      id: "2",
      author: "Emma Wilson",
      rating: 5,
      date: "October 2024",
      text: "Perfect location and very clean. We would definitely stay here again!",
      avatar:
        "https://images.unsplash.com/photo-1517070213202-1e1f61588063?w=50&h=50&fit=crop",
    },
    {
      id: "3",
      author: "Michael Brown",
      rating: 4,
      date: "September 2024",
      text: "Great property with good amenities. A bit noisy during weekends.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star size={18} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{listing.rating}</span>
                <span className="text-muted-foreground">
                  ({listing.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={18} />
                <span>{listing.location}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
            >
              <Heart
                size={24}
                className={
                  isFavorited ? "fill-accent text-accent" : "text-foreground"
                }
              />
            </button>
            <button className="p-2 rounded-full border border-border hover:bg-secondary transition-colors">
              <Share2 size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Images & Details */}
          <div className="lg:col-span-2">
            {/* Gallery */}
            <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden mb-8">
              <img
                src={listing.images[0]}
                alt="Main"
                className="col-span-2 h-96 object-cover"
              />
              {listing.images.slice(1, 4).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 2}`}
                  className="h-48 object-cover"
                />
              ))}
            </div>

            {/* Listing Info */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About This Space</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {listing.description}
              </p>

              <div className="grid grid-cols-4 gap-4 mb-8 py-8 border-y border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Guests</p>
                  <p className="font-semibold flex items-center gap-1">
                    <Users size={20} />
                    {listing.guests}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Bedrooms</p>
                  <p className="font-semibold">{listing.bedrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Beds</p>
                  <p className="font-semibold">{listing.beds}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Baths</p>
                  <p className="font-semibold">{listing.baths}</p>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-bold mb-4">Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {listing.amenities.map((amenity, i) => {
                    const Icon = amenity.icon;
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <Icon size={24} className="text-primary" />
                        <span>{amenity.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="border-t border-border pt-12">
              <h2 className="text-2xl font-bold mb-6">
                Reviews ({listing.reviews})
              </h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="pb-6 border-b border-border last:border-b-0"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold">{review.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {review.date}
                          </p>
                        </div>
                        <div className="flex gap-1 mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-muted-foreground/30"
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div>
            <div className="sticky top-20 bg-card border border-border rounded-xl p-6 shadow-lg">
              {/* Price */}
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-muted-foreground mb-2">Price per night</p>
                <p className="text-4xl font-bold">
                  ${listing.price}
                  <span className="text-lg font-normal text-muted-foreground">
                    /night
                  </span>
                </p>
              </div>

              {/* Dates */}
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Check-in
                </label>
                <input type="date" className="cloudbnb-input w-full mb-3" />

                <label className="block text-sm font-semibold mb-2">
                  Check-out
                </label>
                <input type="date" className="cloudbnb-input w-full mb-3" />

                <label className="block text-sm font-semibold mb-2">
                  Guests
                </label>
                <select className="cloudbnb-input w-full">
                  <option>1 guest</option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4+ guests</option>
                </select>
              </div>

              {/* Booking Button */}
              <Link to={`/checkout?listingId=${listing.id}`} className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold rounded-lg mb-4">
                  Reserve
                </Button>
              </Link>

              {/* Price Breakdown */}
              <div className="space-y-2 text-sm py-4 border-t border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    ${listing.price} × 3 nights
                  </span>
                  <span>${listing.price * 3}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cleaning fee</span>
                  <span>$30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service fee</span>
                  <span>${Math.round((listing.price * 3 + 30) * 0.1)}</span>
                </div>
                <div className="flex justify-between font-semibold border-t border-border pt-2 mt-2">
                  <span>Total</span>
                  <span>
                    $
                    {listing.price * 3 +
                      30 +
                      Math.round((listing.price * 3 + 30) * 0.1)}
                  </span>
                </div>
              </div>

              {/* Host Info */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Hosted by</p>
                <div className="flex items-center gap-3">
                  <img
                    src={listing.host.image}
                    alt={listing.host.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{listing.host.name}</p>
                    {listing.host.verified && (
                      <p className="text-xs text-primary">✓ Verified Host</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

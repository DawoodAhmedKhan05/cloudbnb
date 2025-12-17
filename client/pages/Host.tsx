import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, MapPin, DollarSign, Calendar } from "lucide-react";

export default function Host() {
  const [activeTab, setActiveTab] = useState("new");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    pricePerNight: "",
    type: "entire-home",
    bedrooms: "",
    beds: "",
    baths: "",
    amenities: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual listing creation
    console.log("Form data:", formData);
  };

  const amenityOptions = [
    "WiFi",
    "Kitchen",
    "Air Conditioning",
    "Heating",
    "Washer",
    "Dryer",
    "TV",
    "Parking",
  ];

  const myListings = [
    {
      id: "1",
      title: "Cozy Cloud House",
      location: "San Francisco, CA",
      price: 120,
      bookings: 12,
      revenue: 1440,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=200&h=150&fit=crop",
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Host with Cloudbnb</h1>
          <p className="text-muted-foreground">
            Earn money by sharing your space with travelers
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="new">Create Listing</TabsTrigger>
            <TabsTrigger value="mylistings">My Listings</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          {/* Create Listing Tab */}
          <TabsContent value="new" className="mt-8">
            <form onSubmit={handleSubmit} className="max-w-2xl">
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="border border-border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Basic Information</h2>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">
                      Property Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      placeholder="e.g., Cozy Mountain Cabin"
                      className="cloudbnb-input w-full"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Describe your property..."
                      rows={4}
                      className="cloudbnb-input w-full"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                      <MapPin size={18} />
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="City, State"
                      className="cloudbnb-input w-full"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">
                      Property Type
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="cloudbnb-input w-full"
                    >
                      <option value="entire-home">Entire Home</option>
                      <option value="private-room">Private Room</option>
                      <option value="shared-room">Shared Room</option>
                    </select>
                  </div>
                </div>

                {/* Property Details */}
                <div className="border border-border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Property Details</h2>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Bedrooms
                      </label>
                      <input
                        type="number"
                        value={formData.bedrooms}
                        onChange={(e) =>
                          setFormData({ ...formData, bedrooms: e.target.value })
                        }
                        className="cloudbnb-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Beds
                      </label>
                      <input
                        type="number"
                        value={formData.beds}
                        onChange={(e) =>
                          setFormData({ ...formData, beds: e.target.value })
                        }
                        className="cloudbnb-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Bathrooms
                      </label>
                      <input
                        type="number"
                        value={formData.baths}
                        onChange={(e) =>
                          setFormData({ ...formData, baths: e.target.value })
                        }
                        className="cloudbnb-input w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="border border-border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <DollarSign size={20} />
                    Pricing
                  </h2>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Price per Night
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-muted-foreground">
                        $
                      </span>
                      <input
                        type="number"
                        value={formData.pricePerNight}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            pricePerNight: e.target.value,
                          })
                        }
                        placeholder="120"
                        className="cloudbnb-input w-full pl-8"
                      />
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="border border-border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Amenities</h2>

                  <div className="grid grid-cols-2 gap-3">
                    {amenityOptions.map((amenity) => (
                      <label key={amenity} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={formData.amenities.includes(amenity)}
                          onChange={(e) => {
                            const newAmenities = e.target.checked
                              ? [...formData.amenities, amenity]
                              : formData.amenities.filter((a) => a !== amenity);
                            setFormData({
                              ...formData,
                              amenities: newAmenities,
                            });
                          }}
                          className="w-4 h-4 rounded"
                        />
                        <span>{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Photos */}
                <div className="border border-border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Upload size={20} />
                    Photos
                  </h2>

                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload
                      size={40}
                      className="mx-auto mb-2 text-muted-foreground"
                    />
                    <p className="font-semibold mb-1">Upload Photos</p>
                    <p className="text-sm text-muted-foreground">
                      Drag and drop or click to select
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="border border-border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calendar size={20} />
                    Availability
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    Set your availability calendar and blocked dates
                  </p>

                  <div className="border border-border rounded-lg h-64 flex items-center justify-center">
                    <p className="text-muted-foreground">
                      Calendar widget coming soon
                    </p>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 px-8 font-semibold"
                  >
                    Create Listing
                  </Button>
                  <Button type="button" variant="outline">
                    Save as Draft
                  </Button>
                </div>
              </div>
            </form>
          </TabsContent>

          {/* My Listings Tab */}
          <TabsContent value="mylistings" className="mt-8">
            {myListings.length > 0 ? (
              <div className="space-y-4">
                {myListings.map((listing) => (
                  <div
                    key={listing.id}
                    className="flex gap-4 p-4 border border-border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-32 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        {listing.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {listing.location}
                      </p>
                      <p className="font-bold text-primary">
                        ${listing.price}/night
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-2">
                        {listing.bookings} bookings
                      </p>
                      <p className="font-bold text-lg">${listing.revenue}</p>
                      <Button size="sm" variant="outline" className="mt-2">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No listings yet</p>
              </div>
            )}
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-2">Total Earnings</p>
                <p className="text-3xl font-bold">$4,320</p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-2">This Month</p>
                <p className="text-3xl font-bold">$1,440</p>
              </div>
              <div className="border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-2">Pending</p>
                <p className="text-3xl font-bold">$360</p>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h3 className="font-bold mb-4">Recent Transactions</h3>
              <div className="text-center py-12">
                <p className="text-muted-foreground">No transactions yet</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

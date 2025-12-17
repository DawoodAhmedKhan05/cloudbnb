import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";

export default function Checkout() {
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual Stripe payment processing
    alert("Payment processed successfully! Booking confirmed.");
  };

  const bookingDetails = {
    listingTitle: "Cozy Cloud House with Mountain Views",
    location: "San Francisco, CA",
    checkIn: "2024-12-20",
    checkOut: "2024-12-23",
    nights: 3,
    pricePerNight: 120,
    subtotal: 360,
    cleaningFee: 30,
    serviceFee: 39,
    total: 429,
    hostName: "Sarah Chen",
    hostImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/listing/1"
          className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          Back to Listing
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>

              {/* Guest Details */}
              <div className="border border-border rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Guest Information</h2>

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="cloudbnb-input w-full"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="cloudbnb-input w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="cloudbnb-input w-full"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <form onSubmit={handleSubmit}>
                <div className="border border-border rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Lock size={20} />
                    Payment Method
                  </h2>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      value={cardData.cardNumber}
                      onChange={(e) =>
                        setCardData({
                          ...cardData,
                          cardNumber: e.target.value,
                        })
                      }
                      placeholder="1234 5678 9012 3456"
                      className="cloudbnb-input w-full font-mono"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      value={cardData.cardName}
                      onChange={(e) =>
                        setCardData({
                          ...cardData,
                          cardName: e.target.value,
                        })
                      }
                      placeholder="John Doe"
                      className="cloudbnb-input w-full"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={cardData.expiry}
                        onChange={(e) =>
                          setCardData({
                            ...cardData,
                            expiry: e.target.value,
                          })
                        }
                        placeholder="MM/YY"
                        className="cloudbnb-input w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        value={cardData.cvc}
                        onChange={(e) =>
                          setCardData({ ...cardData, cvc: e.target.value })
                        }
                        placeholder="123"
                        className="cloudbnb-input w-full"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 mb-6">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 mt-1 rounded"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold rounded-lg"
                >
                  Complete Booking - ${bookingDetails.total}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Your payment information is secure and encrypted
              </p>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-card border border-border rounded-xl p-6 shadow-lg">
              <div className="mb-6 pb-6 border-b border-border">
                <img
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop"
                  alt="Listing"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold">{bookingDetails.listingTitle}</h3>
                <p className="text-sm text-muted-foreground">
                  {bookingDetails.location}
                </p>
              </div>

              {/* Dates */}
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground mb-2">Dates</p>
                <p className="font-semibold">
                  {bookingDetails.checkIn} - {bookingDetails.checkOut}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {bookingDetails.nights} nights
                </p>
              </div>

              {/* Host */}
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground mb-2">Hosted by</p>
                <div className="flex items-center gap-2">
                  <img
                    src={bookingDetails.hostImage}
                    alt={bookingDetails.hostName}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="font-semibold">{bookingDetails.hostName}</p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    ${bookingDetails.pricePerNight} × {bookingDetails.nights}{" "}
                    nights
                  </span>
                  <span>${bookingDetails.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Cleaning fee</span>
                  <span>${bookingDetails.cleaningFee}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service fee</span>
                  <span>${bookingDetails.serviceFee}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${bookingDetails.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

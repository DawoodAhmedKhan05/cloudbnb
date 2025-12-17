import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  fullWidth?: boolean;
  inHero?: boolean;
}

export default function SearchBar({
  fullWidth = false,
  inHero = false,
}: SearchBarProps) {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (checkIn) params.append("checkIn", checkIn);
    if (checkOut) params.append("checkOut", checkOut);
    if (guests) params.append("guests", guests);
    navigate(`/search?${params.toString()}`);
  };

  if (inHero) {
    return (
      <form
        onSubmit={handleSearch}
        className="w-full bg-white rounded-full shadow-lg p-2 flex flex-col sm:flex-row gap-2"
      >
        <div className="flex-1 flex items-center gap-3 px-4 py-2">
          <MapPin size={20} className="text-muted-foreground flex-shrink-0" />
          <input
            type="text"
            placeholder="Where to?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full outline-none bg-transparent text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="w-px bg-border hidden sm:block"></div>

        <div className="flex-1 flex items-center gap-3 px-4 py-2 border-t sm:border-t-0 sm:border-l border-border">
          <Calendar size={20} className="text-muted-foreground flex-shrink-0" />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full outline-none bg-transparent text-foreground placeholder:text-muted-foreground text-sm"
          />
        </div>

        <div className="w-px bg-border hidden sm:block"></div>

        <div className="flex-1 flex items-center gap-3 px-4 py-2 border-t sm:border-t-0 sm:border-l border-border">
          <Calendar size={20} className="text-muted-foreground flex-shrink-0" />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full outline-none bg-transparent text-foreground placeholder:text-muted-foreground text-sm"
          />
        </div>

        <div className="w-px bg-border hidden sm:block"></div>

        <div className="flex items-center gap-3 px-4 py-2 border-t sm:border-t-0 sm:border-l border-border sm:flex-1">
          <Users size={20} className="text-muted-foreground flex-shrink-0" />
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full outline-none bg-transparent text-foreground placeholder:text-muted-foreground text-sm"
          >
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
            <option value="5">5+ guests</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-2 font-semibold flex items-center gap-2 justify-center transition-colors flex-shrink-0"
        >
          <Search size={20} />
          <span className="hidden sm:inline">Search</span>
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSearch}
      className={`flex gap-2 ${
        fullWidth ? "w-full" : "max-w-2xl"
      } bg-card rounded-lg border border-border p-2`}
    >
      <div className="flex-1 flex items-center gap-2 px-3">
        <MapPin size={18} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full outline-none bg-transparent text-sm"
        />
      </div>
      <div className="flex-1 flex items-center gap-2 px-3 border-l border-border">
        <Calendar size={18} className="text-muted-foreground" />
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full outline-none bg-transparent text-sm"
        />
      </div>
      <div className="flex-1 flex items-center gap-2 px-3 border-l border-border">
        <Users size={18} className="text-muted-foreground" />
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full outline-none bg-transparent text-sm"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
        </select>
      </div>
      <Button
        type="submit"
        size="sm"
        className="bg-accent hover:bg-accent/90 text-accent-foreground"
      >
        <Search size={16} />
      </Button>
    </form>
  );
}

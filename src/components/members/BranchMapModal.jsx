
import React, { useState, useEffect, useCallback, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, MapPin, Building2, CreditCard, Navigation, ChevronDown,
  Layers, AlertCircle, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getBranchData, getCityCenter, CITIES } from "./branchData";
import { createBranchIcon, createAtmIcon, createUserIcon } from "./MapMakers";
import LocationSidebar from "./LocationSidebar";

// Fly to city helper
function MapFlyTo({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([center.lat, center.lng], zoom, { duration: 1.2 });
  }, [center, zoom, map]);
  return null;
}

function MapFlyToMarker({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.flyTo(position, 16, { duration: 0.8 });
  }, [position, map]);
  return null;
}

export default function BranchMapModal({ bank, onClose }) {
  const [selectedCity, setSelectedCity] = useState("Karachi");
  const [showBranches, setShowBranches] = useState(true);
  const [showAtms, setShowAtms] = useState(true);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [geoLoading, setGeoLoading] = useState(false);
  const [geoError, setGeoError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [flyTarget, setFlyTarget] = useState(null);

  const cityCenter = getCityCenter(selectedCity);
  const { branches, atms } = getBranchData(bank.short, selectedCity);

  const totalBranches = branches.length;
  const totalAtms = atms.length;

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedMarker(null);
    setFlyTarget(null);
    setCityDropdownOpen(false);
  };

  const handleLocate = useCallback(() => {
    setGeoLoading(true);
    setGeoError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setGeoLoading(false);
      },
      () => {
        setGeoError("Location access denied.");
        setGeoLoading(false);
      },
      { timeout: 8000 }
    );
  }, []);

  const handleSelectMarker = (item) => {
    setSelectedMarker(item);
    setFlyTarget([item.lat, item.lng]);
    if (window.innerWidth < 768) setSidebarOpen(false);
  };

  // Leaflet CSS fix for default icon
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `.leaflet-default-icon-path { display:none; }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const branchIcon = createBranchIcon();
  const atmIcon = createAtmIcon();
  const userIcon = createUserIcon();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="bg-background w-full sm:max-w-6xl sm:rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          style={{ height: "90vh", maxHeight: "90vh" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b border-border/50 flex-shrink-0 bg-card">
            {/* Bank logo */}
            <div className="w-9 h-9 rounded-lg bg-background flex items-center justify-center border border-border/50 flex-shrink-0">
              <img
                src={bank.logo}
                alt={bank.name}
                className="w-6 h-6 object-contain"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-display text-base sm:text-lg text-foreground truncate leading-tight">
                {bank.name}
              </h2>
              <p className="font-body text-xs text-muted-foreground">
                Branch & ATM Locator
              </p>
            </div>

            {/* Stats */}
            <div className="hidden sm:flex items-center gap-3 mr-2">
              <div className="text-center">
                <p className="font-body text-xs text-muted-foreground">Branches</p>
                <p className="font-display text-lg text-[#4b1c79] leading-none">{totalBranches}</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="font-body text-xs text-muted-foreground">ATMs</p>
                <p className="font-display text-lg text-foreground leading-none">{totalAtms}</p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="flex-shrink-0 rounded-full hover:bg-destructive/10 hover:text-destructive"
              aria-label="Close map"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-2 px-4 sm:px-6 py-3 border-b border-border/50 bg-muted/30 flex-shrink-0 flex-wrap overflow-visible">
            {/* City picker */}
            <div className="relative">
              <button
                onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border/60 font-body text-sm hover:border-[#4b1c79]/40 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b1c79]"
              >
                <MapPin className="w-4 h-4 text-[#4b1c79] flex-shrink-0" />
                <span className="font-medium">{selectedCity}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${cityDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {cityDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute top-full left-0 mt-1 bg-card border border-border/60 rounded-xl shadow-xl z-[9999] min-w-[160px] overflow-hidden"
                  >
                    {CITIES.map((city) => (
                      <button
                        key={city}
                        onClick={() => handleCityChange(city)}
                        className={`w-full text-left px-4 py-2.5 font-body text-sm hover:bg-muted transition-colors
                          ${selectedCity === city ? "text-[#4b1c79] font-medium bg-[#4b1c79]/5" : "text-foreground"}`}
                      >
                        {city}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Toggle buttons */}
            <button
              onClick={() => setShowBranches(!showBranches)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border font-body text-xs font-medium transition-all min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b1c79]
                ${showBranches ? "bg-[#4b1c79] text-white border-[#4b1c79]" : "bg-background border-border/60 text-muted-foreground hover:border-[#4b1c79]/40"}`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Branches ({totalBranches})</span>
            </button>

            <button
              onClick={() => setShowAtms(!showAtms)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border font-body text-xs font-medium transition-all min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b1c79]
                ${showAtms ? "bg-foreground text-background border-foreground" : "bg-background border-border/60 text-muted-foreground hover:border-foreground/40"}`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>ATMs ({totalAtms})</span>
            </button>

            {/* Locate me */}
            <button
              onClick={handleLocate}
              disabled={geoLoading}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border/60 bg-background font-body text-xs font-medium text-muted-foreground hover:border-[#4b1c79]/40 hover:text-[#4b1c79] transition-all ml-auto min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b1c79] disabled:opacity-60"
            >
              {geoLoading
                ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
                : <Navigation className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{geoLoading ? "Locating…" : "My Location"}</span>
            </button>

            {/* Sidebar toggle (mobile) */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border/60 bg-background font-body text-xs text-muted-foreground hover:border-[#4b1c79]/40 transition-all min-h-[44px] sm:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4b1c79]"
            >
              <Layers className="w-3.5 h-3.5" />
            </button>
          </div>

          {geoError && (
            <div className="flex items-center gap-2 px-4 py-2 bg-destructive/5 border-b border-destructive/20 flex-shrink-0">
              <AlertCircle className="w-3.5 h-3.5 text-destructive flex-shrink-0" />
              <span className="font-body text-xs text-destructive">{geoError}</span>
            </div>
          )}

          {/* Body: map + sidebar */}
          <div className="flex flex-1 overflow-hidden">
            {/* Map */}
            <div className="flex-1 relative">
              <MapContainer
                center={[cityCenter.lat, cityCenter.lng]}
                zoom={13}
                className="w-full h-full"
                zoomControl={false}
                attributionControl={false} // REMOVED: Attribution Control
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  // REMOVED: attribution='...' line
                />
                <MapFlyTo center={cityCenter} zoom={13} />
                {flyTarget && <MapFlyToMarker position={flyTarget} />}

                {/* Branch markers */}
                {showBranches && branches.map((b) => (
                  <Marker
                    key={b.id}
                    position={[b.lat, b.lng]}
                    icon={branchIcon}
                    eventHandlers={{ click: () => handleSelectMarker(b) }}
                  >
                    <Popup className="branch-popup">
                      <div className="font-body text-sm min-w-[200px]">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-[#4b1c79]/10 text-[#4b1c79] text-[10px] px-1.5 py-0 border-0">Branch</Badge>
                        </div>
                        <p className="font-medium text-foreground text-xs leading-snug mb-1">{b.address}</p>
                        <p className="text-[10px] text-muted-foreground whitespace-pre-line">{b.hours}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {b.services.slice(0, 3).map(s => (
                            <span key={s} className="text-[9px] bg-muted rounded px-1.5 py-0.5 text-muted-foreground">{s}</span>
                          ))}
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}

                {/* ATM markers */}
                {showAtms && atms.map((a) => (
                  <Marker
                    key={a.id}
                    position={[a.lat, a.lng]}
                    icon={atmIcon}
                    eventHandlers={{ click: () => handleSelectMarker(a) }}
                  >
                    <Popup>
                      <div className="font-body text-sm min-w-[180px]">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-muted text-muted-foreground text-[10px] px-1.5 py-0 border-0">ATM</Badge>
                          <span className="text-[10px] text-muted-foreground">24 / 7</span>
                        </div>
                        <p className="font-medium text-foreground text-xs leading-snug mb-1">{a.address}</p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {a.services.map(s => (
                            <span key={s} className="text-[9px] bg-muted rounded px-1.5 py-0.5 text-muted-foreground">{s}</span>
                          ))}
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}

                {/* User location */}
                {userLocation && (
                  <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
                    <Popup><span className="font-body text-xs">Your Location</span></Popup>
                  </Marker>
                )}
              </MapContainer>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl shadow-lg border border-border/50 px-3 py-2 flex items-center gap-4 z-[400]">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full rotate-[-45deg] bg-[#4b1c79] border border-white/80" style={{ borderRadius: "50% 50% 50% 0" }} />
                  <span className="font-body text-[10px] text-foreground">Branch</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-foreground border border-[#4b1c79]/40" />
                  <span className="font-body text-[10px] text-foreground">ATM</span>
                </div>
                {userLocation && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#4b1c79] border border-white" />
                    <span className="font-body text-[10px] text-foreground">You</span>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <AnimatePresence>
              {sidebarOpen && (
                <motion.aside
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 280, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="border-l border-border/50 bg-card flex flex-col overflow-hidden flex-shrink-0"
                  style={{ minWidth: 0 }}
                >
                  <div className="px-4 py-3 border-b border-border/50 flex-shrink-0">
                    <p className="font-body text-xs font-medium text-foreground">
                      {selectedCity} Locations
                    </p>
                    <p className="font-body text-[10px] text-muted-foreground">
                      {(showBranches ? totalBranches : 0) + (showAtms ? totalAtms : 0)} visible
                    </p>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <LocationSidebar
                      branches={branches}
                      atms={atms}
                      showBranches={showBranches}
                      showAtms={showAtms}
                      onSelectMarker={handleSelectMarker}
                      selectedId={selectedMarker?.id}
                    />
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

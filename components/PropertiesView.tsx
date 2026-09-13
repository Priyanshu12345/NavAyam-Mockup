'use client';

import React, { useState, useMemo } from 'react';
import { Property, PropertyFilterState } from '@/types/property';
import { PropertyCard } from './PropertyCard';
import { Search, Filter, RotateCcw, Sparkles, MapPin, Building, ShieldCheck } from 'lucide-react';

interface PropertiesViewProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onBackToHome: () => void;
}

export const PropertiesView: React.FC<PropertiesViewProps> = ({
  properties,
  onSelectProperty,
  onBackToHome,
}) => {
  const [filters, setFilters] = useState<PropertyFilterState>({
    searchQuery: '',
    location: 'all',
    propertyType: 'all',
    priceRange: 'all',
    sizeRange: 'all',
    availability: 'all',
  });

  // Extract unique locations and types
  const locations = useMemo(() => {
    const set = new Set(properties.map((p) => p.city));
    return ['all', ...Array.from(set)];
  }, [properties]);

  const propertyTypes = useMemo(() => {
    const set = new Set(properties.map((p) => p.type));
    return ['all', ...Array.from(set)];
  }, [properties]);

  // Filtering logic
  const filteredProperties = useMemo(() => {
    return properties.filter((item) => {
      // Search query
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchLoc = item.location.toLowerCase().includes(q);
        const matchCity = item.city.toLowerCase().includes(q);
        if (!matchName && !matchLoc && !matchCity) return false;
      }

      // Location
      if (filters.location !== 'all' && item.city !== filters.location) {
        return false;
      }

      // Property Type
      if (filters.propertyType !== 'all' && item.type !== filters.propertyType) {
        return false;
      }

      // Availability
      if (filters.availability !== 'all' && item.status !== filters.availability) {
        return false;
      }

      // Price Range (in Lakhs)
      if (filters.priceRange === 'under-40' && item.priceNumeric >= 40) {
        return false;
      }
      if (filters.priceRange === '40-50' && (item.priceNumeric < 40 || item.priceNumeric > 50)) {
        return false;
      }
      if (filters.priceRange === 'above-50' && item.priceNumeric <= 50) {
        return false;
      }

      // Size Range (in sq.ft)
      if (filters.sizeRange === 'under-2500' && item.sizeSqFt >= 2500) {
        return false;
      }
      if (filters.sizeRange === '2500-3500' && (item.sizeSqFt < 2500 || item.sizeSqFt > 3500)) {
        return false;
      }
      if (filters.sizeRange === 'above-3500' && item.sizeSqFt <= 3500) {
        return false;
      }

      return true;
    });
  }, [properties, filters]);

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      location: 'all',
      propertyType: 'all',
      priceRange: 'all',
      sizeRange: 'all',
      availability: 'all',
    });
  };

  const hasActiveFilters =
    filters.searchQuery !== '' ||
    filters.location !== 'all' ||
    filters.propertyType !== 'all' ||
    filters.priceRange !== 'all' ||
    filters.sizeRange !== 'all' ||
    filters.availability !== 'all';

  return (
    <div id="properties-discovery-page" className="pt-28 pb-24 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#6B726F] font-sans mb-6">
          <button onClick={onBackToHome} className="hover:text-[#1E3A2F] cursor-pointer">
            Home
          </button>
          <span>/</span>
          <span className="text-[#181B19] font-medium">Curated Properties</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#4B6B58] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#1E3A2F]" />
            <span>Curated Portfolio</span>
          </div>
          <h1
            id="properties-page-heading"
            className="font-serif text-3xl sm:text-5xl font-normal text-[#181B19] tracking-tight leading-tight"
          >
            Find a Property That Fits Your Future.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#575F5B] font-sans leading-relaxed">
            Browse NavAyam&apos;s available property opportunities. Handpicked residential plots and parcels with uncompromised legal clarity.
          </p>
        </div>

        {/* Filter & Search Bar - Curated Editorial Design (not cluttered marketplace) */}
        <div
          id="property-filters-panel"
          className="bg-[#FFFFFF] rounded-2xl p-5 sm:p-6 border border-[#E5DFD5] shadow-xs mb-10"
        >
          {/* Top row: search & active filters indicator */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#ECE7DE]">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#89938E] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                placeholder="Search by project name or locality (e.g. Rajpur Road)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] text-sm text-[#181B19] placeholder:text-[#89938E] focus:outline-none focus:border-[#1E3A2F]"
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#6B726F] font-sans">
                Showing <strong className="text-[#181B19]">{filteredProperties.length}</strong> of{' '}
                {properties.length} properties
              </span>

              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 text-xs text-[#1E3A2F] hover:underline font-medium cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Filter dropdowns row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 pt-5">
            {/* Location */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-sans text-[#6B726F] font-medium mb-1.5">
                Location
              </label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] text-xs sm:text-sm text-[#181B19] focus:outline-none focus:border-[#1E3A2F] cursor-pointer"
              >
                <option value="all">All Locations</option>
                {locations.filter((l) => l !== 'all').map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}, Uttarakhand
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-sans text-[#6B726F] font-medium mb-1.5">
                Property Type
              </label>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] text-xs sm:text-sm text-[#181B19] focus:outline-none focus:border-[#1E3A2F] cursor-pointer"
              >
                <option value="all">All Types</option>
                {propertyTypes.filter((t) => t !== 'all').map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-sans text-[#6B726F] font-medium mb-1.5">
                Price Budget
              </label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] text-xs sm:text-sm text-[#181B19] focus:outline-none focus:border-[#1E3A2F] cursor-pointer"
              >
                <option value="all">Any Price</option>
                <option value="under-40">Under ₹40 Lakh</option>
                <option value="40-50">₹40 Lakh – ₹50 Lakh</option>
                <option value="above-50">Above ₹50 Lakh</option>
              </select>
            </div>

            {/* Size */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-sans text-[#6B726F] font-medium mb-1.5">
                Plot Size
              </label>
              <select
                value={filters.sizeRange}
                onChange={(e) => setFilters({ ...filters, sizeRange: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] text-xs sm:text-sm text-[#181B19] focus:outline-none focus:border-[#1E3A2F] cursor-pointer"
              >
                <option value="all">Any Size</option>
                <option value="under-2500">Under 2,500 sq.ft</option>
                <option value="2500-3500">2,500 – 3,500 sq.ft</option>
                <option value="above-3500">Above 3,500 sq.ft</option>
              </select>
            </div>

            {/* Availability */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-[11px] uppercase tracking-wider font-sans text-[#6B726F] font-medium mb-1.5">
                Availability
              </label>
              <select
                value={filters.availability}
                onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#FAF8F5] border border-[#E5DFD5] text-xs sm:text-sm text-[#181B19] focus:outline-none focus:border-[#1E3A2F] cursor-pointer"
              >
                <option value="all">All Properties</option>
                <option value="available">Available Plots Only</option>
                <option value="sold">Completed Registries (Sold)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onSelect={onSelectProperty}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16 bg-[#FFFFFF] rounded-2xl border border-[#E5DFD5] p-8 max-w-lg mx-auto">
            <ShieldCheck className="w-12 h-12 text-[#89938E] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#181B19] font-normal mb-2">
              No matching properties found
            </h3>
            <p className="text-sm text-[#575F5B] font-sans mb-6">
              We maintain an intentionally selective portfolio. Try adjusting your filters or speak directly with our advisory desk for unlisted off-market opportunities.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-full bg-[#1E3A2F] text-[#FAF8F5] text-xs font-sans font-medium cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

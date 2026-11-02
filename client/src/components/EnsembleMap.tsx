/*
 * Interactive map of the ensemble cities. This module imports leaflet and its CSS, so it is only
 * loaded with a dynamic import, shortly before the map area scrolls into view. Tiles come from
 * OpenStreetMap. Pins are Leaflet divIcons styled in index.css (.iou-pin), so no default marker
 * image files are involved and nothing depends on bundler icon URLs.
 */
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export type MapPin = {
  name: string;
  lat: number;
  lng: number;
  active: boolean;
  /** Accessible name and tooltip, for example "Utrecht: Emerging". */
  label: string;
};

type Props = {
  pins: MapPin[];
  selected: string;
  onSelect: (name: string) => void;
  /** Accessible name of the map region. */
  label: string;
};

const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function pinIcon(active: boolean) {
  return L.divIcon({
    className: 'iou-pin' + (active ? ' iou-pin-active' : ''),
    html: '<span class="iou-pin-dot"></span>',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

export default function EnsembleMap({ pins, selected, onSelect, label }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, { scrollWheelZoom: false });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: ATTRIBUTION }).addTo(map);
    mapRef.current = map;
    // The container is laid out by the time this runs, but re-measure once so tiles fill the whole panel.
    requestAnimationFrame(() => mapRef.current?.invalidateSize());
    layerRef.current = L.layerGroup().addTo(map);
    const markers = markersRef.current;
    return () => {
      map.remove();
      mapRef.current = null;
      layerRef.current = null;
      markers.clear();
    };
  }, []);

  // Rebuild the pins when the pin data changes (language switch or a status change).
  useEffect(() => {
    const map = mapRef.current;
    const layer = layerRef.current;
    if (!map || !layer) return;
    layer.clearLayers();
    markersRef.current.clear();
    pins.forEach((pin) => {
      const marker = L.marker([pin.lat, pin.lng], { icon: pinIcon(pin.active), title: pin.label, alt: pin.label, keyboard: true }).addTo(layer);
      const el = marker.getElement();
      if (el) {
        // Hover and keyboard focus select the city. Enter and tap arrive as a click, which Leaflet also raises for Enter.
        const select = () => onSelectRef.current(pin.name);
        el.addEventListener('mouseenter', select);
        el.addEventListener('focus', select);
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
      }
      marker.on('click', () => onSelectRef.current(pin.name));
      markersRef.current.set(pin.name, marker);
    });
    if (pins.length > 0 && !map.getZoom()) {
      map.fitBounds(L.latLngBounds(pins.map((p) => [p.lat, p.lng] as [number, number])), { padding: [40, 40] });
    }
  }, [pins]);

  // Mark the selected pin (larger, soft gold ring) without rebuilding the markers.
  useEffect(() => {
    markersRef.current.forEach((marker, name) => {
      const isSelected = name === selected;
      marker.getElement()?.classList.toggle('iou-pin-selected', isSelected);
      marker.setZIndexOffset(isSelected ? 1000 : 0);
    });
  }, [selected, pins]);

  return <div ref={containerRef} role="region" aria-label={label} className="h-full w-full z-0" />;
}

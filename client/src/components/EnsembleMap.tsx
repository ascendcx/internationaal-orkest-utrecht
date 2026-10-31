/*
 * Interactive map of the ensemble cities. This module imports leaflet and its CSS, so it must only be
 * loaded with a dynamic import after the visitor clicks "Show map". Tiles come from OpenStreetMap.
 */
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export type MapPin = {
  name: string;
  lat: number;
  lng: number;
  badge: string;
  text: string;
  active: boolean;
};

type Props = {
  pins: MapPin[];
  /** Accessible name of the map region. */
  label: string;
};

const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function pinIcon(active: boolean) {
  const fill = active ? '#d4a017' : '#ffffff';
  return L.divIcon({
    className: '',
    html: `<span style="display:block;width:22px;height:22px;border-radius:50%;background:${fill};border:4px solid #1d6b72;box-shadow:0 1px 4px rgba(0,0,0,.4)"></span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -12],
  });
}

function popupContent(pin: MapPin): HTMLElement {
  const root = document.createElement('div');
  const title = document.createElement('strong');
  title.textContent = pin.name;
  const badge = document.createElement('p');
  badge.style.cssText = 'margin:4px 0;font-weight:600';
  badge.textContent = pin.badge;
  const text = document.createElement('p');
  text.style.margin = '0';
  text.textContent = pin.text;
  root.append(title, badge, text);
  return root;
}

export default function EnsembleMap({ pins, label }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, { scrollWheelZoom: false });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: ATTRIBUTION }).addTo(map);
    mapRef.current = map;
    layerRef.current = L.layerGroup().addTo(map);
    return () => {
      map.remove();
      mapRef.current = null;
      layerRef.current = null;
    };
  }, []);

  // Rebuild the pins when the pin data changes (language switch or a status change).
  useEffect(() => {
    const map = mapRef.current;
    const layer = layerRef.current;
    if (!map || !layer) return;
    layer.clearLayers();
    pins.forEach((pin) => {
      L.marker([pin.lat, pin.lng], { icon: pinIcon(pin.active), title: `${pin.name}: ${pin.badge}`, keyboard: true })
        .bindPopup(popupContent(pin))
        .addTo(layer);
    });
    if (pins.length > 0 && !map.getZoom()) {
      map.fitBounds(L.latLngBounds(pins.map((p) => [p.lat, p.lng] as [number, number])), { padding: [40, 40] });
    }
  }, [pins]);

  return <div ref={containerRef} role="region" aria-label={label} className="h-[420px] w-full rounded-xl border border-[oklch(0.88_0.015_195)] z-0" />;
}

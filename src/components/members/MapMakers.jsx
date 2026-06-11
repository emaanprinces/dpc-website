import L from "leaflet";

export function createBranchIcon() {
  return L.divIcon({
    className: "",
    html: `<div style="
      width: 28px; height: 34px; position: relative;
    ">
      <div style="
        width: 28px; height: 28px;
        background: #3b1a5a;
        border: 3px solid #ffffff;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 3px 10px rgba(59,26,90,0.45);
      "></div>
      <div style="
        position: absolute; top: 6px; left: 6px;
        width: 10px; height: 10px;
        background: #f5e6c8;
        border-radius: 50%;
        transform: rotate(45deg);
      "></div>
    </div>`,
    iconSize: [28, 34],
    iconAnchor: [14, 34],
    popupAnchor: [0, -36],
  });
}

export function createAtmIcon() {
  return L.divIcon({
    className: "",
    html: `<div style="
      width: 26px; height: 26px;
      background: #1a4a3a;
      border: 3px solid #ffffff;
      border-radius: 6px;
      box-shadow: 0 3px 10px rgba(26,74,58,0.45);
      display: flex; align-items: center; justify-content: center;
    ">
      <div style="
        width: 10px; height: 7px;
        background: #a8e6cf;
        border-radius: 2px;
      "></div>
    </div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -16],
  });
}

export function createUserIcon() {
  return L.divIcon({
    className: "",
    html: `<div style="
      width: 22px; height: 22px;
      background: #2563eb;
      border: 3px solid #ffffff;
      border-radius: 50%;
      box-shadow: 0 0 0 4px rgba(37,99,235,0.25), 0 3px 8px rgba(37,99,235,0.4);
    "></div>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
    popupAnchor: [0, -14],
  });
}
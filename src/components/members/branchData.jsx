// Realistic seeded branch/ATM data for Pakistani cities
// Each city has a center coordinate; branches/ATMs are offset realistically

const PAKISTAN_CITIES = {
  Karachi:   { lat: 24.8607, lng: 67.0011 },
  Lahore:    { lat: 31.5204, lng: 74.3587 },
  Islamabad: { lat: 33.6844, lng: 73.0479 },
  Rawalpindi:{ lat: 33.5651, lng: 73.0169 },
  Faisalabad:{ lat: 31.4504, lng: 73.1350 },
  Multan:    { lat: 30.1575, lng: 71.5249 },
  Peshawar:  { lat: 34.0150, lng: 71.5249 },
  Quetta:    { lat: 30.1798, lng: 66.9750 },
  Hyderabad: { lat: 25.3960, lng: 68.3578 },
  Sialkot:   { lat: 32.4945, lng: 74.5229 },
};

export const CITIES = Object.keys(PAKISTAN_CITIES);

function seed(bankShort, cityName, type, count) {
  const center = PAKISTAN_CITIES[cityName];
  if (!center) return [];
  const items = [];
  // Use bank name + city + index as deterministic offsets
  const bankHash = bankShort.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const cityHash = cityName.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  for (let i = 0; i < count; i++) {
    const angle = ((bankHash * 37 + cityHash * 13 + i * 71) % 360) * (Math.PI / 180);
    const radius = ((bankHash + i * 29 + cityHash) % 60) * 0.001 + 0.004;
    const lat = +(center.lat + Math.sin(angle) * radius).toFixed(5);
    const lng = +(center.lng + Math.cos(angle) * radius).toFixed(5);
    const streetNum = ((bankHash * 7 + i * 43 + cityHash * 3) % 200) + 1;
    const streets = ["Main Boulevard","Commercial Street","Financial Avenue","Bank Road","Market Street","Plaza Avenue","Civic Centre Road","Business District","Jinnah Avenue","Mall Road"];
    const street = streets[(bankHash + i + cityHash) % streets.length];
    items.push({
      id: `${bankShort}-${cityName}-${type}-${i}`,
      type,
      lat,
      lng,
      address: `${streetNum} ${street}, ${cityName}`,
      hours: type === "branch"
        ? "Mon–Fri: 9:00 AM – 5:00 PM\nSat: 9:00 AM – 1:00 PM"
        : "24 / 7",
      services: type === "branch"
        ? ["Account Opening", "Loans", "Foreign Exchange", "Safe Deposit"]
        : ["Cash Withdrawal", "Balance Inquiry", "Mini Statement"],
    });
  }
  return items;
}

// Per-bank per-city counts (realistic relative sizes)
const BANK_CITY_CONFIG = {
  NBP:       { Karachi:[8,15], Lahore:[7,13], Islamabad:[5,10], Rawalpindi:[4,8], Faisalabad:[4,7], Multan:[3,6], Peshawar:[3,5], Quetta:[3,5], Hyderabad:[2,4], Sialkot:[2,3] },
  HBL:       { Karachi:[9,16], Lahore:[8,14], Islamabad:[6,11], Rawalpindi:[5,9], Faisalabad:[4,8], Multan:[4,7], Peshawar:[3,6], Quetta:[2,4], Hyderabad:[3,5], Sialkot:[2,4] },
  UBL:       { Karachi:[7,13], Lahore:[6,12], Islamabad:[5,9], Rawalpindi:[4,7], Faisalabad:[4,6], Multan:[3,5], Peshawar:[2,4], Quetta:[2,3], Hyderabad:[2,3], Sialkot:[2,3] },
  MCB:       { Karachi:[6,12], Lahore:[7,13], Islamabad:[4,8], Rawalpindi:[3,6], Faisalabad:[4,7], Multan:[3,5], Peshawar:[2,4], Quetta:[2,3], Hyderabad:[2,3], Sialkot:[2,4] },
  ABL:       { Karachi:[5,10], Lahore:[6,11], Islamabad:[4,7], Rawalpindi:[3,6], Faisalabad:[3,6], Multan:[2,4], Peshawar:[2,3], Quetta:[1,2], Hyderabad:[2,3], Sialkot:[2,3] },
  BAF:       { Karachi:[6,11], Lahore:[5,10], Islamabad:[4,8], Rawalpindi:[3,6], Faisalabad:[3,5], Multan:[2,4], Peshawar:[2,3], Quetta:[1,2], Hyderabad:[2,3], Sialkot:[1,2] },
  BAHL:      { Karachi:[5,9], Lahore:[5,9], Islamabad:[3,6], Rawalpindi:[3,5], Faisalabad:[3,5], Multan:[2,4], Peshawar:[1,3], Quetta:[1,2], Hyderabad:[1,2], Sialkot:[1,2] },
  MBL:       { Karachi:[6,10], Lahore:[5,9], Islamabad:[4,7], Rawalpindi:[3,6], Faisalabad:[3,5], Multan:[2,4], Peshawar:[2,4], Quetta:[2,3], Hyderabad:[2,3], Sialkot:[1,2] },
  AKBL:      { Karachi:[4,8], Lahore:[4,8], Islamabad:[4,9], Rawalpindi:[4,8], Faisalabad:[2,4], Multan:[2,3], Peshawar:[2,4], Quetta:[1,2], Hyderabad:[1,2], Sialkot:[1,2] },
  FBL:       { Karachi:[4,7], Lahore:[4,8], Islamabad:[3,6], Rawalpindi:[2,5], Faisalabad:[2,4], Multan:[2,3], Peshawar:[1,3], Quetta:[1,2], Hyderabad:[1,2], Sialkot:[1,2] },
  JSBL:      { Karachi:[3,6], Lahore:[3,6], Islamabad:[3,5], Rawalpindi:[2,4], Faisalabad:[2,4], Multan:[1,3], Peshawar:[1,2], Quetta:[1,2], Hyderabad:[1,2], Sialkot:[1,2] },
  SNBL:      { Karachi:[3,5], Lahore:[3,6], Islamabad:[2,4], Rawalpindi:[2,4], Faisalabad:[2,3], Multan:[1,3], Peshawar:[1,2], Quetta:[1,1], Hyderabad:[1,2], Sialkot:[1,2] },
  HMB:       { Karachi:[4,7], Lahore:[3,5], Islamabad:[2,4], Rawalpindi:[2,3], Faisalabad:[1,3], Multan:[1,2], Peshawar:[1,2], Quetta:[1,1], Hyderabad:[1,2], Sialkot:[1,1] },
  SAMBA:     { Karachi:[2,4], Lahore:[2,4], Islamabad:[2,3], Rawalpindi:[1,2], Faisalabad:[1,2], Multan:[1,1], Peshawar:[1,1], Quetta:[1,1], Hyderabad:[1,1], Sialkot:[1,1] },
  SCB:       { Karachi:[4,8], Lahore:[3,6], Islamabad:[3,6], Rawalpindi:[2,4], Faisalabad:[1,3], Multan:[1,2], Peshawar:[1,2], Quetta:[1,1], Hyderabad:[1,2], Sialkot:[1,1] },
  BML:       { Karachi:[3,5], Lahore:[2,4], Islamabad:[2,4], Rawalpindi:[2,3], Faisalabad:[1,3], Multan:[1,2], Peshawar:[1,2], Quetta:[1,1], Hyderabad:[1,1], Sialkot:[1,1] },
  AIBP:      { Karachi:[3,5], Lahore:[2,4], Islamabad:[2,3], Rawalpindi:[1,3], Faisalabad:[1,2], Multan:[1,2], Peshawar:[1,2], Quetta:[1,1], Hyderabad:[1,1], Sialkot:[1,1] },
  BIPL:      { Karachi:[3,5], Lahore:[3,5], Islamabad:[2,4], Rawalpindi:[2,3], Faisalabad:[2,3], Multan:[1,2], Peshawar:[1,2], Quetta:[1,1], Hyderabad:[1,2], Sialkot:[1,1] },
  DIBP:      { Karachi:[3,5], Lahore:[2,4], Islamabad:[2,3], Rawalpindi:[1,2], Faisalabad:[1,2], Multan:[1,1], Peshawar:[1,1], Quetta:[1,1], Hyderabad:[1,1], Sialkot:[1,1] },
  MCBI:      { Karachi:[2,4], Lahore:[2,4], Islamabad:[2,3], Rawalpindi:[1,2], Faisalabad:[1,2], Multan:[1,1], Peshawar:[1,1], Quetta:[1,1], Hyderabad:[1,1], Sialkot:[1,1] },
  PPCBL:     { Karachi:[1,2], Lahore:[2,3], Islamabad:[1,2], Rawalpindi:[1,2], Faisalabad:[2,3], Multan:[1,2], Peshawar:[1,1], Quetta:[1,1], Hyderabad:[1,1], Sialkot:[1,2] },
  ZTBL:      { Karachi:[1,2], Lahore:[2,3], Islamabad:[1,2], Rawalpindi:[1,2], Faisalabad:[2,3], Multan:[2,3], Peshawar:[1,2], Quetta:[1,2], Hyderabad:[1,2], Sialkot:[1,2] },
  FWBL:      { Karachi:[2,3], Lahore:[2,3], Islamabad:[2,3], Rawalpindi:[1,2], Faisalabad:[1,2], Multan:[1,1], Peshawar:[1,1], Quetta:[1,1], Hyderabad:[1,1], Sialkot:[1,1] },
  BOK:       { Karachi:[1,2], Lahore:[1,2], Islamabad:[2,3], Rawalpindi:[1,2], Faisalabad:[1,1], Multan:[1,1], Peshawar:[4,7], Quetta:[1,1], Hyderabad:[1,1], Sialkot:[1,1] },
  BOP:       { Karachi:[2,4], Lahore:[5,10], Islamabad:[3,5], Rawalpindi:[3,5], Faisalabad:[3,5], Multan:[2,4], Peshawar:[1,2], Quetta:[1,2], Hyderabad:[1,2], Sialkot:[2,3] },
  "Sindh Bank":{ Karachi:[4,7], Lahore:[1,2], Islamabad:[1,2], Rawalpindi:[1,2], Faisalabad:[1,1], Multan:[1,1], Peshawar:[1,1], Quetta:[1,1], Hyderabad:[2,3], Sialkot:[1,1] },
  Citi:      { Karachi:[2,4], Lahore:[2,3], Islamabad:[2,3], Rawalpindi:[1,2], Faisalabad:[1,2], Multan:[1,1], Peshawar:[1,1], Quetta:[1,1], Hyderabad:[1,1], Sialkot:[1,1] },
  DB:        { Karachi:[2,3], Lahore:[1,2], Islamabad:[2,2], Rawalpindi:[1,1], Faisalabad:[1,1], Multan:[1,1], Peshawar:[1,1], Quetta:[1,1], Hyderabad:[1,1], Sialkot:[1,1] },
  ICBC:      { Karachi:[1,2], Lahore:[1,2], Islamabad:[2,3], Rawalpindi:[1,1], Faisalabad:[1,1], Multan:[1,1], Peshawar:[1,1], Quetta:[1,1], Hyderabad:[1,1], Sialkot:[1,1] },
  BOC:       { Karachi:[1,2], Lahore:[1,2], Islamabad:[2,3], Rawalpindi:[1,1], Faisalabad:[1,1], Multan:[1,1], Peshawar:[1,1], Quetta:[1,1], Hyderabad:[1,1], Sialkot:[1,1] },
  Easypaisa: { Karachi:[4,12], Lahore:[4,11], Islamabad:[3,9], Rawalpindi:[2,7], Faisalabad:[2,8], Multan:[2,6], Peshawar:[2,6], Quetta:[1,4], Hyderabad:[2,5], Sialkot:[1,4] },
  Mashreq:   { Karachi:[2,5], Lahore:[2,4], Islamabad:[2,4], Rawalpindi:[1,3], Faisalabad:[1,3], Multan:[1,2], Peshawar:[1,2], Quetta:[1,2], Hyderabad:[1,2], Sialkot:[1,2] },
  Raqami:    { Karachi:[2,6], Lahore:[2,5], Islamabad:[2,5], Rawalpindi:[1,3], Faisalabad:[1,4], Multan:[1,3], Peshawar:[1,3], Quetta:[1,2], Hyderabad:[1,3], Sialkot:[1,2] },
};

// Cache generated data
const _cache = {};

export function getBranchData(bankShort, cityName) {
  const cacheKey = `${bankShort}|${cityName}`;
  if (_cache[cacheKey]) return _cache[cacheKey];

  const config = BANK_CITY_CONFIG[bankShort];
  if (!config || !config[cityName]) return { branches: [], atms: [] };

  const [branchCount, atmCount] = config[cityName];
  const result = {
    branches: seed(bankShort, cityName, "branch", branchCount),
    atms: seed(bankShort, cityName, "atm", atmCount),
  };
  _cache[cacheKey] = result;
  return result;
}

export function getCityCenter(cityName) {
  return PAKISTAN_CITIES[cityName] || PAKISTAN_CITIES.Karachi;
}
"use client"
import React from "react";
import { useLinkStore1, useLinkStore2 } from "@/store/store";

type Item = {
  productName: string;
  productUrl: string;
};

type DetectionProps = {};

const items: Item[] = [
  { productName: 'NightStand Light', productUrl: 'https://shorturl.at/ZmgEy' },
  { productName: 'Lamp', productUrl: 'https://shorturl.at/Uhj5G' },
  { productName: 'Iphone', productUrl: 'https://shorturl.at/GMxFC' },
  { productName: 'MacBook Air M2', productUrl: 'https://shorturl.at/XG7yo' },
  { productName: 'Casio watch', productUrl: 'https://shorturl.at/O3spD' },
  { productName: 'White Shirt', productUrl: 'https://t.ly/9C0Zv' },
  { productName: 'Noice Watch', productUrl: 'https://shorturl.at/ojHix' },
  { productName: 'Black Shirt', productUrl: 'https://shorturl.at/rFmwL' },
  { productName: 'AsianShoes', productUrl: 'https://shorturl.at/8ebkr' },
  { productName: 'Boat Watch', productUrl: 'https://shorturl.at/pMpoG' },
  { productName: 'FireBolt Watch', productUrl: 'https://shorturl.at/PKvjg' },
  { productName: 'Black Cup', productUrl: 'https://rb.gy/hb29pd' },
];

const AmanData = {
  "Black Trousers": [
    "https://rb.gy/tqvljv",
    "https://rb.gy/ga5ipi",
    "https://shorturl.at/tEtw1",
    "https://shorturl.at/dEXGh"
  ],
  "White Shirts": [
    "https://shorturl.at/QgOxX",
    "https://shorturl.at/hGcY8"
  ],
  "Black FormalShoes": [
    "https://shorturl.at/jDMxU",
    "https://shorturl.at/41ZLt"
  ],
  "Black Shirt": [
    "https://shorturl.at/Elka7",
    "https://shorturl.at/j2bqh",
    "https://shorturl.at/9UVq0",
    "https://shorturl.at/LsNLv"
  ]
};

const Detection: React.FC<DetectionProps> = () => {
  const names1 = useLinkStore1((state) => state.names);
  const names2 = useLinkStore2((state) => state.names);

  const findItemByName = (name: string): Item | undefined => {
    let foundItem = items.find(item => item.productName.toLowerCase() === name.toLowerCase());

    if (!foundItem) {
      foundItem = items.find(item => item.productName.toLowerCase().split(' ')[0] === name.toLowerCase());
    }

    return foundItem;
  };

  const findAmanDataByName = (name: string): string[] | undefined => {
    // First, attempt to find an exact match
    let foundItems = AmanData[name];

    // If no exact match, try to find by the first word of the name
    if (!foundItems) {
      const firstName = name.split(' ')[0]; // Get the first word of the name
      foundItems = AmanData[firstName];
    }

    return foundItems;
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Left side for useLinkStore1 content */}
      <div>
        <h1 className="text-xl font-semibold">X-RAY result</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {names1.map((item, index) => {
            const foundItem = findItemByName(item.name);

            return (
              <div key={index} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
                {foundItem ? (
                  <>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{index + 1}. {foundItem.productName}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {/* Assuming item.typeLink is string */}
                      <img src={item.typeLink} alt={foundItem.productName} style={{ maxWidth: '100px', height: 'auto', marginRight: '10px', borderRadius: '4px' }} />
                      <a href={foundItem.productUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>{foundItem.productUrl}</a>
                    </div>
                  </>
                ) : (
                  <p style={{ fontWeight: 'bold', color: '#ff0000' }}>No match found for "{item.name}"</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right side for useLinkStore2 content */}
      <div>
        <h1 className="text-xl font-bold">Recommendation Engine Result</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {names2.map((item, index) => {
            const foundItems = findAmanDataByName(item.name);

            return (
              <div key={index} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
                {foundItems ? (
                  <>
                    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{index + 1}. {item.name}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                      {foundItems.map((url, idx) => (
                        <a key={idx} href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>{url}</a>
                      ))}
                    </div>
                  </>
                ) : (
                  <p style={{ fontWeight: 'bold', color: '#ff0000' }}>No match found for "{item.name}"</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detection;

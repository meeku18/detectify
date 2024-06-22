// Import necessary modules and types
"use client"
import React from 'react';
import useLinkStore from "@/store/store";

// Define types for item and names
type Item = {
    productName: string;
    productUrl: string;
};

type DetectionProps = {
    // Define props here if any
};

// Sample items array with product details
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

// Define the Detection component as a functional component
const Detection: React.FC<DetectionProps> = () => {
    // State hook to fetch names from store
    const names = useLinkStore((state) => state.names);

    // Function to find item in items array by productName or first name
    const findItemByName = (name: string): Item | undefined => {
        // First, try to find by exact productName
        let foundItem = items.find(item => item.productName.toLowerCase() === name.toLowerCase());
        
        // If not found, try to find by matching the first name of productName
        if (!foundItem) {
            foundItem = items.find(item => item.productName.toLowerCase().split(' ')[0] === name.toLowerCase());
        }

        return foundItem;
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            {names.map((item, index) => {
                // Find corresponding item in items array
                const foundItem = findItemByName(item.name);

                if (foundItem) {
                    // Generate serial number based on index
                    const serialNumber = index + 1;

                    return (
                        <div key={index} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
                            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{serialNumber}. {foundItem.productName}</p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={item.typeLink} alt={foundItem.productName} style={{ maxWidth: '100px', height: 'auto', marginRight: '10px', borderRadius: '4px' }} />
                                <a href={foundItem.productUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>{foundItem.productUrl}</a>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div key={index} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
                            <p style={{ fontWeight: 'bold', color: '#ff0000' }}>No match found for "{item.name}"</p>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default Detection;

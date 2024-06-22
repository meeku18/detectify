export default function Work() {
  return (
    <div className="m-6 pb-24">
      <div className="bg-secondary p-6 rounded-md shadow-lg space-y-6">
        <h1 className="font-bold text-2xl text-center mb-4">DETECTIFY</h1>
        <p>
          Enhance shopping using visual AI for better product search,
          recommendations, and item identification in text, images, and videos.
          Implement image recognition and extend Amazon Prime Video's X-ray
          feature for direct purchases from videos. Aim for a seamless,
          personalized shopping experience.
        </p>
        
        <h2 className="font-bold text-xl mt-6">
          Building an Object Detection Model with Ultralytics YOLO and Roboflow
        </h2>
        <p>
          Object detection is a critical task in computer vision that involves
          identifying and locating objects within an image. One of the leading
          frameworks for object detection is the YOLO (You Only Look Once)
          family, developed by Ultralytics. Combined with Roboflow, a powerful
          tool for managing and augmenting datasets, you can build an efficient
          and effective object detection model. This guide will walk you through
          the process.
        </p>

        <div className="space-y-2">
          <h3 className="font-bold">Current Limitations:</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Difficulty in identifying and purchasing products featured in video content.</li>
            <li>Lack of seamless integration between video content and e-commerce platforms.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Customer Pain Points:</h3>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Fragmented Experience:</strong> Inconvenience of switching between video content and shopping platforms.</li>
            <li><strong>Lack of Personalization & Missed Opportunities:</strong> Lost chances for spontaneous purchases due to the absence of direct purchase options.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold">Objective:</h3>
          <p>Develop an enhanced shopping experience by leveraging visual AI technology to improve product search, recommendations, and item identification.</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-bold">Personalized Recommendations:</h4>
            <p>Analyze user browsing and purchasing behavior to offer personalized product recommendations. Use collaborative filtering and content-based filtering techniques enhanced with visual AI.</p>
          </div>
          <div>
            <h4 className="font-bold">Enhanced X-ray Feature:</h4>
            <p>Extend the concept of Amazon Prime Video's X-ray feature to identify products in video content. Allow users to click on items within a video to get detailed information and purchase options.</p>
          </div>
          <div>
            <h4 className="font-bold">Visual Product Search:</h4>
            <p>Implement image recognition to allow users to search for products using images. Use machine learning models to match user-uploaded images with similar products in the inventory.</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="font-bold text-xl">Marketplace Domain Expansion</h2>
          <div>
            <h4 className="font-bold">Geographical Expansion:</h4>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Global Reach:</strong> Offer the enhanced X-ray feature in different countries, adapting to local languages, currencies, and shopping behaviors.</li>
              <li><strong>Local Retail Partnerships:</strong> Partner with local retailers in new regions to provide a wide range of products.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">New Product Categories:</h4>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Expand Offerings:</strong> Initially focus on certain products (e.g., fashion, electronics), then expand to categories like home goods, beauty products, and groceries.</li>
              <li><strong>Customization:</strong> Adapt product recognition capabilities for a wider variety of items.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Enhanced User Engagement:</h4>
            <ul className="list-disc list-inside ml-4">
              <li><strong>Interactive Features:</strong> Add features like reviews, ratings, and social sharing to enhance engagement.</li>
              <li><strong>Personalization:</strong> Use data analytics for personalized product recommendations based on viewing and purchasing history.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

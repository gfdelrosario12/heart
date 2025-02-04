"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const router = useRouter();
  const [buttonPosition, setButtonPosition] = useState({ top: '60%', left: '50%' });

  const handleRouteChange = () => {
    router.push('/screens/prompt'); // Update the route to match the folder structure
  };

  const generateRandomPosition = () => {
    const top = Math.random() * 80; // Keep within 80% to avoid overflow
    const left = Math.random() * 80; // Keep within 80% to avoid overflow
    return { top: `${top}%`, left: `${left}%` };
  };

  const handleMoveButton = () => {
    const newPosition = generateRandomPosition();
    setButtonPosition(newPosition);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light position-relative">
      <h1 className="mb-4 text-center text-primary font-weight-bold">Will You be My Valentine? 💕</h1>
      
      {/* Yes Button */}
      <button 
        onClick={handleRouteChange} 
        className="btn btn-primary btn-lg mb-4 rounded-pill" // Bootstrap classes for rounded button
      >
        Yes
      </button>

      {/* No Button */}
      <button
        onClick={handleMoveButton}
        className="btn btn-danger btn-lg position-absolute rounded-pill" // Bootstrap classes for rounded button
        style={{
          top: buttonPosition.top,
          left: buttonPosition.left,
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          transition: 'top 0.3s, left 0.3s', // Smooth transition for movement
        }}
      >
        No
      </button>
    </div>
  );
}
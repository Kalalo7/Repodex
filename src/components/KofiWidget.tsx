'use client';

import { useEffect } from 'react';

export default function KofiWidget() {
  useEffect(() => {
    // Load the Ko-fi script
    const script = document.createElement('script');
    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
    script.async = true;
    script.onload = () => {
      // Initialize the widget once the script is loaded
      // @ts-ignore - Ko-fi widget is not typed
      window.kofiWidgetOverlay.draw('kalalo7', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support Me',
        'floating-chat.donateButton.background-color': '#323842',
        'floating-chat.donateButton.text-color': '#fff'
      });
    };
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything visible
}
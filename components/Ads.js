'use client';

import { useEffect } from 'react';

const Ads = (props) => {
  const { id, display } = props;

  useEffect(() => {
    let adSlot1, adSlot2, anchorSlot;
    let refreshTimer;
    const refreshInterval = 30000; // 30 seconds

    const geoList = [
      'Melbourne, AU', 'Greater Manchester, UK', 'Texas, US', 'Bavaria, DE', 'Castilla-La Mancha, ES',
      'Ohio, US', 'California, US', 'Greater London, UK', 'Hauts-de-France, FR', 'Saxony-Anhalt, DE',
      // ... add more as needed
    ];

    const setupAds = () => {
      window.googletag = window.googletag || { cmd: [] };

      googletag.cmd.push(() => {
        const pubads = googletag.pubads();
        pubads.enableSingleRequest();
        pubads.setCentering(true);

        const randomLocation = geoList[Math.floor(Math.random() * geoList.length)];
        console.log('GEO:', randomLocation);
        pubads.setLocation(randomLocation);

        // Avoid redefining slots
        if (!window.__adsAlreadyDefined) {
          adSlot1 = googletag.defineSlot(
            '/6355419/Travel/Europe/France/Paris',
            [[300, 250], [320, 480], [250, 250], [300, 100], [336, 280]],
            'ad-slot-1'
          )?.addService(pubads);

          adSlot2 = googletag.defineSlot(
            '/6355419/Travel/Europe/France/Paris',
            [[300, 250], [320, 480], [250, 250], [300, 100], [336, 280]],
            'ad-slot-2'
          )?.addService(pubads);

          anchorSlot = googletag.defineOutOfPageSlot(
            '/6355419/Travel/Europe/France/Paris',
            googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR
          );
          if (anchorSlot) anchorSlot.addService(pubads);

          window.__adsAlreadyDefined = true;
          window.__adSlots = { adSlot1, adSlot2, anchorSlot };
        } else {
          ({ adSlot1, adSlot2, anchorSlot } = window.__adSlots);
        }

        pubads.addEventListener('slotRenderEnded', (event) => {
          const slotId = event.slot.getSlotElementId();
          if (event.isEmpty && document.getElementById(slotId)) {
            document.getElementById(slotId).parentElement.style.display = 'none';
          }
        });

        googletag.enableServices();

        try {
          if (document.getElementById('ad-slot-1')) googletag.display('ad-slot-1');
          if (document.getElementById('ad-slot-2')) googletag.display('ad-slot-2');
          if (anchorSlot) googletag.display(anchorSlot);
        } catch (e) {
          console.error('Error displaying ads:', e);
        }

        setupAdRefresh();
      });
    };

    const setupAdRefresh = () => {
      if (refreshTimer) clearInterval(refreshTimer);
      refreshTimer = setInterval(() => {
        try {
          const slots = [adSlot1, adSlot2].filter(Boolean);
          if (slots.length > 0) {
            googletag.cmd.push(() => {
              googletag.pubads().refresh(slots);
            });
          }
        } catch (err) {
          console.error('Error refreshing ads:', err);
          clearInterval(refreshTimer);
        }
      }, refreshInterval);
    };

    const loadGPTScript = () => {
      if (!window.googletag && !document.querySelector('script[src*="gpt.js"]')) {
        const gptScript = document.createElement('script');
        gptScript.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
        gptScript.async = true;
        gptScript.onload = setupAds;
        document.head.appendChild(gptScript);
      } else {
        setupAds();
      }
    };

    loadGPTScript();

    return () => {
      if (refreshTimer) clearInterval(refreshTimer);
    };
  }, []);

  const adStyle = display
    ? { position: 'fixed', width: '100%', bottom: 0 }
    : { minHeight: 250 };

  return (
    <>
      <div id={id} style={adStyle}></div>
    </>
  );
};

export default Ads;

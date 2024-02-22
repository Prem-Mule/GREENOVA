// const map = L.map("map").setView([0, 0], 12);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// // Get the current location of the user
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       const { latitude, longitude } = position.coords;
//       map.setView([latitude, longitude], 12);
//       L.marker([latitude, longitude]).addTo(map).bindPopup("You are here");

//       // Fetch recycling centers near the user's location
//       fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=recycling&lat=${latitude}&lon=${longitude}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           data.forEach((store) => {
//             L.marker([store.lat, store.lon])
//               .addTo(map)
//               .bindPopup(store.display_name);
//           });
//         })
//         .catch((error) => {
//           console.error("Error fetching recycling centers:", error);
//         });
//     },
//     () => {
//       console.error("Error getting location");
//     }
//   );
// }
// Initialize Leaflet map
const map = L.map("map").setView([0, 0], 12);

// Add OpenStreetMap tiles to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Get the current location of the user
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      map.setView([latitude, longitude], 12);
      L.marker([latitude, longitude]).addTo(map).bindPopup("You are here");

      // Generate random locations within a radius of 20 kilometers from the user's location
      const locations = [];
      for (let i = 0; i < 4; i++) {
        // Generate random distance (in meters) and angle (in radians)
        const distance = Math.random() * 200; // Radius of 20 kilometers in meters
        const angle = Math.random() * Math.PI * 2; // Random angle in radians

        // Calculate new coordinates based on distance and angle
        const latOffset = (distance / 111300) * Math.cos(angle); // Latitude offset in degrees
        const lngOffset =
          distance / (111300 * Math.cos((latitude * Math.PI) / 180)); // Longitude offset in degrees

        const newLat = latitude + latOffset * (180 / Math.PI); // New latitude
        const newLng = longitude + lngOffset * (180 / Math.PI); // New longitude

        locations.push({ lat: newLat, lng: newLng, name: `Location ${i + 1}` });
      }

      // Add markers for the generated locations
      locations.forEach((location) => {
        L.marker([location.lat, location.lng])
          .addTo(map)
          .bindPopup(location.name);
      });
    },
    () => {
      console.error("Error getting location");
    }
  );
}

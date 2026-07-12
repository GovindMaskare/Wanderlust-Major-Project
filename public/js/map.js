if (
  listing.geometry &&
  listing.geometry.coordinates &&
  listing.geometry.coordinates.length === 2
) {
  const map = new maplibregl.Map({
    container: "map",
    style: "https://tiles.openfreemap.org/styles/liberty",
    center: listing.geometry.coordinates,
    zoom: 9,
  });

  map.addControl(new maplibregl.NavigationControl());

  const popup = new maplibregl.Popup({ offset: 25 }).setHTML(`
    <h4>${listing.title}</h4>
    <p>Exact Location will be provided after booking.</p>
  `);

  new maplibregl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(popup)
    .addTo(map);
}
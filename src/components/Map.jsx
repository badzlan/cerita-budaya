import { useRouter } from "next/router";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/ghapsara/indonesia-atlas/refs/heads/master/provinsi/provinces-simplified-topo.json";

export default function Map({ cerita }) {
   const router = useRouter();

   const provinceStories = cerita.reduce((acc, item) => {
      acc[item.region] = item.slug;
      return acc;
   }, {});

   const markers = cerita.map((item) => ({
      markerOffset: -30,
      name: item.title.split(":")[0],
      coordinates: [item.location.lng, item.location.lat],
      slug: item.slug,
   }));

   return (
      <div className="w-full flex justify-center">
         <ComposableMap
            projection="geoMercator"
            projectionConfig={{
               center: [118, -2],
               scale: 1000,
            }}
            width={800}
            height={500}
         >
            <Geographies geography={geoUrl}>
               {({ geographies }) =>
                  geographies.map((geo) => {
                     const provName = geo.properties.provinsi;
                     const slug = provinceStories[provName];
                     const hasStory = Boolean(slug);

                     return (
                        <Geography
                           key={geo.rsmKey}
                           geography={geo}
                           fill={hasStory ? "#F1C28B" : "#EAEAEC"}
                           stroke="#D6D6DA"
                           style={{
                              default: { outline: "none" },
                              hover: {
                                 fill: hasStory ? "#D98E43" : "#D6D6DA",
                                 outline: "none",
                                 cursor: hasStory ? "pointer" : "default",
                              },
                           }}
                           onClick={() => {
                              if (slug) router.push(`/cerita/${slug}`);
                           }}
                        />
                     );
                  })
               }
            </Geographies>

            {markers.map(({ name, coordinates, markerOffset, slug }) => (
               <Marker key={name} coordinates={coordinates} onClick={() => router.push(`/cerita/${slug}`)}>
                  <g fill="none" stroke="#4F200D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(-12, -24)" className="cursor-pointer hover:stroke-[#D98E43]">
                     <circle cx="12" cy="10" r="3" />
                     <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                  <text
                     textAnchor="middle"
                     y={markerOffset}
                     className="cursor-pointer"
                     style={{
                        fontFamily: "system-ui",
                        fill: "#111827",
                        fontSize: "12px",
                        fontWeight: "600",
                     }}
                  >
                     {name}
                  </text>
               </Marker>
            ))}
         </ComposableMap>
      </div>
   );
}

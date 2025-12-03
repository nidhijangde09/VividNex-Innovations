import React, { useState } from 'react';
import './AccordionSection.css';

const accordionData = [
  { title: "Africa", content: "VividNex has multiple offices across Africa. In Mauritius, we are located at 1 Cybercity - Ebene, Tower B & C, One Exchange Square, Wall Street, Ebene (72201) with phone +2304044500; at Nexteracom Tower II, Ebene Cybercity (+2304025300); at Nex Tower, Rue du Savoir, Ebene Cybercity (+2304021701); and at Shri Atal Bihari Vajpayee Tower, Cyber Tower 1, Ebene Cyber City, Quatre Bornes (+2304045760). In Morocco, our Casablanca office is at Casanearshore (Sidi Maarouf), Shore 10, Park 1100 – Bd. Al Qods, Sidi Maarouf, Casablanca-Settat (20100) with phone +212522461950. In South Africa, we are present in Cape Town at Convention Towers, C/o Heerengracht and Coen Steytler, Foreshore (8001) with phone +27214081300, and in Johannesburg at Building No 3, Waterfall Corporate Campus, 74 Waterfall Drive, Waterval City (1685) with phone +27112083000." }, 
  
  { title: "Asia Pacific", content: "VividNex Innovations has a strong presence across the Asia Pacific region. In Australia, our offices are located in Adelaide (121 King William Street, SA 5000, +61881311000), Ballarat (11 University Dr, Mount Helen VIC 3350, +61398387012), Brisbane (Level 30, 10 Eagle Street, QLD 4000, +61731174000), Canberra (65 Canberra Avenue, Griffith, ACT 2603, +61262173000), Melbourne (Level 5, 161 Collins Street, VIC 3000, +61398387000), Perth (Exchange Tower, 2 The Esplanade, WA 6000, +61862165800), and Sydney (International House, 3 Sussex Street, Barangaroo, NSW 2000, +61290055000).In Greater China, we have multiple offices, including Beijing (World Financial Center, Chaoyang District, +861085958700), Chengdu (High-tech Zone, +862865555000), Dalian (Huangpu Road, +8641162148888), Guangzhou (Tianhebei Road and M Plaza, +862038183333), Hangzhou (Qianmo Road, +8657128834534), Hong Kong SAR (Quarry Bay, +85222492388), Shanghai (Huaqing Building, Central Plaza, Tsidi Building, and Zhao Feng Plaza, +862161425555), Shenzhen (Hon Kwok Center and Innovation Hub, +8675582705268), and Taipei (Far Eastern Plaza, +886287220151).Our India operations span major cities, including Ahmedabad (Venus Stratum, +912240443934), Bengaluru (multiple campuses in Bellandur, Doddanekundi, and Whitefield, +918069541600), Bhubaneswar (Shakti Bhawan, +916743515367), Chennai (Sholinganallur, Perungalathur, and Pallavaram, +914471781000), Coimbatore (Tidel Park and Saravanampatti, +914226910000), Gurugram (Cyber City and Dundahera, +911246733800), Hyderabad (HITEC City, Nanakramguda, and WaveRock Building, +914066926000), Indore (Brilliant Sapphire, +917316832348), Jaipur (Tonk Road and Sitapura, +911416666400), Kolkata (Rajarhat, +913344078000), Mumbai (Vikhroli, Lower Parel, and Airoli, +912261942300), Nagpur (VIPL I Park, +917428591300), Navi Mumbai (Airoli Knowledge Park, +912250952093), New Delhi (Worldmark3, +911140341300), Noida (Sectors 135 and 62, +911206620400), Pune (Magarpatta City and Hinjewadi, +912071477100), Thiruvananthapuram (Technopark Phase III, +912262250289), and Trichy (Annamalai Nagar, +914316912000).In Indonesia, we operate in Jakarta (Wisma 46 Kota BNI, +62215746575) and Semarang (Menara Suara Merdeka, +622486003212). In Japan, our locations include Tokyo (Akasaka Intercity, Akasaka AIR, and Innovation Hub, +81335883000), Fukushima, Hokkaido, Fukuoka, Kumamoto, Osaka, and Yokohama, serving clients across the country with innovation centers and intelligent operations hubs.In Malaysia, we are based in Kuala Lumpur (Bangsar South City, UOA Corporate Tower, and Tun Razak Exchange, +60327782300), Petaling Jaya (Kelana Parkview Tower, +60378064618), Kuching (Crown Towers, +6082553007), and Selangor (Cyberjaya, Plaza 33, Sunway Geo Tower, and The Pinnacle, +60376806400).In New Zealand, our offices are located in Auckland (131 Queen Street, +6493511600) and Wellington (Harbour Tower, +6444666000).In the Philippines, we have offices in Cebu City (Capitol Site, IT Park, and Filinvest Towers, +63322681000), Ilocos Norte (+63287029100), Manila (Uptown Tower 3, +63285805888), Muntinlupa (Axis Tower One, +63285805888), and Quezon City (Gateway 2, +63285805888).In Singapore, our main office and Innovation Hub are both located in Raffles City Tower, 250 North Bridge Road (+6564108000).In Thailand, we operate in Bangkok at 26 Sathorn Prime Building, FYI Center, and The ParQ Building (+6626361616).In Vietnam, our office is located in Ho Chi Minh City (Viettel Complex Building, 285 Cach Mang Thang Tam Street, +84962016482)."},
 
  { title: "Middle East", content: "In the Middle East, Accenture has established a strong presence with offices across several key countries. In Israel, the company operates from Atirei Yeda, Building 15 in Kfar Saba, and from the Tel Aviv Cyber Fusion Center located on Ha-Menofim Street. In Qatar, Accenture’s office is situated in Workinton, Burj Alfardan, within the Marina District of Lusail. In Saudi Arabia, there are offices in Al Khobar Gate Tower on King Abdulaziz Road, as well as in Riyadh, where operations are based in the Business Gate Complex on Airport Road and at the King Abdullah Financial District on King Fahd Road. In the United Arab Emirates, Accenture has offices in Abu Dhabi, located at Al Sila Tower in the Abu Dhabi Global Market Square on Al Maryah Island, and in Dubai, at Arenco Tower on Sheikh Zayed Road." },
 
  { title: "North America", content: "VividNex has a broad presence across North America, with offices in Canada, Mexico, Puerto Rico, and the United States. In Canada, you’ll find us in Calgary, Fredericton, Mississauga, Montreal, Ottawa, Regina, St. Catharines, Toronto (Canada Innovation Hub), Vancouver, Victoria, and Winnipeg. In Mexico, we are located in Mexico City, Monterrey, and Querétaro; in Puerto Rico, our office is in Guaynabo. In the U.S., our hubs span coast to coast, including key locations such as Scottsdale, Los Angeles, San Francisco, Seattle, Austin, Houston, Dallas, Boston, New York, Chicago, Atlanta, Washington D.C., Denver, Orlando, Philadelphia, and many more to serve our clients efficiently across the continent." },
 
  { title: "South America", content: "VividNex has a growing presence across South America, with offices strategically located in Argentina, Brazil, Chile, and Colombia to support regional innovation and client collaboration. In Argentina, our offices operate in Buenos Aires, Córdoba, and Rosario, serving as key hubs for technology and consulting. In Brazil, we’re located in major cities including São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Recife, Fortaleza, Nova Lima, Florianopolis, Barueri, Campina Grande, and Vitória—each driving transformation across industries. Our Santiago office in Chile serves as a central base for Southern Cone operations, while in Colombia, our teams in Bogotá, Medellín, and Barranquilla deliver cutting-edge digital and business solutions to clients throughout Latin America." },
 

];

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-section">
      <h2>What you can do</h2>
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => toggle(index)}>
            <span>{item.title}</span>
            <span className="accordion-icon">{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;

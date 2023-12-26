import React from "react";
import Schema from "../Home/Schema/Schema";
import "./schema_display.css";

const DummyData = [
  {
    name: "smart-cities-mission-portal-ministry-urban-development",
    description: "Smart Cities Mission Portal by Ministry of Urban Development",
    imgurl:
      "https://scontent.famd6-1.fna.fbcdn.net/v/t1.6435-9/67951345_100990414592038_1777695824331931648_n.png?_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_ohc=IWV1wf9VzAoAX8KHnTy&_nc_ht=scontent.famd6-1.fna&oh=00_AfDYnJLEJstNE0EDISNHV7RzMHlbA5WOgXC_FMAwv6ss5g&oe=6545BF40",
  },
  {
    name: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    description: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    imgurl:
      "https://i0.wp.com/financebuddha.com/blog/wp-content/uploads/2020/07/Top-Government-Start-up-Schemes-In-India.png?resize=945%2C532&ssl=1",
  },
  {
    name: "New Millennium Indian Technology Leadership Initiative by CSIR",
    description:
      "New Millennium Indian Technology Leadership Initiative by CSIR",
    imgurl:
      "https://gumlet.assettype.com/theceo%2Fimport%2F2020%2F06%2Fgovt-schemes.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0",
  },
  {
    name: "Information on  Schemes petrochemical by the Department of Chemical and Petrochemica",
    description:
      "Information on  Schemes petrochemical by the Department of Chemical and Petrochemica",
    imgurl:
      "https://i0.wp.com/financebuddha.com/blog/wp-content/uploads/2020/07/Top-Government-Start-up-Schemes-In-India.png?resize=945%2C532&ssl=1",
  },
  {
    name: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    description: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    imgurl:
      "https://gumlet.assettype.com/theceo%2Fimport%2F2020%2F06%2Fgovt-schemes.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0",
  },
  {
    name: "smart-cities-mission-portal-ministry-urban-development",
    description: "Smart Cities Mission Portal by Ministry of Urban Development",
    imgurl:
      "https://gumlet.assettype.com/theceo%2Fimport%2F2020%2F06%2Fgovt-schemes.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0",
  },
  {
    name: "New Millennium Indian Technology Leadership Initiative by CSIR",
    description:
      "New Millennium Indian Technology Leadership Initiative by CSIR",
    imgurl:
      "https://scontent.famd6-1.fna.fbcdn.net/v/t1.6435-9/67951345_100990414592038_1777695824331931648_n.png?_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_ohc=IWV1wf9VzAoAX8KHnTy&_nc_ht=scontent.famd6-1.fna&oh=00_AfDYnJLEJstNE0EDISNHV7RzMHlbA5WOgXC_FMAwv6ss5g&oe=6545BF40",
  },
  {
    name: "smart-cities-mission-portal-ministry-urban-development",
    description: "Smart Cities Mission Portal by Ministry of Urban Development",
    imgurl:
      "https://scontent.famd6-1.fna.fbcdn.net/v/t1.6435-9/67951345_100990414592038_1777695824331931648_n.png?_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_ohc=IWV1wf9VzAoAX8KHnTy&_nc_ht=scontent.famd6-1.fna&oh=00_AfDYnJLEJstNE0EDISNHV7RzMHlbA5WOgXC_FMAwv6ss5g&oe=6545BF40",
  },
  {
    name: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    description: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    imgurl:
      "https://i0.wp.com/financebuddha.com/blog/wp-content/uploads/2020/07/Top-Government-Start-up-Schemes-In-India.png?resize=945%2C532&ssl=1",
  },
  {
    name: "New Millennium Indian Technology Leadership Initiative by CSIR",
    description:
      "New Millennium Indian Technology Leadership Initiative by CSIR",
    imgurl:
      "https://gumlet.assettype.com/theceo%2Fimport%2F2020%2F06%2Fgovt-schemes.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0",
  },
  {
    name: "Information on  Schemes petrochemical by the Department of Chemical and Petrochemica",
    description:
      "Information on  Schemes petrochemical by the Department of Chemical and Petrochemica",
    imgurl:
      "https://i0.wp.com/financebuddha.com/blog/wp-content/uploads/2020/07/Top-Government-Start-up-Schemes-In-India.png?resize=945%2C532&ssl=1",
  },
  {
    name: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    description: "Information on Rashtriya Madhyamik Shiksha Abhiyan",
    imgurl:
      "https://gumlet.assettype.com/theceo%2Fimport%2F2020%2F06%2Fgovt-schemes.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0",
  },
  {
    name: "smart-cities-mission-portal-ministry-urban-development",
    description: "Smart Cities Mission Portal by Ministry of Urban Development",
    imgurl:
      "https://gumlet.assettype.com/theceo%2Fimport%2F2020%2F06%2Fgovt-schemes.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0",
  },
  {
    name: "New Millennium Indian Technology Leadership Initiative by CSIR",
    description:
      "New Millennium Indian Technology Leadership Initiative by CSIR",
    imgurl:
      "https://scontent.famd6-1.fna.fbcdn.net/v/t1.6435-9/67951345_100990414592038_1777695824331931648_n.png?_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_ohc=IWV1wf9VzAoAX8KHnTy&_nc_ht=scontent.famd6-1.fna&oh=00_AfDYnJLEJstNE0EDISNHV7RzMHlbA5WOgXC_FMAwv6ss5g&oe=6545BF40",
  },
];

const Schema_Display = () => {
  return (
    <>
      <div className="SDcontainer">
        <h3 className="txt">Other Schema</h3>
        <div className="Schema_Wraper">
          {DummyData.map((item, index) => (
            <div key={index}>
              <div className="Schema">
                {/* <h2>{item.name ? item.name.slice(0, 35) + "..." : ""}</h2>
          <h2>
            {item.description ? item.description.slice(0, 55) + "..." : ""}
          </h2> */}
                <Schema
                  Title={item.name ? item.name.slice(0, 35) + "..." : ""}
                  imgUrl={item.imgurl}
                  text={
                    item.description
                      ? item.description.slice(0, 55) + "..."
                      : ""
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Schema_Display;

// smart-cities-mission-portal-ministry-urban-development
// Smart Cities Mission Portal by Ministry of Urban Development

// guidelines-integrated-development-commercial-floriculture-scheme
// Guidelines for Integrated Development of Commercial Floriculture Scheme

// social-defence-schemes-ministry-social-justice-and-empowerment
// Social defence schemes of Ministry of Social Justice and Empowerment

// schemes-and-programmes-differently-abled-ministry-social-justice-and-empowerment
// Schemes and programmes for differently abled by Ministry of Social Justice and Empowerment

// information-rashtriya-madhyamik-shiksha-abhiyan
// Information on Rashtriya Madhyamik Shiksha Abhiyan

// new-millennium-indian-technology-leadership-initiative-csir
// New Millennium Indian Technology Leadership Initiative by CSIR

// information-tax-holiday-scheme-micro-small-medium-enterprises-development-commissioner
// Information on tax holiday scheme by Micro, Small &amp; Medium Enterprises Development Commissioner

// information-schemes-students-madhya-pradesh
// Information on schemes for students in Madhya Pradesh

// paryavaran-vahini-scheme-ministry-environment-and-forests
// Paryavaran Vahini Scheme by Ministry of Environment and Forests

// information-schemes-department-education-gujarat
// Information on schemes by Department of Education of Gujarat

// information-schemes-petrochemical-department-chemical-and-petrochemical
//  Information on  Schemes petrochemical by the Department of Chemical and Petrochemical

// website-ministry-health-family-welfare
// Website of Ministry of Health &amp; Family Welfare

// information-biomass-gasifier-scheme-ministry-new-and-renewable-energy
// Information on   Biomass Gasifier scheme by  The Ministry of New and Renewable Energy

// information-indira-awaas-yojana
// Information on Indira Awaas Yojana

// information-vocational-training-centers-tribal-areas
// Information on  Vocational training centers in tribal areas

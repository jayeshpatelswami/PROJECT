import React from "react";
import Schema from "../Home/Schema/Schema";
import "./ParticularScema_Display.css";

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
      "https://gumlet.assettype.com/theceo%2Fimport%2F2020%2F06%2Fgovt-schemes.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0",
  },
  {
    name: "smart-cities-mission-portal-ministry-urban-development",
    description: "Smart Cities Mission Portal by Ministry of Urban Development",
    imgurl:
      "https://gumlet.assettype.com/theceo%2Fimport%2F2020%2F06%2Fgovt-schemes.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0",
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
    name: "smart-cities-mission-portal-ministry-urban-development",
    description: "Smart Cities Mission Portal by Ministry of Urban Development",
    imgurl:
      "https://gumlet.assettype.com/theceo%2Fimport%2F2020%2F06%2Fgovt-schemes.jpg?auto=format%2Ccompress&fit=max&w=768&dpr=1.0",
  },
];

const ParticularScema_Display = () => {
  return (
    <>
      <h3 className="txt">Schema For Farmer</h3>
      <div className=" PSDContainer">
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
                  item.description ? item.description.slice(0, 55) + "..." : ""
                }
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ParticularScema_Display;

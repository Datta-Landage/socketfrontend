import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("https://test.hipal.life");
import axios from "axios";

export default function MyComponent() {
  const [data, setData] = useState({});

  const handleSend = () => {
    socket.emit("businessId", {
      tableId: "0000",
      businessId: "9999",
      userId: "5455 ",
      hiCode: "3333",
      cart: {
        "63c79af83cb5dc11d8f53574": {
          dishData: {
            delayTime: null,
            businessId: "63c0f3e4ee03bd948ba6522a",
            name: "Mutton Soup",
            price: 350,
            dishType: "Non veg",
            categories: [
              {
                id: "63da1d24311e85f001f8bb58",
                name: "Soups & Salads",
              },
              {
                id: "63db8198311e85f001f8c0eb",
                name: "Our Favorites ",
              },
              {
                id: "641d9a9d311e85f001f93fe2",
                name: "Specials ",
              },
            ],
            portions: [],
            extras: [
              {
                numOptions: 0,
                numSelections: 0,
                compulsory: 0,
                items: [],
              },
            ],
            filters: {
              timeToConsume: "",
              portionBestSuited: "",
              levelOfSpice: "",
              bestOccasion: "",
              texture: "",
              time: "",
              bestWeather: "",
              dishes: [],
            },
            images: [
              "https://storage.hipal.life/minio/assets/4200f06b-bf17-4764-83d8-00f7d07f4f56.jpeg",
              "https://storage.hipal.life/minio/assets/b3f761a3-794c-4078-a0a0-70d016e15ee0.jpeg",
              "https://storage.hipal.life/minio/assets/be5ebf07-7745-4a86-9645-4834d7e7b283.jpeg",
              "https://storage.hipal.life/minio/assets/a2d55b44-001c-42d1-b532-e32de5b7b954.jpeg",
              "https://storage.hipal.life/minio/assets/b6bd0543-0672-46b9-b03c-c3629dedbd43.jpeg",
            ],
            description:
              "Slow cooked mutton bone marrow soup served with bread sticks.",
            tags: [],
            links: [],
            version: 5,
            visibility: true,
            availability: true,
            id: "63c79af83cb5dc11d8f53574",
          },
          dishId: "63c79af83cb5dc11d8f53574",
          variants: [],
          userDetails: {
            name: "suhas",
            email: "string",
            phone: "string",
            role: "string",
            id: "string",
            userDiscription: "string",
          },
        },
      },
    });
  };

  useEffect(() => {
    // listen for the 'message' event
    socket.on("businessId", (data: any) => {
      console.log(data); // log the received data
      setData(data); // set the received data in state
    });
  }, []);

  return (
    <div>
      <button onClick={handleSend}>Send Object</button>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
}

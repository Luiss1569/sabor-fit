// import { getApiCustomersFeedbacks} from "@/services/api";
// import Item from "./item";
// import Title from "@components/Title"
// import { useState } from "react";

// async function getCustomerFeedbacks() {
//     const customerFeedback = await getApiCustomersFeedbacks();
  
//     return customerFeedback || [];
//   }

// export default async function Testemunhas() {
//     const customerFeedback = await getCustomerFeedbacks();
//     const [currentFeedback,setCurrentFeedback] = useState(0);
//     const changeFeedback = (newFeedback:number) => {
//         setCurrentFeedback(newFeedback);
//       };

//     return(
//         <section>
//             <Title label="Testemunhas">Consumidor Feliz</Title>
//             <div>
//                 <Item customerFeedback={customerFeedback[currentFeedback]}/>
//             </div>
//             <div>
//                 {customerFeedback.map((_,index)=>(
//                     <div key={index} className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${index===currentFeedback? 'bg-black':'bg-white'}`} onClick={()=>changeFeedback(index)}>
                        
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }
"use client"
import { useState, useEffect } from 'react';
import { getApiCustomersFeedbacks } from "@/services/api";
import Item from "./item";
import Title from "@components/Title";
import CustomerFeedback from "@/interfaces/customerFeedback";

export default function Testemunhas() {
  const [customerFeedback, setCustomerFeedback] = useState<CustomerFeedback[]>([]);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  useEffect(() => {
    const fetchCustomerFeedbacks = async () => {
      const data = await getApiCustomersFeedbacks();
      setCustomerFeedback(data || []);
    };

    fetchCustomerFeedbacks();
  }, []);

  const changeFeedback = (newFeedback: number) => {
    if (newFeedback >= 0 && newFeedback < customerFeedback.length) {
      console.log(newFeedback)
      setCurrentFeedback(newFeedback);
    }
  };
  

  console.log("customerFeedback:", customerFeedback);

  return (
    <section>
      <Title label="Testemunhas">Consumidor Feliz</Title>
      <div>
        {customerFeedback[currentFeedback] ? (
          <Item customerFeedback={customerFeedback[currentFeedback]} />
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
      <div>
        {customerFeedback.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${index === currentFeedback ? 'bg-black' : 'bg-blue-600'}`}
            onClick={() => changeFeedback(index)}
          />
        ))}
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";
import Item from "./item";
import Title from "@components/Title";
import CustomerFeedback from "@/interfaces/customerFeedback";

interface ComponentClientProps {
    data: CustomerFeedback[]; 
}

export default function ComponentClient({ data }: ComponentClientProps) {
  const [customerFeedback, setCustomerFeedback] = useState<CustomerFeedback[]>(
    data || []);
  const [currentFeedback, setCurrentFeedback] = useState(0);

  useEffect(() => {
    const fetchCustomerFeedbacks = async () => {
      setCustomerFeedback(data || []);
    };

    fetchCustomerFeedbacks();
  }, [data]);

  const changeFeedback = (newFeedback: number) => {
    if (newFeedback >= 0 && newFeedback < customerFeedback.length) {
      setCurrentFeedback(newFeedback);
    }
  };

  return (
    <section>
      <Title label="Testemunhas">Consumidor Feliz</Title>
      <div className=" bg-background-testemunhas md:bg-background-testemunhas-tela-grande bg-cover bg-center w-full p-5">
        <div className="flex flex-col gap-4">
          <div>
              <Item customerFeedback={customerFeedback[currentFeedback]} />  
          </div>
          <div className="flex justify-center gap-4">
            {customerFeedback.slice(0,5).map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  index === currentFeedback ? "bg-none border-2 border-white" : "bg-white"
                }`}
                onClick={() => changeFeedback(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { getApiCustomersFeedbacks } from "@/services/api";
import  CustomerFeedback  from "@/interfaces/customerFeedback";
import ComponentClient from "./clientComponent"

export default async function getCustomerFeedbacks() {
  let data
  const customerFeedback = await getApiCustomersFeedbacks();
  data =  customerFeedback || [];
  return(
    <section>
      <ComponentClient data = {data}></ComponentClient>
    </section>
  )
}


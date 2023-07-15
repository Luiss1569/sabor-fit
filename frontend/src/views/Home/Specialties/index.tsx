import { getApiSpecialties } from "@/services/api";
import Title from "@components/Title";
import Specialty from "./item";

async function getSpecialties() {
  const specialties = await getApiSpecialties();

  return specialties || [];
}

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <section className="bg-gray-200 p-10 flex flex-col justify-center lg:items-center relative lg:flex-row mt-20 ">
      <Title label="para você se apaixonar">Especialidades</Title>
      <div>
        {specialties.map((specialty) => (
          <div key={specialty.id}>
            <Specialty specialty={specialty} />
          </div>
        ))}
      </div>
    </section>
  );
}

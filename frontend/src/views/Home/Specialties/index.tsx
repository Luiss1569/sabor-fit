import { getApiSpecialties } from "@/services/api";
import Title from "@components/Title";
import Specialty from "./item";

export const revalidate = 60;

async function getSpecialties() {
  const specialties = await getApiSpecialties();

  return specialties || [];
}

export default async function Specialties() {
  const specialties = await getSpecialties();

  return (
    <section className="bg-gray-200 p-10 flex flex-col justify-center md:items-center relative mt-20 ">
      <Title label="para você se apaixonar">Especialidades</Title>
      <div>
        {specialties.map((specialty, index) => (
          <div key={specialty.id}>
            <Specialty specialty={specialty} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

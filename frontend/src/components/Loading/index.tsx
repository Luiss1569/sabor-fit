export default function LoadingComponent() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      <p className="text-gray-900 text-xl mt-5">Carregando...</p>
    </div>
  );
}

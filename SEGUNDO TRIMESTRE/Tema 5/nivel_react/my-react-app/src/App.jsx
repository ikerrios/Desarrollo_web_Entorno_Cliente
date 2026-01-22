export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className="
          w-full max-w-md rounded-2xl border bg-white p-4 shadow-sm
          sm:p-6
        "
      >
        <h1 className="text-xl font-bold sm:text-2xl">
          Tarjeta con Tailwind
        </h1>

        <p className="mt-2 text-sm opacity-80 sm:text-base">
          Descripción cortita para explicar de qué va la tarjeta. En móvil el texto
          se ve más pequeño y el padding es menor.
        </p>

        <button
          className="
            mt-4 w-full rounded-lg px-4 py-2 font-semibold text-white
            bg-blue-500 shadow-sm
            hover:bg-blue-600 hover:shadow-md hover:underline
            transition
          "
        >
          Suscribirme
        </button>
      </div>
    </div>
  )
}

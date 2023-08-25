export function Footer() {
  const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
  });

  return (
    <footer className="bg-white py-6 border-t">
      <div className="flex justify-center items-center">
        <div className="text-sm text-center max-w-screen-sm space-y-4">
          <p>
            Meu Blog - A constructive and inclusive social network for software
            developers. With you every step of your journey.
          </p>
          <p>&copy; {dateFormatter.format(new Date())} - Shindi Toyama.</p>
        </div>
      </div>
    </footer>
  );
}

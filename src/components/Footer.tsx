export function Footer() {
  const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
  });

  return (
    <footer className="bg-white py-6 border-t">
      <div className="flex justify-center items-center">
        <div className="text-sm text-center max-w-screen-sm space-y-4">
          <p>
            My Blog - Um blog minimalista desenvolvido com Next 13, TailwindCSS
            e Hygraph.
          </p>
          <p>&copy; {dateFormatter.format(new Date())} - Shindi Toyama.</p>
        </div>
      </div>
    </footer>
  );
}

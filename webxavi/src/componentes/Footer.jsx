function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="p-4 border-t-1 border-gray-200 bg-gray-50 relative z-10">
      <div className="container mx-auto text-center">
        <p>&copy; {year} Xavier Carrillo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

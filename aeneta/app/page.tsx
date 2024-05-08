function Home() {
  const subirPdf = async (e: any) => {
    e.preventDefault();
    console.log("Subir PDF");
  };

  return (
    <form>
      <label>Subir archivo PDF</label>
      <input type="file" />
      <button type="submit" className="border p-2 " onClick={subirPdf}>
        Subir
      </button>
    </form>
  );
}

export default Home;

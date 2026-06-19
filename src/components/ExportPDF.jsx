import { jsPDF } from "jspdf";

function ExportPDF({ total }) {

  const generatePDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text(
      "Carbon Footprint Report",
      20,
      20
    );

    doc.setFontSize(14);

    doc.text(
      `Total CO2 Emission: ${total.toFixed(2)} kg/month`,
      20,
      50
    );

    doc.text(
      "SDG 13: Climate Action",
      20,
      80
    );

    doc.text(
      "Thank you for contributing towards a sustainable future.",
      20,
      110
    );

    doc.save(
      "Carbon_Footprint_Report.pdf"
    );
  };

  return (
    <div className="max-w-lg mx-auto mt-8">

      <button
        onClick={generatePDF}
        className="w-full bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700"
      >
        Download PDF Report
      </button>

    </div>
  );
}

export default ExportPDF;
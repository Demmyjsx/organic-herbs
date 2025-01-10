import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const herbalData = [
    { id: 1, name: "Rosemary dry extract", ingredients: "Rosemarinic acid 2% to 98%" },
    { id: 2, name: "Milk thistle dry extract", ingredients: "Silymarin 80% by UV" },
    { id: 3, name: "Passion flower dry extract", ingredients: "Flavonoids 3% ~5%; 4: 1, 5: 1, 10: 1" },
    { id: 4, name: "Echinacea dry extract Extract", ingredients: "Cichoric acid 1%,2%,2.5%,4%" },
    { id: 5, name: "Acaiberry dry extract Extract", ingredients: "Anthocyanidins 15%, 25%, 40%" },
    { id: 6, name: "Blueberry dry extract", ingredients: "Anthocyanidins 5%~35%" },
    { id: 7, name: "Crondry Herbal Oil Extracts", ingredients: "With Herbs Super 75-KT2 \"1-deoxynojirimycin (DNJ) 1% to 30% by HPLC\"" },
    { id: 8, name: "Saw Palmetto dry Extract", ingredients: "Total Fatty Acids ≥25%; ≥45%" },
  ]
  
  export function HerbalTable() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-[#2E7D32] pl-4">
          IMPORTED HERBAL EXTRACTS
        </h2>
        <p className="text-gray-600 leading-relaxed">
          ORGANICOS HERBAL FARM, Indonesia is a leading manufacturer and supplier of herbal extract like Mulethi Extract, Sakhpuspi Extract, Morinda / Noni Extract, Alovera Extract, Shatavari Extract, Shikakai Extract, Chamomile Liquid Extract, Amla, Bacopa Extract, Caralluma Extract, Curcumin Extract, Gymnema Extract, Kalmegh Powder, Safed Musli.
        </p>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader className="bg-[#2E7D32] text-white">
              <TableRow>
                <TableHead className="text-white">S.N.</TableHead>
                <TableHead className="text-white">Product Name</TableHead>
                <TableHead className="text-white">Active Ingredients</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {herbalData.map((item, index) => (
                <TableRow key={item.id} className={index % 2 === 0 ? 'bg-green-50' : ''}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.ingredients}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
  
  
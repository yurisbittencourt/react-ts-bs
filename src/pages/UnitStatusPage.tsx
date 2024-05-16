import Layout from "../layout/Layout"
import TableComponent from "../components/TableComponent"

const tableData = {
  th: ["#", "First Name", "Last Name", "Username"],
  row1: ["1", "Alice", "Wonderland", "@awonder"],
  row2: ["2", "Bob", "Builder", "@bbuilder"],
  row3: ["3", "Charlie", "Chocolate", "@cchoc"],
  row4: ["4", "David", "Copperfield", "@dcopper"],
  row5: ["5", "Eve", "Apple", "@eapple"],
  row6: ["6", "Frank", "Ocean", "@focean"],
}

export default function UnitStatus() {
  return (
    <Layout>
      <h1>Unit Status</h1>
      <TableComponent data={tableData} />
    </Layout>
  )
}

import TableComponent from "../components/TableComponent"
import Layout from "../layout/Layout"

const tableData = {
  th: ["#", "First Name", "Last Name", "Username"],
  row1: ["1", "Mark", "Otto", "@mdo"],
  row2: ["2", "Jacob", "Thornton", "@fat"],
  row3: ["3", "Larry", "the Bird", "@twitter"],
  row4: ["1", "Mark", "Otto", "@mdo"],
  row5: ["2", "Jacob", "Thornton", "@fat"],
  row6: ["3", "Larry", "the Bird", "@twitter"],
}

export default function Inventory() {
  return (
    <Layout>
      <h1>Inventory</h1>
      <TableComponent data={tableData} />
    </Layout>
  )
}

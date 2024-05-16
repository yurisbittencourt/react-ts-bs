import Layout from "../layout/Layout"
import TableComponent from "../components/TableComponent"

const tableData = {
  th: ["#", "First Name", "Last Name", "Username"],
  row1: ["1", "Anna", "Smith", "@asmith"],
  row2: ["2", "John", "Doe", "@jdoe"],
  row3: ["3", "Jane", "Doe", "@janedoe"],
  row4: ["4", "Emily", "Johnson", "@ejohnson"],
  row5: ["5", "Michael", "Brown", "@mbrown"],
  row6: ["6", "Chris", "Lee", "@clee"],
}

export default function UnitData() {
  return (
    <Layout>
      <h1>UnitData</h1>
      <TableComponent data={tableData} />
    </Layout>
  )
}

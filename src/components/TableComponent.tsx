import Table from "react-bootstrap/Table"

export default function TableComponent({ data }: any) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {data?.th.map((th: String) => (
            <th>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {data?.row1.map((r: String) => (
            <td>{r}</td>
          ))}
        </tr>
        <tr>
          {data?.row2.map((r: String) => (
            <td>{r}</td>
          ))}
        </tr>
        <tr>
          {data?.row3.map((r: String) => (
            <td>{r}</td>
          ))}
        </tr>
        <tr>
          {data?.row4.map((r: String) => (
            <td>{r}</td>
          ))}
        </tr>
        <tr>
          {data?.row5.map((r: String) => (
            <td>{r}</td>
          ))}
        </tr>
        <tr>
          {data?.row6.map((r: String) => (
            <td>{r}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  )
}

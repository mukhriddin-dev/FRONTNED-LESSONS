import { Thead, Tbody, Th, Tr, Td, Table } from "@components/table";
import { tableNavigation } from "@mocks/data-table";
import "./style.scss";

const index = ({ data , deleteItem , changeStatus}) => {
  return (
    <Table>
      <Thead>
        <Tr>
          {tableNavigation.length &&
            tableNavigation.map((item) => <Th key={item.id}>{item.title}</Th>)}
        </Tr>
      </Thead>

      <Tbody>
        {data.map((item, ind) => (
          <Tr key={item.id}>
            <Td>{ind+1}</Td>
            <Td><p className={item.status ? `line-through` : null}>{item.customer}</p></Td>
            <Td>{item.email}</Td>
            <Td>{item.phone}</Td>
            <Td>
              <button style={{backgroundColor: item.status ? "rgba(255,0,0,0.2)" : "transparent"}} disabled={item.status} onClick={()=>changeStatus(item.id)}  className="btn btn-primary">Completed</button>
            </Td>
            <Td>
              <button  onClick={()=>deleteItem(item.id)} className="btn btn-primary">Delete</button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default index;

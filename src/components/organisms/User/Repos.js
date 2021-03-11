import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text
} from '@chakra-ui/react';

export default function Repos({ repos }) {
  return (
    <Table variant="simple">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>Repositorio</Th>
          <Th>Forks</Th>
        </Tr>
      </Thead>
      <Tbody>
        { repos.map(repo => (
          <Tr key={repo.id}>
            <Td>
              <Text
                cursor="pointer"
                onClick={() => alert('asdasd')}
              >
                {repo.name}
              </Text>
            </Td>
            <Td>{repo.forks}</Td>
          </Tr>
          ))
        }
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Repositorio</Th>
          <Th>Forks</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

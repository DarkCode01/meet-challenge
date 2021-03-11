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
  Image
} from '@chakra-ui/react';

export default function UserList({ users }) {
  return (
    <Table variant="simple">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>Avatar</Th>
          <Th>Username</Th>
        </Tr>
      </Thead>
      <Tbody>
        { users.map(user => (
          <Tr key={user.login}>
            <Td>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={user.avatar_url}
                alt={user.login}
                fallbackSrc="https://via.placeholder.com/150"
              />
            </Td>
            <Td><Link to={`/${user.login}`}>{ user.login }</Link></Td>
          </Tr>
          ))
        }
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Avatar</Th>
          <Th>Username</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

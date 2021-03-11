import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  Spinner,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Image,
  ScaleFade,
  Center
} from '@chakra-ui/react';

export default function UserList({ isLoading, users }) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Avatar</Th>
          <Th>Username</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user, index) => (
          <Tr key={`user-${index}`} id={`user-${index}`}>
            <Td>
              <Image
                borderRadius="full"
                boxSize="150px"
                src={user.avatar_url}
                alt={user.login}
                fallbackSrc="https://via.placeholder.com/150"
              />
            </Td>
            <Td>
              <Link to={`/${user.login}`}>{user.login}</Link>
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Avatar</Th>
          <Th>Username</Th>
        </Tr>
      </Tfoot>
      <ScaleFade
          id="error-notifiaciton"
          in={isLoading}
          unmountOnExit={true}
        >
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
            Cargando....
          </Center>
        </ScaleFade>
    </Table>
  );
}

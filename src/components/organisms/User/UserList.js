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
  Image,
  SkeletonCircle,
  SkeletonText
} from '@chakra-ui/react';

export default function UserList({ isLoading, users }) {
  const data = !isLoading ? users : [{}, {}, {}, {}];

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Avatar</Th>
          <Th>Username</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((user, index) => (
          <Tr key={`user-${index}`}>
            <Td>
              <SkeletonCircle isLoaded={!isLoading} boxSize="150px">
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={user.avatar_url}
                  alt={user.login}
                  fallbackSrc="https://via.placeholder.com/150"
                />
              </SkeletonCircle>
            </Td>
            <Td>
              <SkeletonText isLoaded={!isLoading}>
                <Link to={`/${user.login}`}>{user.login}</Link>
              </SkeletonText>
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
    </Table>
  );
}

import React from 'react';
import propTypes from 'prop-types';
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
} from '@chakra-ui/react';
import Loading from 'components/organisms/UI/Loading';

function UserList({ isLoading, users }) {
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
      
      {/* loading */}
      <Loading isLoading={isLoading} />
    </Table>
  );
}

UserList.propTypes = {
  isLoading: propTypes.bool.isRequired,
  users: propTypes.arrayOf(propTypes.objectOf({
    avatar_url: propTypes.string,
    login: propTypes.string,
  }))
}

export default UserList;

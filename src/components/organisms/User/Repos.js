import React, {useState} from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import RepoDetails from 'components/organisms/User/RepoDetails';
import Loading from 'components/organisms/UI/Loading';

export default function Repos({ isLoading, repos }) {
  const { isOpen, onClose, onOpen} = useDisclosure();
  const [selected, setSelected] = useState({});

  const select = (repo) => () => {
    setSelected(repo);
    onOpen();
  }

  return (
    <Table variant="simple">

      {/* Modal */}
      <RepoDetails
        repo={selected}
        onClose={onClose}
        isOpen={isOpen}
      />

      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>Repositorio</Th>
          <Th>Forks</Th>
        </Tr>
      </Thead>
      <Tbody>
        {repos.map((repo, index) => (
          <Tr key={`repo-user-${index}`}>
            <Td>
              <Text cursor="pointer" onClick={select(repo)}>
                {repo.name}
              </Text>
            </Td>
            <Td>{repo.forks}</Td>
          </Tr>
        ))}
        
        <Loading isLoading={isLoading} />
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Repositorio</Th>
          <Th>Forks</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

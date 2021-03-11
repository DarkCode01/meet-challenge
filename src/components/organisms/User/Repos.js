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
  Skeleton
} from '@chakra-ui/react';
import RepoDetails from 'components/organisms/User/RepoDetails';

export default function Repos({ isLoading, repos }) {
  const { isOpen, onClose, onOpen} = useDisclosure();
  const [selected, setSelected] = useState({});
  const data = !isLoading ? repos : [{}, {}, {}, {}];

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
        {data.map((repo, index) => (
          <Tr key={`repo-user-${index}`}>
            <Td>
              <Skeleton isLoaded={!isLoading}>
                <Text cursor="pointer" onClick={select(repo)}>
                  {repo.name}
                </Text>
              </Skeleton>
            </Td>
            <Td>
              <Skeleton isLoaded={!isLoading}>
                {repo.forks}
              </Skeleton>
            </Td>
          </Tr>
        ))}
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

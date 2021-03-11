import React, {useState} from 'react';
import {
  Table,
  Thead,
  Tbody,
  Center,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  useDisclosure,
  Spinner,
  ScaleFade
} from '@chakra-ui/react';
import RepoDetails from 'components/organisms/User/RepoDetails';

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
            Cargando...
          </Center>
        </ScaleFade>
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

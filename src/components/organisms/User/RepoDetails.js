import React from 'react';
import propTypes from 'prop-types';
import {
  Link,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Badge,
} from '@chakra-ui/react';

function RepoDetails({ repo, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {repo.name}{' '}
          <Badge colorScheme="green">{repo.language || 'no definido'}</Badge>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{repo.description || 'Sin descripción'}</ModalBody>

        <ModalFooter>
          <Link href={repo.html_url}>
            <Button variant="ghost">Ir al repositorio oficial</Button>
          </Link>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

RepoDetails.propTypes = {
  isOpen: propTypes.bool.isRequired,
  repo: propTypes.objectOf({
    description: propTypes.string,
    name: propTypes.string,
    language: propTypes.string,
  }),
  onClose: propTypes.func.isRequired,
};

export default RepoDetails;

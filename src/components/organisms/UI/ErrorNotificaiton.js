import React from 'react';
import propTypes from 'prop-types';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  ScaleFade,
  CloseButton,
} from '@chakra-ui/react';

function ErrorNotificaiton({ isOpen, description, onClose }) {
  return (
    <ScaleFade id="error-notifiaciton" in={isOpen} unmountOnExit={true}>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>
          Error al intentar obtener la inforamción:{' '}
        </AlertTitle>
        <AlertDescription>{description}</AlertDescription>
        <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={onClose}
        />
      </Alert>
    </ScaleFade>
  );
}

ErrorNotificaiton.propTypes = {
  isOpen: propTypes.bool,
  description: propTypes.string,
  onClose: propTypes.func.isRequired,
};

export default ErrorNotificaiton;

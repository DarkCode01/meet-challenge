import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  ScaleFade,
  CloseButton
} from "@chakra-ui/react"

export default function ErrorNotificaiton({
  isOpen,
  description,
  onClose,
}) {
  return (
    <ScaleFade
      id="error-notifiaciton"
      in={isOpen}
      unmountOnExit={true}
    >
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Error al intentar obtener la inforamción: </AlertTitle>
        <AlertDescription>{ description }</AlertDescription>
        <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={onClose}
        />
      </Alert>
    </ScaleFade>
  );
};

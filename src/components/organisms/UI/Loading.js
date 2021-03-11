import React from 'react';
import {
  ScaleFade,
  Center,
  Spinner
} from '@chakra-ui/react';

export default function Loading({ isLoading }) {
  return (
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
  );
};

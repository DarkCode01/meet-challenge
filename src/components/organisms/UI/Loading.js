import React from 'react';
import propTypes from 'prop-types';
import {
  ScaleFade,
  Center,
  Spinner
} from '@chakra-ui/react';

function Loading({ isLoading }) {
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

Loading.propTypes = {
  isLoading: propTypes.bool.isRequired
};

export default Loading;

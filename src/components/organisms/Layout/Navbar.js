import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { Logo } from 'components/atoms/UI/Logo';
import { MenuToggle, Menu } from 'components/organisms/UI/Menu';

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  // handle
  const handleToggle = () => setIsOpen((p) => !p);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      {...props}
    >
      <Logo w="100px" title={props.title} />
      <MenuToggle toggle={handleToggle} isOpen={isOpen} />
      <Menu isOpen={isOpen} />
    </Flex>
  );
}

import {
  Flex, Box, Text, Avatar,
} from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thiago Vasconcellos</Text>
          <Text color="gray.300" fontSize="small">thiagovasconcellos88@gmail.com</Text>
        </Box>
      ) }

      <Avatar size="md" name="Thiago Vasconcellos" src="https://github.com/thiagovasconcellos.png" />
    </Flex>
  );
}

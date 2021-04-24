import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Herbert</Text>
                <Text color="gray.300" fontSize="small">
                    herbert@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Herbert De Sousa" src="https://avatars.githubusercontent.com/u/49881040"/>
        </Flex>
    );
}
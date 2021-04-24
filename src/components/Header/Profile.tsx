import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps{
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }:ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
            <Box mr="4" textAlign="right">
                <Text>Herbert</Text>
                <Text color="gray.300" fontSize="small">
                    herbert@gmail.com
                </Text>
            </Box>
            )}

            <Avatar size="md" name="Herbert De Sousa" src="https://avatars.githubusercontent.com/u/49881040"/>
        </Flex>
    );
}
import { useState } from 'react';
import { Container, Center, Stack, Title, Text, Button, Anchor, Paper } from '@mantine/core';
import BookingWizard from './components/BookingWizard';

type ActiveScreen = 'welcome' | 'booking' | 'coordinator';

export default function App() {
    const [screen, setScreen] = useState<ActiveScreen>('welcome');

    return (
        <Container size="md" py="xl">
            <Center mih="85vh">
                {screen === 'welcome' && (
                    <Paper p="xl" radius="md" w="100%" ta="center">
                        <Stack align="center" gap="lg">
                            <Title order={1} fw={800} lh={1.1}>
                                VITA<br />APPOINTMENT<br />SCHEDULER
                            </Title>

                            <Text size="lg" c="dimmed">
                                Welcome!<br />
                                Let's get you scheduled<br />
                                for free tax assistance!
                            </Text>

                            <Button
                                size="lg"
                                color="#002b5c"
                                px="xl"
                                onClick={() => setScreen('booking')}
                            >
                                Begin
                            </Button>

                            <Anchor
                                component="button"
                                type="button"
                                size="sm"
                                c="dimmed"
                                mt="md"
                                onClick={() => setScreen('coordinator')}
                            >
                                Site Coordinators: Login Here
                            </Anchor>
                        </Stack>
                    </Paper>
                )}

                {screen === 'booking' && (
                    <BookingWizard onCoordinatorLogin={() => setScreen('coordinator')} />
                )}

                {screen === 'coordinator' && (
                    <Paper p="xl" radius="md" withBorder w="100%">
                        <Stack gap="md">
                            <Title order={2}>Site Coordinator Dashboard</Title>
                            <Text c="dimmed">Admin table and filters coming next.</Text>
                            <Button variant="subtle" onClick={() => setScreen('welcome')}>
                                Back to Home
                            </Button>
                        </Stack>
                    </Paper>
                )}
            </Center>
        </Container>
    );
}
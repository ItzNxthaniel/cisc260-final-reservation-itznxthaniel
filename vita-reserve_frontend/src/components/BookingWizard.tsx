import { useState } from 'react';
import {Paper, Stack, Title, Anchor, Button, Text, Stepper} from '@mantine/core';
import type { BookingFormData } from '../types';
import Step1Screening from './Step1Screening';

const INITIAL_FORM_DATA: BookingFormData = {
    incomeRange: null,
    ageRange: null,
    language: null,
    hasDisability: false,
    isVeteran: false,
    locationId: null,
    timeBlockId: null,
    fullName: '',
    phone: '',
    zipCode: '',
};

interface BookingWizardProps {
    onCoordinatorLogin: () => void;
}

export default function BookingWizard({ onCoordinatorLogin }: BookingWizardProps) {
    const [active, setActive] = useState<number>(0);
    const [highestStepVisited, setHighestStepVisited] = useState<number>(0);
    const [formData, setFormData] = useState<BookingFormData>(INITIAL_FORM_DATA);

    const handleStepChange = (nextStep: number) => {
        if (nextStep > 3 || nextStep < 0) return;

        setActive(nextStep);
        setHighestStepVisited(((prev => Math.max(prev, nextStep))))
    }

    const shouldAllowStepSelect = (step: number) => highestStepVisited >= step && active != step;

    const updateFormData = (newFields: Partial<BookingFormData>) => {
        setFormData((prev) => ({ ...prev, ...newFields }));
    };

    return (
        <Paper p="xl" radius="lg" w="100%">
            <Stack align="center" gap="lg">
                <Title order={2} ta="center">
                    VITA APPOINTMENT SCHEDULER
                </Title>

                {active === 0 && (
                    <Step1Screening
                        formData={formData}
                        updateFormData={updateFormData}
                        onNext={() => handleStepChange(1)}
                    />
                )}

                {active === 1 && (
                    <Stack align="center" gap="md" w="100%">
                        <Text>Step 2: Location &amp; Time Selection (coming next)</Text>
                        <Button variant="default" onClick={() => handleStepChange(0)}>
                            Back
                        </Button>
                    </Stack>
                )}

                <Stepper
                    active={active}
                    onStepClick={handleStepChange}
                    size="xs"
                    color="#002b5c"
                    w="100%"
                >
                    <Stepper.Step
                        label="Eligibility Screening"
                        allowStepSelect={shouldAllowStepSelect(0)}
                    />

                    <Stepper.Step
                        label="Appointment Selection"
                        allowStepSelect={shouldAllowStepSelect(1)}
                    />

                    <Stepper.Step
                        label="Input Information"
                        allowStepSelect={shouldAllowStepSelect(2)}
                    />

                    <Stepper.Step
                        label="Confirmation"
                        allowStepSelect={shouldAllowStepSelect(3)}
                    />
                </Stepper>

                <Anchor
                    component="button"
                    type="button"
                    size="sm"
                    c="dimmed"
                    mt="sm"
                    onClick={onCoordinatorLogin}
                >
                    Site Coordinators: Login Here
                </Anchor>
            </Stack>
        </Paper>
    );
}
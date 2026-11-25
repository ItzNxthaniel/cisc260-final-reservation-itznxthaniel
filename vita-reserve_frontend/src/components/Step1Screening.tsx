import { Stack, Group, Select, Checkbox, Button, Text, Alert } from '@mantine/core';
import type { BookingFormData } from '../types';

interface Step1Props {
    formData: BookingFormData;
    updateFormData: (newFields: Partial<BookingFormData>) => void;
    onNext: () => void;
}

export default function Step1Screening({ formData, updateFormData, onNext }: Step1Props) {
    const isIneligible = formData.incomeRange === 'over_82k';
    const isComplete =
        formData.incomeRange !== null &&
        formData.ageRange !== null &&
        formData.language !== null;

    return (
        <Stack align="center" gap="lg" w="100%">
            <Text ta="center" c="dimmed">
                We need some quick information,<br />
                to see if you're eligible for VITA services.
            </Text>

            {/* Three side-by-side dropdowns matching your wireframe */}
            <Group grow w="100%" gap="sm">
                <Select
                    placeholder="Income"
                    aria-label="Income"
                    value={formData.incomeRange}
                    onChange={(val) => updateFormData({ incomeRange: val })}
                    data={[
                        { value: 'under_82k', label: '$82,000 or less' },
                        { value: 'over_82k', label: 'Over $82,000' },
                    ]}
                />

                <Select
                    placeholder="Age"
                    aria-label="Age"
                    value={formData.ageRange}
                    onChange={(val) => updateFormData({ ageRange: val })}
                    data={[
                        { value: 'under_60', label: 'Under 60' },
                        { value: '60_plus', label: '60 or older' },
                    ]}
                />

                <Select
                    placeholder="Language"
                    aria-label="Language"
                    value={formData.language}
                    onChange={(val) => updateFormData({ language: val })}
                    data={[
                        { value: 'english', label: 'English' },
                        { value: 'esl', label: 'Other / ESL' },
                    ]}
                />
            </Group>

            {/* Checkboxes matching your wireframe */}
            <Stack gap="sm">
                <Checkbox
                    label="Yes, I have a disability."
                    checked={formData.hasDisability}
                    onChange={(e) => updateFormData({ hasDisability: e.currentTarget.checked })}
                />
                <Checkbox
                    label="Yes, I am a veteran."
                    checked={formData.isVeteran}
                    onChange={(e) => updateFormData({ isVeteran: e.currentTarget.checked })}
                />
            </Stack>

            {isIneligible && (
                <Alert color="red" title="Not Eligible for VITA" w="100%">
                    Free VITA tax preparation is available for households earning $82,000 or less.
                </Alert>
            )}

            <Button
                size="md"
                color="#002b5c"
                px="xl"
                disabled={!isComplete || isIneligible}
                onClick={onNext}
            >
                Submit
            </Button>
        </Stack>
    );
}
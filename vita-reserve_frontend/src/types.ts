export interface BookingFormData {
    incomeRange: string | null;
    ageRange: string | null;
    language: string | null;
    hasDisability: boolean;
    isVeteran: boolean;

    locationId: number | null;
    timeBlockId: number | null;

    fullName: string;
    phone: string;
    zipCode: string;
}
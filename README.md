# VITA Appointment Reservation
CISC260: Individual Final Project

## 1. Project Overview
Current reservation system is done via United Way 2-1-1, local library, mobile site partners, and hartwick phone line.
These methods currently use a shared Google Calendar. Because many different areas have editing access, the scheduling is inconsistent.
The VITA Program needs a new system to follow one reservation procedure, which a screening process before hand.

## 2. Sources Consulted
| Source Name | Date | Link, if Applicable |
|-------------|------|---------------------|
| IRS.Gov - Free Tag Return Prep. for Qualifying Taxpayers | 10/29/26 | [irs.gov](https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers) |
| Kickoff Meeting | 10/30/26 |  |
| Quick Questions after class | 11/6/26 | |

## 3. Functional Requirements
| ID | Description |
|----|-------------|
| FR-01 | The system shall provide one consistent reservation scheduling channel for clients and mobile site partners. |
| FR-02 | The system shall collect preliminary screening answers and determine whether the household is eligible. |
| FR-03 | The system shall allow an eligible household to view available appointments by location, date, and time, and remaining capacity. |
| FR-04 | The system shall collect the client's full name, phone number, and ZIP code before creating a reservation. |
| FR-05 | The system shall create and save a confirmed appointment for a selected available hourly block. |
| FR-06 | The system shall generate a unique confirmation number and display the confirmed location, date, and appointment time after finishing reservation. |
| FR-07 | The system shall provide explanation messages when screening or booking is unsuccessful, including ineligible screening, incomplete information, closed booking, or full capacity |
| FR-08 | The system shall allow clients to retrieve their own appointments using given confirmation numbers. |
| FR-09 | The system shall allow clients to retrieve their own appointments using their full name, phone number, and ZIP code. |
| FR-10 | The system shall allow clients to cancel eligible appointments. |
| FR-11 | The system shall allow site coordinators to view appointment lists by location and date, including suspected duplicate flags. |
| FR-12 | The system shall allow the site coordinator to correct a client's contact information |
| FR-13 | The system shall allow the site coordinator to generate and print appointment lists including appointment time, client full name, and phone number. |
| FR-14 | The system shall allow the site coordinator to create, update, or close service schedules, including locations, dates, and appointment blocks. |
| FR-15 | The system shall allow the site coordinator to adjust appointment capacity for a service block. |

## 4. Business Rules
| ID | Description |
|----|-------------|
| BR-01 | Each household is permitted one and only one appointment across the program, regardless of the booking channel or service location. |
| BR-02 | One household appointment covers the taxpayer, spouse, and dependents. Spouses filing Married Filing Separately are still covered by one appointment, even if two returns are prepared. |
| BR-03 | A household must complete and pass preliminary screening before selecting an appointment. |
| BR-04 | The general income eligibility limit is $89,000 or less in prior-year household gross income, based on the Hartwick VITA site's stated policy. |
| BR-05 | Seniors age 65 or older, veterans, active military personnel, and individuals with disabilities qualify for an exemption from the general income limit. |
| BR-06 | All eligible households have equal appointment priority. No specific group have earlier scheduling priority. |
| BR-07 | Each appointment lasts one hour and includes the taxpayer interview, return preparation, and quality review. |
| BR-08 | The standard capacity is eight households per one-hour appointment block, subject to authorized adjustments. |
| BR-09 | Appointment dates and hours must follow the approved campus, Saturday library, and Friday mobile-service schedules, which have described on the shared documents. |
| BR-10 | A new reservation may be confirmed only for an open service date, an available block, and an eligible household. |
| BR-11 | Booking closes for an entire site/service date 24 hours before its first appointment block. |
| BR-12 | The number of confirmed appointments must never exceed the block's authorized capacity, including when multiple booking channels submit requests simultaneously. |
| BR-13 | Available capacity is calculated from active booked appointments. |
| BR-14 | Name, phone number, and ZIP code, individually or together, are not sufficient to establish a unique household identity. |
| BR-15 | Clients may cancel an appointment at least 24 hours before its scheduled start time. |
| BR-16 | A successful cancellation immediately releases one place after the cancellation is saved. The cancelled appointment record remains in the database. |
| BR-17 | A service block containing booked appointments cannot be silently moved or delete |

## 5. Nonfunctional Requirements
| ID | Description |
|----|-------------|
| NFR-01 | The website shall be easy to navigate and usable on smartphones and desktop computers. The V1 client interface shall be in English. |
| NFR-02 | Appointment availability, screening results, and confirmations shall respond promptly under ordinary site usage. |
| NFR-03 | Public appointment listings shall never disclose other clients' names, contact information, or screening details. |
| NFR-04 | The system shall collect only the information needed for screening and scheduling. V1 shall not require Social Security numbers, street addresses, or uploaded taxpayer documents. |
| NFR-05 | Protected client and staff operations shall be checked by the server. A user must not gain access merely by changing an appointment ID or claiming another role. |
| NFR-06 | Concurrent reservation requests must not cause capacity violations or conflicting records. Database transactions shall prevent partial saves. |
| NFR-07 | Confirmed appointments, cancellations, and authorized schedule changes shall remain available after a normal application restart. |

### Appointment Scheduling
> 8 appointsment per Hour Block.

| Location | Days | Times |
|----------|------|-------|
| Hartwick | Monday & Tuesdays | 6-7pm<br>7-8pm |
| Local Library Service | Saturdays | 10-11am & 11am-12pm<br>1-2pm & 2-3pm |
| Norwich | Fridays in February | 10-11am & 11am-12pm<br>1-2pm & 2-3pm |
| Utica | First Friday in April | 10-11am & 11am-12pm<br>1-2pm & 2-3pm |
| Binghamton | Fridays in operating season,<br>before April 15.<br>Excluding Norwich & Utica Dates| 10-11am & 11am-12pm<br>1-2pm & 2-3pm |

## 5. Questions
1. Scheduling Partners:
    - Do they need a secure login to schedule appointments for clients?
        - No
    - Do they have permission to cancel appointment on behalf of a users request?

2. Site Coordinators:
    - Type of security required for this assignment in regard to Site Coordinator Authorization?
        - Basic Email/Password will work

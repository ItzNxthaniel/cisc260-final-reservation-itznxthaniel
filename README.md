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
| FR-01 | The system shall screen taxpayers to confirm their eligiblity. |
| FR-02 | The system shall collect Full Name, Phone Number, & ZIP Codes. |
| FR-03 | The system shall be able to list all current avaialble appointments. |
| FR-04 | The system shall record reservations through a common booking process, that all partners use. |
| FR-05 | The system shall allow the site coordinator to view all appointments. |
| FR-06 | The system shall allow scheduling partners to schedule appointmentss for clients. |

## 4. Business Rules
| ID | Description |
|----|-------------|
| BR-01 | A Household can only make ONE appointment.
| BR-02 | The only data we can collect is Name, Number, & ZIP Code. No other data can be collected.
| BR-03 | For maximum privacy, no accounts to manage.
| BR-04 | Clients can cancel their appointments 24 or more hours out from it.
| BR-05 | Only Site Cordinators can view the appointments.
| BR-06 | Eligiblity for VITA:<br>• Salary $82,000 or Less.<br>• Persons with Disabilities.<br>• Limited English-speaking taxpayers.<br>• 60 Years of Age or Older. |
| BR-07 | ALL HOUR BLOCKS HAVE A DEFAULT CAPACITY OF 8.<br>Scheduling:<br>• Hartwick (Mon. & Tues.): 6-7pm, 7-8pm<br>• Local Library service (Sat.): 10-11am, 11am-12pm, 1-2pm, 2-3pm<br>• Norwich (Fridays in Feb.): 10-11am, 11am-12pm, 1-2pm, 2-3pm<br>• Utica (First Friday in April): 10-11am, 11am-12pm, 1-2pm, 2-3pm.<br>• Binghamton (Fridays in oper. Season before Apr. 15, excluding Norwich & Utica Dates): 10-11am, 11am-12pm, 1-2pm, 2-3pm. |

## 5. Questions
1. Scheduling Partners:
    - Do they need a secure login to schedule appointments for clients?
        - No
    - Do they have permission to cancel appointment on behalf of a users request?

2. Site Coordinators:
    - Type of security required for this assignment in regard to Site Coordinator Authorization?
        - Basic Email/Password will work

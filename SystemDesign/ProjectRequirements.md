# 1. The Problem:
Current reservation system is done via United Way 2-1-1, local library, mobile site partners, and hartwick phone line.
These methods currently use a shared Google Calendar. Because many different areas have editing access, the scheduling is inconsistent.
The VITA Program needs a new system to follow one reservation procedure, which a screening process before hand.

# 2. Stakeholders:
| Stakeholder | Role / Interest | Major Needs |
|-------------|-----------------|-------------|
| Household / Taxpayer (Client) | User to pay their taxes | Complete a screening process & choose an appointment time. |
| Scheduling Partner | Help Clients Schedule an Appointment | Fill out information for the Clients. |
| Volunteer | View Appointments & Clients | View all appointments that are scheduled and Client Contact Information. |
| Site Admins | View & Manage Appointments | View all appointments and manage them. |

# 3. Functional Requirements:
### FR-01:
Screening Process to see if the client is eligible.

### FR-02:
Collect Full Name, Phone Number, & ZIP Codes.

### FR-03:
Lists all current available appointment times for clients to choose from.

### FR-04:
Record reservation through the common booking process (subject to availability & household rule).

### FR-05:
Allow Volunteers & Site Admins to view all appointments.

### FR-06:
Allow Scheduling Partners to schedule appointments for clients.

# 4. Business Rules:
### BR-01:
A Household can only make ONE appointment.

### BR-02:
Eligiblity for VITA:
- Salary $82,000 or Less.
- Persons with Disabilities.
- Limited English-speaking taxpayers.
- 60 Years of Age or Older.

### BR-03:
Scheduling:
- Hartwick (Mon. & Tues.): 6-7pm, 7-8pm (Capacity: 16)
- Local Library service (Sat.): 10-11am, 11am-12pm, 1-2pm, 2-3pm (Capacity: 32 each time-block).
- Norwich (Fridays in Feb.): 10-11am, 11am-12pm, 1-2pm, 2-3pm (Capacity: 32 each time-block).
- Utica (First Friday in April): 10-11am, 11am-12pm, 1-2pm, 2-3pm (Capacity: 32 each time-block).
- Binghamton (Fridays in oper. Season before Apr. 15, excluding Norwich & Utica Dates): 10-11am, 11am-12pm, 1-2pm, 2-3pm (Capacity: 32 each time-block).
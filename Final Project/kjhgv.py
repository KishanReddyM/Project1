class Patient:
    def __init__(self, name, age, gender, emergency_contact):
        self.name = name
        self.age = age
        self.gender = gender
        self.emergency_contact = emergency_contact
        self.prescriptions = []
        self.diagnosis_records = []

    def add_prescription(self, prescription):
        self.prescriptions.append(prescription)

    def add_diagnosis(self, diagnosis):
        self.diagnosis_records.append(diagnosis)

class Doctor:
    def __init__(self, name, specialty):
        self.name = name
        self.specialty = specialty

class Appointment:
    def __init__(self, patient, doctor, appointment_date):
        self.patient = patient
        self.doctor = doctor
        self.appointment_date = appointment_date

class BillingSummary:
    def __init__(self, patient):
        self.patient = patient
        self.total_amount = 0
        self.details = []

    def add_charge(self, description, amount):
        self.details.append((description, amount))
        self.total_amount += amount

    def summary(self):
        print(f"Billing Summary for {self.patient.name}:")
        for desc, amount in self.details:
            print(f"{desc}: ${amount:.2f}")
        print(f"Total Amount: ${self.total_amount:.2f}")

class PatientManagementSystem:
    def __init__(self):
        self.patients = []
        self.doctors = []
        self.appointments = []

    def register_patient(self, name, age, gender, emergency_contact):
        patient = Patient(name, age, gender, emergency_contact)
        self.patients.append(patient)
        return patient

    def add_doctor(self, name, specialty):
        doctor = Doctor(name, specialty)
        self.doctors.append(doctor)
        return doctor

    def list_doctors_by_specialty(self, specialty):
        return [doctor for doctor in self.doctors if doctor.specialty == specialty]

    def schedule_appointment(self, patient, doctor, appointment_date):
        appointment = Appointment(patient, doctor, appointment_date)
        self.appointments.append(appointment)
        return appointment

    def get_upcoming_appointments(self):
        # This feature is a UI-only feature, so we'll just return the appointments
        return self.appointments

# Example usage:
system = PatientManagementSystem()

# Register a patient
patient1 = system.register_patient("kishan reddy", 30, "Male", "9876543210")

# Add doctor
doctor1 = system.add_doctor("Dr. Smith", "Cardiology")

# List doctors by specialty
cardiologists = system.list_doctors_by_specialty("Cardiology")
print("Cardiologists:")
for doc in cardiologists:
    print(f"- {doc.name}")

# Schedule appointment
appointment1 = system.schedule_appointment(patient1, doctor1, "2025-07-30")

# Add prescription and diagnosis
patient1.add_prescription("Medicine A - 10mg twice daily")
patient1.add_diagnosis("Hypertension")

# Billing summary
billing = BillingSummary(patient1)
billing.add_charge("Consultation Fee", 50.00)
billing.add_charge("Medicine A", 20.00)
billing.summary()

# Emergency contact info
print(f"Emergency contact for {patient1.name}: {patient1.emergency_contact}")

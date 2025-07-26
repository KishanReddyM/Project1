// app.js - core logic for Medicare Hospital Patient Management SPA

// Data arrays stored in memory
const patients = [];
const doctors = [
  { id: 1, name: 'Dr. Arjun Mehta', specialty: 'Cardiology' },
  { id: 2, name: 'Dr. Sara Iqbal', specialty: 'Neurology' },
  { id: 3, name: 'Dr. Ravi Shankar', specialty: 'Orthopedics' },
  { id: 4, name: 'Dr. Priya Sharma', specialty: 'Pediatrics' },
  { id: 5, name: 'Dr. Aman Kapoor', specialty: 'Dermatology' }
];
const appointments = []; // {id, title, start, end, patientId, doctorId}
const prescriptions = []; // {id, medication, dosage, patientId}
const diagnoses = []; // {id, condition, notes, patientId}
const billings = []; // {id, description, amount, patientId}

// Unique ID generators
let patientCounter = 1;
let appointmentCounter = 1;
let recordCounter = 1;

// Cached DOM elements
let currentPatientSelect;
let doctorsContainer;
let calendar; // FullCalendar instance

// Utility – get currently selected patient object
function getCurrentPatient() {
  const pid = parseInt(currentPatientSelect.value, 10);
  return patients.find((p) => p.id === pid);
}

/***************************** PATIENTS *****************************/
function registerPatient(e) {
  e.preventDefault();
  const name = document.getElementById('patientName').value.trim();
  const age = parseInt(document.getElementById('patientAge').value, 10);
  const gender = document.getElementById('patientGender').value;
  const contact = document.getElementById('patientContact').value.trim();

  const newPatient = {
    id: patientCounter++,
    name,
    age,
    gender,
    contact
  };
  patients.push(newPatient);

  // Update UI elements
  const option = document.createElement('option');
  option.value = newPatient.id;
  option.textContent = newPatient.name;
  currentPatientSelect.appendChild(option);
  currentPatientSelect.value = newPatient.id; // make newly added patient current

  refreshEmergencyList();
  refreshTables();

  // Reset form (keep default placeholders)
  e.target.reset();
}

/***************************** DOCTORS *****************************/
function addDoctor(e) {
  e.preventDefault();
  const name = document.getElementById('doctorName').value.trim();
  const specialty = document.getElementById('doctorSpecialty').value.trim();
  const newDoctor = {
    id: doctors.length ? Math.max(...doctors.map((d) => d.id)) + 1 : 1,
    name,
    specialty
  };
  doctors.push(newDoctor);
  updateDoctorUI();
  e.target.reset();
}

function updateDoctorUI() {
  // Clear container
  doctorsContainer.innerHTML = '';
  doctors.forEach((doc) => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
      <div class="card doctor-card h-100">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${doc.name}</h5>
          <p class="card-text text-secondary mb-4">${doc.specialty}</p>
          <div class="mt-auto"><span class="status status--info">${doc.specialty}</span></div>
        </div>
      </div>
    `;
    doctorsContainer.appendChild(col);
  });
}

/***************************** APPOINTMENTS *****************************/
function initCalendar() {
  const calendarEl = document.getElementById('calendarEl');
  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    height: '100%',
    selectable: true,
    headerToolbar: {
      start: 'title',
      center: '',
      end: 'prev,next today'
    },
    select: (selectionInfo) => {
      const patient = getCurrentPatient();
      if (!patient) {
        alert('Please register/select a patient first.');
        return;
      }
      // Build doctor options string for prompt
      const doctorNames = doctors.map((d, idx) => `${idx + 1}. ${d.name} (${d.specialty})`).join('\n');
      const doctorInput = prompt(`Select Doctor by number:\n${doctorNames}`, '1');
      const doctorIndex = parseInt(doctorInput, 10) - 1;
      if (isNaN(doctorIndex) || doctorIndex < 0 || doctorIndex >= doctors.length) return;
      const selectedDoctor = doctors[doctorIndex];

      const defaultTitle = `${patient.name} with ${selectedDoctor.name}`;
      const title = prompt('Appointment Title:', defaultTitle) || defaultTitle;

      const newEvent = {
        id: appointmentCounter++,
        title,
        start: selectionInfo.startStr,
        end: selectionInfo.endStr,
        allDay: selectionInfo.allDay,
        patientId: patient.id,
        doctorId: selectedDoctor.id
      };
      appointments.push(newEvent);
      calendar.addEvent(newEvent);
      calendar.unselect();
    },
    events: appointments // initial empty
  });
  calendar.render();
}

/***************************** PRESCRIPTIONS *****************************/
function addPrescription(e) {
  e.preventDefault();
  const patient = getCurrentPatient();
  if (!patient) {
    alert('Please select a patient first.');
    return;
  }
  const medication = document.getElementById('medication').value.trim();
  const dosage = document.getElementById('dosage').value.trim();

  prescriptions.push({
    id: recordCounter++,
    medication,
    dosage,
    patientId: patient.id
  });
  refreshTables();
  e.target.reset();
}

/***************************** DIAGNOSES *****************************/
function addDiagnosis(e) {
  e.preventDefault();
  const patient = getCurrentPatient();
  if (!patient) {
    alert('Please select a patient first.');
    return;
  }
  const condition = document.getElementById('condition').value.trim();
  const notes = document.getElementById('notes').value.trim();

  diagnoses.push({
    id: recordCounter++,
    condition,
    notes,
    patientId: patient.id
  });
  refreshTables();
  e.target.reset();
}

/***************************** BILLING *****************************/
function addBilling(e) {
  e.preventDefault();
  const patient = getCurrentPatient();
  if (!patient) {
    alert('Please select a patient first.');
    return;
  }
  const description = document.getElementById('chargeDescription').value.trim();
  const amountVal = parseFloat(document.getElementById('chargeAmount').value);
  if (isNaN(amountVal) || amountVal < 0) return;

  billings.push({
    id: recordCounter++,
    description,
    amount: amountVal,
    patientId: patient.id
  });
  refreshTables();
  e.target.reset();
}

/***************************** UI REFRESHERS *****************************/
function refreshTables() {
  const patient = getCurrentPatient();
  const prescriptionTbody = document.querySelector('#prescriptionTable tbody');
  const diagnosisTbody = document.querySelector('#diagnosisTable tbody');
  const billingTbody = document.querySelector('#billingTable tbody');

  // Helper to clear tbody while preserving reference
  function clearTbody(tb) {
    while (tb.firstChild) tb.removeChild(tb.firstChild);
  }

  clearTbody(prescriptionTbody);
  clearTbody(diagnosisTbody);
  clearTbody(billingTbody);

  let index = 1;
  prescriptions.filter((p) => !patient || p.patientId === patient.id).forEach((p) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${index++}</td><td>${p.medication}</td><td>${p.dosage}</td><td>${getPatientNameById(p.patientId)}</td>`;
    prescriptionTbody.appendChild(tr);
  });

  index = 1;
  diagnoses.filter((d) => !patient || d.patientId === patient.id).forEach((d) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${index++}</td><td>${d.condition}</td><td>${d.notes}</td><td>${getPatientNameById(d.patientId)}</td>`;
    diagnosisTbody.appendChild(tr);
  });

  index = 1;
  let total = 0;
  billings.filter((b) => !patient || b.patientId === patient.id).forEach((b) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${index++}</td><td>${b.description}</td><td>${b.amount.toFixed(2)}</td><td>${getPatientNameById(b.patientId)}</td>`;
    billingTbody.appendChild(tr);
    total += b.amount;
  });
  document.getElementById('billingTotal').textContent = total.toFixed(2);
}

function refreshEmergencyList() {
  const list = document.getElementById('emergencyList');
  list.innerHTML = '';
  patients.forEach((p) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `<span>${p.name}</span><span class="badge bg-primary">${p.contact}</span>`;
    list.appendChild(li);
  });
}

function getPatientNameById(id) {
  const p = patients.find((x) => x.id === id);
  return p ? p.name : 'Unknown';
}

/***************************** INIT *****************************/

document.addEventListener('DOMContentLoaded', () => {
  // Cache elements
  currentPatientSelect = document.getElementById('currentPatient');
  doctorsContainer = document.getElementById('doctorsContainer');

  // Event listeners
  document.getElementById('patientForm').addEventListener('submit', registerPatient);
  document.getElementById('doctorForm').addEventListener('submit', addDoctor);
  document.getElementById('prescriptionForm').addEventListener('submit', addPrescription);
  document.getElementById('diagnosisForm').addEventListener('submit', addDiagnosis);
  document.getElementById('billingForm').addEventListener('submit', addBilling);
  currentPatientSelect.addEventListener('change', () => {
    refreshTables();
  });

  // Seed default patient (matches pre-filled form default)
  const defaultPatient = {
    id: patientCounter++,
    name: 'kishan reddy',
    age: 30,
    gender: 'Male',
    contact: '9876543210'
  };
  patients.push(defaultPatient);
  const option = document.createElement('option');
  option.value = defaultPatient.id;
  option.textContent = defaultPatient.name;
  currentPatientSelect.appendChild(option);
  currentPatientSelect.value = defaultPatient.id;

  // Render doctors UI
  updateDoctorUI();

  // FullCalendar init
  initCalendar();

  // Initial UI population
  refreshEmergencyList();
  refreshTables();
});

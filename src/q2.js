/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Add code here

function addPatient(patientName){
    patients.push(patientName);
    
    // Task 2: Add code here
    addPatient('Tan Ah Kow');
    addPatient('Soh Kim Yew');

}

// Task 3: Add code here
let patients = [];

function addPatient(patientName) {
    patients.push(patientName);
}

function listPatients() {
    for(let i = 0; i < patients.length; i++) {
        console.log(patients[i]);
    }
}

// Now we can patient names and list them using addPatient and listPatients functions respectively:
addPatient('Tan Ah Kow');
addPatient('Soh Kim Yew');

listPatients();


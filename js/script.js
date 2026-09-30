/* =====================================
   PET DATA
===================================== */

const pets = [

    {
        id: 1,
        name: "Bruno",
        type: "Dog",
        location: "Visakhapatnam",
        condition: "Injured",
        description: "A friendly dog found near a roadside area.",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "Milo",
        type: "Cat",
        location: "Vijayawada",
        condition: "Abandoned",
        description: "A small cat found without an owner.",
        image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Rocky",
        type: "Dog",
        location: "Hyderabad",
        condition: "Lost",
        description: "A friendly brown dog reported missing.",
        image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 4,
        name: "Luna",
        type: "Cat",
        location: "Visakhapatnam",
        condition: "Found",
        description: "A beautiful cat found near a residential area.",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        name: "Max",
        type: "Dog",
        location: "Guntur",
        condition: "Injured",
        description: "A young dog that needs medical attention.",
        image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 6,
        name: "Coco",
        type: "Cat",
        location: "Hyderabad",
        condition: "Abandoned",
        description: "A gentle cat looking for a safe place.",
        image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=80"
    }

];


/* =====================================
   CREATE PET CARD
===================================== */

function createPetCard(pet) {

    return `

        <div class="pet-card">

            <img
                src="${pet.image}"
                alt="${pet.name}"
            >

            <div class="pet-card-content">

                <h3>
                    ${pet.name}
                </h3>

                <p class="pet-info">
                    🐾 Type: ${pet.type}
                </p>

                <p class="pet-info">
                    📍 Location: ${pet.location}
                </p>

                <span class="status">
                    ${pet.condition}
                </span>

                <p class="pet-info">
                    ${pet.description}
                </p>

                <br>

                <button
                    class="btn primary-btn"
                    onclick="viewPet(${pet.id})"
                >
                    View Details
                </button>

            </div>

        </div>

    `;
}


/* =====================================
   DISPLAY FEATURED PETS
===================================== */

const featuredPets = document.getElementById("featuredPets");

if (featuredPets) {

    const firstPets = pets.slice(0, 3);

    firstPets.forEach(function(pet) {

        featuredPets.innerHTML += createPetCard(pet);

    });

}


/* =====================================
   DISPLAY ALL PETS
===================================== */

const petList = document.getElementById("petList");

function displayPets(list) {

    if (!petList) {
        return;
    }


    petList.innerHTML = "";


    if (list.length === 0) {

        petList.innerHTML = `

            <div style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 50px;
            ">

                <h2>No pets found</h2>

                <p>
                    Try changing your search or filters.
                </p>

            </div>

        `;

        return;
    }


    list.forEach(function(pet) {

        petList.innerHTML += createPetCard(pet);

    });

}


if (petList) {

    displayPets(pets);

}


/* =====================================
   SEARCH AND FILTER
===================================== */

const searchInput = document.getElementById("searchInput");

const typeFilter = document.getElementById("typeFilter");

const conditionFilter =
    document.getElementById("conditionFilter");


function filterPets() {

    let searchText = "";

    let selectedType = "All";

    let selectedCondition = "All";


    if (searchInput) {

        searchText =
            searchInput.value.toLowerCase();

    }


    if (typeFilter) {

        selectedType =
            typeFilter.value;

    }


    if (conditionFilter) {

        selectedCondition =
            conditionFilter.value;

    }


    const filteredPets = pets.filter(function(pet) {

        const matchesSearch =
            pet.name.toLowerCase().includes(searchText) ||
            pet.location.toLowerCase().includes(searchText);


        const matchesType =
            selectedType === "All" ||
            pet.type === selectedType;


        const matchesCondition =
            selectedCondition === "All" ||
            pet.condition === selectedCondition;


        return (
            matchesSearch &&
            matchesType &&
            matchesCondition
        );

    });


    displayPets(filteredPets);

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterPets
    );

}


if (typeFilter) {

    typeFilter.addEventListener(
        "change",
        filterPets
    );

}


if (conditionFilter) {

    conditionFilter.addEventListener(
        "change",
        filterPets
    );

}


/* =====================================
   PET DETAILS
===================================== */

function viewPet(id) {

    const pet = pets.find(function(item) {

        return item.id === id;

    });


    if (!pet) {
        return;
    }


    alert(

        "Pet Details\n\n" +

        "Name: " + pet.name + "\n" +

        "Type: " + pet.type + "\n" +

        "Location: " + pet.location + "\n" +

        "Condition: " + pet.condition + "\n\n" +

        pet.description

    );

}


/* =====================================
   ADOPTION DATA
===================================== */

const adoptionPets = [

    {
        id: 101,
        name: "Buddy",
        type: "Dog",
        location: "Visakhapatnam",
        condition: "Available",
        description: "Friendly dog looking for a loving family.",
        image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 102,
        name: "Bella",
        type: "Cat",
        location: "Hyderabad",
        condition: "Available",
        description: "Calm and friendly cat looking for a home.",
        image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 103,
        name: "Charlie",
        type: "Dog",
        location: "Vijayawada",
        condition: "Available",
        description: "Playful dog looking for a caring family.",
        image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
    }

];


const adoptionList =
    document.getElementById("adoptionList");


if (adoptionList) {

    adoptionPets.forEach(function(pet) {

        adoptionList.innerHTML +=
            createPetCard(pet);

    });

}


/* =====================================
   REPORT FORM
===================================== */

const petReportForm =
    document.getElementById("petReportForm");


if (petReportForm) {

    petReportForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const petName =
                document.getElementById("petName").value.trim();


            const petType =
                document.getElementById("petType").value;


            const condition =
                document.getElementById("condition").value;


            const location =
                document.getElementById("location").value.trim();


            const description =
                document.getElementById("description").value.trim();


            const contact =
                document.getElementById("contact").value.trim();


            const message =
                document.getElementById("formMessage");


            if (
                petName === "" ||
                petType === "" ||
                condition === "" ||
                location === "" ||
                description === "" ||
                contact === ""
            ) {

                message.innerHTML =
                    "Please fill in all required fields.";

                message.style.color = "red";

                return;

            }


            if (contact.length < 10) {

                message.innerHTML =
                    "Please enter a valid contact number.";

                message.style.color = "red";

                return;

            }


            const report = {

                name: petName,

                type: petType,

                condition: condition,

                location: location,

                description: description,

                contact: contact,

                date: new Date().toLocaleDateString()

            };


            localStorage.setItem(
                "latestPetReport",
                JSON.stringify(report)
            );


            message.innerHTML =
                "✓ Pet report submitted successfully!";

            message.style.color = "green";


            petReportForm.reset();

        }
    );

}
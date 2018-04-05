var db = require("../../../models");

function createSeeds() {
    //Create Departments
    db.Department.create({
        name: "Animals"
    });
    db.Department.create({
        name: "Drainage"
    });
    db.Department.create({
        name: "Landscape"
    });
    db.Department.create({
        name: "Neighborhoods"
    });
    db.Department.create({
        name: "Sidewalks"
    });
    db.Department.create({
        name: "Streets"
    });
    db.Department.create({
        name: "Trash"
    });
    db.Department.create({
        name: "Zoning"
    });

    //Create Requests
    db.Request.create({
        DepartmentId: 1,
        name: "Dead Animal Collection"
    });
    db.Request.create({
        DepartmentId: 2,
        name: "Blockage in a city drainage system"
    });
    db.Request.create({
        DepartmentId: 2,
        name: "Erosion along a creek or storm drain"
    });
    db.Request.create({
        DepartmentId: 2,
        name: "Flooding from a drainage structure"
    });
    db.Request.create({
        DepartmentId: 2,
        name: "Pollution in a creek, stream or lake"
    });
    db.Request.create({
        DepartmentId: 3,
        name: "Trees"
    });
    db.Request.create({
        DepartmentId: 4,
        name: "Boarded Up Residential Structure"
    });
    db.Request.create({
        DepartmentId: 4,
        name: "Graffiti"
    });
    db.Request.create({
        DepartmentId: 4,
        name: "High weeds & grass,junk in yard,etc."
    });
    db.Request.create({
        DepartmentId: 4,
        name: "Parking on Lawn 8 am - 5 pm M-F"
    });
    db.Request.create({
        DepartmentId: 4,
        name: "Parking on Lawn After Hours/Weekends"
    });
    db.Request.create({
        DepartmentId: 4,
        name: "Signs in Public Rights of Way"
    });
    db.Request.create({
        DepartmentId: 5,
        name: "Container Obstruction"
    });
    db.Request.create({
        DepartmentId: 5,
        name: "Obstruction"
    });
    db.Request.create({
        DepartmentId: 6,
        name: "Basketball Goal in Street"
    });
    db.Request.create({
        DepartmentId: 6,
        name: "New Sidewalk"
    });
    db.Request.create({
        DepartmentId: 6,
        name: "New Traffic Signal Request"
    });
    db.Request.create({
        DepartmentId: 6,
        name: "Pothole Repair"
    });
    db.Request.create({
        DepartmentId: 6,
        name: "Residential Traffic Calming Devices"
    });
    db.Request.create({
        DepartmentId: 6,
        name: "Right of Way Sight Obstructions"
    });
    db.Request.create({
        DepartmentId: 6,
        name: "Sidewalk Repair"
    });
    db.Request.create({
        DepartmentId: 6,
        name: "Street Sign Repair"
    });
    db.Request.create({
        DepartmentId: 6,
        name: "Streetlight Repair"
    });
    db.Request.create({
        DepartmentId: 6,
        name: "Traffic Signal Timing"
    });
    db.Request.create({
        DepartmentId: 7,
        name: "Schedule a Bulky Item Pickup"
    });
    db.Request.create({
        DepartmentId: 8,
        name: "Enforcement"
    });

    //Create Questions
    db.Question.create({
        RequestId: 1,
        label: "In street? How far off curb? Which side of street?",
        type: "text",
        choices: "",
        required: true
    });
    db.Question.create({
        RequestId: 1,
        label: "What kind of animal? Size? Color?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 2,
        label: "What type of issues are you experiencing? (Be Specific)",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 2,
        label: "Location of the problem? (Be specific)",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 2,
        label: "How long has the problem occured?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 2,
        label: "What is your preferred contact number?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 2,
        label: "Are there gate, dog, or other access issues?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 3,
        label: "What type of issues are you experiencing? (Be Specific)",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 3,
        label: "Location of the problem? (Be specific)",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 3,
        label: "How long has the problem occured?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 3,
        label: "What is your preferred contact number?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 3,
        label: "Are there gate, dog, or other access issues?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 4,
        label: "What type of issues are you experiencing? (Be Specific)",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 4,
        label: "Location of the problem? (Be specific)",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 4,
        label: "How long has the problem occured?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 4,
        label: "What is your preferred contact number?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 4,
        label: "Are there gate, dog, or other access issues?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 5,
        label: "Please describe the condition.",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 5,
        label: "Do you detect any odor?",
        type: "text",
        choices: "",
        required: true
    });
    db.Question.create({
        RequestId: 5,
        label: "Has the water turned an unusual color?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 5,
        label: "Is there an oily film or foamy appearance to the water?",
        type: "text",
        choices: "",
        required: true
    });
    db.Question.create({
        RequestId: 5,
        label: "When did you first observe this pollution?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 6,
        label: "Type of public tree inspection requesting?",
        type: "select",
        choices: "Damage to a Tree,Report a Hanging Limb,Tree Health/Condition,Assessment,Other",
        required: true
    });
    db.Question.create({
        RequestId: 8,
        label: "Is it located on private property?",
        type: "select",
        choices: "Yes,No,Don't Know",
        required: true
    });
    db.Question.create({
        RequestId: 8,
        label: "If on Interstate (e.g. I-485), what exits is it between?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 8,
        label: "Is the graffiti located on a building, sidewalk, sign, etc.?",
        type: "text",
        choices: "",
        required: true
    });
    db.Question.create({
        RequestId: 8,
        label: "Is profanity in the graffiti?",
        type: "text",
        choices: "Yes,No,Don't Know",
        required: true
    });
    db.Question.create({
        RequestId: 13,
        label: "In City Limits?",
        type: "select",
        choices: "Yes,No,Don't Know",
        required: false
    });
    db.Question.create({
        RequestId: 13,
        label: "Is the obstruction on the sidewalk?",
        type: "select",
        choices: "Yes,No,Don't Know",
        required: true
    });
    db.Question.create({
        RequestId: 13,
        label: "What is the obstruction?",
        type: "select",
        choices: "Roll-out Container,Recyling Bin",
        required: true
    });
    db.Question.create({
        RequestId: 13,
        label: "How long has obstruction been there?",
        type: "text",
        choices: "",
        required: true
    });
    db.Question.create({
        RequestId: 14,
        label: "In City Limits?",
        type: "select",
        choices: "Yes,No,Don't Know",
        required: false
    });
    db.Question.create({
        RequestId: 14,
        label: "Is the obstruction on the sidewalk?",
        type: "select",
        choices: "Yes,No,Don't Know",
        required: true
    });
    db.Question.create({
        RequestId: 14,
        label: "What is the obstruction?",
        type: "select",
        choices: "Car,Grass,Mud,Bulky Items,Yard Waste",
        required: true
    });
    db.Question.create({
        RequestId: 14,
        label: "How long has obstruction been there?",
        type: "text",
        choices: "",
        required: true
    });
    db.Question.create({
        RequestId: 15,
        label: "Time of day goal is in the street",
        type: "text",
        choices: "",
        required: true
    });
    db.Question.create({
        RequestId: 16,
        label: "Which side of the street, odd or even?",
        type: "select",
        choices: "Odd,Even",
        required: false
    });
    db.Question.create({
        RequestId: 16,
        label: "Between which two cross streets is the sidewalk needed?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 18,
        label: "Between which two cross streets?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 18,
        label: "Inbound or outbound curb lane or center lane?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 18,
        label: "Is this creating a traffic hazard?",
        type: "select",
        choices: "Yes,No,Don't Know",
        required: false
    });
    db.Question.create({
        RequestId: 18,
        label: "What is the severity of the pothole?",
        type: "select",
        choices: "1 - LIKELY TO DAMAGE VEHICLE,2 - SIGNIFICANT JOLT,3 - MINOR JOLT,4 - UNKNOWN",
        required: true
    });
    db.Question.create({
        RequestId: 19,
        label: "What type of calming mechanism is requested?",
        type: "select",
        choices: "Speed Humps,Stop Signs,Speed Reduction,Other",
        required: true
    });
    db.Question.create({
        RequestId: 19,
        label: "If other selected, please describe.",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 19,
        label: "If Stop signs, enter both intersecting street names.",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 20,
        label: "What is the obstruction type (Ex. fixtures,materials,etc…)",
        type: "select",
        choices: "Fixture,Permanent,Other",
        required: false
    });
    db.Question.create({
        RequestId: 20,
        label: "If other selected, please describe.",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 21,
        label: "What is the damage?",
        type: "text",
        choices: "",
        required: true
    });
    db.Question.create({
        RequestId: 22,
        label: "What is the Intersecting Street Name?",
        type: "text",
        choices: "",
        required: true
    });
    db.Question.create({
        RequestId: 22,
        label: "What was damaged?",
        type: "text",
        choices: "",
        required: true
    });
    db.Question.create({
        RequestId: 22,
        label: "What kind of sign (DO NOT ENTER STOP SIGNS)?",
        type: "text",
        choices: "",
        required: false
    });
    db.Question.create({
        RequestId: 22,
        label: "Is the sign lying on ground or missing?",
        type: "select",
        choices: "Lying on Ground,Missing",
        required: true
    });
    db.Question.create({
        RequestId: 23,
        label: "What is the exact location of the light needing repair?",
        type: "text",
        choices: "",
        required: true
    });
    db.Question.create({
        RequestId: 23,
        label: "Problem with the street light",
        type: "select",
        choices: "Never On,Continuously Burning,Cycles On and Off,Damage to Light Fixture,Damage to Pole,Other",
        required: true
    });
    db.Question.create({
        RequestId: 23,
        label: "Recurring Problem?",
        type: "select",
        choices: "Yes,No,Don't Know",
        required: true
    });
}

module.exports = createSeeds;
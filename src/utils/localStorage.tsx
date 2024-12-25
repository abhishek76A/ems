// localStorage.clear()

const employees = [
    {
        id: 2,
        firstName: "Ravi", // Added firstName property
        email: "ravi@gmail.com",
        password: "123",
        tasks: [
            {
                taskId: 1,
                title: "Complete Report",
                description: "Prepare the financial report for Q4.",
                date: "2024-12-15",
                category: "Finance",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                taskId: 2,
                title: "Team Meeting",
                description: "Discuss project updates with the team.",
                date: "2024-12-14",
                category: "Meetings",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 0,
            failed: 0,
        },
    },
    {
        id: 3,
        firstName: "Priya", // Added firstName property
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                taskId: 3,
                title: "Fix Bugs",
                description: "Resolve issues reported in the latest app release.",
                date: "2024-12-16",
                category: "Development",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                taskId: 4,
                title: "Code Review",
                description: "Review code submitted by peers.",
                date: "2024-12-13",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                taskId: 5,
                title: "Client Call",
                description: "Discuss project requirements with the client.",
                date: "2024-12-14",
                category: "Client Interaction",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
        ],
        taskCounts: {
            active: 2,
            newTask: 0,
            completed: 2,
            failed: 0,
        },
    },
    {
        id: 4,
        firstName: "Ayush", // Added firstName property
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                taskId: 6,
                title: "Design Mockups",
                description: "Create UI/UX mockups for the new feature.",
                date: "2024-12-15",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskId: 7,
                title: "Update Documentation",
                description: "Update the project documentation with recent changes.",
                date: "2024-12-13",
                category: "Documentation",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
            },
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0,
        },
    },
    {
        id: 5,
        firstName: "Sanya", // Added firstName property
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                taskId: 8,
                title: "System Upgrade",
                description: "Upgrade system software to the latest version.",
                date: "2024-12-14",
                category: "Maintenance",
                active: true,
                newTask: false,
                completed: false,
                failed: true,
            },
            {
                taskId: 9,
                title: "Inventory Check",
                description: "Conduct a stock inventory check.",
                date: "2024-12-15",
                category: "Logistics",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                taskId: 10,
                title: "Research New Tools",
                description: "Evaluate tools for improving team productivity.",
                date: "2024-12-16",
                category: "Research",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
        ],
        taskCounts: {
            active: 2,
            newTask: 2,
            completed: 0,
            failed: 1,
        },
    },
    {
        id: 6,
        firstName: "Aniket", // Added firstName property
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                taskId: 11,
                title: "Customer Feedback",
                description: "Analyze customer feedback surveys.",
                date: "2024-12-13",
                category: "Analysis",
                active: true,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                taskId: 12,
                title: "Product Testing",
                description: "Test the new product features for bugs.",
                date: "2024-12-14",
                category: "Testing",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
        ],
        taskCounts: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0,
        },
    },
];

const admin = [
    {
        id: 1,
        firstName: "Admin", // Added firstName property for admin
        email: "admin@example.com",
        password: "123",
    },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return { employees, admin };
};

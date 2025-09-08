document.addEventListener("DOMContentLoaded", () => {
  const dynamicContent = document.getElementById("dynamic-content");
  const navLinks = document.querySelectorAll(".nav-links a");
  const logo = document.querySelector(".logo");

  // Data for branches and subjects
  const branches = {
    "cse-ai": {
      name: "CSE-AI",
      icon: "fas fa-brain",
      years: {
        1: {
          "1st Semester": [
            "Programming Fundamentals",
            "Data Structures",
            "Web Development",
            "Discrete Mathematics",
          ],
          "2nd Semester": [
            "Computer Organization",
            "Algorithms",
            "Operating Systems",
            "Software Engineering",
          ],
        },
        2: {
          "3rd Semester": [
            "Artificial Intelligence",
            "Machine Learning",
            "Linear Algebra",
            "Reinforcement Learning",
          ],
          "4th Semester": [
            "Probability and Statistics",
            "Computer Vision",
            "Deep Learning",
            "Natural Language Processing",
          ],
        },
        3: {
          "5th Semester": [
            "AI Ethics",
            "AI in Healthcare",
            "Advanced ML",
            "Mobile Computing",
          ],
          "6th Semester": [
            "Capstone Project",
            "Blockchain",
            "Cyber Security",
            "Cloud Computing",
          ],
        },
        4: {
          "7th Semester": [
            "Data Analytics",
            "Big Data",
            "Information Security",
            "Advanced Algorithms",
          ],
          "8th Semester": [
            "Distributed Systems",
            "Advanced Topics in AI",
            "IoT",
            "Robotics",
          ],
        },
      },
    },
    cse: {
      name: "CSE",
      icon: "fas fa-desktop",
      years: {
        1: {
          "1st Semester": [
            "Discrete Mathematics",
            "Object-Oriented Programming",
            "Data Structures",
            "Algorithms",
          ],
          "2nd Semester": [
            "Computer Organization",
            "Operating Systems",
            "Software Engineering",
            "Computer Networks",
          ],
        },
        2: {
          "3rd Semester": [
            "Database Management",
            "Web Technologies",
            "Compiler Design",
            "Cyber Security",
          ],
          "4th Semester": [
            "Cloud Computing",
            "Mobile Computing",
            "Distributed Systems",
            "Data Analytics",
          ],
        },
        3: {
          "5th Semester": [
            "Big Data",
            "Information Security",
            "Advanced Algorithms",
            "Machine Learning",
          ],
          "6th Semester": [
            "Artificial Intelligence",
            "IoT",
            "Robotics",
            "Blockchain",
          ],
        },
        4: {
          "7th Semester": [
            "VLSI Design",
            "Optical Communication",
            "Satellite Communication",
            "Wireless Networks",
          ],
          "8th Semester": [
            "Capstone Project",
            "Advanced Topics in CS",
            "Software Testing",
            "Quantum Computing",
          ],
        },
      },
    },
    "ece-ai": {
      name: "ECE-AI",
      icon: "fas fa-microchip",
      years: {
        1: {
          "1st Semester": [
            "Circuit Analysis",
            "Digital Electronics",
            "Signals and Systems",
            "Microprocessors",
          ],
          "2nd Semester": [
            "Communication Systems",
            "Embedded Systems",
            "Robotics",
            "IoT",
          ],
        },
        2: {
          "3rd Semester": [
            "Analog Electronics",
            "Semiconductor Devices",
            "Electromagnetic Fields",
            "Control Systems",
          ],
          "4th Semester": [
            "VLSI Design",
            "Optical Communication",
            "Satellite Communication",
            "Wireless Networks",
          ],
        },
        3: {
          "5th Semester": [
            "Deep Learning",
            "Computer Vision",
            "Natural Language Processing",
            "AI Ethics",
          ],
          "6th Semester": [
            "AI in Healthcare",
            "Advanced ML",
            "Mobile Computing",
            "Distributed Systems",
          ],
        },
        4: {
          "7th Semester": [
            "Data Analytics",
            "Big Data",
            "Information Security",
            "Advanced Algorithms",
          ],
          "8th Semester": [
            "Capstone Project",
            "Advanced Topics in ECE-AI",
            "Software Testing",
            "Quantum Computing",
          ],
        },
      },
    },
    ece: {
      name: "ECE",
      icon: "fas fa-code-branch",
      years: {
        1: {
          "1st Semester": [
            "Analog Electronics",
            "Semiconductor Devices",
            "Electromagnetic Fields",
            "Control Systems",
          ],
          "2nd Semester": [
            "VLSI Design",
            "Optical Communication",
            "Satellite Communication",
            "Wireless Networks",
          ],
        },
        2: {
          "3rd Semester": [
            "Circuit Analysis",
            "Digital Electronics",
            "Signals and Systems",
            "Microprocessors",
          ],
          "4th Semester": [
            "Communication Systems",
            "Embedded Systems",
            "Robotics",
            "IoT",
          ],
        },
        3: {
          "5th Semester": [
            "Data Analytics",
            "Big Data",
            "Information Security",
            "Advanced Algorithms",
          ],
          "6th Semester": [
            "Machine Learning",
            "Artificial Intelligence",
            "Deep Learning",
            "Computer Vision",
          ],
        },
        4: {
          "7th Semester": [
            "Natural Language Processing",
            "AI Ethics",
            "AI in Healthcare",
            "Advanced ML",
          ],
          "8th Semester": [
            "Capstone Project",
            "Advanced Topics in ECE",
            "Software Testing",
            "Quantum Computing",
          ],
        },
      },
    },
    it: {
      name: "IT",
      icon: "fas fa-globe",
      years: {
        1: {
          "1st Semester": [
            "Fundamentals of IT",
            "Web Development",
            "Data Structures",
            "Object-Oriented Programming",
          ],
          "2nd Semester": [
            "Software Engineering",
            "Data Mining",
            "Cloud Computing",
            "Cyber Security",
          ],
        },
        2: {
          "3rd Semester": [
            "Blockchain",
            "Big Data Analytics",
            "Mobile Computing",
            "Distributed Systems",
          ],
          "4th Semester": [
            "Operating Systems",
            "Computer Networks",
            "Information Security",
            "Machine Learning",
          ],
        },
        3: {
          "5th Semester": [
            "Artificial Intelligence",
            "Deep Learning",
            "Computer Vision",
            "Natural Language Processing",
          ],
          "6th Semester": [
            "AI Ethics",
            "AI in Healthcare",
            "Advanced ML",
            "Capstone Project",
          ],
        },
        4: {
          "7th Semester": [
            "Advanced Topics in IT",
            "Software Testing",
            "Quantum Computing",
            "Data Analytics",
          ],
          "8th Semester": [
            "Advanced Algorithms",
            "Robotics",
            "IoT",
            "Satellite Communication",
          ],
        },
      },
    },
    aiml: {
      name: "AIML",
      icon: "fas fa-robot",
      years: {
        1: {
          "1st Semester": [
            "Introduction to AI",
            "Linear Algebra",
            "Probability and Statistics",
            "Reinforcement Learning",
          ],
          "2nd Semester": [
            "Neural Networks",
            "AI Ethics",
            "AI in Healthcare",
            "Advanced ML",
          ],
        },
        2: {
          "3rd Semester": [
            "Deep Learning",
            "Computer Vision",
            "Natural Language Processing",
            "Capstone Project",
          ],
          "4th Semester": ["Robotics", "IoT", "Data Science", "Big Data"],
        },
        3: {
          "5th Semester": [
            "Software Engineering",
            "Data Mining",
            "Cloud Computing",
            "Cyber Security",
          ],
          "6th Semester": [
            "Blockchain",
            "Mobile Computing",
            "Distributed Systems",
            "Advanced Algorithms",
          ],
        },
        4: {
          "7th Semester": [
            "Operating Systems",
            "Computer Networks",
            "Information Security",
            "Web Development",
          ],
          "8th Semester": [
            "Advanced Topics in AIML",
            "Software Testing",
            "Quantum Computing",
            "Advanced AI",
          ],
        },
      },
    },
    mae: {
      name: "MAE",
      icon: "fas fa-cogs",
      years: {
        1: {
          "1st Semester": [
            "Engineering Mechanics",
            "Thermodynamics",
            "Fluid Mechanics",
            "Strength of Materials",
          ],
          "2nd Semester": [
            "Kinematics of Machinery",
            "Heat Transfer",
            "Machine Design",
            "Manufacturing Processes",
          ],
        },
        2: {
          "3rd Semester": [
            "Industrial Engineering",
            "Automobile Engineering",
            "CAD/CAM",
            "Robotics",
          ],
          "4th Semester": [
            "Power Plant Engineering",
            "Mechatronics",
            "Finite Element Analysis",
            "Operations Research",
          ],
        },
        3: {
          "5th Semester": [
            "Fluid Power Engineering",
            "Refrigeration and Air Conditioning",
            "Tool Design",
            "Advanced Manufacturing Processes",
          ],
          "6th Semester": [
            "Computational Fluid Dynamics",
            "Composite Materials",
            "Industrial Automation",
            "Quality Management",
          ],
        },
        4: {
          "7th Semester": [
            "Supply Chain Management",
            "Aerospace Engineering",
            "Robotics and Automation",
            "Energy Management",
          ],
          "8th Semester": [
            "Capstone Project",
            "Advanced Topics in MAE",
            "Software Testing",
            "Quantum Computing",
          ],
        },
      },
    },
    dmam: {
      name: "DMAM",
      icon: "fas fa-chart-line",
      years: {
        1: {
          "1st Semester": [
            "Marketing Fundamentals",
            "Consumer Behavior",
            "Statistics for Marketing",
            "Principles of Management",
          ],
          "2nd Semester": [
            "Digital Marketing Strategy",
            "Web Analytics",
            "Data Visualization",
            "E-commerce Essentials",
          ],
        },
        2: {
          "3rd Semester": [
            "SEO and SEM",
            "Social Media Marketing",
            "Market Research",
            "Database Management",
          ],
          "4th Semester": [
            "Content Marketing",
            "Email Marketing",
            "Google Analytics Certification",
            "Business Communication",
          ],
        },
        3: {
          "5th Semester": [
            "Predictive Analytics",
            "Marketing Automation",
            "CRM Strategies",
            "Ethical Hacking",
          ],
          "6th Semester": [
            "Capstone Project",
            "Financial Analysis",
            "Advanced Data Mining",
            "Digital Advertising",
          ],
        },
        4: {
          "7th Semester": [
            "Advanced Analytics",
            "Business Intelligence",
            "IoT in Marketing",
            "AI in Marketing",
          ],
          "8th Semester": [
            "Mobile Marketing",
            "Supply Chain Management",
            "Software Testing",
            "Quantum Computing",
          ],
        },
        5: {
          "9th Semester": [
            "Advanced Topics in DMAM",
            "Software Testing",
            "Quantum Computing",
            "Communication Skills",
          ],
          "10th Semester": [
            "Advanced AI",
            "Capstone Project",
            "Data Analytics",
            "Robotics",
          ],
        },
      },
    },
    mac: {
      name: "MAC",
      icon: "fas fa-industry",
      years: {
        1: {
          "1st Semester": [
            "Engineering Physics",
            "Engineering Chemistry",
            "Engineering Mathematics",
            "Communication Skills",
          ],
          "2nd Semester": [
            "Engineering Graphics",
            "Computer Programming",
            "Workshop Practice",
            "Material Science",
          ],
        },
        2: {
          "3rd Semester": [
            "Thermodynamics",
            "Fluid Mechanics",
            "Manufacturing Technology",
            "Machine Design",
          ],
          "4th Semester": [
            "Automobile Engineering",
            "Robotics",
            "CAD/CAM",
            "Mechatronics",
          ],
        },
        3: {
          "5th Semester": [
            "Automation",
            "Industrial Automation",
            "CNC Machines",
            "Quality Control",
          ],
          "6th Semester": [
            "Supply Chain Management",
            "Production Planning",
            "Operations Research",
            "Industrial Management",
          ],
        },
        4: {
          "7th Semester": [
            "Advanced Manufacturing",
            "Renewable Energy Systems",
            "Artificial Intelligence",
            "Machine Learning",
          ],
          "8th Semester": [
            "Capstone Project",
            "Advanced Topics in MAC",
            "Software Testing",
            "Quantum Computing",
          ],
        },
      },
    },
  };

  const holidays = {
    2023: {
      January: ["14-Makar Sankranti", "26-Republic Day"],
      March: ["8-Holi"],
      August: ["15-Independence Day"],
      October: ["2-Gandhi Jayanti", "24-Dussehra"],
      November: ["12-Diwali"],
    },
    2024: {
      January: ["26-Republic Day"],
      March: ["25-Holi"],
      August: ["15-Independence Day"],
      October: ["2-Gandhi Jayanti", "12-Dussehra"],
      November: ["1-Diwali"],
    },
    2025: {
      August: [
        "11 - Orientation Program",
        "12 to 29 - Induction Program (UG/PG/PhD)",
        "11 - UG Registration Starts",
        "04 - Classes Start (pre-2024)",
        "05 - Classes Start (PG/PhD)",
        "12 - Classes Start (UG)",
      ],
      October: [
        "09 to 17 - Mid Term Examination (All Programs)",
        "Alumni Meet – Autumn",
        "AIST-2025 & ICMEC-2025 International Conferences",
      ],
      November: [
        "05 - Mid-Term Marks Display",
        "20 - Diwali",
        "Alumni Meet cum Industry/Institution Networking Meet",
        "8th Convocation (IGDTUW)",
      ],
      December: [
        "01 to 05 - End Term Internal Practical",
        "08 to 26 - End Term Theory Exams",
        "29 - Winter Break Begins",
      ],
    },
    2026: {
      January: [
        "12 to 19 - Even Semester Registration (All Programs)",
        "12 - Classes Begin (All Programs)",
        "Alumni Meet - Spring",
      ],
      February: ["05 to 07 - Techno-Cultural Fest (TARANGANA and INNERVE)"],
      March: [
        "06 to 13 - Mid Term Exams (All Programs)",
        "13 to 14 - IGNITE (Sports Meet)",
        "Industry Academia Connect (One Week)",
        "27 - Mid Term Marks Display",
      ],
      April: ["20 to 01 May - End Term Practical Exams (During Lab Timings)"],
      May: ["04 to 22 - End Term Theory Exams", "25 - Summer Break Starts"],
      June: [
        "Faculty Summer Vacation Starts (from 01, 08 or 15 June based on approval)",
      ],
      July: [
        "Summer Internships / Workshops Continue",
        "Results of Even Sem to be Declared by Early July",
      ],
    },
  };

  const dsaQuestions = {
    easy: [
      {
        q: "Write a function that reverses a string.",
        fn: (str) => str.split("").reverse().join(""),
      },
      {
        q: "Check if a number is a palindrome.",
        fn: (num) =>
          num.toString() === num.toString().split("").reverse().join(""),
      },
      {
        q: "Find the largest number in an array.",
        fn: (arr) => Math.max(...arr),
      },
      {
        q: "Check if a string contains a specific character.",
        fn: (str, char) => str.includes(char),
      },
      {
        q: "Sum all numbers in an array.",
        fn: (arr) => arr.reduce((acc, curr) => acc + curr, 0),
      },
    ],
    medium: [
      {
        q: "Write a function to remove duplicates from an array.",
        fn: (arr) => [...new Set(arr)],
      },
      {
        q: "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
        fn: (arr, target) => {
          for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
              if (arr[i] + arr[j] === target) return [i, j];
            }
          }
          return [];
        },
      },
      {
        q: "Check if a given string is an anagram.",
        fn: (s1, s2) =>
          s1.split("").sort().join("") === s2.split("").sort().join(""),
      },
      {
        q: "Find the factorial of a number.",
        fn: (num) => {
          if (num < 0) return -1;
          else if (num === 0) return 1;
          else {
            return num * dsaQuestions.medium[3].fn(num - 1);
          }
        },
      },
      {
        q: "Check if a number is a prime number.",
        fn: (num) => {
          for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false;
          return num > 1;
        },
      },
    ],
    hard: [
      {
        q: "Implement a Binary Search Tree (BST) class with insert and search methods.",
        fn: () =>
          "BST implementation requires more complex code. Please write it in the editor.",
      },
      {
        q: "Given a list of intervals, merge all overlapping intervals.",
        fn: () =>
          "This requires a complex algorithm. Please write it in the editor.",
      },
      {
        q: "Implement a function to find the shortest path in a graph using Dijkstra's algorithm.",
        fn: () =>
          "This is an anced problem. Please write the code in the editor.",
      },
      {
        q: "Given an array, find the maximum subarray sum.",
        fn: () =>
          "This requires dynamic programming. Please write the code in the editor.",
      },
      {
        q: "Implement a function to check for balanced parentheses.",
        fn: () => "This requires a stack. Please write the code in the editor.",
      },
    ],
  };

  let currentQuestions = [];

  const initialEditorCode = `
// Write your code here
function solve(input) {
  // Your code goes here
}

// Example usage:
// console.log(solve("hello"));
// console.log(solve([1, 2, 3, 4]));
`;

  // Function to render the home page content
  const renderHome = () => {
    dynamicContent.innerHTML = `
                    <section class="welcome-section">
                        <div class="welcome-content">
                            <h1>Welcome to <br> IGDTUWHub</h1>
                            <p>The ultimate resource hub for collegians.<br>Explore notes, save resources, and much more!</p>
                        </div>
                        <div class="cube-container">
                            <div class="cube">
                                <div class="face front"></div>
                                <div class="face back"></div>
                                <div class="face right"></div>
                                <div class="face left"></div>
                                <div class="face top"></div>
                                <div class="face bottom"></div>
                            </div>
                        </div>
                    </section>
                    <section class="branches-section section">
                        <h2>Resources by Branch</h2>
                        <div class="branches-container">
                            ${Object.keys(branches)
                              .map(
                                (key) => `
                                <div class="branch-card" data-branch="${key}">
                                    <i class="${branches[key].icon}"></i>
                                    <span>${branches[key].name}</span>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </section>
                    <section class="bottom-sections section">
                        <div class="games-section card">
                            <h2>Games</h2>
                            <div class="games-container">
                                <div class="game-card" data-game="tic-tac-toe">
                                    <i class="fas fa-times-circle"></i>
                                    <span>Tic-Tac-Toe</span>
                                </div>
                                <div class="game-card" data-game="memory">
                                    <i class="fas fa-brain"></i>
                                    <span>Memory</span>
                                </div>
                                <div class="game-card" data-game="puzzle">
                                    <i class="fas fa-puzzle-piece"></i>
                                    <span>Puzzle</span>
                                </div>
                                <div class="game-card" data-game="pong">
                                    <i class="fas fa-table-tennis"></i>
                                    <span>Pong</span>
                                </div>
                                <div class="game-card" data-game="coding">
                                    <i class="fas fa-code"></i>
                                    <span>Mini Coding Games</span>
                                </div>
                            </div>
                        </div>
                        <div class="quick-notes-section card">
                            <h2>Quick Notes</h2>
                            <textarea id="notes-area" placeholder="Write your notes here..."></textarea>
                            <div class="notes-buttons">
                                <button id="save-note-btn">Save Note</button>
                                <button id="save-pdf-btn">Save as PDF</button>
                            </div>
                            <div id="saved-notes-container"></div>
                        </div>
                    </section>
                `;
    loadNotes();
  };

  // Function to render the CGPA calculator
  const renderPerformance = () => {
    dynamicContent.innerHTML = `
                    <section class="performance-section section">
                        <h2>CGPA Calculator</h2>
                        <div class="table-container card">
                            <div id="semester-selector-container">
                                <label for="semester-select">Select Semester:</label>
                                <select id="semester-select"></select>
                            </div>
                            <table id="cgpa-table">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Credits</th>
                                        <th>Expected Marks</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="subjects-table-body">
                                </tbody>
                            </table>
                            <button id="add-subject-btn" class="add-subject-btn">Add Subject</button>
                            <button id="calculate-btn" class="calculate-btn">Calculate CGPA</button>
                            <button id="save-subjects-btn" class="add-subject-btn">Save This Semester's Subjects</button>
                        </div>
                        <div id="cgpa-result"></div>
                    </section>
                    <section class="gpa-comparison-section section">
                        <h2>Compare CGPA</h2>
                        <div class="card">
                            <div id="gpa-compare-inputs">
                                <input type="number" id="gpa1-input" placeholder="Semester 1 GPA" min="0" max="10">
                                <input type="number" id="gpa2-input" placeholder="Semester 2 GPA" min="0" max="10">
                                <button id="compare-btn">Compare</button>
                            </div>
                            <div style="width: 100%;">
                                <canvas id="gpa-comparison-chart"></canvas>
                                <div id="gpa-comparison-message" style="text-align: center; margin-top: 1rem; font-weight: bold;"></div>
                            </div>
                        </div>
                    </section>
                `;
    setupCalculator();
    setupGpaComparisonChart();
  };

  const setupGpaComparisonChart = () => {
    const ctx = document
      .getElementById("gpa-comparison-chart")
      .getContext("2d");
    const gpa1Input = document.getElementById("gpa1-input");
    const gpa2Input = document.getElementById("gpa2-input");
    const compareBtn = document.getElementById("compare-btn");
    const messageEl = document.getElementById("gpa-comparison-message");

    const gpaChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Semester 1", "Semester 2"],
        datasets: [
          {
            label: "CGPA",
            data: [0, 0],
            backgroundColor: ["#4b89dc", "#ffc107"],
            borderColor: ["#4b89dc", "#ffc107"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              color: "#e0e0e0",
            },
          },
          x: {
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
              color: "#e0e0e0",
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#e0e0e0",
            },
          },
        },
      },
    });

    compareBtn.addEventListener("click", () => {
      const gpa1 = parseFloat(gpa1Input.value) || 0;
      const gpa2 = parseFloat(gpa2Input.value) || 0;

      gpaChart.data.datasets[0].data = [gpa1, gpa2];
      gpaChart.update();

      let message = "";
      if (gpa2 > gpa1) {
        message = "Great progress! Your GPA has improved.";
      } else if (gpa2 < gpa1) {
        message = "You can do it! Your GPA has slightly decreased.";
      } else {
        message = "Your GPA has stayed consistent. Keep up the good work!";
      }
      messageEl.textContent = message;
    });
  };

  // Function to render the About Us page
  const renderAboutUs = () => {
    dynamicContent.innerHTML = `
                    <section class="about-us-section section">
                        <h2>About This Website</h2>
                        <div class="card" style="margin-bottom: 2rem;">
                            <p>IGDTUWHub is a community-driven platform designed by students for students of Indira Gandhi Delhi Technical University for Women. Our mission is to provide a centralized hub for all academic resources, making college life easier and more collaborative.Here, you can find a vast collection of notes, previous year's question papers (PYQs), and other study materials submitted and shared by your peers. We believe in the power of shared knowledge to help every student succeed. ✨</p>
                            <p>This platform also features a CGPA calculator to help you track your academic performance, fun games to take a break from studying, and a personal notes section to save your quick thoughts and ideas. We are constantly working to improve and add new features to support the IGDTUW community. </p>
                        </div>
                        <h2>Meet Our Team Members</h2>
                        <div class="profiles-container">
                            <div class="profile-card">
                                <h3>Manvi</h3>
                                <p>Hi, I'm Manvi! I'm really passionate about learning new things, taking on challenges, and finding creative ways to solve problems. I'm always excited to share what I know and grow together with others.</p>
                                <p><strong>Branch:</strong> IT (2028)</p>
                                <div class="social-links">
                                    <a href="https://www.linkedin.com/in/manviiiisinhhh/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://www.instagram.com/manvisinhha/" target="_blank"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div class="profile-card">
                                <h3>Arni</h3>
                                <p>Arni is an IT student specializing in data structures and algorithms. She enjoys solving complex coding problems and building efficient systems.</p>
                                <p><strong>Branch:</strong> IT (2028)</p>
                                <div class="social-links">
                                    <a href="https://www.linkedin.com/in/arni-goyal-b2639b321/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://www.instagram.com/arni_1408/" target="_blank"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div class="profile-card">
                                <h3>Divya</h3>
                                <p>Divya is an IT student with a keen interest in cybersecurity and cloud computing. She is dedicated to building secure and scalable applications.</p>
                                <p><strong>Branch:</strong> IT (2028)</p>
                                <div class="social-links">
                                    <a href="https://www.linkedin.com/in/divya-yadav-3b7592322/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://www.instagram.com/divy.ayadav482/" target="_blank"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            
                        </div>
                        <div class="feedback-section card" style="margin-top: 2rem;">
                            <h3 >Feedback</h3>
                            <p>We'd love to hear from you!</p>
                            <a href="https://forms.gle/idwSg4rbAU1tX6AW6" target="_blank" class="add-subject-btn" style="text-align: center; display: block;">Click here to give feedback</a>
                        </div>
                    </section>
                `;
  };

  const renderEventCalendar = () => {
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    const renderCalendar = (month, year) => {
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      const monthName = new Date(year, month).toLocaleString("default", {
        month: "long",
      });
      const yearHolidays = holidays[year] || {};
      const monthHolidays = yearHolidays[monthName] || [];

      let calendarHtml = "";
      for (let i = 0; i < firstDayOfMonth; i++) {
        calendarHtml += "<div></div>";
      }
      for (let i = 1; i <= daysInMonth; i++) {
        const isToday =
          i === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear();
        const holiday = monthHolidays.find(
          (h) => parseInt(h.split("-")[0]) === i
        );
        const eventName = holiday ? holiday.split("-")[1] : "";

        calendarHtml += `<div class="day ${
          isToday ? "today" : ""
        }" title="${eventName}">
                            ${i}
                            ${
                              eventName
                                ? `<p style="font-size: 0.7rem; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${eventName}</p>`
                                : ""
                            }
                        </div>`;
      }
      document.getElementById(
        "current-month-year"
      ).textContent = `${monthName} ${year}`;
      document.getElementById("calendar-grid").innerHTML = `
                        <div class="day header">Sun</div>
                        <div class="day header">Mon</div>
                        <div class="day header">Tue</div>
                        <div class="day header">Wed</div>
                        <div class="day header">Thu</div>
                        <div class="day header">Fri</div>
                        <div class="day header">Sat</div>
                        ${calendarHtml}
                    `;
    };

    dynamicContent.innerHTML = `
                    <section class="events-section section">
                        <h2>Event Calendar</h2>
                        <div class="card">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <button id="prev-month-btn"> &lt; </button>
                                <h3 id="current-month-year"></h3>
                                <button id="next-month-btn"> &gt; </button>
                            </div>
                            <div class="calendar-grid" id="calendar-grid"></div>
                            <div style="margin-top: 20px;">
                                <label for="date-picker">Select a Date:</label>
                                <input type="date" id="date-picker" value="${
                                  today.toISOString().split("T")[0]
                                }">
                                <button id="add-event-btn">Add Event</button>
                            </div>
                        </div>
                    </section>
                `;

    document.getElementById("prev-month-btn").addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(currentMonth, currentYear);
    });

    document.getElementById("next-month-btn").addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(currentMonth, currentYear);
    });

    document.getElementById("date-picker").addEventListener("change", (e) => {
      const selectedDate = new Date(e.target.value);
      currentMonth = selectedDate.getMonth();
      currentYear = selectedDate.getFullYear();
      renderCalendar(currentMonth, currentYear);
    });

    document.getElementById("add-event-btn").addEventListener("click", () => {
      const selectedDate = document.getElementById("date-picker").value;
      const eventName = prompt("Enter event name:");
      if (selectedDate && eventName) {
        alert(`Event "${eventName}" added for ${selectedDate}`);
      }
    });

    renderCalendar(currentMonth, currentYear);
  };

  // Function to render the resources page
  const renderResources = () => {
    const savedCourses = JSON.parse(
      localStorage.getItem("igdtuw_saved_courses") || "null"
    );
    let loadCoursesButton = "";
    if (savedCourses) {
      loadCoursesButton = `<button id="load-saved-courses-btn" class="add-subject-btn" style="margin-top: 1rem;">Load My Saved Courses</button>`;
    }

    dynamicContent.innerHTML = `
                    <section class="resources-section section">
                        <h2>Resources by Branch</h2>
                        <div id="search-container">
                            <input type="text" id="search-bar" placeholder="Search for a branch...">
                            ${loadCoursesButton}
                        </div>
                        <div class="branches-container" id="branches-container">
                            ${Object.keys(branches)
                              .map(
                                (key) => `
                                <div class="branch-card" data-branch="${key}">
                                    <i class="${branches[key].icon}"></i>
                                    <span>${branches[key].name}</span>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </section>
                `;
    document.getElementById("search-bar").addEventListener("keyup", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const branchCards = document.querySelectorAll(".branch-card");
      branchCards.forEach((card) => {
        const branchName = card.querySelector("span").textContent.toLowerCase();
        if (branchName.includes(searchTerm)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });

    if (savedCourses) {
      document
        .getElementById("load-saved-courses-btn")
        .addEventListener("click", () => {
          if (
            savedCourses &&
            savedCourses.branch &&
            savedCourses.year &&
            savedCourses.semester
          ) {
            renderSemesterSubjects(
              savedCourses.branch,
              savedCourses.year,
              savedCourses.semester
            );
          } else {
            alert("Saved courses data is corrupt or incomplete.");
            localStorage.removeItem("igdtuw_saved_courses");
          }
        });
    }
  };

  // Function to render a specific branch's year content
  const renderBranchYears = (branchId) => {
    const branch = branches[branchId];
    dynamicContent.innerHTML = `
                    <section class="years-section section">
                        <h2>${branch.name} - Select Year</h2>
                        <div class="years-container" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-top: 2rem;">
                            ${Object.keys(branch.years)
                              .map(
                                (year) => `
                                <div class="year-card" data-branch="${branchId}" data-year="${year}">
                                    <span>${year} Year</span>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                         <button class="game-back-btn" id="back-to-branches-btn">Back to Branches</button>
                    </section>
                `;
    document
      .getElementById("back-to-branches-btn")
      .addEventListener("click", renderResources);
  };

  const renderYearSemesters = (branchId, year) => {
    const semesters = branches[branchId].years[year];
    dynamicContent.innerHTML = `
                    <section class="semesters-section section">
                        <h2>${branches[branchId].name} - ${year} Year</h2>
                        <div class="semesters-container" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-top: 2rem;">
                            ${Object.keys(semesters)
                              .map(
                                (semester) => `
                                <div class="semester-card" data-branch="${branchId}" data-year="${year}" data-semester="${semester}">
                                    <span>${semester}</span>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                        <button class="game-back-btn" id="save-courses-btn" data-branch="${branchId}" data-year="${year}">Save My Courses</button>
                        <button class="game-back-btn" id="back-to-years-btn" data-branch="${branchId}">Back to Years</button>
                    </section>
                `;
    document
      .getElementById("back-to-years-btn")
      .addEventListener("click", () => {
        renderBranchYears(branchId);
      });
    document
      .getElementById("save-courses-btn")
      .addEventListener("click", () => {
        const selectedSemester = prompt(
          "Please enter the semester you want to save (e.g., '1st Semester'):"
        );
        if (selectedSemester && semesters[selectedSemester]) {
          localStorage.setItem(
            "igdtuw_saved_courses",
            JSON.stringify({
              branch: branchId,
              year: year,
              semester: selectedSemester,
            })
          );
          alert("Courses saved successfully!");
        } else {
          alert("Invalid semester entered.");
        }
      });
  };

  const renderSemesterSubjects = (branchId, year, semester) => {
    const subjects = branches[branchId]?.years[year]?.[semester];
    if (!subjects) {
      alert(
        "Course data not found. Please try again or clear your saved courses."
      );
      renderResources();
      return;
    }
    let subjectBoxesHtml = subjects
      .map(
        (subject) => `
                    <div class="subject-box card" data-subject="${subject}" data-branch="${branchId}" data-year="${year}" data-semester="${semester}">
                        <span>${subject}</span>
                    </div>
                `
      )
      .join("");

    dynamicContent.innerHTML = `
                    <section class="subjects-section section">
                        <h2>${semester} Subjects</h2>
                        <div class="subject-boxes-container" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
                            ${subjectBoxesHtml}
                        </div>
                        <button class="game-back-btn" id="back-to-semesters" data-branch="${branchId}" data-year="${year}">Back to Semesters</button>
                    </section>
                `;
  };

  const renderSubjectOptions = (subject, branch, year, semester) => {
    dynamicContent.innerHTML = `
                    <section class="subject-options-section section">
                        <h2>${subject}</h2>
                        <div class="notes-and-pyq-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                            <div class="card notes-option" data-type="notes" data-subject="${subject}" data-branch="${branch}" data-year="${year}" data-semester="${semester}" style="padding: 2rem; font-size: 1.5rem;">
                                Notes
                            </div>
                            <div class="card pyq-option" data-type="pyq" data-subject="${subject}" data-branch="${branch}" data-year="${year}" data-semester="${semester}" style="padding: 2rem; font-size: 1.5rem;">
                                PYQ
                            </div>
                        </div>
                        <button class="game-back-btn" id="back-to-subjects" data-branch="${branch}" data-year="${year}" data-semester="${semester}">Back to Subjects</button>
                    </section>
                `;
  };

  const renderUnitSelection = (subject, type, branch, year, semester) => {
    dynamicContent.innerHTML = `
                    <section class="unit-selection-section section">
                        <h2>${subject} - ${type.toUpperCase()}</h2>
                        <div class="unit-list">
                            <ul>
                                <li class="card" data-unit="1" data-subject="${subject}" data-type="${type}" data-branch="${branch}" data-year="${year}" data-semester="${semester}">Unit-1</li>
                                <li class="card" data-unit="2" data-subject="${subject}" data-type="${type}" data-branch="${branch}" data-year="${year}" data-semester="${semester}">Unit-2</li>
                                <li class="card" data-unit="3" data-subject="${subject}" data-type="${type}" data-branch="${branch}" data-year="${year}" data-semester="${semester}">Unit-3</li>
                                <li class="card" data-unit="4" data-subject="${subject}" data-type="${type}" data-branch="${branch}" data-year="${year}" data-semester="${semester}">Unit-4</li>
                            </ul>
                        </div>
                        <button class="game-back-btn" id="back-to-subject-options" data-subject="${subject}" data-branch="${branch}" data-year="${year}" data-semester="${semester}">Back to Options</button>
                    </section>
                `;
  };

  const renderPyqSelection = (subject, branch, year, semester) => {
    dynamicContent.innerHTML = `
                    <section class="pyq-selection-section section">
                        <h2>${subject} - PYQ</h2>
                        <div class="pyq-options-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
                            <div class="card mid-sem-option" data-type="pyq" data-term="mid" data-subject="${subject}" data-branch="${branch}" data-year="${year}" data-semester="${semester}" style="padding: 2rem; font-size: 1.5rem;">
                                Mid-Sem
                            </div>
                            <div class="card end-sem-option" data-type="pyq" data-term="end" data-subject="${subject}" data-branch="${branch}" data-year="${year}" data-semester="${semester}" style="padding: 2rem; font-size: 1.5rem;">
                                End-Sem
                            </div>
                        </div>
                        <button class="game-back-btn" id="back-to-subject-options" data-subject="${subject}" data-branch="${branch}" data-year="${year}" data-semester="${semester}">Back to Options</button>
                    </section>
                `;
  };

  const renderPyqViewer = (subject, term) => {
    const notesContent = `
                    <h2>${subject} - ${term.toUpperCase()} PYQ</h2>
                    <div class="card">
                        <h3>Example Questions for ${term.toUpperCase()}</h3>
                        <p>This is a placeholder for the Previous Year Questions. This is a dummy example to show how the questions would be displayed.</p>
                        <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank">View as PDF</a>
                    </div>
                `;
    dynamicContent.innerHTML = `
                    <section class="notes-viewer section">
                        ${notesContent}
                         <button class="game-back-btn" id="back-to-pyq-options" data-subject="${subject}">Back to PYQ Options</button>
                    </section>
                `;
  };

  const renderUnitViewer = (subject, type, unit) => {
    const notesContent = `
                    <h2>${subject} - ${type.toUpperCase()} | Unit ${unit}</h2>
                    <div class="card">
                        <h3>Example Content for Unit ${unit}</h3>
                        <p>This is a placeholder for the notes and resources. In a real-world application, this content would be fetched dynamically from a database. This is a dummy example to show how the notes would be displayed.</p>
                        <p>This section can include text, images, and other media relevant to the unit.</p>
                        <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank">View as PDF</a>
                    </div>
                `;
    dynamicContent.innerHTML = `
                    <section class="notes-viewer section">
                        ${notesContent}
                         <button class="game-back-btn" id="back-to-unit-selection" data-subject="${subject}" data-type="${type}">Back to Units</button>
                    </section>
                `;
                
  };

  // Helper functions for games and notes
  const loadNotes = () => {
    const notesArea = document.getElementById("notes-area");
    const saveNoteBtn = document.getElementById("save-note-btn");
    const savePdfBtn = document.getElementById("save-pdf-btn");
    const savedNotesContainer = document.getElementById(
      "saved-notes-container"
    );

    const savedNotes = JSON.parse(
      localStorage.getItem("igdtuw_saved_notes") || "[]"
    );

    savedNotesContainer.innerHTML = "";
    savedNotes.forEach((note, index) => {
      const noteElement = document.createElement("div");
      noteElement.classList.add("saved-note");
      noteElement.innerHTML = `
                        <div>
                            <p>${note.text}</p>
                            <div class="note-date">${new Date(
                              note.date
                            ).toLocaleString()}</div>
                        </div>
                        <button class="remove-note-btn" data-index="${index}">Remove</button>
                    `;
      savedNotesContainer.appendChild(noteElement);
    });

    if (saveNoteBtn) {
      saveNoteBtn.addEventListener("click", () => {
        const noteContent = notesArea.value.trim();
        if (noteContent) {
          const newNote = {
            text: noteContent,
            date: new Date().toISOString(),
          };
          savedNotes.push(newNote);
          localStorage.setItem(
            "igdtuw_saved_notes",
            JSON.stringify(savedNotes)
          );
          notesArea.value = "";
          loadNotes(); // Reload notes to show the new one
        }
      });
    }

    if (savePdfBtn) {
      savePdfBtn.addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const notesContent = document.getElementById("notes-area").value;
        if (notesContent) {
          doc.text(notesContent, 10, 10);
          doc.save("my-notes.pdf");
        } else {
          alert("Please write some notes to save as PDF.");
        }
      });
    }

    document.querySelectorAll(".remove-note-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        savedNotes.splice(index, 1);
        localStorage.setItem("igdtuw_saved_notes", JSON.stringify(savedNotes));
        loadNotes();
      });
    });
  };

  const setupCalculator = () => {
    const tableBody = document.getElementById("subjects-table-body");
    const addSubjectBtn = document.getElementById("add-subject-btn");
    const calculateBtn = document.getElementById("calculate-btn");
    const saveSubjectsBtn = document.getElementById("save-subjects-btn");
    const cgpaResultDiv = document.getElementById("cgpa-result");
    const semesterSelect = document.getElementById("semester-select");

    const semesters = Array.from({ length: 8 }, (_, i) => `Semester ${i + 1}`);
    semesters.forEach((sem) => {
      const option = document.createElement("option");
      option.value = sem;
      option.textContent = sem;
      semesterSelect.appendChild(option);
    });

    let currentSemester = semesterSelect.value;

    const loadSubjects = (semester) => {
      const savedSubjects = JSON.parse(
        localStorage.getItem(`cgpa_${semester}`) || "[]"
      );
      tableBody.innerHTML = "";
      if (savedSubjects.length > 0) {
        savedSubjects.forEach((sub) =>
          addSubjectRow(sub.name, sub.credits, sub.marks)
        );
      } else {
        addSubjectRow();
      }
    };

    const saveSubjects = () => {
      const rows = document.querySelectorAll("#subjects-table-body tr");
      const subjectsToSave = [];
      rows.forEach((row) => {
        const subjectName = row.querySelector('input[type="text"]').value;
        const credits = row.querySelector(".credits-input").value;
        const marks = row.querySelector(".marks-input").value;
        subjectsToSave.push({
          name: subjectName,
          credits: credits,
          marks: marks,
        });
      });
      localStorage.setItem(
        `cgpa_${currentSemester}`,
        JSON.stringify(subjectsToSave)
      );
      alert("Subjects saved successfully!");
    };

    semesterSelect.addEventListener("change", (e) => {
      currentSemester = e.target.value;
      loadSubjects(currentSemester);
    });

    loadSubjects(currentSemester);

    addSubjectBtn.addEventListener("click", () => {
      addSubjectRow();
    });

    calculateBtn.addEventListener("click", () => {
      const rows = document.querySelectorAll("#subjects-table-body tr");
      let totalCredits = 0;
      let totalGradePoints = 0;
      let isValid = true;

      rows.forEach((row) => {
        const creditsInput = row.querySelector(".credits-input");
        const marksInput = row.querySelector(".marks-input");

        const credits = parseFloat(creditsInput.value);
        const marks = parseFloat(marksInput.value);

        if (
          isNaN(credits) ||
          isNaN(marks) ||
          credits < 0 ||
          marks < 0 ||
          marks > 100
        ) {
          isValid = false;
          alert("Please enter valid numbers for credits and marks (0-100).");
          return;
        }

        const gpaPoint = getGpaPoint(marks);
        totalCredits += credits;
        totalGradePoints += credits * gpaPoint;
      });

      if (isValid && totalCredits > 0) {
        const cgpa = totalGradePoints / totalCredits;
        cgpaResultDiv.innerHTML = `Your CGPA is: <strong>${cgpa.toFixed(
          2
        )}</strong>`;
      } else if (isValid) {
        cgpaResultDiv.innerHTML = `Please add at least one subject to calculate.`;
      } else {
        cgpaResultDiv.innerHTML = "";
      }
    });

    saveSubjectsBtn.addEventListener("click", saveSubjects);
  };

  const addSubjectRow = (name = "", credits = 0, marks = 0) => {
    const tableBody = document.getElementById("subjects-table-body");
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td><input type="text" value="${name}" placeholder="Subject Name"></td>
                    <td><input type="number" class="credits-input" value="${credits}" min="0"></td>
                    <td><input type="number" class="marks-input" value="${marks}" min="0" max="100"></td>
                    <td><button class="remove-subject-btn">Remove</button></td>
                `;
    tableBody.appendChild(row);

    // Add event listener for the new remove button
    row.querySelector(".remove-subject-btn").addEventListener("click", (e) => {
      e.target.closest("tr").remove();
    });
  };

  const getGpaPoint = (marks) => {
    if (marks >= 90) return 10;
    else if (marks >= 80) return 9;
    else if (marks >= 70) return 8;
    else if (marks >= 60) return 7;
    else if (marks >= 50) return 6;
    else return 0;
  };

  // Game Logic
  const renderGames = () => {
    dynamicContent.innerHTML = `
                    <section class="games-section section">
                        <h2>Games</h2>
                        <div class="games-container">
                            <div class="game-card" data-game="tic-tac-toe">
                                <i class="fas fa-times-circle"></i>
                                <span>Tic-Tac-Toe</span>
                            </div>
                            <div class="game-card" data-game="memory">
                                <i class="fas fa-brain"></i>
                                <span>Memory</span>
                            </div>
                            <div class="game-card" data-game="puzzle">
                                <i class="fas fa-puzzle-piece"></i>
                                <span>Puzzle</span>
                            </div>
                            <div class="game-card" data-game="pong">
                                <i class="fas fa-table-tennis"></i>
                                <span>Pong</span>
                            </div>
                            <div class="game-card" data-game="coding">
                                <i class="fas fa-code"></i>
                                <span>Mini Coding Games</span>
                            </div>
                        </div>
                    </section>
                `;
  };

  const renderTicTacToe = () => {
    dynamicContent.innerHTML = `
                    <section class="game-section section">
                        <h2>Tic-Tac-Toe</h2>
                        <div class="game-container">
                            <div class="game-board" id="tictactoe-board">
                                ${Array(9)
                                  .fill()
                                  .map(
                                    (_, i) =>
                                      `<div class="game-cell" data-index="${i}"></div>`
                                  )
                                  .join("")}
                            </div>
                            <div class="game-message" id="tictactoe-message">Player X's turn</div>
                            <button class="game-reset-btn" id="tictactoe-reset">Reset</button>
                            <button class="game-back-btn" id="game-back-btn">Back to Games</button>
                        </div>
                    </section>
                `;
    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let isGameActive = true;
    const messageEl = document.getElementById("tictactoe-message");
    const cells = document.querySelectorAll("#tictactoe-board .game-cell");
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const handleCellClick = (e) => {
      const cell = e.target;
      const index = cell.dataset.index;
      if (board[index] !== "" || !isGameActive) return;
      board[index] = currentPlayer;
      cell.innerHTML = currentPlayer;
      cell.style.color = currentPlayer === "X" ? "#4b89dc" : "#d63384";
      checkResult();
    };

    const checkResult = () => {
      let roundWon = false;
      for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];
        if (a === "" || b === "" || c === "") continue;
        if (a === b && b === c) {
          roundWon = true;
          break;
        }
      }

      if (roundWon) {
        messageEl.innerHTML = `Player ${currentPlayer} has won!`;
        isGameActive = false;
        return;
      }
      if (!board.includes("")) {
        messageEl.innerHTML = `Game ended in a draw!`;
        isGameActive = false;
        return;
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      messageEl.innerHTML = `Player ${currentPlayer}'s turn`;
    };

    document.getElementById("tictactoe-reset").addEventListener("click", () => {
      board = ["", "", "", "", "", "", "", "", ""];
      isGameActive = true;
      currentPlayer = "X";
      messageEl.innerHTML = `Player X's turn`;
      cells.forEach((cell) => (cell.innerHTML = ""));
    });

    cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
  };

  const renderMemoryGame = () => {
    dynamicContent.innerHTML = `
                    <section class="game-section section">
                        <h2>Memory Game</h2>
                        <div class="game-container">
                            <div class="memory-grid" id="memory-grid"></div>
                            <div class="game-message" id="memory-message">Find the matching pairs!</div>
                            <button class="game-reset-btn" id="memory-reset">Reset</button>
                            <button class="game-back-btn" id="game-back-btn">Back to Games</button>
                        </div>
                    </section>
                `;
    const pairs = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const gameCards = [...pairs, ...pairs];
    let shuffledCards = gameCards.sort(() => 0.5 - Math.random());
    let firstCard = null;
    let secondCard = null;
    let lockBoard = true;
    let matchesFound = 0;
    const grid = document.getElementById("memory-grid");
    const messageEl = document.getElementById("memory-message");

    shuffledCards.forEach((value) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("memory-card", "flipped");
      cardElement.innerHTML = `<div class="back" style="background-color: #d63384;"></div><div class="front">${value}</div>`;
      grid.appendChild(cardElement);
    });

    setTimeout(() => {
      document
        .querySelectorAll(".memory-card")
        .forEach((card) => card.classList.remove("flipped"));
      lockBoard = false;
      messageEl.textContent = "Start playing!";
    }, 2000);

    grid.addEventListener("click", (e) => {
      const card = e.target.closest(".memory-card");
      if (!card || lockBoard) return;
      card.classList.add("flipped");

      if (!firstCard) {
        firstCard = card;
        return;
      }
      secondCard = card;
      checkForMatch();
    });

    function checkForMatch() {
      lockBoard = true;
      const isMatch =
        firstCard.querySelector(".front").textContent ===
        secondCard.querySelector(".front").textContent;
      if (isMatch) {
        disableCards();
      } else {
        unflipCards();
      }
    }

    function disableCards() {
      firstCard.classList.add("matched");
      secondCard.classList.add("matched");
      firstCard = null;
      secondCard = null;
      lockBoard = false;
      matchesFound++;
      if (matchesFound === gameCards.length / 2) {
        messageEl.textContent = "You won! You found all the pairs!";
      }
    }

    function unflipCards() {
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard = null;
        secondCard = null;
        lockBoard = false;
      }, 1000);
    }

    document
      .getElementById("memory-reset")
      .addEventListener("click", renderMemoryGame);
  };

  const renderPuzzleGame = () => {
    dynamicContent.innerHTML = `
                    <section class="game-section section">
                        <h2>Puzzle Game</h2>
                        <div class="game-container">
                            <div class="puzzle-board" id="puzzle-board"></div>
                            <div class="game-message" id="puzzle-message">Arrange the tiles in the correct order!</div>
                            <button class="game-reset-btn" id="puzzle-reset">Reset</button>
                            <button class="game-back-btn" id="game-back-btn">Back to Games</button>
                        </div>
                    </section>
                `;
    const board = document.getElementById("puzzle-board");
    const messageEl = document.getElementById("puzzle-message");
    let puzzle = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    let emptyIndex = 8;

    function drawBoard() {
      board.innerHTML = "";
      puzzle.forEach((num, index) => {
        const cell = document.createElement("div");
        cell.classList.add("puzzle-cell");
        if (num === 0) {
          cell.classList.add("empty");
          emptyIndex = index;
        } else {
          cell.textContent = num;
          cell.addEventListener("click", () => moveTile(index));
        }
        board.appendChild(cell);
      });
    }

    function isSolvable(arr) {
      let inversions = 0;
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] && arr[j] && arr[i] > arr[j]) {
            inversions++;
          }
        }
      }
      return inversions % 2 === 0;
    }

    function shuffleBoard() {
      do {
        puzzle = puzzle.sort(() => Math.random() - 0.5);
      } while (!isSolvable(puzzle));
      drawBoard();
    }

    function moveTile(index) {
      const row = Math.floor(index / 3);
      const col = index % 3;
      const emptyRow = Math.floor(emptyIndex / 3);
      const emptyCol = emptyIndex % 3;

      if (
        (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
        (Math.abs(col - emptyCol) === 1 && row === emptyRow)
      ) {
        [puzzle[index], puzzle[emptyIndex]] = [
          puzzle[emptyIndex],
          puzzle[index],
        ];
        drawBoard();
        checkWin();
      }
    }

    function checkWin() {
      const winState = [1, 2, 3, 4, 5, 6, 7, 8, 0];
      if (JSON.stringify(puzzle) === JSON.stringify(winState)) {
        messageEl.textContent = "You won!";
      }
    }

    document
      .getElementById("puzzle-reset")
      .addEventListener("click", shuffleBoard);

    shuffleBoard();
  };

  const renderPongGame = () => {
    dynamicContent.innerHTML = `
                    <section class="game-section section">
                        <h2>Pong</h2>
                        <div class="game-container">
                            <canvas id="pong-canvas" width="600" height="400"></canvas>
                            <div class="game-message" id="pong-message">Use W/S or Up/Down to move, press Space to start</div>
                            <button class="game-reset-btn" id="pong-reset">Reset</button>
                            <button class="game-back-btn" id="game-back-btn">Back to Games</button>
                        </div>
                    </section>
                `;

    const canvas = document.getElementById("pong-canvas");
    const ctx = canvas.getContext("2d");
    let gameStarted = false;
    let player1Score = 0;
    let player2Score = 0;

    const ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 10,
      velocityX: 5,
      velocityY: 5,
      speed: 7,
      color: "#fff",
    };

    const user = {
      x: 0,
      y: canvas.height / 2 - 50,
      width: 10,
      height: 100,
      score: 0,
      color: "#4b89dc",
      dy: 0, // for keyboard movement
    };

    const com = {
      x: canvas.width - 10,
      y: canvas.height / 2 - 50,
      width: 10,
      height: 100,
      score: 0,
      color: "#d63384",
    };

    let animationFrameId = null;
    const maxScore = 10;

    const stopGame = (winner) => {
      cancelAnimationFrame(animationFrameId);
      document.getElementById(
        "pong-message"
      ).textContent = `${winner} wins! Game Over.`;
      document.getElementById("pong-message").style.display = "block";
      gameStarted = false;
    };

    function drawRect(x, y, w, h, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, h);
    }

    function drawCircle(x, y, r, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();
    }

    function drawText(text, x, y, color) {
      ctx.fillStyle = color;
      ctx.font = "75px Arial";
      ctx.fillText(text, x, y);
    }

    function drawNet() {
      for (let i = 0; i <= canvas.height; i += 15) {
        drawRect(canvas.width / 2 - 1, i, 2, 10, "#e0e0e0");
      }
    }

    function resetBall() {
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      ball.speed = 7;
      ball.velocityX = -ball.velocityX;
    }

    // Keyboard and mouse controls
    document.addEventListener("keydown", (e) => {
      if (e.key === "w" || e.key === "W" || e.key === "ArrowUp") user.dy = -5;
      else if (e.key === "s" || e.key === "S" || e.key === "ArrowDown")
        user.dy = 5;
      else if (e.key === " " && !gameStarted) {
        gameStarted = true;
        document.getElementById("pong-message").style.display = "none";
      }
    });

    document.addEventListener("keyup", (e) => {
      if (
        e.key === "w" ||
        e.key === "W" ||
        e.key === "s" ||
        e.key === "S" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowDown"
      ) {
        user.dy = 0;
      }
    });

    function collision(b, p) {
      p.top = p.y;
      p.bottom = p.y + p.height;
      p.left = p.x;
      p.right = p.x + p.width;

      b.top = b.y - b.radius;
      b.bottom = b.y + b.radius;
      b.left = b.x - b.radius;
      b.right = b.x + b.radius;

      return (
        p.left < b.right &&
        p.top < b.bottom &&
        p.right > b.left &&
        p.bottom > b.top
      );
    }

    function update() {
      if (!gameStarted) return;

      user.y += user.dy;
      user.y = Math.max(0, Math.min(canvas.height - user.height, user.y));

      ball.x += ball.velocityX;
      ball.y += ball.velocityY;

      let comLevel = 0.1;
      com.y += (ball.y - (com.y + com.height / 2)) * comLevel;

      if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
      }

      let player = ball.x < canvas.width / 2 ? user : com;
      if (collision(ball, player)) {
        let collidePoint = ball.y - (player.y + player.height / 2);
        collidePoint = collidePoint / (player.height / 2);

        let angleRad = (Math.PI / 4) * collidePoint;
        let direction = ball.x < canvas.width / 2 ? 1 : -1;
        ball.velocityX = direction * ball.speed * Math.cos(angleRad);
        ball.velocityY = ball.speed * Math.sin(angleRad);
        ball.speed += 0.5;
      }

      if (ball.x - ball.radius < 0) {
        com.score++;
        resetBall();
        if (com.score >= maxScore) stopGame("Computer");
      } else if (ball.x + ball.radius > canvas.width) {
        user.score++;
        resetBall();
        if (user.score >= maxScore) stopGame("You");
      }
    }

    function render() {
      drawRect(0, 0, canvas.width, canvas.height, "#000");
      drawNet();
      drawText(user.score, canvas.width / 4, canvas.height / 5, "#e0e0e0");
      drawText(com.score, (3 * canvas.width) / 4, canvas.height / 5, "#e0e0e0");
      drawRect(user.x, user.y, user.width, user.height, user.color);
      drawRect(com.x, com.y, com.width, com.height, com.color);
      drawCircle(ball.x, ball.y, ball.radius, ball.color);
    }

    function gameLoop() {
      update();
      render();
      animationFrameId = requestAnimationFrame(gameLoop);
    }

    document.getElementById("pong-reset").addEventListener("click", () => {
      user.score = 0;
      com.score = 0;
      gameStarted = false;
      document.getElementById("pong-message").textContent =
        "Use W/S or Up/Down to move, press Space to start";
      document.getElementById("pong-message").style.display = "block";
      resetBall();
    });

    gameLoop();
  };

  const renderCodingGame = (level = null) => {
    dynamicContent.innerHTML = `
                    <section class="coding-game-section section">
                        <h2>Mini Coding Games</h2>
                        <div class="card coding-game-container">
                            <div class="coding-options">
                                <div class="coding-difficulty-card easy-box" data-level="easy">
                                    <div class="front">Easy</div>
                                    <div class="back">Basic string and array manipulation.</div>
                                </div>
                                <div class="coding-difficulty-card medium-box" data-level="medium">
                                    <div class="front">Medium</div>
                                    <div class="back">Algorithms, data structures, and logic.</div>
                                </div>
                                <div class="coding-difficulty-card hard-box" data-level="hard">
                                    <div class="front">Hard</div>
                                    <div class="back">Advanced graph and tree problems.</div>
                                </div>
                            </div>
                            <button class="game-back-btn" id="game-back-btn">Back to Games</button>
                        </div>
                    </section>
                `;

    const difficultyCards = document.querySelectorAll(
      ".coding-difficulty-card"
    );
    difficultyCards.forEach((card) => {
      card.addEventListener("click", () => {
        const level = card.dataset.level;
        renderCodingQuestions(level);
      });
      card.addEventListener("mouseenter", () => card.classList.add("flipped"));
      card.addEventListener("mouseleave", () =>
        card.classList.remove("flipped")
      );
    });
  };

  const renderCodingQuestions = (level) => {
    dynamicContent.innerHTML = `
                    <section class="coding-game-section section">
                        <h2>${
                          level.charAt(0).toUpperCase() + level.slice(1)
                        } Questions</h2>
                        <div class="card coding-editor-container">
                            <div class="question-list-container">
                                <h3 id="question-text">Select a question to begin.</h3>
                                <ul class="question-list" id="question-list">
                                    ${dsaQuestions[level]
                                      .map(
                                        (q, index) =>
                                          `<li data-q-level="${level}" data-q-index="${index}">${q.q}</li>`
                                      )
                                      .join("")}
                                </ul>
                            </div>
                            <textarea id="code-editor" placeholder="Write your JavaScript code here..."></textarea>
                            <button id="run-code-btn" class="add-subject-btn">Run Code</button>
                            <pre id="coding-output"></pre>
                        </div>
                        <button class="game-back-btn" id="game-back-btn">Back to Mini Games</button>
                    </section>
                `;

    document.getElementById("code-editor").value = initialEditorCode;

    document.querySelectorAll(".question-list li").forEach((item) => {
      item.addEventListener("click", () => {
        const index = item.dataset.qIndex;
        const question = dsaQuestions[level][index];
        document.getElementById("question-text").textContent = question.q;
        document.getElementById("code-editor").value = initialEditorCode;
      });
    });

    document.getElementById("run-code-btn").addEventListener("click", () => {
      const code = document.getElementById("code-editor").value;
      const outputEl = document.getElementById("coding-output");
      try {
        const runCode = new Function("console", code);
        let consoleOutput = "";
        const fakeConsole = {
          log: (...args) => {
            consoleOutput += args.join(" ") + "\n";
          },
        };
        runCode(fakeConsole);
        outputEl.textContent = consoleOutput;
        outputEl.style.color = "#e0e0e0";
      } catch (error) {
        outputEl.textContent = `Error: ${error.message}`;
        outputEl.style.color = "red";
      }
    });

    document.getElementById("game-back-btn").addEventListener("click", (e) => {
      e.preventDefault();
      renderCodingGame();
    });
  };

  // Event listeners for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = e.target.id;
      if (id === "home-link") {
        renderHome();
      } else if (id === "resources-link") {
        renderResources();
      } else if (id === "games-link") {
        renderGames();
      } else if (id === "notes-link") {
        renderPerformance();
      } else if (id === "about-us-link") {
        renderAboutUs();
      } else if (id === "events-link") {
        renderEventCalendar();
      }
    });
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      // Uncheck the checkbox to close the menu
      document.querySelector(".menu-toggle").checked = false;
    });
  });

  logo.addEventListener("click", renderHome);

  // Event delegation for dynamically added elements
  document.addEventListener("click", (e) => {
    if (e.target.closest(".branch-card")) {
      const branchCard = e.target.closest(".branch-card");
      const branchId = branchCard.dataset.branch;
      renderBranchYears(branchId);
    } else if (e.target.closest(".year-card")) {
      const yearCard = e.target.closest(".year-card");
      const branchId = yearCard.dataset.branch;
      const year = yearCard.dataset.year;
      renderYearSemesters(branchId, year);
    } else if (e.target.closest(".semester-card")) {
      const semesterCard = e.target.closest(".semester-card");
      const branchId = semesterCard.dataset.branch;
      const year = semesterCard.dataset.year;
      const semester = semesterCard.dataset.semester;
      renderSemesterSubjects(branchId, year, semester);
    } else if (e.target.closest(".subject-box")) {
      const subjectBox = e.target.closest(".subject-box");
      const subject = subjectBox.dataset.subject;
      const branch = subjectBox.dataset.branch;
      const year = subjectBox.dataset.year;
      const semester = subjectBox.dataset.semester;
      renderSubjectOptions(subject, branch, year, semester);
    } else if (e.target.closest(".notes-option")) {
      const option = e.target.closest(".notes-option");
      const subject = option.dataset.subject;
      const type = option.dataset.type;
      const branch = option.dataset.branch;
      const year = option.dataset.year;
      const semester = option.dataset.semester;
      renderUnitSelection(subject, type, branch, year, semester);
    } else if (e.target.closest(".pyq-option")) {
      const option = e.target.closest(".pyq-option");
      const subject = option.dataset.subject;
      const type = option.dataset.type;
      const branch = option.dataset.branch;
      const year = option.dataset.year;
      const semester = option.dataset.semester;
      renderPyqSelection(subject, branch, year, semester);
    } else if (e.target.closest(".mid-sem-option")) {
      const option = e.target.closest(".mid-sem-option");
      const subject = option.dataset.subject;
      const term = option.dataset.term;
      renderPyqViewer(subject, term);
    } else if (e.target.closest(".end-sem-option")) {
      const option = e.target.closest(".end-sem-option");
      const subject = option.dataset.subject;
      const term = option.dataset.term;
      renderPyqViewer(subject, term);
    } else if (e.target.closest(".unit-list li")) {
      const unitItem = e.target.closest(".unit-list li");
      const unit = unitItem.dataset.unit;
      const subject = unitItem.dataset.subject;
      const type = unitItem.dataset.type;
      const branch = unitItem.dataset.branch;
      const year = unitItem.dataset.year;
      const semester = unitItem.dataset.semester;
      renderUnitViewer(subject, type, unit, branch, year, semester);
    } else if (e.target.closest(".game-card")) {
      const gameCard = e.target.closest(".game-card");
      const gameType = gameCard.dataset.game;
      if (gameType === "tic-tac-toe") {
        renderTicTacToe();
      } else if (gameType === "memory") {
        renderMemoryGame();
      } else if (gameType === "puzzle") {
        renderPuzzleGame();
      } else if (gameType === "pong") {
        renderPongGame();
      } else if (gameType === "coding") {
        renderCodingGame();
      }
    } else if (e.target.id === "game-back-btn") {
      renderGames();
    } else if (e.target.id === "back-to-subjects") {
      const btn = e.target;
      const branchId = btn.dataset.branch;
      const year = btn.dataset.year;
      const semester = btn.dataset.semester;
      renderSemesterSubjects(branchId, year, semester);
    } else if (e.target.id === "back-to-semesters") {
      const btn = e.target;
      const branchId = btn.dataset.branch;
      const year = btn.dataset.year;
      renderYearSemesters(branchId, year);
    } else if (e.target.id === "back-to-subject-options") {
      const btn = e.target;
      const subject = btn.dataset.subject;
      const branch = btn.dataset.branch;
      const year = btn.dataset.year;
      const semester = btn.dataset.semester;
      renderSubjectOptions(subject, branch, year, semester);
    } else if (e.target.id === "back-to-pyq-options") {
      const btn = e.target;
      const subject = btn.dataset.subject;
      const branch = btn.dataset.branch;
      const year = btn.dataset.year;
      const semester = btn.dataset.semester;
      renderSubjectOptions(subject, branch, year, semester);
    } else if (e.target.id === "back-to-unit-selection") {
      const btn = e.target;
      const subject = btn.dataset.subject;
      const type = btn.dataset.type;
      const branch = btn.dataset.branch;
      const year = btn.dataset.year;
      const semester = btn.dataset.semester;
      renderUnitViewer(subject, type, unit, branch, year, semester);
    }
  });

  // Chatbot functionality
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotBox = document.getElementById("chatbot-box");
  const chatbotClose = document.getElementById("chatbot-close");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotSend = document.getElementById("chatbot-send");
  const chatbotMessages = document.getElementById("chatbot-messages");

  const botResponses = {
    hi: "Hello! How can I help you with IGDTUWHub?",
    hello:
      "Hi there! I can help you navigate the website. What would you like to know?",
    okay: "Glad to hear that. Is there anything else I can assist you with?",
    resources:
      "You can find notes and PYQs for various branches and semesters in the Resources section. Just select your branch and year.",
    games:
      "We have several games for you to relax! You can play Tic-Tac-Toe, Memory, Puzzle, or Pong.",
    "cgpa calculator":
      "Our CGPA calculator helps you estimate your GPA. You can add your subjects and credits to get an accurate result.",
    "about us":
      "The About Us page has information about the team behind this project. We are all IT students!",
    events:
      "The Events section has a calendar showing important dates and holidays. You can even add your own events to the calendar.",
    "thank you": "You're welcome! Let me know if you need anything else.",
    bye: "Goodbye! Have a great day!",
  };

  const addMessage = (sender, text) => {
    const messageEl = document.createElement("div");
    messageEl.style.marginBottom = "10px";
    messageEl.style.padding = "8px";
    messageEl.style.borderRadius = "10px";
    messageEl.style.maxWidth = "80%";
    if (sender === "user") {
      messageEl.style.backgroundColor = "#4b89dc";
      messageEl.style.color = "white";
      messageEl.style.marginLeft = "auto";
    } else {
      messageEl.style.backgroundColor = "#2a2a2a";
      messageEl.style.color = "white";
    }
    messageEl.textContent = text;
    chatbotMessages.appendChild(messageEl);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  };

  const getBotResponse = (userMessage) => {
    const cleanMessage = userMessage.toLowerCase().trim();
    if (
      cleanMessage.includes("hello") ||
      cleanMessage.includes("hi") ||
      cleanMessage.includes("hey")
    ) {
      return "Hello! How can I help you with IGDTUWHub?";
    }
    if (cleanMessage.includes("okay") || cleanMessage.includes("ok")) {
      return "Glad to hear that. Is there anything else I can assist you with?";
    }
    if (cleanMessage.includes("thank you") || cleanMessage.includes("thanks")) {
      return "You're welcome! Let me know if you need anything else.";
    }
    if (cleanMessage.includes("bye") || cleanMessage.includes("goodbye")) {
      return "Goodbye! Have a great day!";
    }
    if (cleanMessage.includes("resources")) {
      return "You can find notes and PYQs for various branches and semesters in the Resources section. Just select your branch and year.";
    }
    if (cleanMessage.includes("games")) {
      return "We have several games for you to relax! You can play Tic-Tac-Toe, Memory, Puzzle, or Pong.";
    }
    if (cleanMessage.includes("cgpa calculator")) {
      return "Our CGPA calculator helps you estimate your GPA. You can add your subjects and credits to get an accurate result.";
    }
    if (cleanMessage.includes("about us")) {
      return "The About Us page has information about the team behind this project. We are all IT students!";
    }
    if (cleanMessage.includes("events")) {
      return "The Events section has a calendar showing important dates and holidays. You can even add your own events to the calendar.";
    }
    return 'I am a simple bot. Try asking about "resources", "games", "cgpa calculator", or "about us".';
  };

  const sendMessage = () => {
    const userMessage = chatbotInput.value;
    if (userMessage.trim() === "") return;
    addMessage("user", userMessage);
    chatbotInput.value = "";

    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      addMessage("bot", botResponse);
    }, 500);
  };

  chatbotToggle.addEventListener("click", () => {
    const isVisible = chatbotBox.style.display === "flex";
    chatbotBox.style.display = isVisible ? "none" : "flex";
    if (!isVisible) {
      addMessage("bot", "Hello! How can I help you today?");
    }
  });
  chatbotClose.addEventListener("click", () => {
    chatbotBox.style.display = "none";
  });
  chatbotSend.addEventListener("click", sendMessage);
  chatbotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Initial page load
  renderHome();
});


export const Bio = {
  name: "Omkar Waghmare",
  roles: ["an Embedded Developer"],
  description:
    "To Build a long-term career as Electronics Embedded Engineer with opportunities for career growth.",
  github: "https://github.com/omkarwaghmare342",
  resume:
 "https://drive.google.com/file/d/1erQ20FgDdl_G0_AuBJtJXY8Wmcvz5j5H/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/omkar-waghmare-696a64231/",
  email: "omkarwaghmare843@gmail.com",
};

export const skills = [
  {
    title: "Embedded Software",
    skills: [
      { name: "KeiluVision ", image: "https://i.postimg.cc/V6KRJ90p/images-1.jpg" },
      { name: "Embedded C,C++", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png" },
      {name: "STM32 Cube IDE", image: "https://i.postimg.cc/nhmHF09R/image-272-3x.png"},
      { name: "PCB Designing", image: "https://raw.githubusercontent.com/github/explore/7af95003139e68a3a54e382bb4f23a72836ef348/topics/altium-designer/altium-designer.png" },
      { name: "Arduino IDE", image: "https://e7.pngegg.com/pngimages/676/338/png-clipart-arduino-computer-software-library-electronics-computer-electronics-baby-thumbnail.png" },
      { name: "Platform IO", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PlatformIO_logo.svg/768px-PlatformIO_logo.svg.png" },
      { name: "VS Code", image: "https://img.icons8.com/?size=48&id=0OQR1FYCuA9f&format=png" },
      { name: "Proteus", image: "https://i0.wp.com/arduinofactory.com/wp-content/uploads/2023/05/proteus.png?fit=512%2C352&ssl=1" },
    ],
  },
  {
    title: "Embedded Hardware",
    skills: [
      { name: "Microcontrollers & Development Boards", image: "https://e7.pngegg.com/pngimages/71/493/png-clipart-microcontroller-mediatek-integrated-circuits-chips-segregation-blue-computer-network-thumbnail.png" },
      { name: "Excellent Soldring", image: "https://png.pngtree.com/png-clipart/20231116/original/pngtree-soldering-iron-industrial-photo-png-image_13576172.png" },
      { name: "Circuit Design & PCB development", image: "https://p1.hiclipart.com/preview/983/956/942/brain-electronic-circuit-electrical-network-printed-circuit-boards-circuit-design-circuit-diagram-maze-logo-png-clipart.jpg" },
      { name: "Sensors Integration", image: "https://cdn-icons-png.flaticon.com/256/1340/1340014.png" },
      { name: "Real-Time Data Processing & Display(eg.OLED, LCD, and TFT)", image: "https://cdn-icons-png.flaticon.com/512/6283/6283154.png" },
      { name: "Communication Protocols I2C, SPI, UART, RS485 (Modbus), etc", image: "https://www.hibit.dev/images/posts/2023/headers/communication_protocols.png" },
    ],
  },
  {
    title: "Embedded IOT",
    skills: [
      { name: "IOT Protocols - MQTT, HTTP, BLE, Wi-Fi", image: "https://cdn-icons-png.flaticon.com/512/4215/4215831.png" },
      { name: "Cloud Integration(Firebase, Thingspeak, Grafana, etc)", image: "https://runestone.academy/ns/books/published/py4e-int/_images/web_crawler.png" },
      { name: "AI in IoT & Dashboards", image: "https://businessolution.org/wp-content/uploads/2023/02/Prompt-Engineering.png" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Embedded-IIOT engineer",
    company: "ICon Labs(Autovue Electronics)",
    date: "June 2024 to June 2024",
    desc: `• I completed a 1-month internship at Icon Labs in which I worked on embedded systems, IoT,
    Python and HTML for dashboard design, etc. I worked with MQTT local servers to transmit
    data from PLC controllers using RS485 (Modbus) to dashboards via ESP32. Additionally, I
    prototyped PCBs and made software configurations. This internship was shortlisted from over
    200 applications on Internshala.`,
    skills: ["PCB design", "MQTT(Mosquitto Broker)", "ModBus(RS485)", "PythonFlask", "canvas.js",],
    doc: "",
  },
  {
    id: 1,
    role: "Associate Avionics Intern",
    company: "Astrophel Aerospace Pvt.Ltd",
    date: "Feb 25 to Present",
    desc: `• I am currently working at Astrophel Aerospace Pvt. Ltd. 
    as an Associate Avionics Intern, 
    where I am involved in the development and testing of avionics systems. 
    My work includes hands-on experience with embedded systems 
    and electronics used in aerospace applications.`,
    skills: ["STM32 Cube IDE", "Free RTOS", "Interrupt HAndling", "Xilinx Zynq",],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: "https://i.postimg.cc/wTr7NY1F/images.jpg",
    school: "Pune Institute Of Computer Technology",
    date: "Sept 2023 - Ongoing",
    grade: "First Class",
    desc: "I am pursuing a Bachelor of Engineering from Pune University with a specialization in Electronics and Telecommunication.",
    degree: "Bachelor of Engineering",
  },
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/v2/C560BAQFI8DUQ--t5CA/company-logo_200_200/company-logo_200_200/0/1630664798905/sveri_college_of_engineering_pandharpur_logo?e=2147483647&v=beta&t=uPcbFzYMRjVtYHKK5MGpiUA5A6vWiJvjpOg6L-FlHXk",
    school: "SVERI's College of Engineering(Polytechnic), Pandharpur",
    date: "June 2020 - June 2023",
    grade: "First Class",
    desc: "I completed my Diploma from SVERI's Polytechnic, Pandharpur with specialization in Electronics and Telecommunication.",
    degree: "Diploma",
  },
];

export const projects = [
  {
    id: 6,
    title: "AI-Powered Embedded Chatbot",
    date: "January 2024 to March 2024",
    description: "Developed an ESP32-based chatbot that captures images, sends them to AI via API, takes voice input for queries, and speaks the response. Integrated a microphone, speaker, and AI processing for real-time interactions.",
    image: "https://i.postimg.cc/8CgwsfkG/bot.jpg",
    tags: ["ESP32", "AI", "Voice Processing", "Embedded Systems"],
    category: "IoT & AI",
    github: "https://github.com/omkarwaghmare342/Otto-AI-BOT",
  },
  {
    id: 5,
    title: "Aquaculture Monitoring System",
    date: "August 2024 to November 2024",
    description: "Designed an IoT-based system for monitoring pH, turbidity, and temperature in fish farming. Used ESP8266, Firebase, and AI-based decision-making for real-time water quality analysis.",
    image: "https://i.postimg.cc/cJ9QNvz0/image.png",
    tags: ["ESP8266", "IoT", "Firebase", "AI","Sensors","pH sensor","Agreeculture"],
    category: "IoT & Environmental Monitoring",
    github: "https://github.com/omkarwaghmare342/Aquaculture_monitoring",
  },
  {
    id: 7,
    title: "Wireless Digital Oscilloscope using MQTT",
    date: "January 2025",
    description: "Developed a wireless oscilloscope using ESP32, MQTT protocol, and Grafana for real-time waveform visualization. Used Mosquitto MQTT broker for efficient data transmission and dashboard integration.",
    image: "https://i.postimg.cc/1tY2Fy3s/oscilloscope.jpg",
    tags: ["ESP32", "MQTT", "Grafana", "Embedded Systems"],
    category: "IOT & MQTT",
    github: "https://github.com/omkarwaghmare342/AI-Bot",
  },
  {
    id: 8,
    title: "Optical Distance Measurement System",
    date: "January 2025 to January 2025",
    description: "Developed a battery-operated distance measurement system using the GY-30 light sensor and an OLED display. The device calculates distances based on light intensity variations and displays results in real time, making it suitable for portable applications.",
    image: "https://i.postimg.cc/q7p55nvk/Optical-Distance-Measurement-System.jpg",
    tags: ["GY-30", "OLED", "Battery Operated", "Embedded Systems"],
    category: "Embedded Hardware",
    github: "https://github.com/omkarwaghmare342/Optical_Distance_Measurement_System",
  }
];

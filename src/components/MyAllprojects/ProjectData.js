import zomato from "/zomato.png"
import flights from "/flights.png"
import AdminPanel from "/AdminPanel.png"
import commutego from "/commutego.png"
import panel from "/panel.png"
import gamming from "/gamming.png"

const projects = [
    {
        name: "CommuteGo",
        image: commutego,
        description: "Creating an travel website using MERN stack. User can search destination route by Bus, Train, Flight, Metro. Now only Kolkata local buses are available.",
        skills: [["#ReactJs", "bg-blue-700"], ["#expressJs", "bg-yellow-400"], ["#mongoDB", "bg-green-700"], ["#tailwindcss","bg-red-700"],["#nodeJs","bg-pink-500"]],
        source: "https://github.com/Keshab1113/CommuteGo",
        link: "https://commute-go.vercel.app/",
        subname:"Travel Website",
    },
    {
        name: "Admin Dashboard",
        image: panel,
        description: "The Admin Dashboard Website provides a comprehensive interface for managing and monitoring your systems. It offers real-time analytics, user management.",
        skills: [["#ReactJs", "bg-blue-700"], ["#expressJs", "bg-yellow-400"], ["#mongoDB", "bg-green-700"], ["#tailwindcss", "bg-red-700"], ["#nodeJs", "bg-pink-500"],["#recharts", "bg-blue-400"]],
        source: "https://github.com/Keshab1113/Admin-DashBoard",
        link: "https://github.com/Keshab1113/Admin-DashBoard",
        subname:"Admin Panel Website",
    },
    {
        name: "Admin Dashboard",
        image: AdminPanel,
        description: "Creating an admin dashboard website (Only Frontend) using ReactJS involves utilizing its component-based architecture for modular development.",
        skills: [["#ReactJs", "bg-blue-700"], ["#recharts", "bg-yellow-400"], ["#materialUI", "bg-green-700"], ["#tailwindcss","bg-red-700"]],
        source: "https://github.com/Keshab1113/Admin_DashBoard",
        link: "https://admin-dash-board-kohl.vercel.app/",
        subname:"Admin Panel Website",
    },
    {
        name: "Zomato",
        image: zomato,
        description: "A sleek ReactJS-powered Zomato Clone frontend, delivering seamless user experiences with intuitive design, navigation, and restaurant discovery features.",
        skills: [["#ReactJs", "bg-blue-700"], ["#flowbite", "bg-yellow-400"], ["#materialUI", "bg-green-700"], ["#tailwindcss", "bg-red-700"], ["#framermotion","bg-yellow-400"]],
        source: "https://github.com/Keshab1113/Zomato-Clone-Frontend",
        link: "https://github.com/Keshab1113/Zomato-Clone-Frontend",
        subname: "Zomato Clone Website",
    },
    {
        name: "Flights",
        image: flights,
        description: "Design an intuitive Flight Booking website frontend with ReactJs, seamless navigation, and responsive layout for effortless flight reservations.",
        skills: [["#ReactJs", "bg-blue-700"], ["#materialUI", "bg-green-700"], ["#tailwindcss", "bg-red-700"], ["#swiper", "bg-yellow-400"], ["#slickcarousel", "bg-pink-400"]],
        source: "https://github.com/Keshab1113/FlightBookingWebsite",
        link: "https://flight-booking-website-nine.vercel.app/",
        subname: "Flight Booking Website",
    },
    {
        name: "Game-Website",
        image: gamming,
        description: "Design an intuitive A Gamming Advertisement website with HTML,CSS,JavaScript. Responsive layout for effortless gamming experiance.",
        skills: [["#HTML", "bg-blue-700"], ["#CSS", "bg-yellow-400"], ["#JavaScript", "bg-green-700"], ["#fontAwesome", "bg-red-700"]],
        source: "https://github.com/Keshab1113/Game-Website",
        link: "https://keshab1113.github.io/Game-Website/",
        subname: "A Gamming Advertisement Website",
    },
];
export default projects;
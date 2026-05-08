// RECORDS
const transactions = [
    {
        icon: "fa-solid fa-angles-up",
        name: "Amazon",
        date: "28 Mar, 2026",
        time: "06:45PM",
        amount: "- $150",
        status: "Successful"
    },
    {
        icon: "fa-solid fa-angles-down",
        name: "YouTube",
        date: "27 Mar, 2026",
        time: "03:20PM",
        amount: "$15",
        status: "Failed"
    },
    {
        icon: "fa-solid fa-angles-up",
        name: "PayPal",
        date: "26 Mar, 2026",
        time: "10:10AM",
        amount: "- $200",
        status: "Successful"
    },
    {
        icon: "fa-solid fa-angles-down",
        name: "Netflix",
        date: "25 Mar, 2026",
        time: "09:00PM",
        amount: "$20",
        status: "Failed"
    },
    {
        icon: "fa-solid fa-angles-up",
        name: "Spotify",
        date: "24 Mar, 2026",
        time: "08:30PM",
        amount: "- $10",
        status: "Successful"
    },
    {
        icon: "fa-solid fa-angles-down",
        name: "Apple Store",
        date: "23 Mar, 2026",
        time: "11:15AM",
        amount: "$120",
        status: "Failed"
    },
    {
        icon: "fa-solid fa-angles-up",
        name: "Google Play",
        date: "22 Mar, 2026",
        time: "02:40PM",
        amount: "- $5",
        status: "Successful"
    },
    {
        icon: "fa-solid fa-angles-down",
        name: "Amazon",
        date: "21 Mar, 2026",
        time: "06:10PM",
        amount: "$90",
        status: "Failed"
    },
    {
        icon: "fa-solid fa-angles-up",
        name: "YouTube",
        date: "20 Mar, 2026",
        time: "05:25PM",
        amount: "- $12",
        status: "Successful"
    },
    {
        icon: "fa-solid fa-angles-down",
        name: "PayPal",
        date: "19 Mar, 2026",
        time: "01:10PM",
        amount: "$500",
        status: "Failed"
    },
    {
        icon: "fa-solid fa-angles-up",
        name: "Netflix",
        date: "18 Mar, 2026",
        time: "09:45PM",
        amount: "- $25",
        status: "Successful"
    },
    {
        icon: "fa-solid fa-angles-down",
        name: "Spotify",
        date: "17 Mar, 2026",
        time: "07:20PM",
        amount: "$8",
        status: "Failed"
    },
    {
        icon: "fa-solid fa-angles-up",
        name: "Apple Store",
        date: "16 Mar, 2026",
        time: "12:00PM",
        amount: "- $300",
        status: "Successful"
    },
    {
        icon: "fa-solid fa-angles-down",
        name: "Google Play",
        date: "15 Mar, 2026",
        time: "04:50PM",
        amount: "$7",
        status: "Failed"
    },
    {
        icon: "fa-solid fa-angles-up",
        name: "Amazon",
        date: "14 Mar, 2026",
        time: "06:00PM",
        amount: "- $45",
        status: "Successful"
    },
    {
        icon: "fa-solid fa-angles-down",
        name: "YouTube",
        date: "13 Mar, 2026",
        time: "03:10PM",
        amount: "$18",
        status: "Failed"
    },
    {
        icon: "fa-solid fa-angles-up",
        name: "PayPal",
        date: "12 Mar, 2026",
        time: "10:30AM",
        amount: "- $1000",
        status: "Successful"
    },
    {
        icon: "fa-solid fa-angles-down",
        name: "Netflix",
        date: "11 Mar, 2026",
        time: "09:20PM",
        amount: "$30",
        status: "Failed"
    },
    {
        icon: "fa-solid fa-angles-up",
        name: "Spotify",
        date: "10 Mar, 2026",
        time: "08:00PM",
        amount: "- $6",
        status: "Successful"
    },
    {
        icon: "fa-solid fa-angles-down",
        name: "Apple Store",
        date: "09 Mar, 2026",
        time: "01:40PM",
        amount: "$250",
        status: "Failed"
    },
    {
        icon: "fa-solid fa-angles-up",
        name: "Google Play",
        date: "08 Mar, 2026",
        time: "02:15PM",
        amount: "- $4",
        status: "Successful"
    },
    {
        icon: "fa-solid fa-angles-down",
        name: "Amazon",
        date: "07 Mar, 2026",
        time: "06:35PM",
        amount: "$75",
        status: "Failed"
    },
    {
        icon: "fa-solid fa-angles-up",
        name: "YouTube",
        date: "06 Mar, 2026",
        time: "03:55PM",
        amount: "- $9",
        status: "Successful"
    },
    {
        icon: "fa-solid fa-angles-down",
        name: "PayPal",
        date: "05 Mar, 2026",
        time: "11:25AM",
        amount: "$300",
        status: "Failed"
    },
    {
        icon: "fa-solid fa-angles-up",
        name: "Netflix",
        date: "04 Mar, 2026",
        time: "10:05PM",
        amount: "- $22",
        status: "Successful"
    },
    
    { icon: "fa-solid fa-clock", name: "Uber", date: "01 Apr, 2026", time: "09:10AM", amount: "- $25", status: "Pending" },
    { icon: "fa-solid fa-calendar", name: "Netflix", date: "02 Apr, 2026", time: "11:00AM", amount: "- $20", status: "Scheduled" },
    { icon: "fa-solid fa-bookmark", name: "Amazon", date: "03 Apr, 2026", time: "02:15PM", amount: "- $80", status: "Reserved" },

    { icon: "fa-solid fa-clock", name: "Spotify", date: "04 Apr, 2026", time: "06:30PM", amount: "- $10", status: "Pending" },
    { icon: "fa-solid fa-calendar", name: "PayPal", date: "05 Apr, 2026", time: "10:00AM", amount: "$150", status: "Scheduled" },
    { icon: "fa-solid fa-bookmark", name: "Apple Store", date: "06 Apr, 2026", time: "03:45PM", amount: "- $120", status: "Reserved" },

    { icon: "fa-solid fa-clock", name: "YouTube", date: "07 Apr, 2026", time: "01:20PM", amount: "- $5", status: "Pending" },
    { icon: "fa-solid fa-calendar", name: "Google Play", date: "08 Apr, 2026", time: "09:00AM", amount: "- $12", status: "Scheduled" },
    { icon: "fa-solid fa-bookmark", name: "Amazon", date: "09 Apr, 2026", time: "07:15PM", amount: "- $60", status: "Reserved" },

    { icon: "fa-solid fa-clock", name: "Netflix", date: "10 Apr, 2026", time: "08:30PM", amount: "- $25", status: "Pending" },
    { icon: "fa-solid fa-calendar", name: "Spotify", date: "11 Apr, 2026", time: "12:10PM", amount: "- $8", status: "Scheduled" },
    { icon: "fa-solid fa-bookmark", name: "PayPal", date: "12 Apr, 2026", time: "04:00PM", amount: "$300", status: "Reserved" },

    { icon: "fa-solid fa-clock", name: "Apple Store", date: "13 Apr, 2026", time: "10:45AM", amount: "- $200", status: "Pending" },
    { icon: "fa-solid fa-calendar", name: "Uber", date: "14 Apr, 2026", time: "06:00PM", amount: "- $30", status: "Scheduled" },
    { icon: "fa-solid fa-bookmark", name: "YouTube", date: "15 Apr, 2026", time: "03:30PM", amount: "- $7", status: "Reserved" },

    { icon: "fa-solid fa-clock", name: "Google Play", date: "16 Apr, 2026", time: "09:25AM", amount: "- $6", status: "Pending" },
    { icon: "fa-solid fa-calendar", name: "Amazon", date: "17 Apr, 2026", time: "11:40AM", amount: "- $90", status: "Scheduled" },
    { icon: "fa-solid fa-bookmark", name: "Netflix", date: "18 Apr, 2026", time: "08:15PM", amount: "- $22", status: "Reserved" },

    { icon: "fa-solid fa-clock", name: "Spotify", date: "19 Apr, 2026", time: "07:50PM", amount: "- $9", status: "Pending" },
    { icon: "fa-solid fa-calendar", name: "PayPal", date: "20 Apr, 2026", time: "01:10PM", amount: "$500", status: "Scheduled" },
    { icon: "fa-solid fa-bookmark", name: "Apple Store", date: "21 Apr, 2026", time: "02:30PM", amount: "- $140", status: "Reserved" },

    { icon: "fa-solid fa-clock", name: "YouTube", date: "22 Apr, 2026", time: "05:00PM", amount: "- $4", status: "Pending" },
    { icon: "fa-solid fa-calendar", name: "Uber", date: "23 Apr, 2026", time: "09:00AM", amount: "- $18", status: "Scheduled" },
    { icon: "fa-solid fa-bookmark", name: "Google Play", date: "24 Apr, 2026", time: "06:20PM", amount: "- $11", status: "Reserved" },

    { icon: "fa-solid fa-clock", name: "Amazon", date: "25 Apr, 2026", time: "10:50AM", amount: "- $70", status: "Pending" }
];

// TRANSACTION CONTAINER
const container = document.querySelector(".container");

// DISPALY RECORD 
function renderData(data) {
    container.innerHTML = "";

    data.forEach(record => {
        container.innerHTML +=
            `<div class="transaction">
            <div class="tcontent">
                <div>
                    <div class="icon"><i class="${record.icon}"></i></div>
                    <div class="label">
                        <h4 class="recordName">${record.name}</h4>
                        <p class="date">${record.date}</p>
                        <p class="time">${record.time}</p>
                    </div>
                </div>
                <div class="details">
                    <p class="amount">${record.amount}</p>
                    <p class="status">${record.status}</p>
                </div>
            </div>
            <hr>
        </div>`
    });
};

// APPLY FILTER
function applyFilter() {
    // if (searchInput.value === ""){
    //     alert("Search field required");
    // }
    const filtered = transactions.filter(record => {
        // console.log(searchInput.value);
        return (record.name?.toLowerCase()?.includes(searchInput.value.toLowerCase().trim()))
    }).filter(record => {
        console.log(statusFilter.value)
        if (statusFilter.value?.toLowerCase() === "all") {
            return true;
        }
        else {
            return (record.status?.toLowerCase() === statusFilter.value.toLowerCase())
        }
    });

    console.log(filtered);
    renderData(filtered);
};

// SEARCH
const searchInput = document.querySelector("#js-searchInput");
const searchBtn = document.querySelector("#js-searchBtn");

// STATUS FILTER SELECTOR
const statusFilter = document.querySelector("#js-filter");

// EVENT LISTENERS
searchInput.addEventListener("input", () => {
    if (searchInput.value === "") {
        renderData(transactions);
    }
});

searchBtn.addEventListener("click", () => applyFilter());

statusFilter.addEventListener("change", () => applyFilter());

// DISPALYS TRANSACTION
renderData(transactions);
// Search country 
let clockDisplay;
let searchCountry = document.getElementById("global-country");
let searchCity = document.getElementById("global-city");
let searchYear = document.getElementById("global-year");
const countriesCities = {
    US: [
        {
            name: "New York",
            lat: 40.7128,
            lon: -74.006,
        },
        {
            name: "Los Angeles",
            lat: 34.0522,
            lon: -118.2437,
        },
        {
            name: "Chicago",
            lat: 41.8781,
            lon: -87.6298,
        },
        {
            name: "Miami",
            lat: 25.7617,
            lon: -80.1918,
        },
        {
            name: "San Francisco",
            lat: 37.7749,
            lon: -122.4194,
        },
    ],
    GB: [
        {
            name: "London",
            lat: 51.5074,
            lon: -0.1278,
        },
        {
            name: "Manchester",
            lat: 53.4808,
            lon: -2.2426,
        },
        {
            name: "Edinburgh",
            lat: 55.9533,
            lon: -3.1883,
        },
        {
            name: "Birmingham",
            lat: 52.4862,
            lon: -1.8904,
        },
        {
            name: "Liverpool",
            lat: 53.4084,
            lon: -2.9916,
        },
    ],
    DE: [
        {
            name: "Berlin",
            lat: 52.52,
            lon: 13.405,
        },
        {
            name: "Munich",
            lat: 48.1351,
            lon: 11.582,
        },
        {
            name: "Frankfurt",
            lat: 50.1109,
            lon: 8.6821,
        },
        {
            name: "Hamburg",
            lat: 53.5511,
            lon: 9.9937,
        },
        {
            name: "Cologne",
            lat: 50.9375,
            lon: 6.9603,
        },
    ],
    FR: [
        {
            name: "Paris",
            lat: 48.8566,
            lon: 2.3522,
        },
        {
            name: "Lyon",
            lat: 45.764,
            lon: 4.8357,
        },
        {
            name: "Marseille",
            lat: 43.2965,
            lon: 5.3698,
        },
        {
            name: "Nice",
            lat: 43.7102,
            lon: 7.262,
        },
        {
            name: "Bordeaux",
            lat: 44.8378,
            lon: -0.5792,
        },
    ],
    IT: [
        {
            name: "Rome",
            lat: 41.9028,
            lon: 12.4964,
        },
        {
            name: "Milan",
            lat: 45.4642,
            lon: 9.19,
        },
        {
            name: "Florence",
            lat: 43.7696,
            lon: 11.2558,
        },
        {
            name: "Venice",
            lat: 45.4408,
            lon: 12.3155,
        },
        {
            name: "Naples",
            lat: 40.8518,
            lon: 14.2681,
        },
    ],
    ES: [
        {
            name: "Madrid",
            lat: 40.4168,
            lon: -3.7038,
        },
        {
            name: "Barcelona",
            lat: 41.3851,
            lon: 2.1734,
        },
        {
            name: "Seville",
            lat: 37.3891,
            lon: -5.9845,
        },
        {
            name: "Valencia",
            lat: 39.4699,
            lon: -0.3763,
        },
        {
            name: "Bilbao",
            lat: 43.263,
            lon: -2.935,
        },
    ],
    NL: [
        {
            name: "Amsterdam",
            lat: 52.3676,
            lon: 4.9041,
        },
        {
            name: "Rotterdam",
            lat: 51.9244,
            lon: 4.4777,
        },
        {
            name: "The Hague",
            lat: 52.0705,
            lon: 4.3007,
        },
        {
            name: "Utrecht",
            lat: 52.0907,
            lon: 5.1214,
        },
    ],
    PT: [
        {
            name: "Lisbon",
            lat: 38.7223,
            lon: -9.1393,
        },
        {
            name: "Porto",
            lat: 41.1579,
            lon: -8.6291,
        },
        {
            name: "Faro",
            lat: 37.0194,
            lon: -7.9322,
        },
    ],
    AT: [
        {
            name: "Vienna",
            lat: 48.2082,
            lon: 16.3738,
        },
        {
            name: "Salzburg",
            lat: 47.8095,
            lon: 13.055,
        },
        {
            name: "Innsbruck",
            lat: 47.2692,
            lon: 11.4041,
        },
    ],
    CH: [
        {
            name: "Zurich",
            lat: 47.3769,
            lon: 8.5417,
        },
        {
            name: "Geneva",
            lat: 46.2044,
            lon: 6.1432,
        },
        {
            name: "Bern",
            lat: 46.948,
            lon: 7.4474,
        },
    ],
    BE: [
        {
            name: "Brussels",
            lat: 50.8503,
            lon: 4.3517,
        },
        {
            name: "Antwerp",
            lat: 51.2194,
            lon: 4.4025,
        },
        {
            name: "Bruges",
            lat: 51.2093,
            lon: 3.2247,
        },
    ],
    SE: [
        {
            name: "Stockholm",
            lat: 59.3293,
            lon: 18.0686,
        },
        {
            name: "Gothenburg",
            lat: 57.7089,
            lon: 11.9746,
        },
        {
            name: "Malmo",
            lat: 55.6059,
            lon: 13.0007,
        },
    ],
    NO: [
        {
            name: "Oslo",
            lat: 59.9139,
            lon: 10.7522,
        },
        {
            name: "Bergen",
            lat: 60.3913,
            lon: 5.3221,
        },
    ],
    DK: [
        {
            name: "Copenhagen",
            lat: 55.6761,
            lon: 12.5683,
        },
        {
            name: "Aarhus",
            lat: 56.1629,
            lon: 10.2039,
        },
    ],
    PL: [
        {
            name: "Warsaw",
            lat: 52.2297,
            lon: 21.0122,
        },
        {
            name: "Krakow",
            lat: 50.0647,
            lon: 19.945,
        },
        {
            name: "Gdansk",
            lat: 54.352,
            lon: 18.6466,
        },
    ],
    CZ: [
        {
            name: "Prague",
            lat: 50.0755,
            lon: 14.4378,
        },
        {
            name: "Brno",
            lat: 49.1951,
            lon: 16.6068,
        },
    ],
    GR: [
        {
            name: "Athens",
            lat: 37.9838,
            lon: 23.7275,
        },
        {
            name: "Thessaloniki",
            lat: 40.6401,
            lon: 22.9444,
        },
    ],
    JP: [
        {
            name: "Tokyo",
            lat: 35.6762,
            lon: 139.6503,
        },
        {
            name: "Osaka",
            lat: 34.6937,
            lon: 135.5023,
        },
        {
            name: "Kyoto",
            lat: 35.0116,
            lon: 135.7681,
        },
    ],
    AU: [
        {
            name: "Sydney",
            lat: -33.8688,
            lon: 151.2093,
        },
        {
            name: "Melbourne",
            lat: -37.8136,
            lon: 144.9631,
        },
        {
            name: "Brisbane",
            lat: -27.4698,
            lon: 153.0251,
        },
    ],
    CA: [
        {
            name: "Toronto",
            lat: 43.6532,
            lon: -79.3832,
        },
        {
            name: "Vancouver",
            lat: 49.2827,
            lon: -123.1207,
        },
        {
            name: "Montreal",
            lat: 45.5017,
            lon: -73.5673,
        },
    ],
    BR: [
        {
            name: "São Paulo",
            lat: -23.5505,
            lon: -46.6333,
        },
        {
            name: "Rio de Janeiro",
            lat: -22.9068,
            lon: -43.1729,
        },
    ],
    MX: [
        {
            name: "Mexico City",
            lat: 19.4326,
            lon: -99.1332,
        },
        {
            name: "Cancun",
            lat: 21.1619,
            lon: -86.8515,
        },
    ],
    EG: [
        {
            name: "Cairo",
            lat: 30.0444,
            lon: 31.2357,
        },
        {
            name: "Alexandria",
            lat: 31.2001,
            lon: 29.9187,
        },
    ],
    IE: [
        {
            name: "Dublin",
            lat: 53.3498,
            lon: -6.2603,
        },
        {
            name: "Cork",
            lat: 51.8985,
            lon: -8.4756,
        },
    ],
    FI: [
        {
            name: "Helsinki",
            lat: 60.1699,
            lon: 24.9384,
        },
    ],
}

function getCurrentDate() {
    let now = new Date();
    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}
function formatTimeToLocal(utcString) {
    let date = new Date(utcString);
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, "0");
    return `${hours}:${minutes} ${period}`;
}
function formattimeSec(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
}
class User {
    constructor() {
        this.holidays = []
        this.events = []
        this.longWeekends = []
        if (localStorage.getItem('holidays') !== null) {
            this.holidays = [...JSON.parse(localStorage.getItem('holidays'))];
        }
        if (localStorage.getItem('events') !== null) {
            this.events = [...JSON.parse(localStorage.getItem('events'))];
        }
        if (localStorage.getItem('longWeekends') !== null) {
            this.longWeekends = [...JSON.parse(localStorage.getItem('longWeekends'))];
        }
    }
    displayPlanCount() {

        let plansCount = this.holidays.length + this.events.length + this.longWeekends.length
        let plansNumber = document.getElementById("plans-count")
        document.getElementById("stat-saved").innerHTML = plansCount
        if (plansCount > 0) {
            plansNumber.innerHTML = plansCount
            plansNumber.classList.remove("hidden")
        } else {
            plansNumber.classList.add("hidden")
        }
    }
    displayUserPlans() {
        let cartoona = "";
        cartoona += this.displayHolidayPlans();
        cartoona += this.displayLwPlans();
        cartoona += this.displayEventPlans();
        let plansCount = this.holidays.length + this.events.length + this.longWeekends.length
        document.getElementById("plans-content").innerHTML = cartoona;
        document.getElementById("filter-all-count").innerHTML = plansCount
        document.getElementById("filter-holiday-count").innerHTML = this.holidays.length
        document.getElementById("filter-event-count").innerHTML = this.events.length
        document.getElementById("filter-lw-count").innerHTML = this.longWeekends.length

        this.holidays.forEach((holiday, index) => {
            document.getElementById(`remove-holiday-${index}`).addEventListener("click", () => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "red",
                    cancelButtonColor: "gray",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.removeHoliday(holiday);
                        this.displayUserPlans();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "The plan has been removed.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
            });
        });
        this.longWeekends.forEach((lw, index) => {
            document.getElementById(`remove-lw-${index}`).addEventListener("click", () => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "red",
                    cancelButtonColor: "gray",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.removeLw(lw);
                        this.displayUserPlans();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "The plan has been removed.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });

            });
        });
        this.events.forEach((event, index) => {
            document.getElementById(`remove-event-${index}`).addEventListener("click", () => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "red",
                    cancelButtonColor: "gray",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.removeEvent(event);
                        this.displayUserPlans();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "The plan has been removed.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
            });
        });
        this.displayPlanCount()
    }
    displayLwPlans() {
        let cartoona = "";
        newUser.longWeekends.forEach((lw, index) => {
            let start = new Date(lw.startDate);
            let end = new Date(lw.endDate);

            let formattedRange = `${start.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${end.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;

            cartoona += `
                <div class="plan-card">
                    <span class="plan-card-type longweekend">Long Weekend</span>
    
                    <div class="plan-card-content">
                        <h4>Long Weekend #${index + 1}</h4>
                        <div class="plan-card-details">
                            <div>
                                <i class="fa-regular fa-calendar"></i>
                                ${formattedRange}
                            </div>
                            <div>
                                <i class="fa-solid fa-info-circle"></i>
                                ${lw.needBridgeDay ? "Extra days off needed!" : "No extra days off needed!"}
                            </div>
                        </div>
    
                        <div class="plan-card-actions">
                            <button 
                                class="btn-plan-remove"
                                id="remove-lw-${index}"
                            >
                                <i class="fa-solid fa-trash"></i>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        return cartoona
    }
    displayEventPlans() {
        let cartoona = "";
        newUser.events.forEach((event, index) => {
            let date = new Date(event.date);
            let formattedDate = date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            });

            cartoona += `
                <div class="plan-card">
                    <span class="plan-card-type event">Event</span>
    
                    <div class="plan-card-content">
                        <h4>${event.name}</h4>
                        <div class="plan-card-details">
                            <div>
                                <i class="fa-regular fa-calendar"></i>
                                ${formattedDate}
                            </div>
                            <div>
                                <i class="fa-solid fa-location-dot"></i>
                                ${event.location || "Unknown"}
                            </div>
                        </div>
    
                        <div class="plan-card-actions">
                            <button 
                                class="btn-plan-remove"
                                id="remove-event-${index}"
                            >
                                <i class="fa-solid fa-trash"></i>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        return cartoona
    }
    displayHolidayPlans() {
        let cartoona = "";
        newUser.holidays.forEach((holiday, index) => {
            let date = new Date(holiday.date);
            let formattedDate = date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            });

            cartoona += `
                <div class="plan-card">
                    <span class="plan-card-type holiday">Holiday</span>
        
                    <div class="plan-card-content">
                        <h4>${holiday.name}</h4>
                        <div class="plan-card-details">
                            <div>
                                <i class="fa-regular fa-calendar"></i>
                                ${formattedDate}
                            </div>
                            <div>
                                <i class="fa-solid fa-flag"></i>
                                ${holiday.countryCode}
                            </div>
                        </div>
        
                        <div class="plan-card-actions">
                            <button 
                                class="btn-plan-remove"
                                id="remove-holiday-${index}"
                            >
                                <i class="fa-solid fa-trash"></i>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
        return cartoona;
    }
    addHoliday(holiday) {
        let holidayData = {
            name: holiday.name,
            date: holiday.date.toISOString(),
            countryCode: holiday.countryCode
        };
        let alreadyExists = this.holidays.some(h =>
            h.date === holidayData.date
        );
        if (!alreadyExists) {
            this.holidays.push(holidayData);
            localStorage.setItem("holidays", JSON.stringify(this.holidays));
            this.displayPlanCount();
        } else {
        }
    }
    removeHoliday(holiday) {
        let index = this.holidays.findIndex(
            h => h.name === holiday.name
        );
        this.holidays.splice(index, 1)
        console.log(this.holidays);
        localStorage.setItem("holidays", JSON.stringify(this.holidays));

    }
    addEvent(event) {
        const eventData = {
            name: event.name,
            date: event.date,
            time: event.time,
            venue: event.venue,
            city: event.city,
            image: event.image,
            url: event.url,
            category: event.category
        };

        const alreadyExists = this.events.some(existing =>
            existing.name === eventData.name &&
            existing.date === eventData.date
        );

        if (!alreadyExists) {
            this.events.push(eventData);
            localStorage.setItem("events", JSON.stringify(this.events));
            this.displayPlanCount();
        }
    }
    removeEvent(event) {
        let index = this.events.findIndex(
            h => h.name === event.name
        );
        this.events.splice(index, 1)
        console.log(this.events);
        localStorage.setItem("events", JSON.stringify(this.events));
    }
    addLw(lw) {
        const lwData = {
            startDate: lw.startDate,
            endDate: lw.endDate,
            dayCount: lw.dayCount,
            needBridgeDay: lw.needBridgeDay,
            bridgeDays: lw.bridgeDays || []
        };

        const alreadyExists = this.longWeekends.some(existing =>
            existing.startDate === lwData.startDate &&
            existing.endDate === lwData.endDate
        );

        if (!alreadyExists) {
            this.longWeekends.push(lwData);
            localStorage.setItem("longWeekends", JSON.stringify(this.longWeekends));
            this.displayPlanCount();
        }
    }
    removeLw(longWeekend) {
        let index = this.longWeekends.findIndex(
            h => h.name === longWeekend.name
        );
        this.longWeekends.splice(index, 1)
        console.log(this.longWeekends);
        localStorage.setItem("longWeekends", JSON.stringify(this.longWeekends));
    }
    cheackPlans() {
        return (this.holidays.length + this.events.length + this.longWeekends.length) > 0
    }
    clearPlans() {
        this.holidays = []
        this.events = []
        this.longWeekends = []
        localStorage.setItem("holidays", JSON.stringify(this.holidays));
        localStorage.setItem("events", JSON.stringify(this.events));
        localStorage.setItem("longWeekends", JSON.stringify(this.longWeekends));
        this.displayUserPlans()
    }
}
class Country {
    constructor(countryCode, year) {
        this.countryCode = countryCode
        this.year = year
        this.city = null
        this.holidaiesArray = []
        this.eventsArray = []
        this.longWeekendArr = []
    }
    // ======================================
    // get countries info 
    async getCountryInfo() {
        this.countryInfoReq = await fetch(`https://restcountries.com/v3.1/alpha/${this.countryCode}`);
        this.countryInfo = await this.countryInfoReq.json();
        this.latitude = this.countryInfo[0].capitalInfo.latlng[0]
        this.longitude = this.countryInfo[0].capitalInfo.latlng[1]
        this.city = this.countryInfo[0].capital[0]
        this.year = searchYear.value
        this.timeReq = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,uv_index&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto`)
        this.time = await this.timeReq.json()
        this.time = this.time.current.time
        return this.countryInfo[0]
    }
    // ======================================
    // ======================================
    // display Selcted Distination
    async displaySelctedDistination() {
        this.countryInfo = await this.getCountryInfo()
        this.city = searchCity.value
        document.querySelector("#selected-destination img").setAttribute("src", `https://flagcdn.com/w80/${this.countryCode.toLowerCase()}.png`)
        document.getElementById("selected-country-name").innerHTML = this.countryInfo.name.common
        document.getElementById("selected-destination").classList.remove("hidden")
        let exploreBtn = document.getElementById("global-search-btn")

        document.getElementById("selected-city-name").innerHTML = searchCity.value
        exploreBtn.addEventListener("click", () => {
            this.displayCountryInfo()
        })



    }
    getCities() {
        let code = this.countryCode;
        let cartona = "";

        let cities = countriesCities[code] ? countriesCities[code] : [{ name: this.countryInfo[0].capital[0] }];

        for (let city of cities) {
            cartona += `<option value="${city.name}">${city.name}</option>`;
        }

        return cartona;
    }
    // ======================================
    // ======================================
    // display country info
    displayCountryInfo() {
        document.getElementById("dashboard-country-info-demo").classList.add("hidden")
        document.querySelector(".loading-dashboard").classList.remove("hidden")
        let allWeatherDisplay = [...document.querySelectorAll("#weather-content *")]
        allWeatherDisplay.forEach(element => {
            element.classList.remove("hidden")
        });

        // ====================
        // ====================
        let countryImg = [...document.querySelectorAll(".selection-flag")]
        countryImg.forEach((country) => {
            country.setAttribute("alt", `${this.countryInfo.name.common}`)
            country.setAttribute("src", `https://flagcdn.com/w160/${this.countryCode.toLowerCase()}.png`)
        })
        let now = new Date();
        let NowDate = now.toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric"
        });
        document.querySelector(".sun-location h2").innerHTML = `<h2><i class="fa-solid fa-location-dot"></i> ${this.city}</h2>`
        document.querySelector(".sun-date-display").innerHTML = NowDate
        document.querySelector("#holiday-country-name").innerHTML = this.countryInfo.name.common
        document.querySelector("#event-country-name").innerHTML = this.countryInfo.name.common
        document.querySelector("#weather-country-name").innerHTML = this.countryInfo.name.common
        document.querySelector("#lw-country-name").innerHTML = this.countryInfo.name.common
        document.querySelector("#holiday-city-name").innerHTML = this.city
        document.querySelector("#event-city-name").innerHTML = this.city
        document.querySelector("#weather-city-name").innerHTML = this.city
        document.querySelector("#lw-city-name").innerHTML = this.city
        document.querySelector("#weather-content .empty-state").classList.add("hidden")
        document.querySelector("#weather-content ").setAttribute("style", " display : block")
        document.querySelector("#holiday-selection").classList.remove("hidden")
        document.querySelector("#event-selection").classList.remove("hidden")
        document.querySelector("#weather-selection").classList.remove("hidden")
        document.querySelector("#lw-selection").classList.remove("hidden")
        document.querySelector("#weather-city-name").innerHTML = this.city
        document.querySelector("#weather-country-name").innerHTML = this.countryInfo.name.common
        document.querySelector("#weather-flag").setAttribute("src", `https://flagcdn.com/w40/${this.countryCode.toLowerCase()}.png`)
        document.querySelector(".dashboard-country-flag").setAttribute("src", `https://flagcdn.com/w160/${this.countryCode.toLowerCase()}.png`)
        document.querySelector("#dashboard-country-info h3").innerHTML = this.countryInfo.name.common
        document.querySelector(".official-name").innerHTML = this.countryInfo.name.official
        document.querySelector(".region").innerHTML = `<i class="fa-solid fa-location-dot"></i>${this.countryInfo.region} • ${this.countryInfo.subregion}`
        document.getElementById("Capital-data").innerHTML = this.countryInfo.capital?.[0]
        document.getElementById("Population").innerHTML = this.countryInfo.population.toLocaleString("en-US")
        document.getElementById("Area").innerHTML = ` ${this.countryInfo.area.toLocaleString("en-US")} km²`
        document.getElementById("Continent").innerHTML = this.countryInfo.continents[0]
        document.getElementById("Calling-Code").innerHTML = this.countryInfo.idd.root + this.countryInfo.idd.suffixes[0]
        document.getElementById("Driving-Side").innerHTML = this.countryInfo.car.side
        document.getElementById("Week-Starts").innerHTML = this.countryInfo.startOfWeek
        document.getElementById("countryCurrency").innerHTML = Object.values(this.countryInfo.currencies)[0].name + " (" + Object.keys(this.countryInfo.currencies)[0] + ")";
        document.getElementById("language").innerHTML = Object.values(this.countryInfo.languages).join(", ");
        this.neighbors = this.countryInfo.borders || []
        document.querySelector(".btn-map-link").setAttribute("href", this.countryInfo.maps.googleMaps)
        this.displayNeighbors()
        this.startSimulatedClock()
        document.querySelector(".loading-dashboard").classList.add("hidden")
        document.getElementById("dashboard-country-info").classList.remove("hidden")
    }
    displayNeighbors() {
        const container = document.getElementById("Neighbors");

        let html = "";


        this.neighbors.forEach(code => {
            html += `
                    <button 
                        class="extra-tag border-tag neighbor-btn" 
                        id="neighbor-${code}" 
                        data-country-code="${code}"
                    >
                        ${code}
                    </button>
                `;
        });


        container.innerHTML = html;

    }

    startSimulatedClock() {
        let currentLocalTime = document.getElementById("country-local-time")

        let currentTime = new Date(this.time);
        if (clockDisplay) {
            clearInterval(clockDisplay)
        }
        clockDisplay = setInterval(() => {
            currentTime.setSeconds(currentTime.getSeconds() + 1);
            let hours = currentTime.getHours();
            let minutes = currentTime.getMinutes().toString().padStart(2, "0");
            let seconds = currentTime.getSeconds().toString().padStart(2, "0");

            let period = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            hours = hours.toString().padStart(2, "0");

            currentLocalTime.innerHTML = `${hours}:${minutes}:${seconds} ${period}`;
        }, 1000);
    }
    // ======================================
    // ======================================
    // holiday sections
    async getHolidaysInfo() {
        document.getElementById("loading-overlay").classList.remove("hidden")
        this.holidayInfoReq = await fetch(`https://date.nager.at/api/v3/PublicHolidays/2026/${this.countryCode}`)
        this.holidayInfo = await this.holidayInfoReq.json();
        document.getElementById("loading-overlay").classList.add("hidden")

        this.holidaiesArray = this.holidayInfo.map(holidayData => new Holiday(holidayData))

    }
    // ======================================
    // ======================================
    // events 
    async getEventsInfo() {
        document.getElementById("loading-overlay").classList.remove("hidden")
        this.eventInfoReq = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=24iRn3TEII7SCB7CRkajX1URMGwKfVw5&city=${this.city}&countryCode=${this.countryCode}&size=15`);
        this.eventInfo = await this.eventInfoReq.json();
        document.getElementById("loading-overlay").classList.add("hidden")

        this.rawEvents = this.eventInfo?._embedded?.events || [];
        this.eventsArray = this.rawEvents.map(eventData => new Event(eventData));
    }
    // ======================================weather-content
    // ======================================
    async getWeatherInfo() {
        document.getElementById("loading-overlay").classList.remove("hidden")
        this.weatherInfoReq = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,uv_index&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto`)
        this.weatherInfo = await this.weatherInfoReq.json()
        document.getElementById("loading-overlay").classList.add("hidden")

        this.CapitalWeather = new Weather(this.weatherInfo)
        this.CapitalWeather.displayWeatherCards()
        this.CapitalWeather.displayHourly(this.weatherInfo.hourly)
        this.CapitalWeather.displayDaily(this.weatherInfo.daily)

    }
    // ======================================
    // ======================================
    async getLongWeekend() {
        document.getElementById("loading-overlay").classList.remove("hidden")
        this.longWeekendReq = await fetch(`https://date.nager.at/api/v3/LongWeekend/${this.year}/${this.countryCode}`)
        this.longWeekendInfo = await this.longWeekendReq.json()
        document.getElementById("loading-overlay").classList.add("hidden")

        this.longWeekendArr = this.longWeekendInfo.map(longWeekendData => new LongWeekend(longWeekendData));
    }
    // ======================================
    // ======================================
    async getSunInfo() {
        console.log(`https://api.sunrise-sunset.org/json?lat=${this.latitude}&lng=${this.longitude}&date=${getCurrentDate()}&formatted=0`);
        document.getElementById("loading-overlay").classList.remove("hidden")
        this.sunInfoReq = await fetch(`https://api.sunrise-sunset.org/json?lat=${this.latitude}&lng=${this.longitude}&date=${getCurrentDate()}&formatted=0`)
        this.sunInfoData = await this.sunInfoReq.json()
        document.getElementById("loading-overlay").classList.add("hidden")
        this.sunInfo = new SunInfo(this.sunInfoData)
        this.sunInfo.displaySunTime()

    }
}
class Holiday {
    constructor({ date, localName, name, countryCode, fixed, global, counties, launchYear, types }) {
        this.date = new Date(date);
        this.localName = localName;
        this.name = name;
        this.countryCode = countryCode;
        this.fixed = fixed;
        this.global = global;
        this.counties = counties;
        this.launchYear = launchYear;
        this.types = types;
        this.isFav = false;
    }
    displayHoliday(index) {
        this.isFav = newUser.holidays.find(h => h.localName === this.localName)
        let day = this.date.getDate();
        let month = this.date.toLocaleString("en-US", { month: "short" });
        let weekday = this.date.toLocaleString("en-US", { weekday: "long" });
        let type = this.types[0];
        return `
        <div class="holiday-card">
            <div class="holiday-card-header">
                <div class="holiday-date-box">
                    <span class="day">${day}</span>
                    <span class="month">${month}</span>
                </div>
                <button 
                    class="holiday-action-btn" 
                    id="holiday-${index}"
                >
                    <i class="fa-heart ${this.isFav ? "fa-solid" : "fa-regular"}"></i>
                </button>
            </div>
            <h3>${this.name}</h3>
            <p class="holiday-name">${this.localName}</p>
            <div class="holiday-card-footer">
                <span class="holiday-day-badge">
                    <i class="fa-regular fa-calendar"></i> ${weekday}
                </span>
                <span class="holiday-type-badge">${type}</span>
            </div>
        </div>
    `
    }
    toggleFav() {
        const isAlreadyFav = newUser.holidays.some(h =>
            h.name === this.name && h.date === this.date.toISOString()
        );

        if (!isAlreadyFav) {
            this.isFav = true;
            newUser.addHoliday(this);
            document.querySelector(".toast.success").classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".toast.success").classList.add("hidden");
            }, 3000);
        } else {
            document.querySelector(".toast.info").classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".toast.info").classList.add("hidden");
            }, 3000);
        }
    }
}
class Event {
    constructor(eventData) {
        this.name = eventData.name;
        this.date = eventData.dates.start.localDate;
        this.time = eventData.dates.start.localTime;
        this.venue = eventData._embedded.venues[0].name;
        this.city = eventData._embedded.venues[0].city.name;
        this.image = eventData.images?.find(img => img.width >= 600)?.url || eventData.images[0].url;
        this.url = eventData.url;
        this.category = eventData.classifications[0].subGenre.name;
        this.isSaved = false;
    }
    displayEvent(index) {
        this.isSaved = newUser.events.some(ev =>
            ev.name === this.name && ev.date === this.date
        );
        const heartClass = this.isSaved ? "fa-solid" : "fa-regular";
        const saveText = this.isSaved ? "Saved" : "Save";

        return `
            <div class="event-card">
                <div class="event-card-image">
                    <img src="${this.image}" 
                         alt="${this.name}">
                    <span class="event-card-category">${this.category}</span>
                    <button 
                        class="event-card-save" 
                        id="event-save-${index}"
                    >
                        <i class="fa-heart ${heartClass}"></i>
                    </button>
                </div>
                <div class="event-card-body">
                    <h3>${this.name}</h3>
                    <div class="event-card-info">
                        <div>
                            <i class="fa-regular fa-calendar"></i> 
                            ${this.date} at ${this.time.slice(0, 5)}
                        </div>
                        <div>
                            <i class="fa-solid fa-location-dot"></i> 
                            ${this.venue}, ${this.city}
                        </div>
                    </div>
                    <div class="event-card-footer">
                        <button 
                            class="btn-event" 
                            id="event-btn-${index}"
                        >
                            <i class="fa-heart ${heartClass}"></i> ${saveText}
                        </button>
                        <a href="${this.url}" 
                           target="_blank" 
                           class="btn-buy-ticket"
                        >
                            <i class="fa-solid fa-ticket"></i> Buy Tickets
                        </a>
                    </div>
                </div>
            </div>
        `
    }
    toggleSave() {
        const isAlreadySaved = newUser.events.some(ev =>
            ev.name === this.name &&
            ev.date === this.date
        );

        if (!isAlreadySaved) {
            this.isSaved = true;
            newUser.addEvent(this);
            document.querySelector(".toast.success").classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".toast.success").classList.add("hidden");
            }, 3000);
        } else {
            document.querySelector(".toast.info").classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".toast.info").classList.add("hidden");
            }, 3000);
        }
    }
}
class Weather {
    constructor(weatherInfo) {
        // current info 
        this.currentTemp = weatherInfo.current.temperature_2m;
        this.feelingTemp = weatherInfo.current.apparent_temperature
        this.maxTemp = weatherInfo.daily.temperature_2m_max[0]
        this.minTemp = weatherInfo.daily.temperature_2m_min[0]
        this.humidity = weatherInfo.current.relative_humidity_2m;
        this.wind = weatherInfo.current.wind_speed_10m
        this.uvIndex = weatherInfo.current.uv_index;
        this.precipitation = weatherInfo.daily.precipitation_probability_max[0]
        this.precipitationSum = weatherInfo.daily.precipitation_sum[0]
        this.sunrise = new Date(weatherInfo.daily.sunrise[0])
        this.sunset = new Date(weatherInfo.daily.sunset[0])
        // ====================
        // Hourly  info 

    }
    displayWeatherCards() {

        let now = new Date();
        let NowDate = now.toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric"
        });

        document.querySelector(".weather-time").innerHTML = NowDate
        document.querySelector(".weather-high-low .high").innerHTML = `<i class="fa-solid fa-arrow-up"></i> ${this.maxTemp}°`
        document.querySelector(".weather-high-low .low").innerHTML = `<i class="fa-solid fa-arrow-up"></i> ${this.minTemp}°`
        document.querySelector(".weather-feels").innerHTML = `Feels like ${this.feelingTemp}°C`
        document.querySelector(".temp-value").innerHTML = this.currentTemp
        document.querySelector(".weather-city").innerHTML = selectedCountry.city
        document.querySelector(".humidity + .detail-info .detail-value").innerHTML = `${this.humidity} %`
        document.querySelector(".detail-bar-fill").setAttribute("style", `width: ${this.humidity}%`)
        document.querySelector(".wind + .detail-info .detail-value").innerHTML = `${this.wind} km/h`
        document.querySelector(".uv + .detail-info .detail-value").innerHTML = `${this.uvIndex}`
        document.querySelector(".precip + .detail-info .detail-value").innerHTML = `${this.precipitation} %`
        document.querySelector(".sunrise .sun-value").innerHTML = this.sunrise.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
        document.querySelector(".sunset .sun-value").innerHTML = this.sunset.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
        document.querySelector(".precip + .detail-info").nextElementSibling.innerHTML = `${this.precipitationSum}mm expected`
    }
    displayHourly(hourly) {
        let cartoona = "";
        let now = new Date();
        let startIndex = hourly.time.findIndex(t => new Date(t) >= now);
        let count = 0;
        for (let i = startIndex; i < hourly.time.length; i++) {
            if (count === 20) {
                break;
            }
            let hourDate = new Date(hourly.time[i]);
            let isNow = i === startIndex;
            let timeLabel = isNow ? "Now" : hourDate.toLocaleString("en-US", {
                hour: "numeric",
                hour12: true
            });

            cartoona += `
                <div class="hourly-item ${isNow ? "now" : ""}">
                    <span class="hourly-time">${timeLabel}</span>
                    <div class="hourly-icon">
                        <i class="fa-solid fa-sun"></i>
                    </div>
                    <span class="hourly-temp">
                        ${Math.round(hourly.temperature_2m[i])}°
                    </span>
                </div>
            `;

            count++;
        }

        document.querySelector(".hourly-scroll").innerHTML = cartoona;
    }
    displayDaily(daily) {
        let cartoona = "";
        let now = new Date();

        for (let i = 0; i < daily.time.length; i++) {
            let dayDate = new Date(daily.time[i]);

            let isToday = dayDate.toDateString() === now.toDateString();

            let dayName = isToday
                ? "Today"
                : dayDate.toLocaleString("en-US", { weekday: "short" });

            let dateLabel = dayDate.toLocaleString("en-US", {
                day: "numeric",
                month: "short"
            });

            let maxTemp = Math.round(daily.temperature_2m_max[i]);
            let minTemp = Math.round(daily.temperature_2m_min[i]);

            let rainChance = daily.precipitation_probability_max?.[i];

            cartoona += `
                <div class="forecast-day ${isToday ? "today" : ""}">
                    <div class="forecast-day-name">
                        <span class="day-label">${dayName}</span>
                        <span class="day-date">${dateLabel}</span>
                    </div>
                    <div class="forecast-icon">
                        <i class="fa-solid fa-sun"></i>
                    </div>
                    <div class="forecast-temps">
                        <span class="temp-max">${maxTemp}°</span>
                        <span class="temp-min">${minTemp}°</span>
                    </div>
                    <div class="forecast-precip">
                        ${rainChance > 0 ? `${rainChance}%` : ""}
                    </div>
                </div>
            `;
        }

        document.querySelector(".forecast-list").innerHTML = cartoona;
    }
}
class LongWeekend {
    constructor(longWeekendData) {
        this.startDate = longWeekendData.startDate
        this.endDate = longWeekendData.endDate
        this.dayCount = longWeekendData.dayCount
        this.needBridgeDay = longWeekendData.needBridgeDay
        this.bridgeDays = longWeekendData.bridgeDays
        this.lwSaved = false
    }

    displayLongWeekend(index) {
        this.lwSaved = newUser.longWeekends.some(lw =>
            lw.startDate === this.startDate
        );
        let start = new Date(this.startDate);
        let end = new Date(this.endDate);

        let infoText = this.needBridgeDay
            ? `<i class="fa-solid fa-exclamation-circle"></i> Extra days off needed!`
            : `<i class="fa-solid fa-check-circle"></i> No extra days off needed!`;

        let dayVisual = "";
        let currentDate = new Date(this.startDate);

        while (currentDate <= end) {
            let dayName = currentDate.toLocaleString("en-US", { weekday: "short" });
            let dayNum = currentDate.getDate();
            let isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;

            dayVisual += `
                <div class="lw-day ${isWeekend ? "weekend" : ""}">
                    <span class="name">${dayName}</span>
                    <span class="num">${dayNum}</span>
                </div>
            `;

            currentDate.setDate(currentDate.getDate() + 1);
        }

        return `
            <div class="lw-card">
                <div class="lw-card-header">
                    <span class="lw-badge">
                        <i class="fa-solid fa-calendar-days"></i> ${this.dayCount} Days
                    </span>
                    <button class="holiday-action-btn" id="lw-${index}">
                        <i class="fa-heart ${this.lwSaved ? "fa-solid" : "fa-regular"}"></i>
                    </button>
                </div>

                <h3>Long Weekend #${index + 1}</h3>

                <div class="lw-dates">
                    <i class="fa-regular fa-calendar"></i>
                    ${start.toLocaleString("en-US", { month: "short" })} ${start.getDate()}
                    -
                    ${end.toLocaleString("en-US", { month: "short" })} ${end.getDate()},
                    ${end.getFullYear()}
                </div>

                <div class="lw-info-box ${this.needBridgeDay ? "warning" : "success"}">
                    ${infoText}
                </div>

                <div class="lw-days-visual">
                    ${dayVisual}
                </div>
            </div>
        `;
    }
    toggleLwSave() {
        const isAlreadySaved = newUser.longWeekends.some(lw =>
            lw.startDate === this.startDate &&
            lw.endDate === this.endDate &&
            lw.dayCount === this.dayCount &&
            lw.needBridgeDay === this.needBridgeDay
        );

        if (!isAlreadySaved) {
            this.lwSaved = true;
            newUser.addLw(this);
            document.querySelector(".toast.success").classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".toast.success").classList.add("hidden");
            }, 3000);
        } else {
            document.querySelector(".toast.info").classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".toast.info").classList.add("hidden");
            }, 3000);
        }
    }
}
class SunInfo {
    constructor(sunInfoData) {
        this.sunrise = formatTimeToLocal(sunInfoData.results.sunrise)
        this.sunset = formatTimeToLocal(sunInfoData.results.sunset)
        this.solarNoon = formatTimeToLocal(sunInfoData.results.solar_noon)
        this.daylightPercentage = ((sunInfoData.results.day_length / 86400) * 100).toFixed(2)
        this.nightLength = formattimeSec(86400 - sunInfoData.results.day_length)

        this.dayLength = formattimeSec(sunInfoData.results.day_length)
        this.twilightBegin = formatTimeToLocal(sunInfoData.results.civil_twilight_begin)
        this.twilightEnd = formatTimeToLocal(sunInfoData.results.civil_twilight_end)
    }
    displaySunTime() {
        let suntimedata = [...document.querySelectorAll("#sun-times-content *")]
        document.getElementById("sun-time-infoo").classList.add("hidden")
        suntimedata.forEach(element => {element.classList.remove("hidden")})
        document.querySelector(".sun-time-card.dawn .time").innerHTML = this.twilightBegin
        document.querySelector(".sun-time-card.sunrise .time").innerHTML = this.sunrise
        document.querySelector(".sun-time-card.noon .time").innerHTML = this.solarNoon
        document.querySelector(".sun-time-card.sunset .time").innerHTML = this.sunset
        document.querySelector(".sun-time-card.daylight .time").innerHTML = this.dayLength
        document.querySelector(".day-stat.dayLight .value").innerHTML = this.dayLength
        document.querySelector(".day-stat.darkness .value").innerHTML = this.nightLength
        document.querySelector(".day-progress-fill").setAttribute("style", `width: ${this.daylightPercentage}%`)
        document.querySelector(".day-stat.dayLight-percent .value").innerHTML = `${this.daylightPercentage} %`
    }
}

// ==================================================================
// ==================================================================
// =========================  main logic  ===========================
// ==================================================================
// ==================================================================

let selectedCountry;
let newUser = new User()
newUser.displayPlanCount()
searchCity.addEventListener("change", function () {
    selectedCountry.displaySelctedDistination();
})

// display countries in dropdown
async function displayCountries() {
    let allCountriesReq = await fetch("https://date.nager.at/api/v3/AvailableCountries");
    let allCountries = await allCountriesReq.json();
    let customOptions = '';
    for (let item of allCountries) {
        let countryCodeLower = item.countryCode.toLowerCase();
        customOptions += `
        <div class="custom-select-option" data-value="${item.countryCode}" data-name="${item.name}">
          <img src="https://flagcdn.com/w40/${countryCodeLower}.png" alt="${item.countryCode}" class="flag-img"
            onerror="this.style.display='none'">
          <span class="country-name">${item.name}</span>
          <span class="country-code">${item.countryCode}</span>
        </div>`;
    }
    document.querySelector('#global-country-custom .custom-select-options').innerHTML = customOptions;
    setupCustomSelect();
}
function setupCustomSelect() {
    const wrapper = document.getElementById('global-country-custom');
    const trigger = wrapper.querySelector('.custom-select-trigger');
    const dropdown = wrapper.querySelector('.custom-select-dropdown');
    const searchInput = wrapper.querySelector('.country-search-input');
    const newTrigger = trigger.cloneNode(true);
    trigger.parentNode.replaceChild(newTrigger, trigger);
    newTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
        newTrigger.classList.toggle('open');
        if (dropdown.classList.contains('open')) {
            searchInput.focus();
        }
    });
    let options = document.querySelectorAll('#global-country-custom .custom-select-option');
    options.forEach(option => {
        option.addEventListener('click', async (e) => {
            e.stopPropagation();
            let value = option.dataset.value;
            let name = option.dataset.name;
            let imgSrc = option.querySelector('img').src;

            newTrigger.querySelector('.flag img').src = imgSrc;
            newTrigger.querySelector('.selected-text').textContent = name;
            dropdown.classList.remove('open');
            newTrigger.classList.remove('open');
            searchInput.value = '';
            options.forEach(opt => opt.style.display = '');
            // =============
            let searchYear = document.getElementById("global-year");
            let currentCountryCode = value;
            let targetYear = searchYear ? searchYear.value : new Date().getFullYear();
            selectedCountry = new Country(currentCountryCode, targetYear);
            await selectedCountry.getCountryInfo();
            document.getElementById("global-city").innerHTML = selectedCountry.getCities();

            selectedCountry.displaySelctedDistination();
        });
    });
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        options.forEach(option => {
            const countryName = option.dataset.name.toLowerCase();
            const countryCode = option.dataset.value.toLowerCase();
            if (countryName.includes(searchTerm) || countryCode.includes(searchTerm)) {
                option.style.display = '';
            } else {
                option.style.display = 'none';
            }
        });
    });
    document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
            dropdown.classList.remove('open');
            newTrigger.classList.remove('open');
        }
    });
}
displayCountries();
let sections = [...document.querySelectorAll("section")]
let navLinks = [...document.querySelectorAll(".sidebar-nav a")]
const headerContent = {
    "dashboard": "Welcome back! Ready to plan your next adventure?",
    "holidays": "Explore public holidays around the world",
    "events": "Find concerts, sports, and entertainment",
    "weather": "Check forecasts for any destination",
    "long-weekends": "Find the perfect mini-trip opportunities",
    "currency": "Convert currencies with live exchange rates",
    "sun-times": "Check sunrise and sunset times worldwide",
    "my-plans": "Your saved holidays and events"
}
document.querySelector(".sidebar-nav").addEventListener("click", function (e) {
    let link = e.target.closest("a.nav-item")
    if (!link) {
        return
    }
    if (link.getAttribute("data-view") == "my-plans") {
        newUser.displayUserPlans();
        document.getElementById("clear-all-plans-btn").addEventListener("click", function () {
            if (!newUser.cheackPlans()) {
                Swal.fire({
                    title: "No Plans",
                    text: "There are no saved plans to clear.",
                    icon: "info"
                });
                return
            }
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    newUser.clearPlans()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });

        })
    }
    navLinks.forEach(element => {
        element.classList.remove("active");
    });

    sections.forEach(
        section => {
            section.classList.remove("active")
        });
    link.classList.add("active");
    let targetSection = sections.find(section => {
        return section.id === `${link.getAttribute("data-view")}-view`
    });
    document.getElementById("page-title").innerHTML = link.getAttribute("data-view").charAt(0).toUpperCase() + link.getAttribute("data-view").slice(1)
    targetSection.classList.add("active");
    document.getElementById("page-subtitle").innerHTML = headerContent[link.getAttribute("data-view")]
    if (selectedCountry) {
        switch (link.getAttribute("data-view")) {
            case "dashboard":
                console.log("dashboard");
                break;
            case "holidays":
                (async () => {
                    await selectedCountry.getHolidaysInfo();
                    displayAllHolidays();
                })();
                break;
            case "events":
                (async () => {
                    await selectedCountry.getEventsInfo();
                    displayEvents();

                })();
                break;
            case "weather":
                (async () => {
                    await selectedCountry.getWeatherInfo();
                })();
                console.log("weather");
                break;
            case "long-weekends":
                (async () => {
                    await selectedCountry.getLongWeekend();
                    displayLongWeekends();
                })();
                break;
            case "currency":
                convertCurrency();
                console.log(headerContent.currency);
                break;
            case "sun-times":
                (async () => {
                    await selectedCountry.getSunInfo();
                })();
                break;
            case "my-plans":
                newUser.displayUserPlans();
                console.log(headerContent["my-plans"]);
                break;
            default:
                console.log("No content found for this view.");
        }
    }
})

function startLiveDateTime() {
    function updateClock() {
        let now = new Date();
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let dayName = days[now.getDay()];
        let monthName = months[now.getMonth()];
        let date = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes().toString().padStart(2, "0");
        let period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2, "0");
        document.getElementById("current-datetime").innerHTML = `${dayName}, ${monthName} ${date}, ${hours}:${minutes} ${period}`;
    }
    updateClock();
    setInterval(updateClock, 1000);
}
startLiveDateTime();
// display holidays 
function displayAllHolidays() {
    let cartoona = ""
    selectedCountry.holidaiesArray.forEach((holiday, index) => {
        cartoona += holiday.displayHoliday(index);
    });
    document.getElementById("holidays-content").innerHTML = cartoona;
    selectedCountry.holidaiesArray.forEach((holiday, index) => {
        let btn = document.getElementById(`holiday-${index}`);
        btn.addEventListener("click", () => {
            holiday.toggleFav();
            displayAllHolidays();
        });
    });
}
function displayEvents() {
    let cartoona = "";
    if (selectedCountry.eventsArray.length == 0) {
        return
    }
    selectedCountry.eventsArray.forEach((event, index) => {
        cartoona += event.displayEvent(index);
    });
    document.getElementById("events-content").innerHTML = cartoona;
    selectedCountry.eventsArray.forEach((event, index) => {
        let saveIconBtn = document.getElementById(`event-save-${index}`);
        let saveTextBtn = document.getElementById(`event-btn-${index}`);

        let handleSaveClick = () => {
            event.toggleSave();
            displayEvents();
        };

        if (saveIconBtn) {
            saveIconBtn.addEventListener("click", handleSaveClick);
        }
        if (saveTextBtn) {
            saveTextBtn.addEventListener("click", handleSaveClick);
        }
    });
}
function displayLongWeekends() {
    let cartoona = "";
    if (selectedCountry.longWeekendArr.length == 0) {
        return
    }
    selectedCountry.longWeekendArr.forEach((lw, index) => {
        cartoona += lw.displayLongWeekend(index);
    });
    document.getElementById("lw-content").innerHTML = cartoona;
    selectedCountry.longWeekendArr.forEach((lw, index) => {
        document
            .getElementById(`lw-${index}`)
            .addEventListener("click", () => {
                lw.toggleLwSave();
                displayLongWeekends();
            });
    });
}
const convertBtn = document.getElementById("convert-btn");
const amountInput = document.getElementById("currency-amount");
const fromSelect = document.getElementById("currency-from");
const toSelect = document.getElementById("currency-to");
const swapBtn = document.getElementById("swap-currencies-btn");
async function convertCurrency() {
    let amount = parseFloat(amountInput.value) || 0;
    let from = fromSelect.value;
    let to = toSelect.value;
    if (from === to) {
        showResult(amount, from, amount, to, 1);
        return;
    }
    let res = await fetch(`https://v6.exchangerate-api.com/v6/8e1200d129807985fe1c08a4/pair/${from}/${to}/${amount}`);
    let data = await res.json();
    showResult(amount, from, data.conversion_result, to, data.conversion_rate);
}
function showResult(amountFrom, codeFrom, amountTo, codeTo, rate) {
    document.getElementById("currency-result").innerHTML = `
        <div class="conversion-display">
            <div class="conversion-from">
                <span class="amount">${amountFrom.toFixed(2)}</span>
                <span class="currency-code">${codeFrom}</span>
            </div>
            <div class="conversion-equals"><i class="fa-solid fa-equals"></i></div>
            <div class="conversion-to">
                <span class="amount">${amountTo.toFixed(2)}</span>
                <span class="currency-code">${codeTo}</span>
            </div>
        </div>
        <div class="exchange-rate-info">
            <p>1 ${codeFrom} = ${rate.toFixed(4)} ${codeTo}</p>
        </div>
    `;
}
convertBtn.addEventListener("click", convertCurrency);
swapBtn.addEventListener("click", () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    convertCurrency();
});
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================

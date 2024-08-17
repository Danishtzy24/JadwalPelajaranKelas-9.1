document.addEventListener("DOMContentLoaded", () => {
    const scheduleData = [
        { day: "Senin", subjects: [
            { name: "Bahasa Indonesia", teacher: "Nurain, S.Pd" },
            { name: "PJOK", teacher: "Rismanto, S.Pd., MA" },
            { name: "MTK", teacher: "Lely Farhani, S.PD" },
            { name: "PKN", teacher: "Lilik Haryani, S.Pd" },
            { name: "Tahfidz", teacher: "Jiah Ulhak, S.Pd" }
        ]},
        { day: "Selasa", subjects: [
            { name: "Qurdist", teacher: "Arini Saila Haq, Lc" },
            { name: "IT", teacher: "Muhammad Farel Sidqi, S.Pd" },
            { name: "Bahasa Inggris", teacher: "Siti Suryani, S.Pd" },
            { name: "PJOK (1 jam)", teacher: "Rismanto, S.Pd., MA" },
            { name: "PKN (1 jam)", teacher: "Lilik Haryani, S.Pd" },
            { name: "IPA", teacher: "H. Faqih Usman, M.Pd" }
        ]},
        { day: "Rabu", subjects: [
            { name: "SKI", teacher: "Hj. Emi Karyati, S.Ag" },
            { name: "Akidah Akhlak", teacher: "Dra. Hj. Nursaena" },
            { name: "Bahasa Arab", teacher: "H. Taufik Husein, SS., M.Pd"},
            { name: "Fiqih", teacher: "Ahmad Zakaria, Lc" },
            { name: "Bahasa Indonesia", teacher: "Nurain, S.Pd" }
        ]},
        { day: "Kamis", subjects: [
            { name: "MTK", teacher: "Lely Farhani, S.Pd" },
            { name: "IPS", teacher: "Eko Suwarmo, S.Pd" },
            { name: "IPA", teacher: "H. Faqih Usman, M.Pd" },
            { name: "Bahasa Arab", teacher: "H. Taufik Husein, SS., M.Pd" },
            { name: "SBK", teacher: "Ida Farida, S.Ag" }
        ]},
        { day: "Jumat", subjects: [
            { name: "IPS", teacher: "Nurain, S.Pd" },
            { name: "Bahasa Inggris", teacher: "Siti Suryani, S.Pd" },
            { name: "Bahasa Indonesia", teacher: "Nurain, S.Pd" }
        ]}
    ];

    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZoneName: "short"
        });
        document.getElementById("datetime").innerText = dateTimeString;
        

        // Update location and timezone
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            document.getElementById("location").innerText = `Lokasi: Lat ${latitude.toFixed(2)}, Long ${longitude.toFixed(2)} (WIB)`;
        });
    }

    

    function renderSchedule() {
        const tableBody = document.querySelector("#schedule-table tbody");
        tableBody.innerHTML = ''; // Clear previous content

        scheduleData.forEach((daySchedule) => {
            const dayRow = document.createElement("tr");
            dayRow.innerHTML = `<td colspan="2" class="day-name">${daySchedule.day}</td>`;
            tableBody.appendChild(dayRow);

            daySchedule.subjects.forEach(subject => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td class="subject-name">${subject.name}<br><span class="teacher-name">${subject.teacher}</span></td>
                `;
                tableBody.appendChild(row);
            });
        });
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    renderSchedule();
});
// Configuration
const scheduleTime = new Date("May 20, 2026 10:00:00").getTime();

// Countdown Logic
const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = scheduleTime - now;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer-container").classList.add("hidden");
        document.getElementById("login-container").classList.remove("hidden");
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}, 1000);

// Grading Logic
function calculateGrade(percentage) {
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B+";
    if (percentage >= 60) return "B";
    if (percentage >= 50) return "C+";
    if (percentage >= 40) return "C";
    return "F";
}

// Function to generate the result UI (Simulated for viewing)
function viewResult() {
    // In a real app, you would fetch data from your Supabase table here
    const resultArea = document.getElementById("printable-area");
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("result-display").classList.remove("hidden");

    // Example layout based on your uploaded image
    resultArea.innerHTML = `
        <div style="border: 2px solid #000; padding: 20px; text-align: left;">
            <h2 style="text-align:center">RAHMANIYYA PUBLIC SCHOOL</h2>
            <div style="display:flex; justify-content:space-between;">
                <p><strong>Name:</strong> Aarav Kumar</p>
                <p><strong>DOB:</strong> 15/06/2015</p>
            </div>
            <table border="1" style="width:100%; border-collapse: collapse; text-align:center;">
                <tr style="background:#eee"><th>Subject</th><th>Marks</th><th>Total</th></tr>
                <tr><td>English</td><td>45</td><td>175</td></tr>
                <tr><td>Mathematics</td><td>23</td><td>175</td></tr>
            </table>
            <div style="margin-top:20px; display:grid; grid-template-columns: 1fr 1fr 1fr;">
                <p><strong>Overall:</strong> 187/700</p>
                <p><strong>Grade:</strong> D</p>
                <p><strong>Rank:</strong> 4</p>
            </div>
        </div>
    `;
}

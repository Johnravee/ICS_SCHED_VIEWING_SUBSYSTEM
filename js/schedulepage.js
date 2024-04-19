    const hideTable = () => {
            document.querySelector(".result-container").style.display = "none"
        }

   const inputEvent = () => {
    const inputElement = document.getElementById('inputsearch');
    const value = inputElement.value;
    
    if (value.length === 7) {
        console.log(value);
        
        fetch(`/section?section=${value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => {
    
                   return res.ok ? res.json() : console.error("Network  response e  rror!");
        })
        .then(datas => {
            datas.forEach(data => {
                const table = document.querySelector("tbody")
                table.innerHTML += `
                    <tr>
                        <td>${data.Day}</td>
                        <td>${data.Section}</td>
                        <td>${data.Subject}</td>
                        <td>${data.TimeDuration}</td>
                        <td>${data.RoomNumber}</td>
                    <tr>
                
                `

                document.querySelector(".result-container").style.display = "flex"
            });
        })
        .catch(err => {
            console.error("Fetch error:", err.message); // Handle fetch errors
        });
    }
};

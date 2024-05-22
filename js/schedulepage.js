    const hideTable = () => {
            document.querySelector(".result-container").style.display = "none"
            document.querySelector("tbody").innerHTML = null
        }

  const convertTime = (time) => {
    const start = time.split(":");
    let hours = parseInt(start[0]);
    let min = parseInt(start[1]);

    const pmOrAm = (hours >= 12) ? "PM" : "AM"

    hours = (hours > 12) ? hours - 12 : hours

    hours = (hours === 0) ? 12 : hours

    min = (min < 10) ? min + "0" : min

    const formattedStartTime = `${hours}:${min} ${pmOrAm}`

    return formattedStartTime;
}



   const clickSearch = () => {
    const inputElement = document.getElementById('inputsearch');
    let value = inputElement.value;



         if (value === "") {
            alert("Empty field detected")
            return
         }

                  document.querySelector("#loaderModal").style.display = "flex";
    
    if (value.length > 0 ){
            fetch(`/search?search=${value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => {
    
                   return res.ok ? res.json() : console.error("Network  response e  rror!");
        })
        .then(datas => {
            
        if (datas.length === 0) {

                        document.querySelector(".result-container").style.display = "none";
                        document.querySelector("#loaderModal").style.display = "none";
                        alert("No data found!")
                        return;
                    }

                inputElement.value = null
                document.querySelector("#loaderModal").style.display = "none";

            datas.forEach(data => {
                const table = document.querySelector("tbody")
                table.innerHTML += `
                    <tr>
                        <td>${data.InstructorName}</td>
                        <td>${data.Day}</td>
                        <td>${data.Section}</td>
                        <td>${data.Subject}</td>
                        <td>${convertTime(data.StartTime)} - ${convertTime(data.EndTime)} </td>
                        <td>${data.RoomNumber}</td>
                    <tr>
                
                `

                document.querySelector(".result-container").style.display = "flex"
            });
        })
        .catch(err => {
            console.error("Fetch error:", err.message);
        })
    }
  
        
    
    }




let myProject =[{
    projectName : "Makan Mukbang Kuy Apps",
    duration : "1 Bulan",
    description : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Condimentum lacinia quis vel eros donec ac odio tempor. 
    Eget gravida cum sociis natoque penatibus et magnis dis parturient. 
    Interdum velit laoreet id donec ultrices tincidunt arcu non.`,
    usingNode : true,
    usingReact : true,
    usingNext : true,
    usingType : true,
    image : "./assets/image/makanan.jpg"
}]

let days =""
let months = ""

function waktu (awal,akhir){
    let dataStart = new Date (awal)
    let dataEnd = new Date (akhir)
    let oneDay = 1000 * 3600 * 24

    let selisih = dataEnd.getTime() - dataStart.getTime()
    let totaldays = selisih/oneDay
    let totalmonths = Math.floor (totaldays/30)
        // totaldays = totaldays % 30 

    days = totaldays
    months = totalmonths
}

function isiProject(event) {
    event.preventDefault()

    let duration

    let projectName = document.getElementById("my-project").value
    let awalWaktu = document.getElementById("awal").value
    let akhirWaktu = document.getElementById("akhir").value
    let description = document.getElementById("description").value
    let usingNode = document.getElementById("node-js").checked
    let usingReact = document.getElementById("react-js").checked
    let usingNext = document.getElementById("next-js").checked
    let usingType= document.getElementById("typeScript").checked
    let image= document.getElementById("input-blog-image").files

    if(projectName == ""){
        return alert("Nama Project harus di isi")
      } else if(awalWaktu == "") {
        return alert("Tanggal awal harus di isi") 
      } else if(akhirWaktu == "") {
        return alert("Tanggal akhir harus di isi") 
      } else if(description == "") {
        return alert("Deskripsi harus di isi") 
      } else if(image == "") {
        return alert("image harus di isi")
      }
    
    image = URL.createObjectURL (image[0])

    waktu(awalWaktu,akhirWaktu)

    if(months < 1) {
        duration = `${days} Hari`
    } else {
        duration = `${months} Bulan`
    }

    const data =  {
        projectName,
        awalWaktu,
        akhirWaktu,
        description,
        days,
        months,
        duration,
        usingNode,
        usingReact,
        usingNext,
        usingType,
        image
    }

    myProject.unshift(data)
    console.log(myProject)

    renderMyProject()
}

function renderMyProject() {

    document.getElementById("contents").innerHTML =""
    
    for (let i = 0 ; i < myProject.length ; i++){
        document.getElementById("contents").innerHTML += `<div class="project-list-items">
        <img src="${myProject[i].image}" alt="makan"/>
        <h2><a href="my-project-detail.html/" target="_blank">${myProject[i].projectName}</a></h1>
        <p style="font-size: 15px; color: grey;">Durasi : ${myProject[i].duration}</p>
        <p>
        ${myProject[i].description}
        </p>
        
        ${renderIcon(myProject[i])}
        <div class="edit">
            <button>Edit</button>
            <button>Delete</button>
        </div>`
    }

    
}

function renderIcon(icon) {
    let renderImage = ""

    if (icon.usingNode == true){
        renderImage += `<i class="fa-brands fa-node-js"></i>`
    }
    if (icon.usingNext == true){
        renderImage += `<i class="fa-brands fa-react"></i>`
    }
    if (icon.usingReact == true){
        renderImage += `<i class="fa-brands fa-vuejs"></i>`
    }
    if (icon.usingType == true){
        renderImage += `<i class="fa-brands fa-js"></i>`
    }
    
    return renderImage
}
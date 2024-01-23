const data = [
  {
    name: "Rohit Jain",
    email: "rohit@fullstacklearning.com",
  },
  {
    name: "Garvit Jangir",
    email: "garvit@gmail.com",
  },
  {
    name: "Nihit Jangir",
    email: "nihit@gmail.com",
  },
  {
    name: "Surbhi Singhal",
    email: "surbhi.s@gmail.com",
  },
  {
    name: "Aashish Pancholi",
    email: "aashish@gmail.com",
  },
  {
    name: "Somesh Sharma",
    email: "somesh@gmail.com",
  },
  {
    name: "Sudhir Mishra",
    email: "mishra.sudhir@gmail.com",
  },
  {
    name: "Chandan Lakhara",
    email: "chandan.l@gmail.com",
  },
  {
    name: "Priya",
    email: "priya@fullstacklearning.com",
  },
  {
    name: "Priya Sharma",
    email: "priya.s@gmail.com",
  },
  {
    name: "Aditya Kamodiya",
    email: "aditya@aiet.com",
  },
  {
    name: "Dheeraj Jangir",
    email: "dheeraj@aiet.com",
  },
  {
    name: "Ritika Rajwar",
    email: "ritika@aiet.com",
  },
];

window.onload = () => {
  let start = 1;
  const div = document.querySelector("#sel")
  document.querySelector(".editable").onkeydown = (e) => {
    const placeholder = e.target.children[e.target.childElementCount - 1];
    if (start) {
      if (placeholder.innerHTML === "Search...") {
        placeholder.innerHTML = " ";
        start = 0;
      } else placeholder.innerHTML = e.key;
    }

    // console.log(data.filter((dt) => {
    //   if (dt.name.includes(placeholder.innerHTML)) return dt.name;
    // }))

    let dataFound = data.filter((dt) => {
      if (dt.name.includes(placeholder.innerHTML)) return dt.name;
    })
    console.log(dataFound)

    if (dataFound.length > 0) {
      div.classList.add("shown")
      div.innerHTML = ""
      dataFound.forEach((data) => {
        const para = document.createElement("p")
        const para2 = document.createElement("p")
        para.innerHTML = data.name 
        para2.innerHTML = data.email 
        para.addEventListener("click", (e) => {
          placeholder.innerHTML=para.innerHTML;
          para.innerHTML=""
          para2.innerHTML=""
          
        })
        div.append(para)
        div.append(para2)
      })
    }
    else{
      div.classList.remove("shown")
      div.innerHTML = ""
    }

  };
};
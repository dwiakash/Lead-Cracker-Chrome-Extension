
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const Ulel = document.getElementById("ulel");
const deletebtn = document.getElementById("delete-btn")
const tabbtn = document.getElementById("tabbtn")
// console.log(Ulel);

// let name = localStorage.getItem("myName")
// console.log(name)

const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage)

// const tabs = [ 
//     {url: "https://www.linkedin.com/in/akash-dwivedi-5949a8210/"}
// ]

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabbtn.addEventListener("click", function(){
    //console.log(tabs[0].url)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
   
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

})




function render(leads)
{
    let listItems = ""
    for (let i= 0 ; i<leads.length; i++) {
        // console.log(myLeads[i])
        //Ulel.innerHTML += "<li>" + myLeads[i] + "</li>"
        listItems += `
        <li> 
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
        </li>
        `
        // const li = document.createElement("li")
         // Ulel.append(li)
    }  
    Ulel.innerHTML=listItems
} 


deletebtn.addEventListener("dblclick",function()
{
    // console.log("double click")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    // console.log("button clicked from user")
    myLeads.push(inputEl.value)
    // console.log(myLeads)/
    inputEl.value = ""
   localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)

//  console.log(localStorage.getItem("myLeads"))
}) 
 





 





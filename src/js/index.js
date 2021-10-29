//  JavaScript Objects
// {} = object
// data store
// {
//     name:value,
//     key:value,
//     property:value
// }
// 
// Object Access Properties
// - object.property
// - employee.id
// - employee.fullname
// - employee.fullName
// - employee.full_name
// 
// Property is a string:
// employee['id']
(function(){
    // create ui forEach on the loop
    let templateString = ''
    employees.forEach((employee, index)=>{
        // Component
        // Rendering
        // Component + Data ====> Render ====> UI
        const template = `
        <li class="employee" data-key="${employee.id}">
            <p>${employee.fullname}</p>
            <p>${employee.phone || "not available"}</p>
            <p>${employee.email}</p>
            <img src="${employee.avatar}" alt="${employee.fullname}">
        </li>
        `
        
        templateString += template
    })
        console.log(templateString)
        // innerHTML, insertAdjacentHTML
        document.querySelector('#employees').insertAdjacentHTML('afterbegin', templateString)
}
)()
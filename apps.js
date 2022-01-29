

//get element 

const skill =document.querySelectorAll('.skill');
const all_skill=document.querySelector('.all-skill');


skill.forEach(skill =>{

    skill.addEventListener('change',function(){
        let all_data = document.querySelectorAll('.skill:checked');

        let skill_arr =[];

        all_data.forEach(data =>{

            skill_arr.push(data.value);
        })
         let list ='';
         skill_arr.map(data => {

            list +=`<li class="list-group-item">${data}</li>`;
         });


         all_skill.innerHTML=list;


    })

})
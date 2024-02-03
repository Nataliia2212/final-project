console.log('1234')
import axios from "axios";


const results = [
    {
      _id: "64f26083f39b17a4",
      bodyPart: "waist",
      name: "air bike",
      target: "abs",
      burnedCalories: 312,
      time: 3,
    },
   {
      _id: "64",
      bodyPart: "waist",
      name: "air bike",
      target: "abs",
      burnedCalories: 312,
      time: 3,
    },
   {
      _id: "3a4",
      bodyPart: "waist",
      name: "air bike",
      target: "abs",
      burnedCalories: 312,
      time: 3,
    },
   {
      _id: "64f389465ae265a4",
      bodyPart: "waist",
      name: "air bike",
      target: "abs",
      burnedCalories: 312,
      time: 3,
    },
  ]


const favoritesRef = document.querySelector('.favorites-list');
console.log(favoritesRef)

const keyLS = "favorites-exercises";

favoritesRef.addEventListener('click', onExercisesClick);

async function onExercisesClick(event) {
  
    if (event.target.dataset.action === 'trash') {
        console.log('YRA')
    } else if (event.target.dataset.action === 'start') {
       try {
            const data = await search('64f389465ae26083f39b17a4');
            console.log(data.bodyPart)
       }
       catch (error) {
            console.log(error)
        }
    } else {
        return
    }
    
   
   


    // const data = { email, message }
    // // console.log(data)
    // saveToLS(keyLS, data);
}

function loadFromLS(keyLS) {
  const zip = localStorage.getItem(keyLS);
  try {
    const data = JSON.parse(zip);
    return data;
  } catch {
    return zip;
  }
}

// console.log(loadFromLS(keyLS))

function saveToLS(key, info) {
    const zip = JSON.stringify(info)
    localStorage.setItem(key, zip)
}

saveToLS(keyLS, results)


function deleteExercise(id) {
    const exercises = loadFromLS(keyLS)
    console.log(exercises)
    console.log('??????')
 exercises.indexof(id)
        
exercises.map((element, index, array) => {
  // Тіло колбек-функції
});

//    for (let i = 0; i < exercises.length; i++) {
//         console.log(i)

//         //  if (exercises[i]._id === id) {
//         //      console.log('hgfdsdfghjk')
//         //      console.log(exercises[i]._id)
//         //         exercises[i].splice(i, 1);
//         //         break;
//         //     }
//     }
    console.log(exercises)
        return exercises;
}
deleteExercise('64f389465ae265a4')
// console.log(deleteExercise('64f389465ae265a4'))
// console.log(loadFromLS(keyLS))




//     const email = formElem.elements.email.value;
//     const message = formElem.elements.message.value;

//     const data = { email, message };



//     console.log(data);

//      localStorage.removeItem(keyLS);
//      formElem.reset();
// }




// function restoreData() {
//   const data = loadFromLS(keyLS) || {};
//   formElem.elements.email.value = data.email || '';
//   formElem.elements.message.value = data.message || '';
// }





// const search = async (id) => {
//     try {
//         const request = await axios.get(`https://energyflow.b.goit.study/api/exercises/${id}`)
//         return request.data
//     } catch (error) {
// 		return error.message
// 	}    
// }

console.log('1234')


const favoritesRef = document.querySelector('.favorites-list');
console.log(favoritesRef)

const keyLS = ".favorites-exercises";

favoritesRef.addEventListener('click', onExercisesClick);

function onExercisesClick(event) {

    console.log(event)
    // const email = formElem.elements.email.value.trim();
    // const message = formElem.elements.message.value.trim();

    // const data = { email, message }
    // // console.log(data)
    // saveToLS(keyLS, data);
}

// function saveToLS(key, info) {
//     const zip = JSON.stringify(info)
//     localStorage.setItem(key, zip)
// }

// formElem.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     const email = formElem.elements.email.value;
//     const message = formElem.elements.message.value;

//     const data = { email, message };

//    if (!email || !message) {
//        alert('All form fields must be filled in')
//        return
//    }

//     console.log(data);

//      localStorage.removeItem(keyLS);
//      formElem.reset();
// }

// function loadFromLS(keyLS) {
//   const zip = localStorage.getItem(keyLS);
//   try {
//     const data = JSON.parse(zip);
//     return data;
//   } catch {
//     return zip;
//   }
// }

// function restoreData() {
//   const data = loadFromLS(keyLS) || {};
//   formElem.elements.email.value = data.email || '';
//   formElem.elements.message.value = data.message || '';
// }

// restoreData();
import img from '../img/sprite.svg';
import imgH from '../img/dumbbell.png';

import { saveToLS, loadFromLS } from "./localStorage";


// const results = [{"_id":"64f389465ae26083f39b17a2","bodyPart":"waist","equipment":"body weight","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0001.gif","name":"3/4 sit-up","target":"abs","description":"This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.","rating":3.41,"burnedCalories":220,"time":3,"popularity":9721},{"_id":"64f389465ae26083f39b17df","bodyPart":"shoulders","equipment":"barbell","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0067.gif","name":"barbell one arm snatch","target":"delts","description":"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises.","rating":3.66,"burnedCalories":345,"time":3,"popularity":5484},{"_id":"64f389465ae26083f39b17a5","bodyPart":"waist","equipment":"body weight","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0006.gif","name":"alternate heel touchers","target":"abs","description":"This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.","rating":4.05,"burnedCalories":116,"time":3,"popularity":7499},{"_id":"64f389465ae26083f39b17b7","bodyPart":"upper legs","equipment":"barbell","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0026.gif","name":"barbell bench squat","target":"quads","description":"Located at the front of the upper leg, the quads are responsible for knee extension and hip flexion. Exercises include squats, leg press, and lunges.","rating":3.25,"burnedCalories":259,"time":3,"popularity":4169},{"_id":"64f389465ae26083f39b17ba","bodyPart":"upper legs","equipment":"barbell","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0029.gif","name":"barbell clean-grip front squat","target":"glutes","description":"Located in the buttocks, these are powerful muscles used in hip extension, abduction, and external rotation. Exercises like squats, deadlifts, and hip thrusts target the glutes.","rating":4.33,"burnedCalories":128,"time":3,"popularity":3511},{"_id":"64f389465ae26083f39b180e","bodyPart":"upper legs","equipment":"barbell","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0116.gif","name":"barbell straight leg deadlift","target":"hamstrings","description":"Found at the back of the upper leg, they work in hip extension and knee flexion. Exercises include leg curls, Romanian deadlifts, and glute-ham raises.","rating":3.57,"burnedCalories":54,"time":3,"popularity":3379},{"_id":"64f389465ae26083f39b189e","bodyPart":"chest","equipment":"dumbbell","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0302.gif","name":"dumbbell decline fly","target":"pectorals","description":"These are the large chest muscles responsible for shoulder adduction and horizontal adduction. Bench press, push-ups, and chest flies target these muscles.","rating":3.76,"burnedCalories":67,"time":3,"popularity":5670},{"_id":"64f389465ae26083f39b18ae","bodyPart":"upper arms","equipment":"dumbbell","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0318.gif","name":"dumbbell incline curl","target":"biceps","description":"Located on the front part of the upper arm, the biceps are responsible for elbow flexion and supination of the forearm. Exercises that target biceps include bicep curls, hammer curls, and chin-ups.","rating":4.5,"burnedCalories":115,"time":3,"popularity":3977},{"_id":"64f389465ae26083f39b18d7","bodyPart":"shoulders","equipment":"dumbbell","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0360.gif","name":"dumbbell one arm shoulder press v. 2","target":"delts","description":"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises.","rating":3.83,"burnedCalories":161,"time":3,"popularity":3677},{"_id":"64f389465ae26083f39b190d","bodyPart":"shoulders","equipment":"dumbbell","gifUrl":"https://ftp.goit.study/img/power-pulse/gifs/0415.gif","name":"dumbbell standing alternate raise","target":"delts","description":"Located at the shoulders, deltoids have three heads: anterior, lateral, and posterior. They are involved in various arm movements like lifting and rotating. Exercises include shoulder press, lateral raises, and front raises.","rating":3.67,"burnedCalories":325,"time":3,"popularity":3572}]

const favoritesRef = document.querySelector('.favorites-list');
const textRef = document.querySelector('.text-wrap');
const keyLS = "favorites-exercises";
const message = ` <img
        class="img"
        src="${imgH}"
        alt="dumbbell"
        width="85"
        height="52"
      />

      <p class="text-er">
        It appears that you haven't added any exercises to your favorites yet.
        To get started, you can add exercises that you like to your favorites
        for easier access in the future.
      </p>`

favoritesRef.addEventListener('click', onExercisesClick);

function onExercisesClick(event) {
    if (event.target.dataset.action === 'trash') {
      deleteExercise(event.target.id)
      restoreData();
    } else {
        return
    }
}

export function deleteExercise(id) {
    const exercises = loadFromLS(keyLS)
    const ex = [];
  
    exercises.map((element) => { 
      if (element._id !== id) {
        ex.push(element)
      }
      return ex
    });

    return saveToLS(keyLS, ex)
}


// const search = async (id) => {
//     try {
//         const request = await axios.get(`https://energyflow.b.goit.study/api/exercises/${id}`)
//         return request.data
//     } catch (error) {
// 		return error.message
// 	}
// }

function markup(arr) {
    return arr.map(({ _id, bodyPart, name, target, burnedCalories, time }) => {
        return ` <li class="list-item">
        <div class="wrap-hhhh">
          <div class="wrap-heading">
            <p class="heading">Workout</p>
            <button class="btn-trash" type="button" name="trash" trash id="${_id}">
              <svg
                class="icon-trash"
                width="16"
                height="16"
                data-action="trash"
                id="${_id}"
              >
                <use
                  href="${img}#icon-trash"
                  data-action="trash"
                  id="${_id}"
                ></use>
              </svg>
            </button>
          </div>

          <button class="button" type="button" name="start" data-action="start" id="${_id}">
            Start
            <svg class="icon-arrow" width="14" height="14" data-action="start">
              <use
                href="${img}#icon-arrow"
                data-action="start"
              ></use>
            </svg>
          </button>
        </div>

        <div class="wrap">
          <div class="wrap-icon">
            <svg class="icon-run" width="14" height="16">
              <use href="${img}#icon-run"></use>
            </svg>
          </div>

          <h3 class="item-title single-line">${name}</h3>
        </div>
        <div class="wrap-descr">
          <p class="text">Burned calories:<span>${burnedCalories} / ${time} min</span></p>
          <p class="text">Body part:<span>${bodyPart}</span></p>
          <p class="text">Target:<span>${target}</span></p>
        </div>
      </li>`
    }).join('') 
}

function render(data) {
  if (data.length === 0) {
    textRef.innerHTML = message;
    favoritesRef.innerHTML = '';
    favoritesRef.classList.add('is-hidden')
    textRef.classList.remove('is-hidden')

  } else {
    favoritesRef.innerHTML = markup(data);
    favoritesRef.classList.remove('is-hidden')
    textRef.classList.add('is-hidden')

  }
}

export function restoreData() {
  const data = loadFromLS(keyLS) || [];
  
  render(data)
}


// saveToLS(keyLS, results);
restoreData();

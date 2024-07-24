import "./App.css";
import { useState } from "react";

function App() {
  let [EditView, setEditView] = useState(0);

  let [PersonalInformation, setPersonalInformation] = useState({
    name: "Shaswat",
    email: "shaswat@gmail.com",
    location: "delhi",
    github: "shaswat-satyam",
    contact: "83040763549",
  });
  let [EducationalInformation, setEducationInformation] = useState([
    {
      degree: "BTECH",
      institution: "Maharaja Agrasen Institute of Technology",
      start: "2022-04-21",
      end: "2026-04-21",
    },
  ]);
  let [ExperienceInformation, setExperienceInformation] = useState([
    {
      company: "XYZ Corp",
      position: "Software Engineer",
      start: "2020-04-21",
      end: "2022-04-21",
    },
  ]);

  let educationForm = [];
  for (let i = 0; i < EducationalInformation.length; i++) {
    educationForm.push(
      <div className="grid grid-cols-4 gap-5 py-5">
        <label htmlFor={`degree${i}-`}>Degree</label>
        <input
          type="text"
          name={`degree${i}`}
          id={`education${i}`}
          value={EducationalInformation[i]?.degree}
        />
        <label htmlFor={`institution${i}`}>Institution</label>
        <input
          type="text"
          name={`institution${i}`}
          id={`institution${i}`}
          value={EducationalInformation[i]?.institution}
        />
        <label htmlFor={`start${i}`}>Start Date</label>
        <input
          type="date"
          name={`start${i}`}
          id={`starts${i}`}
          value={EducationalInformation[i]?.start}
        />
        <label htmlFor={`end${i}`}>End Date</label>
        <input
          type="date"
          name={`end${i}`}
          id={`end${i}`}
          value={EducationalInformation[i]?.end}
        />
      </div>
    );
  }

  let experienceForm = [];
  for (let i = 0; i < ExperienceInformation.length; i++) {
    experienceForm.push(
      <div className="grid grid-cols-4 gap-5 py-5">
        <label htmlFor={`company${i}`}>Company</label>
        <input
          type="text"
          name={`company${i}`}
          id={`company${i}`}
          defaultValue={ExperienceInformation[i]?.company}
        />
        <label htmlFor={`position${i}`}>Position</label>
        <input
          type="text"
          name={`position${i}`}
          id={`position${i}`}
          defaultValue={ExperienceInformation[i]?.position}
        />
        <label htmlFor={`start${i}`}>Start Date</label>
        <input
          type="date"
          name={`start${i}`}
          id={`start${i}`}
          defaultValue={ExperienceInformation[i]?.start}
        />
        <label htmlFor={`end${i}`}>End Date</label>
        <input
          type="date"
          name={`end${i}`}
          id={`end${i}`}
          defaultValue={ExperienceInformation[i]?.end}
        />
      </div>
    );
  }

  if (EditView == 0) {
    return (
      <>
        <button onClick={() => setEditView((EditView) => (EditView + 1) % 2)}>
          View Mode
        </button>

        <form action="" className="py-5">
          <h1 className="py-5">General Information</h1>
          <div className="grid grid-cols-2 gap-5">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={PersonalInformation.name}
            />
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              defaultValue={PersonalInformation.location}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              defaultValue={PersonalInformation.email}
            />
            <label htmlFor="phone">Contact</label>
            <input
              type="text"
              name="contact"
              id="Contact"
              defaultValue={PersonalInformation.contact}
            />
            <label htmlFor="github">Github</label>
            <input
              type="text"
              name="github"
              id="github"
              defaultValue={PersonalInformation.github}
            />
          </div>
          <button
            className="my-5"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              let obj = {};
              obj.name = e.target.form.name.value;
              obj.email = e.target.form.email.value;
              obj.location = e.target.form.location.value;
              obj.contact = e.target.form.contact.value;
              obj.github = e.target.form.github.value;
              setPersonalInformation(obj);
            }}
          >
            Save this part
          </button>
          <hr />
        </form>
        <div className="flex place-content-evenly pt-5 w-full align-middle">
          <h1>Education</h1>
          <div className="flex align-middle w-1/4 place-content-evenly">
            <button
              onClick={() =>
                setEducationInformation([...EducationalInformation, {}])
              }
            >
              +
            </button>
            <div className="flex h-1/2 mt-4">
              {EducationalInformation.length}
            </div>
            <button
              disabled={EducationalInformation.length == 0}
              onClick={() => {
                const info = [...EducationalInformation];
                info.pop();
                setEducationInformation(info);
              }}
            >
              -
            </button>
          </div>
        </div>
        <form>
          {educationForm}
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              let arr = [];
              for (let i = 0; i < EducationalInformation.length; i++) {
                let obj = {};
                obj.degree = e.target.form["degree" + i].value;
                obj.institution = e.target.form["institution" + i].value;
                obj.start = e.target.form["start" + i].value;
                obj.end = e.target.form["end" + i].value;
                arr.push(obj);
              }
              setEducationInformation(arr);
            }}
          >
            Save this Part
          </button>
        </form>
        <hr />
        <div className="flex place-content-evenly pt-5 w-full align-middle">
          <h1>Experience</h1>
          <div className="flex align-middle w-1/4 place-content-evenly">
            <button
              onClick={() =>
                setExperienceInformation([...ExperienceInformation, {}])
              }
            >
              +
            </button>
            <div className="flex h-1/2 mt-4">
              {ExperienceInformation.length}
            </div>
            <button
              disabled={ExperienceInformation.length == 0}
              onClick={() => {
                const info = [...ExperienceInformation];
                info.pop();
                setExperienceInformation(info);
              }}
            >
              -
            </button>
          </div>
        </div>
        <form>
          {experienceForm}
          <button
            onClick={(e) => {
              e.preventDefault();
              let arr = [];
              for (let i = 0; i < ExperienceInformation.length; i++) {
                let obj = {};
                obj.company = e.target.form["company" + i].value;
                obj.position = e.target.form["position" + i].value;
                obj.start = e.target.form["start" + i].value;
                obj.end = e.target.form["end" + i].value;
                arr.push(obj);
              }
              setExperienceInformation(arr);
            }}
          >
            Save this part
          </button>
        </form>
      </>
    );
  } else {
    let DisplayEducationalInformation = [];
    for (let i = 0; i < EducationalInformation.length; i++) {
      DisplayEducationalInformation.push(
        <div key={i} className="flex gap-5 py-5 place-content-between ">
          <div className="gap-2 flex flex-col">
            <h2 className="font-bold ">
              {EducationalInformation[i].institution}
            </h2>
            <h2 className="text-left">{EducationalInformation[i].degree}</h2>
          </div>
          {EducationalInformation[i].start} to {EducationalInformation[i].end}
        </div>
      );
    }
    let DisplayExperienceInformation = [];
    for (let i = 0; i < ExperienceInformation.length; i++) {
      DisplayExperienceInformation.push(
        <div key={i} className="flex gap-5 py-5 place-content-between">
          <div className="gap-2 flex flex-col">
            <h2 className="font-bold text-left ">
              {ExperienceInformation[i].company}
            </h2>
            <h3 className="text-left">{ExperienceInformation[i].position}</h3>
          </div>
          {ExperienceInformation[i].start} to {ExperienceInformation[i].end}
        </div>
      );
    }
    return (
      <>
        <button
          className="my-5"
          onClick={() => setEditView((EditView) => (EditView + 1) % 2)}
        >
          Edit View
        </button>
        <div>
          <h1>{PersonalInformation.name}</h1>
          <div className="flex gap-5 place-content-center ">
            <h2>{PersonalInformation.location}</h2>
            <h2>{PersonalInformation.email}</h2>
            <h2>{PersonalInformation.contact}</h2>
            <a href={`http://github.com/${PersonalInformation.github}`}>
              {PersonalInformation.github}
            </a>
          </div>
          <hr />
          <div className="py-5 ">
            <h2 className="font-bold text-3xl text-left ">Education</h2>
            <hr />
            {DisplayEducationalInformation}
          </div>
          <div className="py-5">
            <h1 className="font-bold text-3xl text-left">Experience</h1>
            <hr />
            {DisplayExperienceInformation}
          </div>
        </div>
      </>
    );
  }
}

export default App;

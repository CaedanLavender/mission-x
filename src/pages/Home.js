import { Button } from "@material-ui/core";

const Home = ({ user, setUser }) => {
  // Three very quick functions to set the user to different states (this is a temporary measure as the login functionality isn't built yet)
  const setUserTeacher = () => {
    setUser({
      user_id: 16,
      first_name: "Jasmina Teacher",
      role: "teacher",
      school: "Homai School",
      teacher_name: "-",
      course: "Beginner",
      date_of_birth: "25 June 1986",
      contact_number: "027000000",
      email: "jasmina@homaischool.com",
      profile_pic: "/images/profiles/jasmina-salvador.png",
    });
  };

  const setUserStudent = () => {
    setUser({
      user_id: 15,
      first_name: "Terry O'Leary",
      role: "student",
      school: "Homai School",
      teacher_name: "Sally Rogers",
      course: "Beginner",
      date_of_birth: "2013-01-24",
      contact_number: "0210223402",
      email: "terry@gmail.com",
      profile_pic: "/images/profiles/terry-oleary.png",
    });
  };

  const setUserLoggedOut = () => {
    setUser({
      user_id: null,
      first_name: "",
      role: "",
      school: "",
      teacher_name: "",
      course: "",
      date_of_birth: "",
      contact_number: "",
      email: "",
      profile_pic: "",
    });
  };

  return (
    <>
      <h1>Home Page (makeshift)</h1>
      <p>Currently logged in: {user.first_name || "No one"}</p>
      <p>Simulate user:</p>
      {/* Three buttons to set the different user states */}
      <Button onClick={setUserTeacher} variant="outlined">
        Teacher
      </Button>
      <Button onClick={setUserStudent} variant="outlined">
        Student
      </Button>
      <Button onClick={setUserLoggedOut} variant="outlined">
        Not Signed In
      </Button>
    </>
  );
};

export default Home;

// import axios from "axios";

// const AuthPage = (props) => {
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { value } = e.target[0];
//     axios
      // .post("http://localhost:3001/authenticate", { username: value })
//       .post("https://chat-app-backend-tnxk.onrender.com/authenticate", { username: value })
//       .then((r) => props.onAuth({ ...r.data, secret: value }))
//       .catch((e) => console.log("error", e));
//   };

//   return (
//     <div className="background">
//       <form onSubmit={onSubmit} className="form-card">
//         <div className="form-title">Welcome 👋</div>

//         <div className="form-subtitle">Set a username to get started</div>

//         <div className="auth">
//           <div className="auth-label">Username</div>
//           <input className="auth-input" name="username" />
//           <button className="auth-button" type="submit">
//             Enter
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AuthPage;


import axios from "axios";
import farm from "./farm_video.mp4";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("https://chat-app-backend-tnxk.onrender.com/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error", e));
  };

  return (
    <div className="backgroundVideo">
      <video className="videoTag" autoPlay loop muted>
        <source src={farm} type="video/mp4" />
      </video>

      <div className="content">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome To Farmit👋</div>

          <div className="form-subtitle">Set a username to get started</div>

          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;


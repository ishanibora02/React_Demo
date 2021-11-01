import classes from "./login.module.css";
import celebaltechlogo from "../images/celebaltechlogo.png";
import microsoftlogin from "../images/microsoftlogin.svg";
import { loginRequest } from "../Config";
import { useMsal } from "@azure/msal-react";
import { useState } from "react";
import { callMsGraph } from "../graph";
import { useNavigate } from "react-router";

export function Login() {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;
  function submitHandler(event) {
    event.preventDefault();
    navigate("/diagram");
  }

  //   const { instance } = useMsal();

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };
    console.log(request);
    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        );
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(response.accessToken).then((response) =>
            setGraphData(response)
          );
        });
      });
  }
  if (graphData) {

    navigate("/diagram");

  }
  console.log(graphData);
  return (
    <section className={classes.background}>
      <div className={classes.login}>
        <div className={classes.login__bg}>
          <div className={classes.login__form}>
            <form
              className={classes.form}
              onSubmit={(event) => submitHandler(event)}
            >
              <img
                src={celebaltechlogo}
                alt="celebal logo"
                className={classes.celebal_logo}
              />
              <div className={classes.form__group}>
                <input
                  type="email"
                  className={classes.form__input}
                  id="email"
                  placeholder="Email address"
                  required
                />
                <label for="email" className={classes.form__label}>
                  Email address
                </label>
              </div>
              <div className={classes.form__group}>
                <input
                  type="password"
                  className={classes.form__input}
                  id="password"
                  placeholder="Password"
                  minlength="6"
                  maxlength="10"
                  required
                />
                <label for="password" className={classes.form__label}>
                  Password
                </label>
              </div>
              <div className={classes.form__last_group}>
                <button className={classes.form__btn}>Submit</button>
                <h3 className={classes.form__option}>OR</h3>
              </div>
            </form>
            <button
              className={classes.form__link}
              onClick={() => RequestProfileData()}
            >
              <img
                src={microsoftlogin}
                alt="sign_up_for_microsoft"
                className={classes.sign_up_for_microsoft}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

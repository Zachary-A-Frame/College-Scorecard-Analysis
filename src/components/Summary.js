import React from "react";
import Zoom from "./Zoom";

const Header = (props) => (
  <div>
    <div className="container" style={{ margin: "0 auto" }}>
      <div className="option">
        <h2 className="title">Summary Page</h2>
        {/* <img
          src={require("../assets/fig1.png")}
          alt="Figure 1"
          height="325"
          width="400"
          className="image"
        ></img> */}
        <p className="option__text">
          As the cost of a college education continues to rise many families are
          asking “is it worth it” to attend college? We dig a little deeper by
          asking more specific questions such as;
        </p>
        <br></br>
        <p className="option__text">
          <li>
            What factors are most important in determining the highest starting
            income in the first two years after graduating college?
          </li>
          <li>
            What factors are the most important in determining the highest
            starting income based on major selection?
          </li>
          <li>
            What factors are most prevalent that determine the highest amount of
            debt and highest chance of defaulting on student loans?
          </li>
          <li>
            How accurate are popular college rankings such as the Forbes College
            Rankings list?
          </li>
        </p>
      </div>
      <br></br>
      <h3>To select which models to run we utilized the following guide.</h3>
      <a
        href="https://zachary-a-frame.github.io/College-Scorecard-Analysis/static/media/ml-mapOnHomepage.d8d479d5.png"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Zoom />
        <img
          src={require("../assets/ml-mapOnHomepage.png")}
          id="ml-map"
          alt="ml-map"
          style={{ maxWidth: "100%" }}
          className="image-fluid"
        />
      </a>
      <div className="option" style={{ marginTop: "50px"}}>
        <h2 className="title">Model Methodology</h2>
        <p>
          When determining the top earnings after 6 years of enrollment, top
          salary by college major and factors that result in most debt after
          graduation, we utilized three models.
        </p>
        <p>
          The first model used was a Random Forest Regression model. Random
          Forest model was chosen first as it is relatively simple and efficient
          to run and will quickly give a good idea of both the potential
          accuracy of a model and a quick look at the important variables. It
          also does not require variable scaling.
        </p>
        <p>
          The Random Forest model was run over several iterations progressively
          reducing the number of variables included. The variables were reduced
          by ranking their feature importance coefficients and removing ones
          that clearly did not contribute to the model accuracy. This was done
          several times until either the number of variables reached a
          reasonable number or the accuracy of the model began to decline
          significantly.
        </p>
        <p>
          Typically, the model score did not decline significantly whilst still
          reducing the number of features to approximately 20. Often times the
          model score would actually improve as features were removed. After
          completing this process and achieving a reasonable number of variables
          a randomized grid search was conducted generating a new optimized
          model. In all cases the score of the optimized model was approximately
          the same as that of the final random forest regressor model using the
          default inputs.
        </p>
        <p>
          The second and third models, Lasso and Elastic Net Regression models
          respectively, were conducted because although the random forest model
          gives good results it does not provide a reliable way of identifying
          the direction in which the model features impact the predicted
          variable. In other words, random forest models do not allow you to
          know if a feature has a positive or negative effect on the outcome.
        </p>
        <p>
          The linear regression models do provide that capability via the sign
          of the feature coefficient in addition to the importance via the
          absolute value of the coefficient. Two regression models were used to
          ensure that the model results were of sufficient accuracy. After
          scaling the X features and fitting the model, the top features of the
          dataset were determined using a Recursive Feature Elimination model.
          This model allows a specific number of features to be chosen and then
          ranked by importance.
        </p>
        <p>
          For the Elastic Net model, a grid search optimization was also
          employed before the Recursive Feature Elimination model. This allowed
          the optimum model inputs to be determined before ranking the feature
          importances.
        </p>
      </div>
    </div>
  </div>
);

Header.defaultProps = {
  title: "College Scorecard Analysis",
};

export default Header;

import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";
import { Link } from 'react-router-dom';
import * as widgets from "surveyjs-widgets";
import "../style/survey.scss";
import { checkServerIdentity } from "tls";

Survey.StylesManager.applyTheme("default");

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class StudentsSurvey extends Component {
  json = {
    title: "Student Servey",
    showProgressBar: "top",
    pages: [
      {
        //page one
        elements: [
          {
            "type": "radiogroup",
            "name": "position",
            "title": "Choose job position...",
            "isRequired": true,
            "colCount": 0,
            "choices": ["1|Designer", "2|Front-end Developer", "3|Back-end Developer", "4|Database Administrator", "5|System Engineer"]
          },
          {
            type: "dropdown",
            "isRequired": true,
            renderAs: "select2",
            choicesByUrl: {
              url: "https://restcountries.eu/rest/v1/all"
            },
            name: "countries",
            title: "Please select the country you have arrived from:"
          },
          {
            type: "rating",
            name: "satisfaction",
            isRequired: true,
            title: "How satisfied are you with the Product?",
            mininumRateDescription: "Not Satisfied",
            maximumRateDescription: "Completely satisfied"
          },
          {
            name: "date",
            type: "datepicker",
            inputType: "date",
            title: "Your favorite date:",
            dateFormat: "mm/dd/yy",
            isRequired: true
          }  
        ]
      },
      // page 2
      {
        questions: [
          {
            type: "matrix",
            name: "Quality",
            isRequired: true,
            title:
              "Please indicate if you agree or disagree with the following statements",
            columns: [
              {
                value: 1,
                text: "Strongly Disagree"
              },
              {
                value: 2,
                text: "Disagree"
              },
              {
                value: 3,
                text: "Neutral"
              },
              {
                value: 4,
                text: "Agree"
              },
              {
                value: 5,
                text: "Strongly Agree"
              }
            ],
            rows: [
              {
                isRequired: true,
                value: "affordable",
                text: "Product is affordable"
              },
              {
                isRequired: true,
                value: "does what it claims",
                text: "Product does what it claims"
              },
              {
                isRequired: true,
                value: "better then others",
                text: "Product is better than other products on the market"
              },
              {
                isRequired: true,
                value: "easy to use",
                text: "Product is easy to use"
              }
            ]
          },
          {
            type: "rating",
            name: "recommend friends",
            isRequired: true,
            visibleIf: "{satisfaction} > 3",
            title:
              "How likely are you to recommend the Product to a friend or co-worker?",
            mininumRateDescription: "Will not recommend",
            maximumRateDescription: "I will recommend"
          },
          {
            type: "comment",
            isRequired: true,
            name: "suggestions",
            title: "What would make you more satisfied with the Product?"
          }
        ]
      },
      {
            //page 3
        questions: [
          {
            type: "radiogroup",
            isRequired: true,
            name: "price to competitors",
            title: "Compared to our competitors, do you feel the Product is",
            choices: [
              "Less expensive",
              "Priced about the same",
              "More expensive",
              "Not sure"
            ]
          },
          {
            type: "radiogroup",
            name: "price",
            isRequired: true,
            title: "Do you feel our current price is merited by our product?",
            choices: [
              "correct|Yes, the price is about right",
              "low|No, the price is too low for your product",
              "high|No, the price is too high for your product"
            ]
          },
          {
            type: "signaturepad",
            "isRequired": true,
            name: "sign",
            title: "Please enter your signature"
          }
        ]
      },
      // page 4
      {
        questions: [
          {
            type: "text",
            isRequired: true,
            name: "email",
            title:
              'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
          }
        ]
      }
    ]
  };

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! ");
  }

  render() {
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to Counselor Survey</h2>
        </div>
        <div className="surveyjs">
          {/* <h1>Survey is in action:</h1> */}
          <Survey.Survey
            model={model}
            onComplete={() => console.log('Hello')}
            onValueChanged={this.onValueChanged}
          />
          <Link to="/pathWay" className="btn btn-primary">Click for Resuls</Link>
         
        </div>
      </div>
    );
  }
}

export default StudentsSurvey;


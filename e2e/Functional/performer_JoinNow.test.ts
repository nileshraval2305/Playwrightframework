import { test } from "../Fixtures/spotlight_Fixture"

import * as testdata from '../../test-Data/login-Testdata.json';
import * as userdata from '../../test-Data/Spotlight-testdata.json';



test('Perform joining application using Experience Option', async ({ page, loginpage, performerpage, joinpage, Performer_registerpage }) => {


    await test.step("Navigate to Webapplication URL", async () => {
        await loginpage.navigateToUrl(testdata.URL);
    });
    await test.step("Click on Join Now button in Home Page", async () => {
        await joinpage.joinnowbtnOnMainPage();
    });
    await test.step("Click on Findmore button", async () => {
        await performerpage.Performer_Findmore_Button_Click();
    });
    await test.step("Click on Join Button", async () => {
        await performerpage.Joinnow_Button_Click();
    });
    await test.step("Validate Welcome Text Header ", async () => {
        await performerpage.Validate_Performer_Welcome_Text();
    });
    await test.step("Validate Experience Text Header", async () => {
        await performerpage.Validate_Performer_Experience_Text();
    });
    await test.step("Validate Training Text Header", async () => {
        await performerpage.Validate_Performer_Training_Text();
    });
    await test.step("Validate Recommendation Text Header", async () => {
        await performerpage.Validate_Performer_Recommendation_Text();
    });
    await test.step("Enter First Name of Performer", async () => {
        await performerpage.Enter_Performer_Firstname();
    });
    await test.step("Enter SirName of Performer", async () => {
        await performerpage.Enter_Performer_Surname();
    });
    await test.step("Click On Avaiable button to check name", async () => {
        await performerpage.Check_name_availability_Btn_Click();
    });

    await test.step("Enter Email address of Performer", async () => {
        await performerpage.Enter_Performer_Email();
    });
    await test.step("Select Term checkbox", async () => {
        await performerpage.Select_Performer_Term_Checkbox();
    });
    await test.step("Click on Eligibility button", async () => {
        await performerpage.Performer_Continue_Eligibility_Click();
    });
    await test.step("Validate Performer Eligibility text", async () => {
        await performerpage.Validate_Performer_Eligibility_Text();
    })

    await test.step("Click on Performer Experience Radio Button", async () => {
        await performerpage.select_Performer_Experience_Criteria_Option();
    });

    await test.step("Click on Continue Eligibility Button", async () => {
        await performerpage.Performer_Continue_Eligibility_Btn2_Click();
    });

    await test.step("Click on Add credits button and enter all required details", async () => {
        await Performer_registerpage.Performer_Add_Credit_Section();
    });
    await test.step("Validate Get credit header title", async () => {
        await Performer_registerpage.Validate_Get_And_Compare_Text(Performer_registerpage.Performer_Get_Credit_Header_Text, userdata.Performer_Credit_Header_Text);
    });



    await test.step("Click on Continue About to You button", async () => {
        await Performer_registerpage.Performer_Continue_About_To_You_Btn_Click();
    });

    await test.step("Validate About You Page Text", async () => {
        await Performer_registerpage.Validate_Performer_About_To_You_page_Text();
    });

    await test.step("Upload Headshot", async () => {
        await Performer_registerpage.Performer_Upload_File_Images("Upload_Doc/headhshot.jpg");
    });
    await test.step("Select Existing Photographer", async () => {
        await Performer_registerpage.Performer_Select_Photographer();
    });
    await test.step("Click on Choose Photo button", async () => {
        await Performer_registerpage.Performer_choose_Poto_Btn_Click();
    });
    await test.step("Enter Phone Number", async () => {
        await Performer_registerpage.Performer_About_To_Page_Enter_PhoneNumber();
    });
    await test.step("Enter Landline Number", async () => {
        await Performer_registerpage.Performer_About_To_Page_Enter_Landlinenumber();
    });
    await test.step("Select Previous Membership option", async () => {
        await Performer_registerpage.Performer_About_To_Page_Previous_Membership();
    });
    await test.step("Enter Performer DOB", async () => {
        await Performer_registerpage.Performer_Select_DOB__Calender_Dropdown();
    });

    await test.step("Select Performer Publish Age Checkbox", async () => {
        await Performer_registerpage.Performer_About_To_Page_Select_Publish_Age_Checkbox();
    });

    await test.step("Select Performer Playing Age", async () => {
        await Performer_registerpage.Performer_About_To_Page_Select_Playing_Age();
    });
    await test.step("Select Performer Select Gender", async () => {
        await Performer_registerpage.Performer_About_To_Page_Select_Gender();
    });
    await test.step("Select Public Profile Radio Button", async () => {
        await Performer_registerpage.Performer_About_To_Page_Select_Displayed_Public_Profile();
    });
    await test.step("Select About Page continue Button", async () => {
        await Performer_registerpage.Performer_About_To_Page_Continue_Button_Click();
    });
    await test.step("Validate Performer Review page text", async () => {
        await Performer_registerpage.Validate_Performer_Review_page_Text();
    });

    await test.step("Validate Performer Review page Credit label text", async () => {
        await Performer_registerpage.Validate_Performer_Review_Page_Eligibility_Credits_Label_Text();
    });
    await test.step("Click on Continue Checkout button", async () => {
        await Performer_registerpage.Performer_Continue_Checkout_Click();
    });
    await test.step("Validate Payment Subscription text", async () => {
        await Performer_registerpage.Performer_Validate_Payment_Subscription_Text();
    });
    await test.step("Select Debit and Credit Card option", async () => {
        await Performer_registerpage.Performer_Select_Creditcard_Btn_Click();
    });
    await test.step("Validate Payment Invoice Text", async () => {
        await Performer_registerpage.Performer_Validate_Payment_Invoice_Text();
    });

    await test.step("Click on Payment Continue Btn", async () => {
        await Performer_registerpage.Performer_Creditcard_Payment_Continue_Btn_Click();
    });

    await test.step("Enter Performer Billing Details", async () => {
        await Performer_registerpage.Performer_Billing_Details();
    });

    await test.step("Click on Confirm Pay Button", async () => {
        await Performer_registerpage.Performer_Billing_Confirm_Pay_Btn_Click();
    });

    await test.step("Select Payment using Visa Card", async () => {
        await Performer_registerpage.Performer_Payment_Using_Visa_Card();
    });

    await test.step("Select Payment Processed Button", async () => {
        await Performer_registerpage.Performer_Payment_Processed_Btn_Click();
    });
    await test.step("Select Payment Processed Button", async () => {
        await Performer_registerpage.Performer_Payment_Processed_Btn_Click();
    });

    await test.step("Enter OTP ", async () => {
        await Performer_registerpage.Performer_Payment_By_Card_Enter_OTP();
    });
    await test.step("Click on Next Button ", async () => {
        await Performer_registerpage.Performer_Payment_By_Card_Next_Btn_Click();
    });
    await test.step("Validate Registration Completed Text", async () => {
        await Performer_registerpage.Validate_Performer_Registration_Complete_Text();
    });


});

test('Perform joining application using Training Option', async ({ page, loginpage, performerpage, joinpage, Performer_registerpage }) => {

    await test.step("Navigate to Webapplication URL", async () => {
        await loginpage.navigateToUrl(testdata.URL);
    });
    await test.step("Click on Join Now button in Home Page", async () => {
        await joinpage.joinnowbtnOnMainPage();
    });
    await test.step("Click on Findmore button", async () => {
        await performerpage.Performer_Findmore_Button_Click();
    });
    await test.step("Click on Join Button", async () => {
        await performerpage.Joinnow_Button_Click();
    });
    await test.step("Validate Welcome Text Header ", async () => {
        await performerpage.Validate_Performer_Welcome_Text();
    });
    await test.step("Validate Experience Text Header", async () => {
        await performerpage.Validate_Performer_Experience_Text();
    });
    await test.step("Validate Training Text Header", async () => {
        await performerpage.Validate_Performer_Training_Text();
    });
    await test.step("Validate Recommendation Text Header", async () => {
        await performerpage.Validate_Performer_Recommendation_Text();
    });
    await test.step("Enter First Name of Performer", async () => {
        await performerpage.Enter_Performer_Firstname();
    });
    await test.step("Enter SirName of Performer", async () => {
        await performerpage.Enter_Performer_Surname();
    });
    await test.step("Click On Avaiable button to check name", async () => {
        await performerpage.Check_name_availability_Btn_Click();
    });

    await test.step("Enter Email address of Performer", async () => {
        await performerpage.Enter_Performer_Email();
    });
    await test.step("Select Term checkbox", async () => {
        await performerpage.Select_Performer_Term_Checkbox();
    });
    await test.step("Click on Eligibility button", async () => {
        await performerpage.Performer_Continue_Eligibility_Click();
    });
    await test.step("Validate Performer Eligibility text", async () => {
        await performerpage.Validate_Performer_Eligibility_Text();
    })

    await test.step("Click on Training Radio Button", async () => {
        await performerpage.Performer_Training_Option_Click();
    });

    await test.step("Click on Continue Eligibility Button", async () => {
        await performerpage.Performer_Continue_Eligibility_Btn2_Click();
    });

    await test.step("Click on Add course button and fill all the details", async () => {
        await Performer_registerpage.Performer_Add_Course_Section();
    });

    await test.step("Validate Add course Header", async () => {
        await Performer_registerpage.Validate_Get_And_Compare_Text(Performer_registerpage.Performer_Get_Credit_Header_Text, userdata.Performer_Add_Course_Title);
    });

    await test.step("Click on Continue About to You Button", async () => {
        await Performer_registerpage.Webapplication_Event_Click(Performer_registerpage.Performer_Continue_About_To_You_Btn);
    });

    await test.step("Validate About Page text", async () => {
        await Performer_registerpage.Validate_Performer_About_To_You_page_Text();
    });
    await test.step("Upload Headshot", async () => {
        await Performer_registerpage.Performer_Upload_File_Images("Upload_Doc/headhshot.jpg");
    });
    await test.step("Select Existing Photographer", async () => {
        await Performer_registerpage.Performer_Select_Photographer();
    });
    await test.step("Click on Choose Photo button", async () => {
        await Performer_registerpage.Performer_choose_Poto_Btn_Click();
    });
    await test.step("Enter Phone Number", async () => {
        await Performer_registerpage.Performer_About_To_Page_Enter_PhoneNumber();
    });
    await test.step("Enter Landline Number", async () => {
        await Performer_registerpage.Performer_About_To_Page_Enter_Landlinenumber();
    });
    await test.step("Select Previous Membership option", async () => {
        await Performer_registerpage.Performer_About_To_Page_Previous_Membership();
    });
    await test.step("Enter Performer DOB", async () => {
        await Performer_registerpage.Performer_Select_DOB__Calender_Dropdown();
    });

    await test.step("Select Performer Publish Age Checkbox", async () => {
        await Performer_registerpage.Performer_About_To_Page_Select_Publish_Age_Checkbox();
    });

    await test.step("Select Performer Playing Age", async () => {
        await Performer_registerpage.Performer_About_To_Page_Select_Playing_Age();
    });
    await test.step("Select Performer Select Gender", async () => {
        await Performer_registerpage.Performer_About_To_Page_Select_Gender();
    });
    await test.step("Select Public Profile Radio Button", async () => {
        await Performer_registerpage.Performer_About_To_Page_Select_Displayed_Public_Profile();
    });
    await test.step("Select About Page continue Button", async () => {
        await Performer_registerpage.Performer_About_To_Page_Continue_Button_Click();
    });
    await test.step("Validate Performer Review page text", async () => {
        await Performer_registerpage.Validate_Performer_Review_page_Text();
    });


    await test.step("Validate Review page Add course details data text", async () => {
        await Performer_registerpage.Validate_Performer_Review_Page_Add_Course_Credits_Label_Text();
    });
    await test.step("Click on Continue Checkout button", async () => {
        await Performer_registerpage.Performer_Continue_Checkout_Click();
    });
    await test.step("Validate Payment Subscription text", async () => {
        await Performer_registerpage.Performer_Validate_Payment_Subscription_Text();
    });
    await test.step("Select Debit and Credit Card option", async () => {
        await Performer_registerpage.Performer_Select_Creditcard_Btn_Click();
    });
    await test.step("Validate Payment Invoice Text", async () => {
        await Performer_registerpage.Performer_Validate_Payment_Invoice_Text();
    });

    await test.step("Click on Payment Continue Btn", async () => {
        await Performer_registerpage.Performer_Creditcard_Payment_Continue_Btn_Click();
    });

    await test.step("Enter Performer Billing Details", async () => {
        await Performer_registerpage.Performer_Billing_Details();
    });

    await test.step("Click on Confirm Pay Button", async () => {
        await Performer_registerpage.Performer_Billing_Confirm_Pay_Btn_Click();
    });

    await test.step("Select Payment using Visa Card", async () => {
        await Performer_registerpage.Performer_Payment_Using_Visa_Card();
    });

    await test.step("Select Payment Processed Button", async () => {
        await Performer_registerpage.Performer_Payment_Processed_Btn_Click();
    });
    await test.step("Select Payment Processed Button", async () => {
        await Performer_registerpage.Performer_Payment_Processed_Btn_Click();
    });

    await test.step("Enter OTP ", async () => {
        await Performer_registerpage.Performer_Payment_By_Card_Enter_OTP();
    });
    await test.step("Click on Next Button ", async () => {
        await Performer_registerpage.Performer_Payment_By_Card_Next_Btn_Click();
    });
    await test.step("Validate Registration Completed Text", async () => {
        await Performer_registerpage.Validate_Performer_Registration_Complete_Text();
    });

});



test('Perform joining application using Recommended Option', async ({ page, loginpage, performerpage, joinpage, Performer_registerpage }) => {

    await test.step("Navigate to Webapplication URL", async () => {
        await loginpage.navigateToUrl(testdata.URL);
    });
    await test.step("Click on Join Now button in Home Page", async () => {
        await joinpage.joinnowbtnOnMainPage();
    });
    await test.step("Click on Findmore button", async () => {
        await performerpage.Performer_Findmore_Button_Click();
    });
    await test.step("Click on Join Button", async () => {
        await performerpage.Joinnow_Button_Click();
    });
    await test.step("Validate Welcome Text Header ", async () => {
        await performerpage.Validate_Performer_Welcome_Text();
    });
    await test.step("Validate Experience Text Header", async () => {
        await performerpage.Validate_Performer_Experience_Text();
    });
    await test.step("Validate Training Text Header", async () => {
        await performerpage.Validate_Performer_Training_Text();
    });
    await test.step("Validate Recommendation Text Header", async () => {
        await performerpage.Validate_Performer_Recommendation_Text();
    });
    await test.step("Enter First Name of Performer", async () => {
        await performerpage.Enter_Performer_Firstname();
    });
    await test.step("Enter SirName of Performer", async () => {
        await performerpage.Enter_Performer_Surname();
    });
    await test.step("Click On Avaiable button to check name", async () => {
        await performerpage.Check_name_availability_Btn_Click();
    });

    await test.step("Enter Email address of Performer", async () => {
        await performerpage.Enter_Performer_Email();
    });
    await test.step("Select Term checkbox", async () => {
        await performerpage.Select_Performer_Term_Checkbox();
    });
    await test.step("Click on Eligibility button", async () => {
        await performerpage.Performer_Continue_Eligibility_Click();
    });
    await test.step("Validate Performer Eligibility text", async () => {
        await performerpage.Validate_Performer_Eligibility_Text();
    });
    await test.step("Click on Performer Recommended Button", async () => {
        await performerpage.Performer_Recommended_Radio_Btn_Click();
    });
    await test.step("Click on Continue Button", async () => {
        await performerpage.Performer_Continue_Eligibility_Btn2_Click();
    });
    await test.step("Validate Performerm Recommended header", async () => {
        await Performer_registerpage.Validate_Get_And_Compare_Text(Performer_registerpage.Performer_Get_Recommended_Header, userdata.Performer_Recommended_Header_Text);
    });
    await test.step("Enter full name of Referee", async () => {
        await Performer_registerpage.Performer_Enter_Full_Name_Of_Referee();
    });

    await test.step("Select Referee's Membership", async () => {
        await Performer_registerpage.Performer_Select_Referee_Membership();
    });
    await test.step("Upload Recommendation Letter", async () => {
        await Performer_registerpage.Performer_Upload_File_Images("Upload_Doc/Recommendation_letter.jpg");
    });
    await test.step("Validate upload file is loaded", async () => {
        await Performer_registerpage.Check_Upload_File_is_Loaded(Performer_registerpage.Validate_File_IS_Loaded, userdata.Recommended_Letter);
    });

    await test.step("Click on Continue About to You Button", async () => {
        await Performer_registerpage.Webapplication_Event_Click(Performer_registerpage.Performer_Continue_About_To_You_Btn);
    });
    await test.step("Validate About Page text", async () => {
        await Performer_registerpage.Validate_Performer_About_To_You_page_Text();
    });
    await test.step("Upload Headshot", async () => {
        await Performer_registerpage.Performer_Upload_File_Images("Upload_Doc/headhshot.jpg");
    });
    await test.step("Select Existing Photographer", async () => {
        await Performer_registerpage.Performer_Select_Photographer();
    });
    await test.step("Click on Choose Photo button", async () => {
        await Performer_registerpage.Performer_choose_Poto_Btn_Click();
    });
    await test.step("Enter Phone Number", async () => {
        await Performer_registerpage.Performer_About_To_Page_Enter_PhoneNumber();
    });
    await test.step("Enter Landline Number", async () => {
        await Performer_registerpage.Performer_About_To_Page_Enter_Landlinenumber();
    });
    await test.step("Select Previous Membership option", async () => {
        await Performer_registerpage.Performer_About_To_Page_Previous_Membership();
    });
    await test.step("Enter Performer DOB", async () => {
        await Performer_registerpage.Performer_Select_DOB__Calender_Dropdown();
    });

    await test.step("Select Performer Publish Age Checkbox", async () => {
        await Performer_registerpage.Performer_About_To_Page_Select_Publish_Age_Checkbox();
    });

    await test.step("Select Performer Playing Age", async () => {
        await Performer_registerpage.Performer_About_To_Page_Select_Playing_Age();
    });


    await test.step("Select Performer Select Gender", async () => {
        await Performer_registerpage.Performer_About_To_Page_Select_Gender();
    });
    await test.step("Select Public Profile Radio Button", async () => {
        await Performer_registerpage.Performer_About_To_Page_Select_Displayed_Public_Profile();
    });
    await test.step("Select About Page continue Button", async () => {
        await Performer_registerpage.Performer_About_To_Page_Continue_Button_Click();
    });
    await test.step("Validate Performer Review page text", async () => {
        await Performer_registerpage.Validate_Performer_Review_page_Text();
    });


    await test.step("Validate Review page Recommendation data text", async () => {
        await Performer_registerpage.Validate_Performer_Review_Page_Add_Recommedation_Label_Text();
    });
    await test.step("Click on Continue Checkout button", async () => {
        await Performer_registerpage.Performer_Continue_Checkout_Click();
    });
    await test.step("Validate Payment Subscription text", async () => {
        await Performer_registerpage.Performer_Validate_Payment_Subscription_Text();
    });
    await test.step("Select Debit and Credit Card option", async () => {
        await Performer_registerpage.Performer_Select_Creditcard_Btn_Click();
    });
    await test.step("Validate Payment Invoice Text", async () => {
        await Performer_registerpage.Performer_Validate_Payment_Invoice_Text();
    });

    await test.step("Click on Payment Continue Btn", async () => {
        await Performer_registerpage.Performer_Creditcard_Payment_Continue_Btn_Click();
    });

    await test.step("Enter Performer Billing Details", async () => {
        await Performer_registerpage.Performer_Billing_Details();
    });

    await test.step("Click on Confirm Pay Button", async () => {
        await Performer_registerpage.Performer_Billing_Confirm_Pay_Btn_Click();
    });

    await test.step("Select Payment using Visa Card", async () => {
        await Performer_registerpage.Performer_Payment_Using_Visa_Card();
    });

    await test.step("Select Payment Processed Button", async () => {
        await Performer_registerpage.Performer_Payment_Processed_Btn_Click();
    });
    await test.step("Select Payment Processed Button", async () => {
        await Performer_registerpage.Performer_Payment_Processed_Btn_Click();
    });

    await test.step("Enter OTP ", async () => {
        await Performer_registerpage.Performer_Payment_By_Card_Enter_OTP();
    });
    await test.step("Click on Next Button ", async () => {
        await Performer_registerpage.Performer_Payment_By_Card_Next_Btn_Click();
    });
    await test.step("Validate Registration Completed Text", async () => {
        await Performer_registerpage.Validate_Performer_Registration_Complete_Text();
    });




});
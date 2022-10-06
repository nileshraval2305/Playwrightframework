import {test as basetest} from "@playwright/test";
import JoinNowPage from '../../pages/joinNow.page';
import PerformerPage from '../../pages/Performer.page';
import Performer_joinnowpage from "../../pages/performer_JoinNow.page";
import LoginPage from '../../pages/login.page';
import UserTypes from "../../pages/userTypes";

type pages = {
     joinpage:JoinNowPage;
     performerpage:PerformerPage;
     loginpage:LoginPage;
     usertype:UserTypes;
     Performer_registerpage:Performer_joinnowpage;
}


const testpages = basetest.extend<pages>({

    joinpage:async({page}, use)=>{
        await use(new JoinNowPage(page));
    },
    performerpage:async({page},use)=>{
          await use(new PerformerPage(page));
    },
   loginpage:async({page},use)=> {
     await use(new LoginPage(page));
   },
   usertype:async({page},use)=> {
    await use(new UserTypes(page));
  },
  Performer_registerpage:async({page},use)=> {
      await use(new Performer_joinnowpage(page));
  },
    })

export const test = testpages;
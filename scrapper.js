const puppeteer = require('puppeteer');
const inst = 'https://edu.enu.kz/';
const grades = 'https://edu.enu.kz/current_progress_gradebook_student?studentID=74688&year=2019&term=2';
const dateFormat = require('dateformat');

const platonus = {
     browser: null,
     page: null,

     initialize: async () => {
          platonus.browser = await puppeteer.launch({
               headless: false,
               args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--single-process'
               ],
          });
          platonus.page = await platonus.browser.newPage();
          await platonus.page.setViewport({
               width: 1900,
               height: 700
          });
     },

     login: async (username, password) => {

          await platonus.page.goto(inst, {
               waitUntil: 'networkidle2'
          });
          // await platonus.page.waitFor(3000);
          // await platonus.page.click('.backdrop-close');
          await platonus.page.reload();
          await platonus.page.type('input[name = "iin"]', username);
          await platonus.page.type('input[name = "password"]', password);

          let loginButton = await platonus.page.$x("//button[contains(text(), 'Кіру')]");
          await loginButton[0].click();
          await platonus.page.waitFor(2000);
     },

     grade: async () => {
          let now = new Date();
          let time = dateFormat(now, "HH:MM");
          await platonus.page.goto(grades);
          // await platonus.page.waitForSelector('.main-box-body');
          await platonus.page.screenshot({
               path: `/Users/user/Desktop/Grades ${time}.png`,
               fullPage: true
          });
          // await platonus.browser.close();
     },

     pic: async () => {
          cloudinary.config({
               cloud_name: enu, 
               api_key: 629224914337953, 
               api_secret: gTX073anb5yuyKpVnQMwBeVGcKk
             });
             
             cloudinary.uploader.upload_stream(
               uploadOptions, 
               (error, result) => { /* Do something with result! */ }
             ).end(screenshotBuffer);
             
     }
}

module.exports = platonus;
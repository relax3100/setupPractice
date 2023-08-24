import {Builder, Capabilities, WebDriver} from 'selenium-webdriver';
const chromedriver = require('chromedriver');
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
//Page Object Import 
import { employeePage } from './setupPage';
const ep = new employeePage(driver);
//Test Set Up
describe('Practicing Page Objects', () => {
    beforeEach(async () => {
        await ep.navigate()
    });
    afterAll(async() => {
        await ep.driver.quit()
    });
    test('adding an employee with a seperate POM', async () => {
        await ep.click(ep.addEmployee);
        await ep.click(ep.newEmployee);
        await ep.sendKeys(ep.nameInput, 'Cal Kestis');
        await ep.sendKeys(ep.phoneInput, 8018944343);
        await ep.sendKeys(ep.titleInput, 'Ceo of Ceo');
        await ep.click(ep.saveBtn);
        
    });

    test('editing an employee', async () => {
        await ep.click(ep.empL);
        await ep.click(ep.nameInput);
        await ep.sendKeys(ep.nameInput, 'Bob Burtha');
        await ep.click(ep.saveBtn);
    })
}); 
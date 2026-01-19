import { LoginPageVtiger } from "./VtigerLogin";

exports.POMContacts = class Pomcontacts {
  constructor(page) {
    this.page = page;
    this.contactsModule = "//a[text()='Contacts']";
    this.plusBtn = "img[src='themes/softed/images/btnL3Add.gif']";
    this.salu = "[name='salutationtype']";
    this.fname = "[name='firstname']";
    this.lname = "[name='lastname']";
    this.organizationplus = "//img[contains(@onclick,'window.open')]"
    this.orgid = "//a[text()='Tejas_1885']";
    this.reportplus = "//img[contains(@onclick,'selectContact')]";
    this.reportid = "//a[contains(text(),'Prasath2429')]";
    this.leadsource = "[name='leadsource']";
    this.title="[name='title']";
    this.department="[name='department']";
    this.email="[name='email']";
    this.assistant="[name='assistant']";
    this.assistantph="[name='assistantphone']";
    this.emailOptOut="[name='emailoptout']";
    this.reference="[name='reference']";
    this.notifyOwner="[name='notify_owner']";
    this.portalUser="[name='portal']";

  }
  async createContact(firstname, lastname,enterTitle,enterDepartment,enterEmail,enterAssistant,enterAssistentPh) {
    await this.page.click(this.contactsModule);
    await this.page.click(this.plusBtn);
    await this.page.click(this.salu);

    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
    await this.page.fill(this.fname, firstname);
    await this.page.fill(this.lname, lastname);

    const [childPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click(this.organizationplus)
    ]);

    await childPage.click(this.orgid);
    await childPage.close();

    await this.page.bringToFront();
    const [childPage2] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.click(this.reportplus)
    ]);
    await childPage2.click(this.reportid);
    await childPage2.close();

    await this.page.bringToFront();
    await this.page.click(this.leadsource);
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("ArrowDown");
    await this.page.keyboard.press("Enter");
    await this.page.fill(this.title,enterTitle);
    await this.page.fill(this.department,enterDepartment);
    await this.page.fill(this.email,enterEmail);
    await this.page.fill(this.assistant,enterAssistant);
    await this.page.fill(this.assistantph,enterAssistentPh);
    await this.page.check(this.emailOptOut);
    await this.page.check(this.reference);
    await this.page.check(this.notifyOwner);
    await this.page.check(this.portalUser);
  }
}
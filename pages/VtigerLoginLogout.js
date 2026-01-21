exports.LoginPageVtiger = class login {
   constructor(page) {
      this.page = page;
      this.username = "[name='user_name']";
      this.password = "[name='user_password']";
      this.loginBtn = "#submitButton";
      this.signOut = "img[src='themes/softed/images/user.PNG']";
      this.signBtn = "//a[text()='Sign Out']";
   }
   async loginPage(usname, pass) {
      await this.page.fill(this.username, usname);
      await this.page.fill(this.password, pass);
      await this.page.click(this.loginBtn);
   }
   async logout() {
      await this.page.locator(this.signOut).hover();
      await this.page.click(this.signBtn);
   }
}
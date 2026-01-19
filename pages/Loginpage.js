exports.LoginPage=
class LoginPage {
    constructor(page) {
        this.page=page;
        this.loginLink="#login2";
        this.usernameInput="#loginusername";
        this.passwordInput="#loginpassword";
        this.loginBtn="button[onclick='logIn()']";
        this.products=".hrefch";
        this.iphone6="//a[text()='Iphone 6 32gb']";
        this.addToCart="//a[text()='Add to cart']";
    }
    async gotoLoginPage(){
        await this.page.goto("https://www.demoblaze.com/index.html")
    }
    async login(username,password){
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginBtn).click();
     
 await this.page.waitForSelector(this.loginModal, { state: 'hidden' });
    }
    
} 
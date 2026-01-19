exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.productLink = ".hrefch";
        this.addToCartBtn = "a:text('Add to cart')";
    }

    async addToProduct(pname) {
        // ✅ SAFE CLICK (auto-wait)
        await this.page.locator(this.productLink, { hasText: pname }).click();

        // wait for product page
        await this.page.waitForSelector(this.addToCartBtn);

        // handle alert BEFORE click
        this.page.once("dialog", async dialog => {
            expect(dialog.message()).toContain("Product added");
            await dialog.accept();
        });

        await this.page.click(this.addToCartBtn);
    }
};

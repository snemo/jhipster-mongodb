import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Transaction e2e test', () => {

    let navBarPage: NavBarPage;
    let transactionDialogPage: TransactionDialogPage;
    let transactionComponentsPage: TransactionComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Transactions', () => {
        navBarPage.goToEntity('transaction');
        transactionComponentsPage = new TransactionComponentsPage();
        expect(transactionComponentsPage.getTitle()).toMatch(/mongodbApp.transaction.home.title/);

    });

    it('should load create Transaction dialog', () => {
        transactionComponentsPage.clickOnCreateButton();
        transactionDialogPage = new TransactionDialogPage();
        expect(transactionDialogPage.getModalTitle()).toMatch(/mongodbApp.transaction.home.createOrEditLabel/);
        transactionDialogPage.close();
    });

    it('should create and save Transactions', () => {
        transactionComponentsPage.clickOnCreateButton();
        transactionDialogPage.setTransactionDateInput(12310020012301);
        expect(transactionDialogPage.getTransactionDateInput()).toMatch('2001-12-31T02:30');
        transactionDialogPage.setProductInput('product');
        expect(transactionDialogPage.getProductInput()).toMatch('product');
        transactionDialogPage.setPriceInput('5');
        expect(transactionDialogPage.getPriceInput()).toMatch('5');
        transactionDialogPage.setPaymentTypeInput('paymentType');
        expect(transactionDialogPage.getPaymentTypeInput()).toMatch('paymentType');
        transactionDialogPage.setCustomerNameInput('customerName');
        expect(transactionDialogPage.getCustomerNameInput()).toMatch('customerName');
        transactionDialogPage.setCityInput('city');
        expect(transactionDialogPage.getCityInput()).toMatch('city');
        transactionDialogPage.setStateInput('state');
        expect(transactionDialogPage.getStateInput()).toMatch('state');
        transactionDialogPage.setCountryInput('country');
        expect(transactionDialogPage.getCountryInput()).toMatch('country');
        transactionDialogPage.setAccountCreationDateInput(12310020012301);
        expect(transactionDialogPage.getAccountCreationDateInput()).toMatch('2001-12-31T02:30');
        transactionDialogPage.setLastLoginInput(12310020012301);
        expect(transactionDialogPage.getLastLoginInput()).toMatch('2001-12-31T02:30');
        transactionDialogPage.setLatitudeInput('5');
        expect(transactionDialogPage.getLatitudeInput()).toMatch('5');
        transactionDialogPage.setLongitudeInput('5');
        expect(transactionDialogPage.getLongitudeInput()).toMatch('5');
        transactionDialogPage.save();
        expect(transactionDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class TransactionComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-transaction div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class TransactionDialogPage {
    modalTitle = element(by.css('h4#myTransactionLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    transactionDateInput = element(by.css('input#field_transactionDate'));
    productInput = element(by.css('input#field_product'));
    priceInput = element(by.css('input#field_price'));
    paymentTypeInput = element(by.css('input#field_paymentType'));
    customerNameInput = element(by.css('input#field_customerName'));
    cityInput = element(by.css('input#field_city'));
    stateInput = element(by.css('input#field_state'));
    countryInput = element(by.css('input#field_country'));
    accountCreationDateInput = element(by.css('input#field_accountCreationDate'));
    lastLoginInput = element(by.css('input#field_lastLogin'));
    latitudeInput = element(by.css('input#field_latitude'));
    longitudeInput = element(by.css('input#field_longitude'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setTransactionDateInput = function(transactionDate) {
        this.transactionDateInput.sendKeys(transactionDate);
    }

    getTransactionDateInput = function() {
        return this.transactionDateInput.getAttribute('value');
    }

    setProductInput = function(product) {
        this.productInput.sendKeys(product);
    }

    getProductInput = function() {
        return this.productInput.getAttribute('value');
    }

    setPriceInput = function(price) {
        this.priceInput.sendKeys(price);
    }

    getPriceInput = function() {
        return this.priceInput.getAttribute('value');
    }

    setPaymentTypeInput = function(paymentType) {
        this.paymentTypeInput.sendKeys(paymentType);
    }

    getPaymentTypeInput = function() {
        return this.paymentTypeInput.getAttribute('value');
    }

    setCustomerNameInput = function(customerName) {
        this.customerNameInput.sendKeys(customerName);
    }

    getCustomerNameInput = function() {
        return this.customerNameInput.getAttribute('value');
    }

    setCityInput = function(city) {
        this.cityInput.sendKeys(city);
    }

    getCityInput = function() {
        return this.cityInput.getAttribute('value');
    }

    setStateInput = function(state) {
        this.stateInput.sendKeys(state);
    }

    getStateInput = function() {
        return this.stateInput.getAttribute('value');
    }

    setCountryInput = function(country) {
        this.countryInput.sendKeys(country);
    }

    getCountryInput = function() {
        return this.countryInput.getAttribute('value');
    }

    setAccountCreationDateInput = function(accountCreationDate) {
        this.accountCreationDateInput.sendKeys(accountCreationDate);
    }

    getAccountCreationDateInput = function() {
        return this.accountCreationDateInput.getAttribute('value');
    }

    setLastLoginInput = function(lastLogin) {
        this.lastLoginInput.sendKeys(lastLogin);
    }

    getLastLoginInput = function() {
        return this.lastLoginInput.getAttribute('value');
    }

    setLatitudeInput = function(latitude) {
        this.latitudeInput.sendKeys(latitude);
    }

    getLatitudeInput = function() {
        return this.latitudeInput.getAttribute('value');
    }

    setLongitudeInput = function(longitude) {
        this.longitudeInput.sendKeys(longitude);
    }

    getLongitudeInput = function() {
        return this.longitudeInput.getAttribute('value');
    }

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}

document.querySelector('.card-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Card submitted!');
});
/**
     * Validates if a card number is on our simple "valid" list.
     * @param {string} number The card number value.
     * @returns {boolean} True if the number matches the magic number.
     */
    function isCardNumberValid(number) {
        // Only accept one specific number for this example
        // In a real application, this would contact a payment service.
        const cleanedNumber = number.replace(/\s/g, '');
        return cleanedNumber === '1234567891011020';
    }
    /**
     * Displays the error message in the dedicated area.
     * @param {string} msg The error message to display.
     */
    function displayError(msg) {
        // display error message
        document.querySelector('.errorMsg').innerHTML = msg;
    }
    /**
     * Checks if the card expiration date is in the future.
     * @param {number} month The expiration month (MM, 1-12).
     * @param {number} year The expiration year (YY, e.g., 25).
     * @returns {boolean} True if the date is in the future or the current month/year.
     */
    function isDateInFuture(month, year) {
        // Get current date
        const now = new Date();
        const currentYear = now.getFullYear() % 100; // Get 2-digit year (e.g., 25)
        const currentMonth = now.getMonth() + 1; // getMonth() returns 0-11, so add 1
        // 1. Check the year first
        if (year < currentYear) {
            return false; // Expired year
        }
        
        // 2. If the year is the current year, check the month
        if (year === currentYear) {
            // Check if the expiration month is strictly less than the current month
            if (month < currentMonth) {
                return false; // Expired month in current year
            }
        }
        // 3. Any year in the future (year > currentYear) or the current year/month or a future month in the current year
        return true;
    }
    /**
     * Main form submission handler.
     * @param {Event} event The submit event object.
     */
    function submitHandler(event) {
        event.preventDefault(); // Stop the page from reloading
        let errorMsg = '';
        
        // Reference form fields using the form element (this) and their name attributes
        const cardValue = this.cardNumber.value;
        const expiryMM = this['expiry-mm'].value;
        const expiryYY = this['expiry-yy'].value;
        // Clear any previous errors
        displayError('');
        // --- 1. Validate Card Number (NaN and Validity Check) ---
        const cleanedCardValue = cardValue.replace(/\s/g, ''); // Remove spaces for checking
        if (isNaN(cleanedCardValue)) {
            // it is not a valid number (contains letters/symbols other than spaces/dashes already removed)
            errorMsg += 'Card number contains invalid characters.\n';
        } else if (!isCardNumberValid(cleanedCardValue)) {
            // it is a number, but not the one we accept
            errorMsg += 'Card number is not a valid card number.\n';
        }
        // --- 2. Validate Expiration Date (Future Check) ---
        const month = parseInt(expiryMM, 10);
        const year = parseInt(expiryYY, 10);
        // Basic check for valid numerical entry (HTML required/pattern handles most)
        if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
             // This error should rarely trigger if HTML validation is working, but it's a safety net.
             errorMsg += 'Please enter a valid month (01-12) and year (YY).\n';
        } else if (!isDateInFuture(month, year)) {
            errorMsg += 'The expiration date has already passed.\n';
        }
        if (errorMsg !== '') {
            // There was an error. Stop the form and display the errors.
            displayError(errorMsg);
            return false;
        }
        
        // If we reach here, validation passed
        displayError('Payment successful! (Form submission blocked by JS for demo)');
        console.log('Form data:', {
            cardNumber: cardValue,
            cardholder: this.cardholder.value,
            expiry: `${expiryMM}/${expiryYY}`,
            cvc: this.cvc.value,
            zipcode: this.zipcode.value
        });
        // If this were a real form, we would send the data to the server now.
        return true;
    }
    // --- Event Listener ---
    // Get the form element and attach the submit handler
    document.querySelector('#credit-card').addEventListener('submit', submitHandler);
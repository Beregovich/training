function validatePIN(pin) {
    return (/^\d{4}$/.test(pin)) || (/^\d{6}$/.test(pin));
}
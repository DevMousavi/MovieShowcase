function displayYearOnly(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    return year;
}

export { displayYearOnly };

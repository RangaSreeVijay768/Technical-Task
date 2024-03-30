function calculateTimeDifference(firstDateTime, secondDateTime) {
    const [firstDate, firstTime] = firstDateTime.split(' ');
    const [firstMonth, firstDay, firstYear] = firstDate.split('/');
    const [firstHour, firstMinute, firstSecond] = firstTime.split(':');

    const [secondDate, secondTime] = secondDateTime.split(' ');
    const [secondMonth, secondDay, secondYear] = secondDate.split('/');
    const [secondHour, secondMinute, secondSecond] = secondTime.split(':');

    // Convert all date and time strings to integers
    const firstTimestamp = new Date(firstYear, firstMonth - 1, firstDay, firstHour, firstMinute, firstSecond).getTime();
    const secondTimestamp = new Date(secondYear, secondMonth - 1, secondDay, secondHour, secondMinute, secondSecond).getTime();

    // Calculate the time difference in milliseconds
    let difference = Math.abs(firstTimestamp - secondTimestamp);

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    difference %= (1000 * 60 * 60 * 24);
    const hours = Math.floor(difference / (1000 * 60 * 60));
    difference %= (1000 * 60 * 60);
    const minutes = Math.floor(difference / (1000 * 60));
    difference %= (1000 * 60);
    const seconds = Math.floor(difference / 1000);

    return `${days} days | ${hours} hours | ${minutes} minutes | ${seconds} seconds`;
}

// Example:
const firstDateTime = "12/01/2022 14:00:00";
const secondDateTime = "12/01/2021 08:00:00";
const differenceDateTime = calculateTimeDifference(firstDateTime, secondDateTime);
console.log(differenceDateTime);

export const currentDate = () => {
    
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    // Add leading zeros to month and day if necessary
    const monthStr = month < 10 ? '0' + month : month;
    const dayStr = day < 10 ? '0' + day : day;

    const dateStr = `${year}-${monthStr}-${dayStr}`;
    return dateStr;
}
export const dateValidator = (start, end) => {
    
    const startDate = new Date(start);
    const endDate = new Date(end);
    
    return endDate >= startDate;
};
  
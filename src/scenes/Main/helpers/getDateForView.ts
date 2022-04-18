const dateFormatter = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const getDateForView = (date: Date) => dateFormatter.format(date);

export { getDateForView };

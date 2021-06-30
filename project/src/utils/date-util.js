import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const getFormattedDate = (data, format) => dayjs(data).format(format);

const getTime = (data, format) => dayjs.duration(data, 'minutes').format(format);

export {
  getFormattedDate,
  getTime
};

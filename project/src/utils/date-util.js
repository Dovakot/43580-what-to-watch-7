import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import {DateFormat} from '../const';
dayjs.extend(duration);

const getFilmDuration = (time, filmDuration) => {
  const seconds = filmDuration - time;
  const durationData = dayjs.duration(seconds, 'seconds');
  const dateFormat = durationData.get('hours') ? DateFormat.TIME_FULL : DateFormat.TIME_SHORT;

  return durationData.format(dateFormat);
};

const getFormattedDate = (data, format) => dayjs(data).format(format);
const getTime = (data, format) => dayjs.duration(data, 'minutes').format(format);

export {
  getFilmDuration,
  getFormattedDate,
  getTime
};

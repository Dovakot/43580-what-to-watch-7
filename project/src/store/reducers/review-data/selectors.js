import {NameSpace} from '../root-reducer';

const getReviews = (state) => state[NameSpace.REVIEW];

export {
  getReviews
};

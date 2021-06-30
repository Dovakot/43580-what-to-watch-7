import PropTypes from 'prop-types';

function TabItem({children, label, activeTab}) {
  return label === activeTab && children;
}

TabItem.propTypes = {
  children: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  activeTab: PropTypes.string,
};


export default TabItem;

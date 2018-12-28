const span = {
  color: 'orange',
  margin: '1px',
};

const image = {
  width: '255px',
  borderRadius: '5%',
};

const title = {
  color: 'black',
  fontSize: '16px',
  margin: '10px 8px',
};

const listEntry = {
  border: '1px solid rgba(0,0,0,.1)',
  borderRadius: '5%',
  fontSize: '12px',
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '33%',
  width: 'auto',
  margin: '15px',
  fontFamily: "'Nunito Sans', sans-serif",
  color: 'rgba(0,0,0,.55)',
};

const ellipsis = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

const carousel = {
  margin: 0,
  padding: 0,
  width: '95%',
};

const carouselEntryActive = {
  display: 'flex',
  marginRight: '3.5%',
};

const carouselBody = {
  display: 'flex',
  margin: 0,
  padding: 0,
  overflow: 'scroll',
  boxSizing: 'inherit',
};

const lowerRow = {
  display: 'flex',
  justifyContent: 'space-between',
};

const list0 = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  transform: 'translateX(0%)',
  transition: 'transform 1s ease 0s',
  boxSizing: 'inherit',
};

const list1 = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  transform: 'translateX(-25%)',
  transition: 'transform 1s ease 0s',
  boxSizing: 'inherit',
};

const list2 = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  transform: 'translateX(-50%)',
  transition: 'transform 1s ease 0s',
  boxSizing: 'inherit',
};

const list3 = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '14px',
  transform: 'translateX(-75%)',
  transition: 'transform 1s ease 0s',
  boxSizing: 'inherit',
};

const stars = {
  display: 'flex',
  flexDirection: 'row',
};

const listInfoLeft = {
  marginLeft: '10px',
};

const listInfoRight = {
  marginRight: '10px',
};

const rightArrow = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  right: '-10px',
  top: '150px',
  backgroundColor: 'white',
  zIndex: 2,
  boxShadow: '0 3px 6px rgba(0,0,0,.1)',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '50px',
  fontSize: '30px',
  fontWeight: '700',
  color: '#0070eb',
};

const leftArrow = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  left: '-10px',
  top: '150px',
  backgroundColor: 'white',
  zIndex: 2,
  boxShadow: '0 3px 6px rgba(0,0,0,.1)',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '50px',
  fontSize: '30px',
  fontWeight: '700',
  color: '#0070eb',
};

const reviewSummary = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '12px',
  color: 'rgba(0, 0, 0, 0.55)',
};

const review = {
  display: 'flex',
  fontFamily: "'Nunito Sans', sans-serif",
  margin: '10px',
  justifyContent: 'flex-start',
  width: '100%',
};

const reviewContent = {
  width: '80%',
  color: 'black',
  fontSize: '14px',
};

const avatar = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#40c2de',
  textAlign: 'center',
  lineHeight: '40px',
  margin: '20px 10px',
  color: 'white',
};

const reviewBorder = {
  borderLeft: '1px solid gainsboro',
  borderRight: '1px solid gainsboro',
  margin: '0 15px',
  padding: '0 10px',
};

const tooltipBody = {
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  backgroundColor: 'white',
  top: '-15px',
  right: '-110px',
  visibility: 'hidden',
};

const tooltipBodyActive = {
  zIndex: 1,
  visibility: 'visible',
  boxShadow: '0 3px 6px rgba(0,0,0,.1)',
};

const tooltip = {
  position: 'relative',
  height: '220px',
  width: '220px',
  visibility: 'collapse',
};

export default {
  span,
  listEntry,
  list0,
  list1,
  list2,
  list3,
  stars,
  listInfoLeft,
  listInfoRight,
  lowerRow,
  image,
  carousel,
  carouselBody,
  avatar,
  carouselEntryActive,
  rightArrow,
  leftArrow,
  reviewSummary,
  reviewContent,
  review,
  reviewBorder,
  title,
  tooltip,
  tooltipBody,
  tooltipBodyActive,
  ellipsis,
};
